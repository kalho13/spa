



<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>urianchor/jquery.uriAnchor.js at master · mmikowski/urianchor</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mmikowski/urianchor" name="twitter:title" /><meta content="urianchor - jQuery plugin to manage the uri hash component.  Used for SinglePageWebApps." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/351917?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/351917?v=2&amp;s=400" property="og:image" /><meta content="mmikowski/urianchor" property="og:title" /><meta content="https://github.com/mmikowski/urianchor" property="og:url" /><meta content="urianchor - jQuery plugin to manage the uri hash component.  Used for SinglePageWebApps." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="18F7DCA0:552E:1FD5BC4:53E18645" name="octolytics-dimension-request_id" /><meta content="1853903" name="octolytics-actor-id" /><meta content="kalho13" name="octolytics-actor-login" /><meta content="f29d246deb29bc2e42f083aac74615ce26caac51f5cbe2b41b6e436ce61f9f17" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="NcRQNrEmzG8Eu1zOFJNkaOJkPSLCedUeeB9M9X1H50BrG9SnIgsxb0bzPrJ/oYDKe6E+Ts17/6YkqzLvecSMUw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-d89182d94a6bd6d7503d4b07e46af03cd2636c2d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-d5ca6294e43a357c97e0ba8430a1ceabeeec6fc7.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="133e108720ce8bf097c5ad2e364d7eed">

      
  <meta name="description" content="urianchor - jQuery plugin to manage the uri hash component.  Used for SinglePageWebApps.">


  <meta content="351917" name="octolytics-dimension-user_id" /><meta content="mmikowski" name="octolytics-dimension-user_login" /><meta content="7582533" name="octolytics-dimension-repository_id" /><meta content="mmikowski/urianchor" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="7582533" name="octolytics-dimension-repository_network_root_id" /><meta content="mmikowski/urianchor" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mmikowski/urianchor/commits/master.atom" rel="alternate" title="Recent Commits to urianchor:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


        <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="kalho13"
    data-repo="mmikowski/urianchor"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mmikowski/urianchor">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    
<ul id="user-links">
  <li>
    <a href="/kalho13" class="name">
      <img alt="kalho13" data-user="1853903" height="20" src="https://avatars1.githubusercontent.com/u/1853903?v=2&amp;s=40" width="20" /> kalho13
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xb+tCEPVh8Q0YmaqSmv/s+mJrmXWIctunFMk80O7NeJoHQIr+SLXILJkDi5THQsYjg9St8Gamc+vjuvzt9Ajng==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="mmikowski/urianchor">This repository</span>
    </li>
      <li>
        <a href="/mmikowski/urianchor/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k/VxagOCHLlCTNt1bj/zfKqzbGF3hTVfSoalgjBJE5vp96MxipTMuEm+GxkqyxxekO37Or26dVMVuKNdOhzB0g==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="7582533" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mmikowski/urianchor/watchers">
        10
      </a>
      <a href="/mmikowski/urianchor/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/mmikowski/urianchor/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rlOSHfPuiwnhd6AzPy/clmiIg4Br9z9R7P/bKzDja7M3tEwKgt6WR+auw85AMkRWxQs+mVn6uT0QWEuVX6Mu/g==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar mmikowski/urianchor">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mmikowski/urianchor/stargazers">
          34
        </a>
</form>
    <form accept-charset="UTF-8" action="/mmikowski/urianchor/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zH3EI84G8IR6JkTJdswuwvvm9t3EOYRuR88eQjj6zesIdmEEyOW40ku/kl7hJxh6NRSZZfKrD9x+j785qtS/hA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star mmikowski/urianchor">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/mmikowski/urianchor/stargazers">
          34
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/mmikowski/urianchor/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of mmikowski/urianchor to your account" aria-label="Fork your own copy of mmikowski/urianchor to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/mmikowski/urianchor/network" class="social-count">27</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mmikowski" class="url fn" itemprop="url" rel="author"><span itemprop="title">mmikowski</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mmikowski/urianchor" class="js-current-repository js-repo-home-link">urianchor</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/mmikowski/urianchor/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mmikowski/urianchor" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mmikowski/urianchor">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mmikowski/urianchor/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mmikowski/urianchor/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mmikowski/urianchor/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mmikowski/urianchor/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/mmikowski/urianchor/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /mmikowski/urianchor/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mmikowski/urianchor/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mmikowski/urianchor/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mmikowski/urianchor/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mmikowski/urianchor/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/mmikowski/urianchor.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mmikowski/urianchor.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:mmikowski/urianchor.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mmikowski/urianchor.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/mmikowski/urianchor" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mmikowski/urianchor" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/mmikowski/urianchor/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mmikowski/urianchor as a zip file"
                   title="Download mmikowski/urianchor as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/mmikowski/urianchor/blob/22651330e7e4e06e76a4f72dff5bf6722ae75867/jquery.uriAnchor.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:7718bac19098fbe738644373dcb91246 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmikowski/urianchor/blob/master/jquery.uriAnchor.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmikowski/urianchor/tree/1.1.3/jquery.uriAnchor.js"
                 data-name="1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.3">1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmikowski/urianchor/tree/1.1.2/jquery.uriAnchor.js"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmikowski/urianchor/tree/1.1.1/jquery.uriAnchor.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mmikowski/urianchor/tree/1.1.0/jquery.uriAnchor.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/mmikowski/urianchor/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.uriAnchor.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mmikowski/urianchor" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">urianchor</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.uriAnchor.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Chris Rohr" class="main-avatar" data-user="51920" height="24" src="https://avatars1.githubusercontent.com/u/51920?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/chrisrohr" rel="contributor">chrisrohr</a></span>
      <time datetime="2014-05-28T13:27:32-04:00" is="relative-time">May 28, 2014</time>
      <div class="commit-title">
          <a href="/mmikowski/urianchor/commit/20b1690f2eb59d4f5a3cd2e3e9d29aebf5efe5dd" class="message" data-pjax="true" title="Fix to the hash retrieval to account for a FF bug

FF decodes the hash on read while other browsers do not (http://stackoverflow.com/questions/1703552/encoding-of-window-location-hash)">Fix to the hash retrieval to account for a FF bug</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mmikowski" href="/mmikowski/urianchor/commits/master/jquery.uriAnchor.js?author=mmikowski"><img alt="mmikowski" data-user="351917" height="20" src="https://avatars0.githubusercontent.com/u/351917?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="chrisrohr" href="/mmikowski/urianchor/commits/master/jquery.uriAnchor.js?author=chrisrohr"><img alt="Chris Rohr" data-user="51920" height="20" src="https://avatars3.githubusercontent.com/u/51920?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="mmikowski" data-user="351917" height="24" src="https://avatars2.githubusercontent.com/u/351917?v=2&amp;s=48" width="24" />
            <a href="/mmikowski">mmikowski</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Rohr" data-user="51920" height="24" src="https://avatars1.githubusercontent.com/u/51920?v=2&amp;s=48" width="24" />
            <a href="/chrisrohr">chrisrohr</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>519 lines (471 sloc)</span>
          <span class="meta-divider"></span>
        <span>17.729 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/mmikowski/urianchor/raw/master/jquery.uriAnchor.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/mmikowski/urianchor/blame/master/jquery.uriAnchor.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/mmikowski/urianchor/commits/master/jquery.uriAnchor.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/mmikowski/urianchor/edit/master/jquery.uriAnchor.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/mmikowski/urianchor/delete/master/jquery.uriAnchor.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      

  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8 js-file-line-container">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" class="js-line-number">1</span>
<span id="L2" class="js-line-number">2</span>
<span id="L3" class="js-line-number">3</span>
<span id="L4" class="js-line-number">4</span>
<span id="L5" class="js-line-number">5</span>
<span id="L6" class="js-line-number">6</span>
<span id="L7" class="js-line-number">7</span>
<span id="L8" class="js-line-number">8</span>
<span id="L9" class="js-line-number">9</span>
<span id="L10" class="js-line-number">10</span>
<span id="L11" class="js-line-number">11</span>
<span id="L12" class="js-line-number">12</span>
<span id="L13" class="js-line-number">13</span>
<span id="L14" class="js-line-number">14</span>
<span id="L15" class="js-line-number">15</span>
<span id="L16" class="js-line-number">16</span>
<span id="L17" class="js-line-number">17</span>
<span id="L18" class="js-line-number">18</span>
<span id="L19" class="js-line-number">19</span>
<span id="L20" class="js-line-number">20</span>
<span id="L21" class="js-line-number">21</span>
<span id="L22" class="js-line-number">22</span>
<span id="L23" class="js-line-number">23</span>
<span id="L24" class="js-line-number">24</span>
<span id="L25" class="js-line-number">25</span>
<span id="L26" class="js-line-number">26</span>
<span id="L27" class="js-line-number">27</span>
<span id="L28" class="js-line-number">28</span>
<span id="L29" class="js-line-number">29</span>
<span id="L30" class="js-line-number">30</span>
<span id="L31" class="js-line-number">31</span>
<span id="L32" class="js-line-number">32</span>
<span id="L33" class="js-line-number">33</span>
<span id="L34" class="js-line-number">34</span>
<span id="L35" class="js-line-number">35</span>
<span id="L36" class="js-line-number">36</span>
<span id="L37" class="js-line-number">37</span>
<span id="L38" class="js-line-number">38</span>
<span id="L39" class="js-line-number">39</span>
<span id="L40" class="js-line-number">40</span>
<span id="L41" class="js-line-number">41</span>
<span id="L42" class="js-line-number">42</span>
<span id="L43" class="js-line-number">43</span>
<span id="L44" class="js-line-number">44</span>
<span id="L45" class="js-line-number">45</span>
<span id="L46" class="js-line-number">46</span>
<span id="L47" class="js-line-number">47</span>
<span id="L48" class="js-line-number">48</span>
<span id="L49" class="js-line-number">49</span>
<span id="L50" class="js-line-number">50</span>
<span id="L51" class="js-line-number">51</span>
<span id="L52" class="js-line-number">52</span>
<span id="L53" class="js-line-number">53</span>
<span id="L54" class="js-line-number">54</span>
<span id="L55" class="js-line-number">55</span>
<span id="L56" class="js-line-number">56</span>
<span id="L57" class="js-line-number">57</span>
<span id="L58" class="js-line-number">58</span>
<span id="L59" class="js-line-number">59</span>
<span id="L60" class="js-line-number">60</span>
<span id="L61" class="js-line-number">61</span>
<span id="L62" class="js-line-number">62</span>
<span id="L63" class="js-line-number">63</span>
<span id="L64" class="js-line-number">64</span>
<span id="L65" class="js-line-number">65</span>
<span id="L66" class="js-line-number">66</span>
<span id="L67" class="js-line-number">67</span>
<span id="L68" class="js-line-number">68</span>
<span id="L69" class="js-line-number">69</span>
<span id="L70" class="js-line-number">70</span>
<span id="L71" class="js-line-number">71</span>
<span id="L72" class="js-line-number">72</span>
<span id="L73" class="js-line-number">73</span>
<span id="L74" class="js-line-number">74</span>
<span id="L75" class="js-line-number">75</span>
<span id="L76" class="js-line-number">76</span>
<span id="L77" class="js-line-number">77</span>
<span id="L78" class="js-line-number">78</span>
<span id="L79" class="js-line-number">79</span>
<span id="L80" class="js-line-number">80</span>
<span id="L81" class="js-line-number">81</span>
<span id="L82" class="js-line-number">82</span>
<span id="L83" class="js-line-number">83</span>
<span id="L84" class="js-line-number">84</span>
<span id="L85" class="js-line-number">85</span>
<span id="L86" class="js-line-number">86</span>
<span id="L87" class="js-line-number">87</span>
<span id="L88" class="js-line-number">88</span>
<span id="L89" class="js-line-number">89</span>
<span id="L90" class="js-line-number">90</span>
<span id="L91" class="js-line-number">91</span>
<span id="L92" class="js-line-number">92</span>
<span id="L93" class="js-line-number">93</span>
<span id="L94" class="js-line-number">94</span>
<span id="L95" class="js-line-number">95</span>
<span id="L96" class="js-line-number">96</span>
<span id="L97" class="js-line-number">97</span>
<span id="L98" class="js-line-number">98</span>
<span id="L99" class="js-line-number">99</span>
<span id="L100" class="js-line-number">100</span>
<span id="L101" class="js-line-number">101</span>
<span id="L102" class="js-line-number">102</span>
<span id="L103" class="js-line-number">103</span>
<span id="L104" class="js-line-number">104</span>
<span id="L105" class="js-line-number">105</span>
<span id="L106" class="js-line-number">106</span>
<span id="L107" class="js-line-number">107</span>
<span id="L108" class="js-line-number">108</span>
<span id="L109" class="js-line-number">109</span>
<span id="L110" class="js-line-number">110</span>
<span id="L111" class="js-line-number">111</span>
<span id="L112" class="js-line-number">112</span>
<span id="L113" class="js-line-number">113</span>
<span id="L114" class="js-line-number">114</span>
<span id="L115" class="js-line-number">115</span>
<span id="L116" class="js-line-number">116</span>
<span id="L117" class="js-line-number">117</span>
<span id="L118" class="js-line-number">118</span>
<span id="L119" class="js-line-number">119</span>
<span id="L120" class="js-line-number">120</span>
<span id="L121" class="js-line-number">121</span>
<span id="L122" class="js-line-number">122</span>
<span id="L123" class="js-line-number">123</span>
<span id="L124" class="js-line-number">124</span>
<span id="L125" class="js-line-number">125</span>
<span id="L126" class="js-line-number">126</span>
<span id="L127" class="js-line-number">127</span>
<span id="L128" class="js-line-number">128</span>
<span id="L129" class="js-line-number">129</span>
<span id="L130" class="js-line-number">130</span>
<span id="L131" class="js-line-number">131</span>
<span id="L132" class="js-line-number">132</span>
<span id="L133" class="js-line-number">133</span>
<span id="L134" class="js-line-number">134</span>
<span id="L135" class="js-line-number">135</span>
<span id="L136" class="js-line-number">136</span>
<span id="L137" class="js-line-number">137</span>
<span id="L138" class="js-line-number">138</span>
<span id="L139" class="js-line-number">139</span>
<span id="L140" class="js-line-number">140</span>
<span id="L141" class="js-line-number">141</span>
<span id="L142" class="js-line-number">142</span>
<span id="L143" class="js-line-number">143</span>
<span id="L144" class="js-line-number">144</span>
<span id="L145" class="js-line-number">145</span>
<span id="L146" class="js-line-number">146</span>
<span id="L147" class="js-line-number">147</span>
<span id="L148" class="js-line-number">148</span>
<span id="L149" class="js-line-number">149</span>
<span id="L150" class="js-line-number">150</span>
<span id="L151" class="js-line-number">151</span>
<span id="L152" class="js-line-number">152</span>
<span id="L153" class="js-line-number">153</span>
<span id="L154" class="js-line-number">154</span>
<span id="L155" class="js-line-number">155</span>
<span id="L156" class="js-line-number">156</span>
<span id="L157" class="js-line-number">157</span>
<span id="L158" class="js-line-number">158</span>
<span id="L159" class="js-line-number">159</span>
<span id="L160" class="js-line-number">160</span>
<span id="L161" class="js-line-number">161</span>
<span id="L162" class="js-line-number">162</span>
<span id="L163" class="js-line-number">163</span>
<span id="L164" class="js-line-number">164</span>
<span id="L165" class="js-line-number">165</span>
<span id="L166" class="js-line-number">166</span>
<span id="L167" class="js-line-number">167</span>
<span id="L168" class="js-line-number">168</span>
<span id="L169" class="js-line-number">169</span>
<span id="L170" class="js-line-number">170</span>
<span id="L171" class="js-line-number">171</span>
<span id="L172" class="js-line-number">172</span>
<span id="L173" class="js-line-number">173</span>
<span id="L174" class="js-line-number">174</span>
<span id="L175" class="js-line-number">175</span>
<span id="L176" class="js-line-number">176</span>
<span id="L177" class="js-line-number">177</span>
<span id="L178" class="js-line-number">178</span>
<span id="L179" class="js-line-number">179</span>
<span id="L180" class="js-line-number">180</span>
<span id="L181" class="js-line-number">181</span>
<span id="L182" class="js-line-number">182</span>
<span id="L183" class="js-line-number">183</span>
<span id="L184" class="js-line-number">184</span>
<span id="L185" class="js-line-number">185</span>
<span id="L186" class="js-line-number">186</span>
<span id="L187" class="js-line-number">187</span>
<span id="L188" class="js-line-number">188</span>
<span id="L189" class="js-line-number">189</span>
<span id="L190" class="js-line-number">190</span>
<span id="L191" class="js-line-number">191</span>
<span id="L192" class="js-line-number">192</span>
<span id="L193" class="js-line-number">193</span>
<span id="L194" class="js-line-number">194</span>
<span id="L195" class="js-line-number">195</span>
<span id="L196" class="js-line-number">196</span>
<span id="L197" class="js-line-number">197</span>
<span id="L198" class="js-line-number">198</span>
<span id="L199" class="js-line-number">199</span>
<span id="L200" class="js-line-number">200</span>
<span id="L201" class="js-line-number">201</span>
<span id="L202" class="js-line-number">202</span>
<span id="L203" class="js-line-number">203</span>
<span id="L204" class="js-line-number">204</span>
<span id="L205" class="js-line-number">205</span>
<span id="L206" class="js-line-number">206</span>
<span id="L207" class="js-line-number">207</span>
<span id="L208" class="js-line-number">208</span>
<span id="L209" class="js-line-number">209</span>
<span id="L210" class="js-line-number">210</span>
<span id="L211" class="js-line-number">211</span>
<span id="L212" class="js-line-number">212</span>
<span id="L213" class="js-line-number">213</span>
<span id="L214" class="js-line-number">214</span>
<span id="L215" class="js-line-number">215</span>
<span id="L216" class="js-line-number">216</span>
<span id="L217" class="js-line-number">217</span>
<span id="L218" class="js-line-number">218</span>
<span id="L219" class="js-line-number">219</span>
<span id="L220" class="js-line-number">220</span>
<span id="L221" class="js-line-number">221</span>
<span id="L222" class="js-line-number">222</span>
<span id="L223" class="js-line-number">223</span>
<span id="L224" class="js-line-number">224</span>
<span id="L225" class="js-line-number">225</span>
<span id="L226" class="js-line-number">226</span>
<span id="L227" class="js-line-number">227</span>
<span id="L228" class="js-line-number">228</span>
<span id="L229" class="js-line-number">229</span>
<span id="L230" class="js-line-number">230</span>
<span id="L231" class="js-line-number">231</span>
<span id="L232" class="js-line-number">232</span>
<span id="L233" class="js-line-number">233</span>
<span id="L234" class="js-line-number">234</span>
<span id="L235" class="js-line-number">235</span>
<span id="L236" class="js-line-number">236</span>
<span id="L237" class="js-line-number">237</span>
<span id="L238" class="js-line-number">238</span>
<span id="L239" class="js-line-number">239</span>
<span id="L240" class="js-line-number">240</span>
<span id="L241" class="js-line-number">241</span>
<span id="L242" class="js-line-number">242</span>
<span id="L243" class="js-line-number">243</span>
<span id="L244" class="js-line-number">244</span>
<span id="L245" class="js-line-number">245</span>
<span id="L246" class="js-line-number">246</span>
<span id="L247" class="js-line-number">247</span>
<span id="L248" class="js-line-number">248</span>
<span id="L249" class="js-line-number">249</span>
<span id="L250" class="js-line-number">250</span>
<span id="L251" class="js-line-number">251</span>
<span id="L252" class="js-line-number">252</span>
<span id="L253" class="js-line-number">253</span>
<span id="L254" class="js-line-number">254</span>
<span id="L255" class="js-line-number">255</span>
<span id="L256" class="js-line-number">256</span>
<span id="L257" class="js-line-number">257</span>
<span id="L258" class="js-line-number">258</span>
<span id="L259" class="js-line-number">259</span>
<span id="L260" class="js-line-number">260</span>
<span id="L261" class="js-line-number">261</span>
<span id="L262" class="js-line-number">262</span>
<span id="L263" class="js-line-number">263</span>
<span id="L264" class="js-line-number">264</span>
<span id="L265" class="js-line-number">265</span>
<span id="L266" class="js-line-number">266</span>
<span id="L267" class="js-line-number">267</span>
<span id="L268" class="js-line-number">268</span>
<span id="L269" class="js-line-number">269</span>
<span id="L270" class="js-line-number">270</span>
<span id="L271" class="js-line-number">271</span>
<span id="L272" class="js-line-number">272</span>
<span id="L273" class="js-line-number">273</span>
<span id="L274" class="js-line-number">274</span>
<span id="L275" class="js-line-number">275</span>
<span id="L276" class="js-line-number">276</span>
<span id="L277" class="js-line-number">277</span>
<span id="L278" class="js-line-number">278</span>
<span id="L279" class="js-line-number">279</span>
<span id="L280" class="js-line-number">280</span>
<span id="L281" class="js-line-number">281</span>
<span id="L282" class="js-line-number">282</span>
<span id="L283" class="js-line-number">283</span>
<span id="L284" class="js-line-number">284</span>
<span id="L285" class="js-line-number">285</span>
<span id="L286" class="js-line-number">286</span>
<span id="L287" class="js-line-number">287</span>
<span id="L288" class="js-line-number">288</span>
<span id="L289" class="js-line-number">289</span>
<span id="L290" class="js-line-number">290</span>
<span id="L291" class="js-line-number">291</span>
<span id="L292" class="js-line-number">292</span>
<span id="L293" class="js-line-number">293</span>
<span id="L294" class="js-line-number">294</span>
<span id="L295" class="js-line-number">295</span>
<span id="L296" class="js-line-number">296</span>
<span id="L297" class="js-line-number">297</span>
<span id="L298" class="js-line-number">298</span>
<span id="L299" class="js-line-number">299</span>
<span id="L300" class="js-line-number">300</span>
<span id="L301" class="js-line-number">301</span>
<span id="L302" class="js-line-number">302</span>
<span id="L303" class="js-line-number">303</span>
<span id="L304" class="js-line-number">304</span>
<span id="L305" class="js-line-number">305</span>
<span id="L306" class="js-line-number">306</span>
<span id="L307" class="js-line-number">307</span>
<span id="L308" class="js-line-number">308</span>
<span id="L309" class="js-line-number">309</span>
<span id="L310" class="js-line-number">310</span>
<span id="L311" class="js-line-number">311</span>
<span id="L312" class="js-line-number">312</span>
<span id="L313" class="js-line-number">313</span>
<span id="L314" class="js-line-number">314</span>
<span id="L315" class="js-line-number">315</span>
<span id="L316" class="js-line-number">316</span>
<span id="L317" class="js-line-number">317</span>
<span id="L318" class="js-line-number">318</span>
<span id="L319" class="js-line-number">319</span>
<span id="L320" class="js-line-number">320</span>
<span id="L321" class="js-line-number">321</span>
<span id="L322" class="js-line-number">322</span>
<span id="L323" class="js-line-number">323</span>
<span id="L324" class="js-line-number">324</span>
<span id="L325" class="js-line-number">325</span>
<span id="L326" class="js-line-number">326</span>
<span id="L327" class="js-line-number">327</span>
<span id="L328" class="js-line-number">328</span>
<span id="L329" class="js-line-number">329</span>
<span id="L330" class="js-line-number">330</span>
<span id="L331" class="js-line-number">331</span>
<span id="L332" class="js-line-number">332</span>
<span id="L333" class="js-line-number">333</span>
<span id="L334" class="js-line-number">334</span>
<span id="L335" class="js-line-number">335</span>
<span id="L336" class="js-line-number">336</span>
<span id="L337" class="js-line-number">337</span>
<span id="L338" class="js-line-number">338</span>
<span id="L339" class="js-line-number">339</span>
<span id="L340" class="js-line-number">340</span>
<span id="L341" class="js-line-number">341</span>
<span id="L342" class="js-line-number">342</span>
<span id="L343" class="js-line-number">343</span>
<span id="L344" class="js-line-number">344</span>
<span id="L345" class="js-line-number">345</span>
<span id="L346" class="js-line-number">346</span>
<span id="L347" class="js-line-number">347</span>
<span id="L348" class="js-line-number">348</span>
<span id="L349" class="js-line-number">349</span>
<span id="L350" class="js-line-number">350</span>
<span id="L351" class="js-line-number">351</span>
<span id="L352" class="js-line-number">352</span>
<span id="L353" class="js-line-number">353</span>
<span id="L354" class="js-line-number">354</span>
<span id="L355" class="js-line-number">355</span>
<span id="L356" class="js-line-number">356</span>
<span id="L357" class="js-line-number">357</span>
<span id="L358" class="js-line-number">358</span>
<span id="L359" class="js-line-number">359</span>
<span id="L360" class="js-line-number">360</span>
<span id="L361" class="js-line-number">361</span>
<span id="L362" class="js-line-number">362</span>
<span id="L363" class="js-line-number">363</span>
<span id="L364" class="js-line-number">364</span>
<span id="L365" class="js-line-number">365</span>
<span id="L366" class="js-line-number">366</span>
<span id="L367" class="js-line-number">367</span>
<span id="L368" class="js-line-number">368</span>
<span id="L369" class="js-line-number">369</span>
<span id="L370" class="js-line-number">370</span>
<span id="L371" class="js-line-number">371</span>
<span id="L372" class="js-line-number">372</span>
<span id="L373" class="js-line-number">373</span>
<span id="L374" class="js-line-number">374</span>
<span id="L375" class="js-line-number">375</span>
<span id="L376" class="js-line-number">376</span>
<span id="L377" class="js-line-number">377</span>
<span id="L378" class="js-line-number">378</span>
<span id="L379" class="js-line-number">379</span>
<span id="L380" class="js-line-number">380</span>
<span id="L381" class="js-line-number">381</span>
<span id="L382" class="js-line-number">382</span>
<span id="L383" class="js-line-number">383</span>
<span id="L384" class="js-line-number">384</span>
<span id="L385" class="js-line-number">385</span>
<span id="L386" class="js-line-number">386</span>
<span id="L387" class="js-line-number">387</span>
<span id="L388" class="js-line-number">388</span>
<span id="L389" class="js-line-number">389</span>
<span id="L390" class="js-line-number">390</span>
<span id="L391" class="js-line-number">391</span>
<span id="L392" class="js-line-number">392</span>
<span id="L393" class="js-line-number">393</span>
<span id="L394" class="js-line-number">394</span>
<span id="L395" class="js-line-number">395</span>
<span id="L396" class="js-line-number">396</span>
<span id="L397" class="js-line-number">397</span>
<span id="L398" class="js-line-number">398</span>
<span id="L399" class="js-line-number">399</span>
<span id="L400" class="js-line-number">400</span>
<span id="L401" class="js-line-number">401</span>
<span id="L402" class="js-line-number">402</span>
<span id="L403" class="js-line-number">403</span>
<span id="L404" class="js-line-number">404</span>
<span id="L405" class="js-line-number">405</span>
<span id="L406" class="js-line-number">406</span>
<span id="L407" class="js-line-number">407</span>
<span id="L408" class="js-line-number">408</span>
<span id="L409" class="js-line-number">409</span>
<span id="L410" class="js-line-number">410</span>
<span id="L411" class="js-line-number">411</span>
<span id="L412" class="js-line-number">412</span>
<span id="L413" class="js-line-number">413</span>
<span id="L414" class="js-line-number">414</span>
<span id="L415" class="js-line-number">415</span>
<span id="L416" class="js-line-number">416</span>
<span id="L417" class="js-line-number">417</span>
<span id="L418" class="js-line-number">418</span>
<span id="L419" class="js-line-number">419</span>
<span id="L420" class="js-line-number">420</span>
<span id="L421" class="js-line-number">421</span>
<span id="L422" class="js-line-number">422</span>
<span id="L423" class="js-line-number">423</span>
<span id="L424" class="js-line-number">424</span>
<span id="L425" class="js-line-number">425</span>
<span id="L426" class="js-line-number">426</span>
<span id="L427" class="js-line-number">427</span>
<span id="L428" class="js-line-number">428</span>
<span id="L429" class="js-line-number">429</span>
<span id="L430" class="js-line-number">430</span>
<span id="L431" class="js-line-number">431</span>
<span id="L432" class="js-line-number">432</span>
<span id="L433" class="js-line-number">433</span>
<span id="L434" class="js-line-number">434</span>
<span id="L435" class="js-line-number">435</span>
<span id="L436" class="js-line-number">436</span>
<span id="L437" class="js-line-number">437</span>
<span id="L438" class="js-line-number">438</span>
<span id="L439" class="js-line-number">439</span>
<span id="L440" class="js-line-number">440</span>
<span id="L441" class="js-line-number">441</span>
<span id="L442" class="js-line-number">442</span>
<span id="L443" class="js-line-number">443</span>
<span id="L444" class="js-line-number">444</span>
<span id="L445" class="js-line-number">445</span>
<span id="L446" class="js-line-number">446</span>
<span id="L447" class="js-line-number">447</span>
<span id="L448" class="js-line-number">448</span>
<span id="L449" class="js-line-number">449</span>
<span id="L450" class="js-line-number">450</span>
<span id="L451" class="js-line-number">451</span>
<span id="L452" class="js-line-number">452</span>
<span id="L453" class="js-line-number">453</span>
<span id="L454" class="js-line-number">454</span>
<span id="L455" class="js-line-number">455</span>
<span id="L456" class="js-line-number">456</span>
<span id="L457" class="js-line-number">457</span>
<span id="L458" class="js-line-number">458</span>
<span id="L459" class="js-line-number">459</span>
<span id="L460" class="js-line-number">460</span>
<span id="L461" class="js-line-number">461</span>
<span id="L462" class="js-line-number">462</span>
<span id="L463" class="js-line-number">463</span>
<span id="L464" class="js-line-number">464</span>
<span id="L465" class="js-line-number">465</span>
<span id="L466" class="js-line-number">466</span>
<span id="L467" class="js-line-number">467</span>
<span id="L468" class="js-line-number">468</span>
<span id="L469" class="js-line-number">469</span>
<span id="L470" class="js-line-number">470</span>
<span id="L471" class="js-line-number">471</span>
<span id="L472" class="js-line-number">472</span>
<span id="L473" class="js-line-number">473</span>
<span id="L474" class="js-line-number">474</span>
<span id="L475" class="js-line-number">475</span>
<span id="L476" class="js-line-number">476</span>
<span id="L477" class="js-line-number">477</span>
<span id="L478" class="js-line-number">478</span>
<span id="L479" class="js-line-number">479</span>
<span id="L480" class="js-line-number">480</span>
<span id="L481" class="js-line-number">481</span>
<span id="L482" class="js-line-number">482</span>
<span id="L483" class="js-line-number">483</span>
<span id="L484" class="js-line-number">484</span>
<span id="L485" class="js-line-number">485</span>
<span id="L486" class="js-line-number">486</span>
<span id="L487" class="js-line-number">487</span>
<span id="L488" class="js-line-number">488</span>
<span id="L489" class="js-line-number">489</span>
<span id="L490" class="js-line-number">490</span>
<span id="L491" class="js-line-number">491</span>
<span id="L492" class="js-line-number">492</span>
<span id="L493" class="js-line-number">493</span>
<span id="L494" class="js-line-number">494</span>
<span id="L495" class="js-line-number">495</span>
<span id="L496" class="js-line-number">496</span>
<span id="L497" class="js-line-number">497</span>
<span id="L498" class="js-line-number">498</span>
<span id="L499" class="js-line-number">499</span>
<span id="L500" class="js-line-number">500</span>
<span id="L501" class="js-line-number">501</span>
<span id="L502" class="js-line-number">502</span>
<span id="L503" class="js-line-number">503</span>
<span id="L504" class="js-line-number">504</span>
<span id="L505" class="js-line-number">505</span>
<span id="L506" class="js-line-number">506</span>
<span id="L507" class="js-line-number">507</span>
<span id="L508" class="js-line-number">508</span>
<span id="L509" class="js-line-number">509</span>
<span id="L510" class="js-line-number">510</span>
<span id="L511" class="js-line-number">511</span>
<span id="L512" class="js-line-number">512</span>
<span id="L513" class="js-line-number">513</span>
<span id="L514" class="js-line-number">514</span>
<span id="L515" class="js-line-number">515</span>
<span id="L516" class="js-line-number">516</span>
<span id="L517" class="js-line-number">517</span>
<span id="L518" class="js-line-number">518</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="cm">/*</span></div><div class='line js-file-line' id='LC2'><span class="cm"> * Jquery plugin for state managment through the URI anchor (hash fragment)</span></div><div class='line js-file-line' id='LC3'><span class="cm"> *</span></div><div class='line js-file-line' id='LC4'><span class="cm"> * Copyright (c) 2013 Michael S. Mikowski</span></div><div class='line js-file-line' id='LC5'><span class="cm"> * (mike[dot]mikowski[at]gmail[dotcom])</span></div><div class='line js-file-line' id='LC6'><span class="cm"> *</span></div><div class='line js-file-line' id='LC7'><span class="cm"> * Dual licensed under the MIT or GPL Version 2</span></div><div class='line js-file-line' id='LC8'><span class="cm"> * http://jquery.org/license</span></div><div class='line js-file-line' id='LC9'><span class="cm"> *</span></div><div class='line js-file-line' id='LC10'><span class="cm"> * Versions</span></div><div class='line js-file-line' id='LC11'><span class="cm"> *  1.1.1-3 - Initial jQuery plugin site releases</span></div><div class='line js-file-line' id='LC12'><span class="cm"> *</span></div><div class='line js-file-line' id='LC13'><span class="cm">*/</span></div><div class='line js-file-line' id='LC14'><br></div><div class='line js-file-line' id='LC15'><span class="cm">/*jslint         browser : true, continue : true,</span></div><div class='line js-file-line' id='LC16'><span class="cm">  devel  : true, indent  : 2,    maxerr   : 50,</span></div><div class='line js-file-line' id='LC17'><span class="cm">  newcap : true, nomen   : true, plusplus : true,</span></div><div class='line js-file-line' id='LC18'><span class="cm">  regexp : true, sloppy  : true, vars     : false,</span></div><div class='line js-file-line' id='LC19'><span class="cm">  white  : true</span></div><div class='line js-file-line' id='LC20'><span class="cm">*/</span></div><div class='line js-file-line' id='LC21'><br></div><div class='line js-file-line' id='LC22'><span class="cm">/*global jQuery */</span></div><div class='line js-file-line' id='LC23'><br></div><div class='line js-file-line' id='LC24'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC25'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">uriAnchor</span> <span class="o">=</span> <span class="p">(</span> <span class="kd">function</span> <span class="p">(</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//---------------- BEGIN MODULE SCOPE VARIABLES --------------</span></div><div class='line js-file-line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">configMap</span> <span class="o">=</span> <span class="p">{</span></div><div class='line js-file-line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regex_anchor_clean1</span> <span class="o">:</span> <span class="sr">/^[#!]*/</span><span class="p">,</span></div><div class='line js-file-line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">regex_anchor_clean2</span> <span class="o">:</span> <span class="sr">/\?[^?]*$/</span><span class="p">,</span></div><div class='line js-file-line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settable_map_key</span>    <span class="o">:</span> <span class="p">{</span> <span class="nx">schema_map</span> <span class="o">:</span> <span class="kc">true</span> <span class="p">},</span></div><div class='line js-file-line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map</span>          <span class="o">:</span> <span class="kc">null</span></div><div class='line js-file-line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line js-file-line' id='LC34'><br></div><div class='line js-file-line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getErrorReject</span><span class="p">,</span>   <span class="nx">getVarType</span><span class="p">,</span>       <span class="nx">getCleanAnchorString</span><span class="p">,</span></div><div class='line js-file-line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parseStringToMap</span><span class="p">,</span> <span class="nx">makeAnchorString</span><span class="p">,</span> <span class="nx">setAnchor</span><span class="p">,</span></div><div class='line js-file-line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">makeAnchorMap</span><span class="p">,</span>    <span class="nx">configModule</span></div><div class='line js-file-line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//----------------- END MODULE SCOPE VARIABLES ---------------</span></div><div class='line js-file-line' id='LC40'><br></div><div class='line js-file-line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//------------------- BEGIN UTILITY METHODS ------------------</span></div><div class='line js-file-line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getErrorReject</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">message</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">error</span>     <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">();</span></div><div class='line js-file-line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="p">.</span><span class="nx">name</span>    <span class="o">=</span> <span class="s1">&#39;Anchor Schema Reject&#39;</span><span class="p">;</span></div><div class='line js-file-line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="nx">message</span><span class="p">;</span></div><div class='line js-file-line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">error</span><span class="p">;</span></div><div class='line js-file-line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC48'><br></div><div class='line js-file-line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin public method /getVarType/</span></div><div class='line js-file-line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Returns &#39;Object&#39;, &#39;Array&#39;, &#39;String&#39;, &#39;Number&#39;, &#39;Boolean&#39;, &#39;Undefined&#39;</span></div><div class='line js-file-line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getVarType</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">data</span> <span class="o">===</span> <span class="kc">undefined</span>  <span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;Undefined&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line js-file-line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">data</span> <span class="o">===</span> <span class="kc">null</span>  <span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;Null&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line js-file-line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{}.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">data</span> <span class="p">).</span><span class="nx">slice</span><span class="p">(</span> <span class="mi">8</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span> <span class="p">);</span></div><div class='line js-file-line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End public method /getVarType/</span></div><div class='line js-file-line' id='LC57'><br></div><div class='line js-file-line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin internal utility to clean bookmark</span></div><div class='line js-file-line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getCleanAnchorString</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">String</span><span class="p">(</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></div><div class='line js-file-line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// remove any leading pounds or bangs</span></div><div class='line js-file-line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">configMap</span><span class="p">.</span><span class="nx">regex_anchor_clean1</span> <span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></div><div class='line js-file-line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// snip off after question-mark ( a ClickStreet bug )</span></div><div class='line js-file-line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">configMap</span><span class="p">.</span><span class="nx">regex_anchor_clean2</span> <span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span></div><div class='line js-file-line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End internal utility to clean bookmark</span></div><div class='line js-file-line' id='LC68'><br></div><div class='line js-file-line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin internal utility /parseStringToMap/</span></div><div class='line js-file-line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">parseStringToMap</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">arg_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input_string</span>    <span class="o">=</span> <span class="nx">arg_map</span><span class="p">.</span><span class="nx">input_string</span>    <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_char</span>    <span class="o">=</span> <span class="nx">arg_map</span><span class="p">.</span><span class="nx">delimit_char</span>    <span class="o">||</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_kv_char</span> <span class="o">=</span> <span class="nx">arg_map</span><span class="p">.</span><span class="nx">delimit_kv_char</span> <span class="o">||</span> <span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_map</span>      <span class="o">=</span> <span class="p">{},</span></div><div class='line js-file-line' id='LC76'><br></div><div class='line js-file-line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">splitter_array</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">key_val_array</span></div><div class='line js-file-line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC79'><br></div><div class='line js-file-line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">splitter_array</span> <span class="o">=</span> <span class="nx">input_string</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="nx">delimit_char</span> <span class="p">);</span></div><div class='line js-file-line' id='LC81'><br></div><div class='line js-file-line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">splitter_array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_val_array</span> <span class="o">=</span> <span class="nx">splitter_array</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span> <span class="nx">delimit_kv_char</span> <span class="p">);</span></div><div class='line js-file-line' id='LC84'><br></div><div class='line js-file-line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">key_val_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_map</span><span class="p">[</span><span class="nb">decodeURIComponent</span><span class="p">(</span> <span class="nx">key_val_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">)]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line js-file-line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">key_val_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_map</span><span class="p">[</span><span class="nb">decodeURIComponent</span><span class="p">(</span> <span class="nx">key_val_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">)]</span></div><div class='line js-file-line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span> <span class="nx">key_val_array</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">)</span></div><div class='line js-file-line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output_map</span><span class="p">;</span></div><div class='line js-file-line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End internal utility /parseStringToMap/</span></div><div class='line js-file-line' id='LC97'><br></div><div class='line js-file-line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin utility /makeAnchorString/</span></div><div class='line js-file-line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// -- all the heavy lifting for setAnchor ( see below )</span></div><div class='line js-file-line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Converts a map into the anchor component as described</span></div><div class='line js-file-line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// in setAnchor</span></div><div class='line js-file-line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">makeAnchorString</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">anchor_map_in</span><span class="p">,</span> <span class="nx">option_map_in</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span>          <span class="o">=</span> <span class="nx">anchor_map_in</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line js-file-line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">option_map</span>          <span class="o">=</span> <span class="nx">option_map_in</span> <span class="o">||</span> <span class="p">{},</span></div><div class='line js-file-line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_char</span>        <span class="o">=</span> <span class="nx">option_map</span><span class="p">.</span><span class="nx">delimit_char</span>        <span class="o">||</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_kv_char</span>     <span class="o">=</span> <span class="nx">option_map</span><span class="p">.</span><span class="nx">delimit_kv_char</span>     <span class="o">||</span> <span class="s1">&#39;=&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sub_delimit_char</span>    <span class="o">=</span> <span class="nx">option_map</span><span class="p">.</span><span class="nx">sub_delimit_char</span>    <span class="o">||</span> <span class="s1">&#39;:&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_delimit_char</span>    <span class="o">=</span> <span class="nx">option_map</span><span class="p">.</span><span class="nx">dep_delimit_char</span>    <span class="o">||</span> <span class="s1">&#39;|&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_kv_delimit_char</span> <span class="o">=</span> <span class="nx">option_map</span><span class="p">.</span><span class="nx">dep_kv_delimit_char</span> <span class="o">||</span> <span class="s1">&#39;,&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map</span>         <span class="o">=</span> <span class="nx">configMap</span><span class="p">.</span><span class="nx">schema_map</span><span class="p">,</span></div><div class='line js-file-line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_val_array</span>       <span class="o">=</span> <span class="p">[],</span></div><div class='line js-file-line' id='LC113'><br></div><div class='line js-file-line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map_val</span><span class="p">,</span> <span class="nx">schema_map_dep</span><span class="p">,</span> <span class="nx">schema_map_dep_val</span><span class="p">,</span></div><div class='line js-file-line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_name</span><span class="p">,</span> <span class="nx">key_value</span><span class="p">,</span> <span class="nx">class_name</span><span class="p">,</span> <span class="nx">output_kv_string</span><span class="p">,</span></div><div class='line js-file-line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sub_key_name</span><span class="p">,</span> <span class="nx">dep_map</span><span class="p">,</span> <span class="nx">dep_key_name</span><span class="p">,</span> <span class="nx">dep_key_value</span><span class="p">,</span></div><div class='line js-file-line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_class_name</span><span class="p">,</span></div><div class='line js-file-line' id='LC118'><br></div><div class='line js-file-line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_kv_array</span></div><div class='line js-file-line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC121'><br></div><div class='line js-file-line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">anchor_map</span> <span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;Object&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line js-file-line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC125'><br></div><div class='line js-file-line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">key_name</span> <span class="k">in</span> <span class="nx">anchor_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// filter out inherited properties</span></div><div class='line js-file-line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">anchor_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC129'><br></div><div class='line js-file-line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// skip empty and dependent keys</span></div><div class='line js-file-line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">key_name</span>  <span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;}</span></div><div class='line js-file-line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">key_name</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="s1">&#39;_&#39;</span> <span class="p">)</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;}</span></div><div class='line js-file-line' id='LC133'><br></div><div class='line js-file-line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// check against anchor schema if provided</span></div><div class='line js-file-line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">schema_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">schema_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">getErrorReject</span><span class="p">(</span></div><div class='line js-file-line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Independent key |&#39;</span></div><div class='line js-file-line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">key_name</span> <span class="o">+</span> <span class="s1">&#39;| not authorized by anchor schema&#39;</span></div><div class='line js-file-line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line js-file-line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC143'><br></div><div class='line js-file-line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_kv_string</span>   <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line js-file-line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_value</span>   <span class="o">=</span> <span class="nx">anchor_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC146'><br></div><div class='line js-file-line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">key_value</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">key_value</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line js-file-line' id='LC148'><br></div><div class='line js-file-line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">class_name</span> <span class="o">=</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">key_value</span>  <span class="p">);</span></div><div class='line js-file-line' id='LC150'><br></div><div class='line js-file-line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// check against anchor schema map of allowable</span></div><div class='line js-file-line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// values is provided</span></div><div class='line js-file-line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">schema_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map_val</span> <span class="o">=</span> <span class="nx">schema_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">schema_map_val</span> <span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;Object&#39;</span></div><div class='line js-file-line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">schema_map_val</span><span class="p">[</span><span class="nb">String</span><span class="p">(</span> <span class="nx">key_value</span> <span class="p">)]</span></div><div class='line js-file-line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">getErrorReject</span><span class="p">(</span></div><div class='line js-file-line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Independent key-value pair |&#39;</span></div><div class='line js-file-line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">key_name</span> <span class="o">+</span> <span class="s1">&#39;|&#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">(</span> <span class="nx">key_value</span> <span class="p">)</span></div><div class='line js-file-line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;| not authorized by anchor schema&#39;</span></div><div class='line js-file-line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line js-file-line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC165'><br></div><div class='line js-file-line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Booleans, we skip false</span></div><div class='line js-file-line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">class_name</span> <span class="o">===</span> <span class="s1">&#39;Boolean&#39;</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">key_value</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">output_kv_string</span> <span class="o">+=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">);</span> <span class="p">}</span></div><div class='line js-file-line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// String and Number</span></div><div class='line js-file-line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_kv_string</span></div><div class='line js-file-line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+=</span> <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">)</span></div><div class='line js-file-line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span>  <span class="nx">delimit_kv_char</span></div><div class='line js-file-line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span>  <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">key_value</span> <span class="p">)</span></div><div class='line js-file-line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC178'><br></div><div class='line js-file-line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sub_key_name</span> <span class="o">=</span> <span class="s1">&#39;_&#39;</span> <span class="o">+</span> <span class="nx">key_name</span><span class="p">;</span></div><div class='line js-file-line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">anchor_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">sub_key_name</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_map</span>      <span class="o">=</span> <span class="nx">anchor_map</span><span class="p">[</span><span class="nx">sub_key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_kv_array</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line js-file-line' id='LC183'><br></div><div class='line js-file-line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">schema_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map_dep</span> <span class="o">=</span> <span class="nx">schema_map</span><span class="p">[</span><span class="nx">sub_key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">schema_map_dep</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">getErrorReject</span><span class="p">(</span></div><div class='line js-file-line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Dependent key |&#39;</span> <span class="o">+</span> <span class="nx">sub_key_name</span></div><div class='line js-file-line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;| not authorized by anchor schema&#39;</span></div><div class='line js-file-line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line js-file-line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map_dep</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line js-file-line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC196'><br></div><div class='line js-file-line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">dep_key_name</span> <span class="k">in</span> <span class="nx">dep_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">dep_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">dep_key_name</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_key_value</span> <span class="o">=</span> <span class="nx">dep_map</span><span class="p">[</span><span class="nx">dep_key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_class_name</span> <span class="o">=</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">dep_key_value</span>  <span class="p">);</span></div><div class='line js-file-line' id='LC201'><br></div><div class='line js-file-line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">schema_map_dep</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">schema_map_dep_val</span> <span class="o">=</span> <span class="nx">schema_map_dep</span><span class="p">[</span><span class="nx">dep_key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">schema_map_dep_val</span> <span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;Object&#39;</span></div><div class='line js-file-line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">schema_map_dep_val</span><span class="p">[</span><span class="nb">String</span><span class="p">(</span> <span class="nx">dep_key_value</span> <span class="p">)]</span></div><div class='line js-file-line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">getErrorReject</span><span class="p">(</span></div><div class='line js-file-line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Dependent key-value pair |&#39;</span></div><div class='line js-file-line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">dep_key_name</span> <span class="o">+</span> <span class="s1">&#39;|&#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">(</span> <span class="nx">dep_key_value</span> <span class="p">)</span></div><div class='line js-file-line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="s1">&#39;| not authorized by anchor schema&#39;</span></div><div class='line js-file-line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line js-file-line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC214'><br></div><div class='line js-file-line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Booleans, we skip false</span></div><div class='line js-file-line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">class_name</span> <span class="o">===</span> <span class="s1">&#39;Boolean&#39;</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">dep_key_value</span> <span class="o">===</span> <span class="kc">true</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_kv_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">dep_key_name</span> <span class="p">));</span></div><div class='line js-file-line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// String and Number</span></div><div class='line js-file-line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_kv_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></div><div class='line js-file-line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">dep_key_name</span> <span class="p">)</span></div><div class='line js-file-line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">dep_kv_delimit_char</span></div><div class='line js-file-line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nb">encodeURIComponent</span><span class="p">(</span> <span class="nx">dep_key_value</span> <span class="p">)</span></div><div class='line js-file-line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line js-file-line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// append dependent arguments if there are any</span></div><div class='line js-file-line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">dep_kv_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output_kv_string</span></div><div class='line js-file-line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+=</span> <span class="nx">sub_delimit_char</span> <span class="o">+</span> <span class="nx">dep_kv_array</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span> <span class="nx">dep_delimit_char</span> <span class="p">)</span></div><div class='line js-file-line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_val_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">output_kv_string</span> <span class="p">);</span></div><div class='line js-file-line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC241'><br></div><div class='line js-file-line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">key_val_array</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span> <span class="nx">delimit_char</span> <span class="p">);</span></div><div class='line js-file-line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End utility /makeAnchorString/</span></div><div class='line js-file-line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//-------------------- END UTILITY METHODS -------------------</span></div><div class='line js-file-line' id='LC246'><br></div><div class='line js-file-line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//------------------- BEGIN PUBLIC METHODS -------------------</span></div><div class='line js-file-line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin public method /setAnchor/</span></div><div class='line js-file-line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Purpose     :</span></div><div class='line js-file-line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Sets Anchor component of the URI from a Map</span></div><div class='line js-file-line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   (The Anchor component is also known as the</span></div><div class='line js-file-line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   &#39;hash fragment&#39; or &#39;bookmark component&#39;)</span></div><div class='line js-file-line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Arguments  : positional -</span></div><div class='line js-file-line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * 1 ( anchor_map )   : The map to be encoded to the URI anchor</span></div><div class='line js-file-line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * 2 ( option_map )   : map of options</span></div><div class='line js-file-line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * 3 ( replace_flag )  : boolean flag to replace the URI</span></div><div class='line js-file-line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     When true, the URI is replaced, which means the prior URI</span></div><div class='line js-file-line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     is not entered into the browser history</span></div><div class='line js-file-line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Environment : Expects the document.location browser object</span></div><div class='line js-file-line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Settings    : none</span></div><div class='line js-file-line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Returns     : boolean: true on success, false on failure</span></div><div class='line js-file-line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Throws      : none</span></div><div class='line js-file-line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Discussion  :</span></div><div class='line js-file-line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  The first positional argument, anchor_map, may be a simple map:</span></div><div class='line js-file-line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    $.uriAnchor.setAnchor({</span></div><div class='line js-file-line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      page   : &#39;profile&#39;,</span></div><div class='line js-file-line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      slider : &#39;confirm&#39;,</span></div><div class='line js-file-line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      color  : &#39;red&#39;</span></div><div class='line js-file-line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    });</span></div><div class='line js-file-line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  This changes the URI anchor to:</span></div><div class='line js-file-line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     #!page=profile&amp;slider=confirm&amp;color=red</span></div><div class='line js-file-line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  All these arguments are independent, that is, they can vary</span></div><div class='line js-file-line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  independent of each other. We also support dependent values -</span></div><div class='line js-file-line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  values that depend on others.</span></div><div class='line js-file-line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  An independent argument key has no &#39;_&#39; prefix.  The same key name,</span></div><div class='line js-file-line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  prefixed by an &#39;_&#39;, holds the arguments that are dependent on</span></div><div class='line js-file-line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  an independent argument.  The dependent key always points</span></div><div class='line js-file-line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  to a map.  Consider:</span></div><div class='line js-file-line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    $.uriAnchor.setAnchor({</span></div><div class='line js-file-line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      page   : &#39;profile&#39;,</span></div><div class='line js-file-line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      _page  : {</span></div><div class='line js-file-line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        uname   : &#39;wendy&#39;,</span></div><div class='line js-file-line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        online  : &#39;today&#39;</span></div><div class='line js-file-line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      }</span></div><div class='line js-file-line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    });</span></div><div class='line js-file-line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  This changes the URI Anchor to:</span></div><div class='line js-file-line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    #!page=profile:uname,wendy|online,today</span></div><div class='line js-file-line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  Only independent keys and their matching dependent keys are</span></div><div class='line js-file-line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  processed.  All other keys are ignored.  Importantly, this includes</span></div><div class='line js-file-line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  keys of the form _s_/key/ ( e.g. &#39;_s_page&#39; ) returned by makeAnchorMap</span></div><div class='line js-file-line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  Setting a more complex anchor map is illustrated below:</span></div><div class='line js-file-line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    $.uriAnchor.setAnchor({</span></div><div class='line js-file-line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      page : &#39;profile&#39;,</span></div><div class='line js-file-line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      _page : {</span></div><div class='line js-file-line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        uname   : &#39;wendy&#39;,</span></div><div class='line js-file-line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        online  : &#39;today&#39;</span></div><div class='line js-file-line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      },</span></div><div class='line js-file-line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      slider  : &#39;confirm&#39;,</span></div><div class='line js-file-line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      _slider : {</span></div><div class='line js-file-line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       text   : &#39;hello&#39;,</span></div><div class='line js-file-line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       pretty : false</span></div><div class='line js-file-line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      },</span></div><div class='line js-file-line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      color : &#39;red&#39;</span></div><div class='line js-file-line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    });</span></div><div class='line js-file-line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  This sets the URI Anchor to:</span></div><div class='line js-file-line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     #!page=profile:uname,wendy|online,today&amp;slider=confirm:text,hello\</span></div><div class='line js-file-line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       |pretty,false&amp;color=red</span></div><div class='line js-file-line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Options: The second positional argument tp this method, option_map,</span></div><div class='line js-file-line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   provides a number of options for delimiters:</span></div><div class='line js-file-line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     * delimit_char     : delimiter independent args</span></div><div class='line js-file-line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       Defaults to &#39;&amp;&#39;</span></div><div class='line js-file-line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     * delimit_kv_char  : delimiter key-value of independent args</span></div><div class='line js-file-line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       Defaults to &#39;=&#39;</span></div><div class='line js-file-line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     * sub_delimit_char : delimiter independent and dependent args</span></div><div class='line js-file-line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       Defaults to &#39;:&#39;</span></div><div class='line js-file-line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     * dep_delimit_char : delimiter between key-value of dependent args</span></div><div class='line js-file-line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       Defaults to &#39;|&#39;</span></div><div class='line js-file-line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     * dep_kv_delimit_char : key-value delimiter for dependent args.</span></div><div class='line js-file-line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       Defaults to &#39;,&#39;</span></div><div class='line js-file-line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Boolean values ( as part of a key-value pair ) are convert into</span></div><div class='line js-file-line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     the stings &#39;true&#39; or &#39;false&#39;.</span></div><div class='line js-file-line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  Validation:</span></div><div class='line js-file-line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  As of 1.0, the ability to optionally check the validity of the</span></div><div class='line js-file-line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  Anchor against a schema has been included.  Since we don&#39;t expect</span></div><div class='line js-file-line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  the allowable schema to change during run-time, we use a</span></div><div class='line js-file-line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  module configuration to set the schema, like so:</span></div><div class='line js-file-line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    $uriAnchor.configModule({</span></div><div class='line js-file-line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      schema_map : {</span></div><div class='line js-file-line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        page    : { profile : true, pdf : true },</span></div><div class='line js-file-line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        _page   : {</span></div><div class='line js-file-line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          uname   : true,</span></div><div class='line js-file-line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          online  : { &#39;today&#39;,&#39;yesterday&#39;,&#39;earlier&#39; }</span></div><div class='line js-file-line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        },</span></div><div class='line js-file-line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        slider  : { confirm : &#39;deny&#39; },</span></div><div class='line js-file-line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        _slider : { text : &#39;goodbye&#39; },</span></div><div class='line js-file-line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        color   : { red : true, green : true, blue : true }</span></div><div class='line js-file-line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      }</span></div><div class='line js-file-line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    });</span></div><div class='line js-file-line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  This check occurs only during setting of the Anchor, not</span></div><div class='line js-file-line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  during its parsing ( See makeAnchorMap )</span></div><div class='line js-file-line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  The replace_flag instructs the routine to replace the uri,</span></div><div class='line js-file-line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//  discarding browser history</span></div><div class='line js-file-line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setAnchor</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">anchor_map</span><span class="p">,</span> <span class="nx">option_map</span><span class="p">,</span> <span class="nx">replace_flag</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_string</span> <span class="o">=</span> <span class="nx">makeAnchorString</span><span class="p">(</span> <span class="nx">anchor_map</span><span class="p">,</span> <span class="nx">option_map</span>  <span class="p">),</span></div><div class='line js-file-line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uri_array</span><span class="p">,</span> <span class="nx">uri_string</span></div><div class='line js-file-line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC365'><br></div><div class='line js-file-line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uri_array</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s1">&#39;#&#39;</span><span class="p">,</span><span class="mi">2</span> <span class="p">);</span></div><div class='line js-file-line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uri_string</span> <span class="o">=</span> <span class="nx">anchor_string</span></div><div class='line js-file-line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">uri_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;#!&#39;</span> <span class="o">+</span> <span class="nx">anchor_string</span> <span class="o">:</span> <span class="nx">uri_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line js-file-line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC370'><br></div><div class='line js-file-line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">replace_flag</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">anchor_string</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">uri_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;#!&#39;</span> <span class="o">+</span> <span class="nx">anchor_string</span> <span class="p">);</span></div><div class='line js-file-line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">uri_array</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="p">);</span></div><div class='line js-file-line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line js-file-line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we replace the full href so that jquery recognizes the uri</span></div><div class='line js-file-line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// change</span></div><div class='line js-file-line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">uri_string</span><span class="p">;</span></div><div class='line js-file-line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End public method /setAnchor/</span></div><div class='line js-file-line' id='LC385'><br></div><div class='line js-file-line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin public method /makeAnchorMap/</span></div><div class='line js-file-line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Purpose     : Parses URI anchor and returns as map</span></div><div class='line js-file-line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Arguments  : none</span></div><div class='line js-file-line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Environment : Expects the document.location browser object</span></div><div class='line js-file-line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Settings    : none</span></div><div class='line js-file-line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Returns     : Map</span></div><div class='line js-file-line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Throws      : none</span></div><div class='line js-file-line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Discussion :</span></div><div class='line js-file-line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Parses the browser URI anchor into a map using the same</span></div><div class='line js-file-line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   rules used to set the anchor in the method setAnchor</span></div><div class='line js-file-line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   ( see above ).</span></div><div class='line js-file-line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   This method creates an additional key type, _s_&lt;indendent_arg&gt;</span></div><div class='line js-file-line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   for each independent argument with dependent arguments.</span></div><div class='line js-file-line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   These keys point to a string representation of the independent</span></div><div class='line js-file-line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   argument along with all its dependent arguments.</span></div><div class='line js-file-line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   These values are ignored by setAnchor, but they are useful</span></div><div class='line js-file-line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   for routines using setAnchor to check if a part of the anchor</span></div><div class='line js-file-line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   has changed.</span></div><div class='line js-file-line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Example:</span></div><div class='line js-file-line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   If the browser URI Anchor looks like this:</span></div><div class='line js-file-line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     #!page=profile:uname,wendy|online,true&amp;slider=confirm:text,hello\</span></div><div class='line js-file-line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     |pretty,false&amp;color=red</span></div><div class='line js-file-line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Then calling $.uriAnchor.makeAnchorMap();</span></div><div class='line js-file-line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   will return a map that looks like so:</span></div><div class='line js-file-line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     { page : &#39;profile&#39;,</span></div><div class='line js-file-line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       _page : {</span></div><div class='line js-file-line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//         uname   : &#39;wendy&#39;,</span></div><div class='line js-file-line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//         online  : &#39;today&#39;</span></div><div class='line js-file-line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       },</span></div><div class='line js-file-line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       _s_page : &#39;profile:uname,wendy|online,today&#39;,</span></div><div class='line js-file-line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       slider  : &#39;confirm&#39;,</span></div><div class='line js-file-line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       _slider : {</span></div><div class='line js-file-line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        text   : &#39;hello&#39;,</span></div><div class='line js-file-line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//        pretty : false</span></div><div class='line js-file-line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       },</span></div><div class='line js-file-line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       _s_slider : &#39;confirm:text,hello|pretty,false&#39;,</span></div><div class='line js-file-line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//       color : &#39;red&#39;</span></div><div class='line js-file-line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//     };</span></div><div class='line js-file-line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line js-file-line' id='LC432'><br></div><div class='line js-file-line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">makeAnchorMap</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line js-file-line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_string</span> <span class="o">=</span> <span class="nx">getCleanAnchorString</span><span class="p">(),</span></div><div class='line js-file-line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span><span class="p">,</span> <span class="nx">idx</span><span class="p">,</span> <span class="nx">keys_array</span><span class="p">,</span> <span class="nx">key_name</span><span class="p">,</span> <span class="nx">key_value</span><span class="p">,</span> <span class="nx">dep_array</span></div><div class='line js-file-line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC438'><br></div><div class='line js-file-line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">anchor_string</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span>  <span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line js-file-line' id='LC440'><br></div><div class='line js-file-line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// first pass decompose</span></div><div class='line js-file-line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span> <span class="o">=</span> <span class="nx">parseStringToMap</span><span class="p">({</span></div><div class='line js-file-line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input_string</span>     <span class="o">:</span> <span class="nx">anchor_string</span><span class="p">,</span></div><div class='line js-file-line' id='LC444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_char</span>     <span class="o">:</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_kv_char</span>  <span class="o">:</span> <span class="s1">&#39;=&#39;</span></div><div class='line js-file-line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line js-file-line' id='LC447'><br></div><div class='line js-file-line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// extract keys to prevent run-away recursion when</span></div><div class='line js-file-line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// adding keys to anchor_map, below</span></div><div class='line js-file-line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys_array</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line js-file-line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">key_name</span> <span class="k">in</span> <span class="nx">anchor_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">anchor_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys_array</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">);</span></div><div class='line js-file-line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC456'><br></div><div class='line js-file-line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">keys_array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">idx</span><span class="o">++</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_name</span>  <span class="o">=</span> <span class="nx">keys_array</span><span class="p">[</span><span class="nx">idx</span><span class="p">];</span></div><div class='line js-file-line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_value</span> <span class="o">=</span> <span class="nx">anchor_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC460'><br></div><div class='line js-file-line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">getVarType</span><span class="p">(</span> <span class="nx">key_value</span> <span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;String&#39;</span> <span class="o">||</span> <span class="nx">key_name</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span></div><div class='line js-file-line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line js-file-line' id='LC463'><br></div><div class='line js-file-line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// include string representation with all dependent keys and values</span></div><div class='line js-file-line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span><span class="p">[</span> <span class="s1">&#39;_s_&#39;</span> <span class="o">+</span> <span class="nx">key_name</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">key_value</span><span class="p">;</span></div><div class='line js-file-line' id='LC466'><br></div><div class='line js-file-line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dep_array</span> <span class="o">=</span> <span class="nx">key_value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s1">&#39;:&#39;</span> <span class="p">);</span></div><div class='line js-file-line' id='LC468'><br></div><div class='line js-file-line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">dep_array</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">dep_array</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">dep_array</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line js-file-line' id='LC471'><br></div><div class='line js-file-line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">anchor_map</span><span class="p">[</span> <span class="s1">&#39;_&#39;</span> <span class="o">+</span> <span class="nx">key_name</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">parseStringToMap</span><span class="p">({</span></div><div class='line js-file-line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">input_string</span>    <span class="o">:</span> <span class="nx">dep_array</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span></div><div class='line js-file-line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_char</span>    <span class="o">:</span> <span class="s1">&#39;|&#39;</span><span class="p">,</span></div><div class='line js-file-line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delimit_kv_char</span> <span class="o">:</span> <span class="s1">&#39;,&#39;</span></div><div class='line js-file-line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line js-file-line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">anchor_map</span><span class="p">;</span></div><div class='line js-file-line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End public method /makeAnchorMap/</span></div><div class='line js-file-line' id='LC482'><br></div><div class='line js-file-line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin public method /configModule/</span></div><div class='line js-file-line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set configuration options</span></div><div class='line js-file-line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">configModule</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">arg_map</span>  <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span></div><div class='line js-file-line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settable_map</span> <span class="o">=</span> <span class="nx">configMap</span><span class="p">.</span><span class="nx">settable_map_key</span><span class="p">,</span></div><div class='line js-file-line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key_name</span><span class="p">,</span> <span class="nx">error</span></div><div class='line js-file-line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">;</span></div><div class='line js-file-line' id='LC490'><br></div><div class='line js-file-line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">key_name</span> <span class="k">in</span> <span class="nx">arg_map</span> <span class="p">)</span> <span class="p">{</span></div><div class='line js-file-line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">arg_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settable_map</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span> <span class="nx">key_name</span> <span class="p">))</span> <span class="p">{</span></div><div class='line js-file-line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">configMap</span><span class="p">[</span><span class="nx">key_name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">arg_map</span><span class="p">[</span><span class="nx">key_name</span><span class="p">];</span></div><div class='line js-file-line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line js-file-line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span>         <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">();</span></div><div class='line js-file-line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="p">.</span><span class="nx">name</span>    <span class="o">=</span> <span class="s1">&#39;Bad Input&#39;</span><span class="p">;</span></div><div class='line js-file-line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="s1">&#39;Setting config key |&#39;</span></div><div class='line js-file-line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">+</span> <span class="nx">key_name</span> <span class="o">+</span> <span class="s1">&#39;| is not supported&#39;</span><span class="p">;</span></div><div class='line js-file-line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">error</span><span class="p">;</span></div><div class='line js-file-line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line js-file-line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// End public method /configModule/</span></div><div class='line js-file-line' id='LC507'><br></div><div class='line js-file-line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// return public methods</span></div><div class='line js-file-line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line js-file-line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">configModule</span>     <span class="o">:</span> <span class="nx">configModule</span><span class="p">,</span></div><div class='line js-file-line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getVarType</span>       <span class="o">:</span> <span class="nx">getVarType</span><span class="p">,</span></div><div class='line js-file-line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">makeAnchorMap</span>   <span class="o">:</span> <span class="nx">makeAnchorMap</span><span class="p">,</span></div><div class='line js-file-line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">makeAnchorString</span> <span class="o">:</span> <span class="nx">makeAnchorString</span><span class="p">,</span></div><div class='line js-file-line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setAnchor</span>        <span class="o">:</span> <span class="nx">setAnchor</span></div><div class='line js-file-line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line js-file-line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//------------------- END PUBLIC METHODS ---------------------</span></div><div class='line js-file-line' id='LC517'>&nbsp;&nbsp;<span class="p">}());</span></div><div class='line js-file-line' id='LC518'><span class="p">}</span> <span class="p">(</span> <span class="nx">jQuery</span> <span class="p">));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03865s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12d5fda141e78e513749dddbc56445fe172cbd9a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-a1b27a14e6e11ca95a737934e426decbc4db3704.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

