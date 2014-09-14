/*
* spa.util.js
* General JavaScript utilities
*
* Michael S. Mikowski - mmikowski at gmail dot com
* These are routines I have created, compiled, and updated
* since 1998, with inspiration from around the web.
*
* MIT License
*/
 
/*jslint browser : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
*/
/*global $, spa */
 
spa.util = (function(){
    var makeError, setConfigMap;
 
    /*
    Begin public constructor /makeError/
    Purpose: a convenience wrapper to create an error object
    Arguments:
        * name_text - the error name
        * msg_txt the long error message
        * data - optional data attached to error object
        Returns: newly constructed error object
        Throws: none
    */
 
    makeError = function(name_text, msg_text, data){
        var error = new Error();
        error.name = name_text;
        error.message = msg_text;
 
        if(data){error.data = data;}
 
        return error;
    };
    /* End Public constructor /makeError/ */
 
    /*
    Begin public method /setConfigMap/
    Purpose: Common code to set configs in feature modules
    Arguments:
     * input_map - map of key-values to set in config
     * settable_map - map of allowable keys to set
     * config_map - map to apply settings to
     Returns : true
     Throws : Exception if input key not allowed
    */
 
    setConfigMap = function(arg_map){  //the arg_map is created using the argument passed to this call
        var
            input_map = arg_map.input_map, //parse the items back out into their own individual maps
            settable_map = arg_map.settable_map,
            config_map = arg_map.config_map,
            key_name, error;
 
        for(key_name in input_map){
            /*
            loop through the input_map  and do 3 things.
            1.  If input_map has the key name proceed otherwise throw an error.  How could it not
            if we are iterating through the input_map?
            2. If the settable_map has this property then
            3. set the key_name and value in the config_map
            */
 
            if(input_map.hasOwnProperty(key_name)){   //if the input_map has the key_name
                if(settable_map.hasOwnProperty(key_name)){ //look for it in the settable_map
                    config_map[key_name] = input_map[key_name]; //if settable then update the config_map
                }
                else{
                    error = makeError('Bad Input', 'Setting config key |' + key_name + '| is not supported');
                    throw error;
                }
            }
        }
 
    };
    /* End Public method /setConfigMap/ */
    return{
        makeError :makeError,
        setConfigMap : setConfigMap
    };
}());