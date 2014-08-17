/*
 * spa.shell.js
 *Shell module for SPA
*/
 
/*jslint browser:true, continue:true,
devel:true, indent:2, maxerr:50,
newcap:true, nomen:true, plusplus:true,
regexp:true, sloppy:true, vars:false,
white:true
*/
/*global $, spa */
spa.shell = (function(){
//-------------------------BEGIN MODULE SCOPE VARIABLES -----------------------
    var
        configMap = {
            anchor_schema_map : {
                chat: {open:true, closed:true}
            },
            main_html: String()
            + '<div class="spa-shell-head">'
            +   '<div class="spa-shell-head-logo"></div>'
            +   '<div class="spa-shell-head-acct"></div>'
            +   '<div class="spa-shell-head-search"></div>'
            + '</div>'
            + '<div class="spa-shell-main">'
            +   '<div class="spa-shell-main-nav"></div>'
            +   '<div class="spa-shell-main-content"></div>'
            + '</div>'
            + '<div class="spa-shell-foot"></div>'
            + '<div class="spa-shell-chat"></div>'
            + '<div class="spa-shell-modal"></div>',
            chat_extend_time:1000,
            chat_retract_time:300,
            chat_extend_height:450,
            chat_retract_height:15,
            chat_extended_title: 'Click to Retract',
            chat_retracted_title: 'Click to Extend'
        },
        stateMap = {
            $container:null,
            anchor_map:{},
            is_chat_retracted: true
        },
        jqueryMap = {},
        copyAnchorMap, setJqueryMap, toggleChat,
        changeAnchorPart, onHashchange,
        onClickChat, initModule;
 
//-------------------------END MODULE SCOPE VARIABLES -----------------------
 
//-------------------------BEGIN UTILITY METHODS ----------------------------
//Returns copy of stored anchor map; minimizes overhead
copyAnchorMap = function(){
    return $.extend(true, {}, stateMap.anchor_map);
};
//-------------------------END UTILITY METHODS ------------------------------
//-------------------------BEGIN DOM METHODS --------------------------------
 
//Begin DOM method /setJqueryMap
setJqueryMap = function(){
    var $container = stateMap.$container;
    jqueryMap = {
        $container:$container,
        $chat:$container.find('.spa-shell-chat')
    };
};
 
//Begin DOM Method /toggleChat/
//Purpose : Extends or retracts chat slider
// state : sets stateMap.is_chat_retracted
// * true - slider is retracted
// * false - slider is extended
//
//Arguments :
// * do_extend - if true, extends slider; if false retracts
//* callback - optiona; function to execute and end of animation
//Settings:
// * chat_extend_time, chat_retract_time, chat_extend_height, chat_retract_height
//Returns:
// * true - slider animation activated
// * false - slider animation not activated
//
toggleChat = function(do_extend, callback){
    var
        px_chat_ht = jqueryMap.$chat.height(),
        is_open = px_chat_ht ===configMap.chat_extend_height,
        is_closed = px_chat_ht === configMap.chat_retract_height,
        is_sliding = ! is_open && ! is_closed;
 
    //avoid race condition
    if(is_sliding){return false;}
 
    //begin extend chat slider
    if(do_extend){
        jqueryMap.$chat.animate(
            {height:configMap.chat_extend_height},
            configMap.chat_extend_time,
            function(){
                jqueryMap.$chat.attr(
                    'title', configMap.chat_extended_title
                );
                stateMap.is_chat_retracted = false;
                if(callback){callback(jqueryMap.$chat);}
            }
        );
        return true;
    }
    //End extend chat slider
 
    //Begin retract chat slider  ? no if condition for retracttion?
    jqueryMap.$chat.animate(
        {height:configMap.chat_retract_height},
        configMap.chat_retract_time,
        function(){
            jqueryMap.$chat.attr(
                'title', configMap.chat_retracted_title
            );
            stateMap.is_chat_retracted = true;
            if(callback){callback(jqueryMap.$chat);}
        }
    );
        return true;
};  //end toggleChat
//Begin DOM method /changeAnchorPart/
//Purpose: Changes part of the URI anchor component
//Arguments:
// * arg_map - The map describing what part of the uri anchor we want changed
//Returns:  boolean
// * true - the Anchor portion of the URI was updated
// * false - the Anchor portion of the URI was not updated
//Action:
//  The current anchor rep store in the stateMap.anchor_map.
//  See uriAnchor for a discussion of encoding
// This method
// * creates a copy of this map using copyAnchorMap()
// * Modifies the key-values using arg_map
// * Manages the distinction between independent and dependent values in the encoding
// * Attempts to change the URI using uriAnchor
// * Returns true on success and false on failure
 
changeAnchorPart = function(arg_map){
    var
        anchor_map_revise = copyAnchorMap(),
        bool_return = true,
        key_name, key_name_dep;
 
        //Begin merge changes into anchor map
        KEYVAL:
        for(key_name in arg_map){
            if(arg_map.hasOwnProperty(key_name)){
 
                //skip dependent keys during iteration
                if(key_name.indexOf('_')===0){continue KEYVAL;}
 
                //update independent key value
                anchor_map_revise[key_name] = arg_map[key_name];
 
                //update matching dependent key
                key_name_dep = '_'+key_name;
 
                if(arg_map[key_name_dep]){
                    anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                }else{
                    delete anchor_map_revise[key_name_dep];
                    delete anchor_map_revise['_s'+key_name_dep];
                }
            }
        }
        //end merge changes into anchor map
        //Begin attempt to update URI; revert if not successful
        //the try statement updates the uriAnchor, which triggers the onHashchange event
        //the onHashchange event updates the browser history allowing movement forward, backward and bookmarking???
 
        try{
            $.uriAnchor.setAnchor(anchor_map_revise);
        }
        catch(error){
            //replace URI with existing state
            $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
            bool_return = false;
        }
        //End attempt to update URI
        return bool_return;
};
//End DOM Method /changeAnchorPart/
//-------------------------END DOM METHODS ----------------------------------
//-------------------------BEGIN EVENT HANDLERS -----------------------------
// Begin Event handler /onHashChange/
//Purpose : Handles the hashchange event
//Arguments:
// * event - jQuery event object.
//Settings : none
// Returns : false
//Action  :
// * Parses the URI anchor component
// * Compares proposed application state with current
// * Adjust the application only where proposed state differs from existing
//
 
onHashchange = function(event){
    //all of the logic goes here for changes to the anchorMap in the browser url
    var
        //mzke a copy of the old anchor map, then create a new map called proposed
        anchor_map_previous = copyAnchorMap(),
        anchor_map_proposed,
        _s_chat_previous, _s_chat_proposed, s_chat_proposed;
        //attempt to parse the anchor
        //what information is being used in the makeAnchorMap?
        console.log(anchor_map_previous);
        try{
            anchor_map_proposed = $.uriAnchor.makeAnchorMap();
            console.log(anchor_map_proposed);
        }
        //is made based on the information in the browser ex: #!chat=profile:on:uid,suzie | status,green
        //where is this information getting set in the browser url?
        catch(error){
            //if there is an error revert back to the previous anchor map
            $.uriAnchor.setAnchor(anchor_map_previous, null, true);
            return false;
        }
        //shows as [Object object]
        //update the state with the proposed anchor map
        stateMap.anchor_map = anchor_map_proposed;
 
        //convenience vars
        //do not understand the _s_chat variables??
        _s_chat_previous = anchor_map_previous._s_chat;
        _s_chat_proposed = anchor_map_proposed._s_chat;
 
        //Begin adjust chat component if changed
        //Based on the changes made to the url, the onHashChnage registers a change and takes an action
        //based on the change made.  In this case simply open or closed for the chat window.
        if(!anchor_map_previous ||_s_chat_previous !== _s_chat_proposed){
            s_chat_proposed = anchor_map_proposed.chat;
            switch(s_chat_proposed){
                case 'open':
                toggleChat(true);
                break;
                case 'closed':
                toggleChat(false);
                break;
                default:
                toggleChat(false);
                delete anchor_map_proposed.chat;
                $.uriAnchor.setAnchor(anchor_map_proposed, null, true);
            }
        }
        //end adjustment'
        return false;      
};
//End Event Handler /onHashChange/
 
 
onClickChat = function(event){
    changeAnchorPart({
        chat:(stateMap.is_chat_retracted?'open':'closed')
    });
     
    return false;
};
//-------------------------END EVENT HANDLERS -------------------------------
//-------------------------BEGIN PUBLIC METHODS -----------------------------
//Begin public methods /initModule/
initModule = function($container){
    //load HTML and jQuery collections
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
 
    //when the page is initialized the chat slider is always retracted
    stateMap.is_chat_retracted = true;
 
    jqueryMap.$chat
        .attr('title', configMap.chat_retracted_title)
        .click(onClickChat);
 
    //configure uriAnchor to use our schema
    $.uriAnchor.configModule({
        schema_map:configMap.anchor_schema_map
    });
 
    //configure and initialize feature modules
    spa.chat.configModule({});
    spa.chat.initModule(jqueryMap.$chat);
 
    //this is how the onHashChange event monitor is bound
    $(window)
    .bind('hashchange', onHashchange)
    .trigger('hashchange');
};
//End PUBLIC Method /initModule/
return {initModule:initModule};
//-------------------------END PUBLIC METHODS -------------------------------
}());