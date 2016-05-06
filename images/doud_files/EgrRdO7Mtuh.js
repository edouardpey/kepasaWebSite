/*1462222593,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8aeA9"]); }

__d('TickerReadStateTracking',['Style','clickRefAction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=73,i='ticker_hover',j=[];function k(m){if(!m)return null;var n=JSON.parse(m.getAttribute('data-ft'));if(!n)return null;if(n.mf_story_key)return n.mf_story_key;if(n.fbid)return n.fbid;return null;}function l(m){var n=k(m);if(!n||n in j)return;j[n]=true;var o={evt:h};c('clickRefAction')(i,m,null,'FORCE',{ft:o});}f.exports.log=l;},null);
__d('getLegacyContextualDialogInstance',['DataStore','Parent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=c('DataStore').get(i,'LegacyContextualDialog');if(!j){var k=c('Parent').byClass(i,'uiOverlay');if(k)j=c('DataStore').get(k,'overlay');}return j;}f.exports=h;},null);
__d('TickerStoryList',['csx','cx','Animation','Arbiter','AsyncRequest','AsyncSignal','BanzaiODS','Bootloader','ChannelConstants','CSS','DOM','DOMVector','Event','HTML','Keys','LayerFadeOnHide','LiveTimer','NavigationMessage','Parent','Rect','Run','ScrollableArea','SelectorDeprecated','Style','TickerController','TickerReadStateTracking','Toggler','UFIUIEvents','URI','UserActivity','UserAgent_DEPRECATED','Vector','clickRefAction','collectDataAttributes','containsNode','emptyFunction','ex','ge','getElementText','getLegacyContextualDialogInstance','goURI','tickerPhoteSnowLiftOpenStatus','setTimeout','throttle'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=15000;function k(l,m,n){this._root=l;this._content=c('DOM').find(l,'.ticker_stream');this._stories=c('DOM').find(this._root,'.tickerActivityStories');this._scrollableArea=m;this._container=c('DOM').find(l,'div.uiScrollableAreaWrap');this._newestStory={};this._objectIDs=[];this._fetchedStories={};this._fetchedStoriesDialog={};this._storyDialogResources={};this._removedStoryIDs=[];this._storiesToRemove=[];var o=Date.now();this._initTime=o;this._lastUpdate=o;this._lastPull=o;this._lastInsert=o;this._pollOnly=false;this._autoloadStoryIndex=1;this._scrollTopThreshold=100;this._scrollTopPrompt=c('DOM').find(this._root,'.scrollTopPrompt');this._scrollTopPromptVisible=false;this._maxStoriesToKeep=50;this._minStoriesToKeep=25;this._tickerInSidebarMode=!!c('Parent').byClass(this._root,'fbChatSidebar');this._loadStoriesWithActions();c('clickRefAction')('ticker_flyout');c('clickRefAction')('ticker_flyout_prefetch');c('clickRefAction')('ticker_flyout_loadtime');c('clickRefAction')('ticker_stream');this._uaCurStoryIDFetch=null;this._uaCurStoryIDPrefetch=null;var p=c('DOM').create('div',{className:'storyQueue hidden_elem'});this._storyQueue=p;c('DOM').appendContent(this._root,p);this._lastKStories={head:null,tail:null,count:0,actors:{},apps:{},stories:{}};this._dedupeKeys={};this._initObjectIDs();this._initConfig(n);this._resetMorePager();this._initListeners();this._initSubscriptions(n);c('Arbiter').inform('ticker/init',this,c('Arbiter').BEHAVIOR_PERSISTENT);this._poll();}Object.assign(k.prototype,{ADS_IDLE_MS:300000,FLYOUT_MAX_HEIGHT:450,FLYOUT_OFFSET_THRESHOLD:20,FLYOUT_COMMENT_OFFSET:15,FLYOUT_VIEWPORT_PADDING:75,FLYOUT_ACTION_FOOTER_PADDING:8,FLYOUT_TARGET_HEIGHT_OFFSET:25,DEFAULT_LOOK_BEHIND:10,_lastKStoriesInsert:function(l){this._lastKStories.stories[l.getAttribute("data-story-key")]=true;var m={story:l,next:null};if(this._lastKStories.head)this._lastKStories.head.next=m;this._lastKStories.head=m;this._lastKStories.count++;if(!this._lastKStories.tail)this._lastKStories.tail=this._lastKStories.head;var n=l.getAttribute("data-actor");if(!this._lastKStories.actors[n])this._lastKStories.actors[n]=0;this._lastKStories.actors[n]++;var o=l.getAttribute("data-app");if(o){if(!this._lastKStories.apps[o])this._lastKStories.apps[o]=0;this._lastKStories.apps[o]++;}if(this._lastKStories.count>this.DEFAULT_LOOK_BEHIND){while(this._lastKStories.tail&&!this._lastKStoriesRemove(this._lastKStories.tail.story))this._lastKStories.tail=this._lastKStories.tail.next;if(!this._lastKStories.tail)this._lastKStories.head=null;}},_lastKStoriesRemove:function(l){var m=l.getAttribute("data-story-key"),n=l.getAttribute("data-actor"),o=l.getAttribute("data-app");if(this._lastKStories.stories[m]){delete this._lastKStories.stories[m];this._lastKStories.actors[n]--;if(o)this._lastKStories.apps[o]--;this._lastKStories.count--;return true;}else return false;},_loadStoriesWithActions:function(){var l=c('ge')('rightCol');if(!l)return;this._toggleWrapper=c('DOM').scry(l,'.tickerToggleWrapper')[0];if(this._toggleWrapper){var m=c('DOM').scry(this._stories,'.tickerStoryWithButton');this._storiesWithActions={};for(var n=0;n<m.length;n++){var o=m[n];this._storiesWithActions[o.getAttribute('data-story-key')]=o;}}},_initConfig:function(l){Object.assign(this,{_newest:l.newest,_page_newest:l.newest,_timeout:l.timeout,_heartbeatTimeout:Math.min(5000,l.heartbeatTimeout),_maxHeartbeatTimeout:Math.max(30000,l.maxHeartbeatTimeout),_pullTimeout:Math.max(30000,l.pullTimeout),_insertTimeout:l.insertTimeout,_maxQueueLength:l.maxQueueLength,_heartbeatEndpoint:l.heartbeatEndpoint,_popupOnHover:l.popupOnHover,_userIdleTimeout:l.userIdleTimeout,_pollOnly:l.pollOnly,_tickerSource:l.tickerSource,_logFlyouts:l.logFlyouts,_userScrollGaurdDelay:l.userScrollGaurdDelay,_rescheduleScrollToTopDelay:l.rescheduleScrollToTopDelay});},_initListeners:function(){this._listeners=c('Event').listen(this._root,{click:this._handleClick.bind(this),keydown:this._handleKeydown.bind(this),mouseout:this._handleMouseout.bind(this),mouseover:this._handleMouseover.bind(this),mousedown:this._tickerDeClicker.bind(this),mouseup:this._handleMouseup.bind(this)});this._listeners.scroll=c('Event').listen(this._container,'scroll',this._handleScroll.bind(this));c('setTimeout')(this._initInfiniteScrollListener.bind(this),0);},_initSubscriptions:function(l){c('Run').onLeave(this._cleanup.bind(this));this._subscriptions=[c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this._onNavHandler.bind(this)),c('Arbiter').subscribe('composer/publish',this._handleComposerPublish.bind(this)),c('Arbiter').subscribe('Ticker/storiesInserted',this._handleStoriesInserted.bind(this)),c('Arbiter').subscribe('Ticker/fixed',this._setFixed.bind(this,true)),c('Arbiter').subscribe('Ticker/unfixed',this._setFixed.bind(this,false)),c('Arbiter').subscribe('Ticker/resized',this._checkInfiniteScroll.bind(this)),c('Arbiter').subscribe(c('UFIUIEvents').Comment,this._scrollDialogToBottom.bind(this)),c('Arbiter').subscribe(c('UFIUIEvents').Changed,this._redrawFlyout.bind(this)),c('Arbiter').subscribe('Ticker/chatOpened',this._handleChatOpened.bind(this))];if(!l.pollOnly)this._subscriptions.push(c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('ticker_update'),this._handleTickerPush.bind(this)));if(l.pushChannel&&!l.pollOnly)this.setPushChannel(l.pushChannel);},_handleClick:function(event){if(!(event.button===1||event.altKey||event.ctrlKey||event.metaKey))event.prevent();var l=event.getTarget(),m=this._getStoryFromNode(l),n=c('Parent').byClass(l,'tickerStoryAllowClick');if(!m||m==this._selectedStory||n)return;if(this._storyIsHidden(m))return;if(m==this._activeStory&&!this._selectedStory)this._selecting=true;if(this._storyCanOpenExternally(m)){var o=m.getAttribute('data-href');if(o&&!l.getAttribute('href')){var p={href:o},q=c('collectDataAttributes')(l,['ft','gt']);c('clickRefAction')('click',p,event,'FORCE',q);}else this._logUserAction(l,'click',event);this._openStoryExternally(m,event);return;}this._logUserAction(l,'flyout',event);this._activateStory(m,'click');this._selectStory(m);},_handleMouseover:function(event){this._setLocked(true);var l=event.getTarget(),m=this._getOpenableStory(l);if(!m){var n=c('Parent').bySelector(l,"._5wvy");if(n){clearTimeout(parseInt(n.getAttribute('data-timeout-token'),10));var o=c('setTimeout')(function(){k.removeMarkup(n,m);},j);n.setAttribute('data-timeout-token',o);}return;}event.kill();if(this._popupOnHover){if(!(m.id in this._fetchedStories))this._uaCurStoryIDPrefetch=m.id;this._fetchStory(m);}if(this._selectedStory)return;if(this._popupOnHover){this._clearHoverTimeouts();var p=this._storyCanOpenExternally(m)?500:1000,q=this._activeStory?75:p;this._hoverShowTimeout=this._setTimeout(function(){this._activateStory(m,'hover');this._logUserAction(l,'flyout',event);}.bind(this),q);}},_handleMouseout:function(event){var l=event.getTarget();this._setLocked(false);if(l==this._getStoryFromNode(l)){var m=c('DOM').scry(l.parentNode,'.openToggler');for(var n=0;n<m.length;n++)c('SelectorDeprecated').toggle(m[n]);}this._clearClickedStory();this._scheduleHide();},_handleKeydown:function(event){this._tickerDeClicker(event);var l=this._activeStory;if(!l)return;var m=c('Event').getKeyCode(event);switch(m){case c('Keys').UP:case c('Keys').DOWN:var n=this._getInsertedStories(),o;if(event.getModifiers().any){o=m===c('Keys').UP?0:n.length-1;}else o=n.indexOf(l)+(m===c('Keys').UP?-1:1);l=n[o];break;case c('Keys').ESC:this._deactivateStory(true);return;default:return;}event.kill();if(!l)return;this._activateStory(l,'keypress');this._selectStory(l);},_fadeTopmostStoryButton:function(){var l=0,m=15;if(this._storiesWithActions)for(var n in this._storiesWithActions){var o=this._storiesWithActions[n],p=c('DOM').scry(o,'.tickerInlineActionButton')[0],q=c('DOM').scry(p,'.tickerActionIcon')[0],r=c('Vector').getElementPosition(p).y-c('Vector').getElementPosition(this._toggleWrapper).y;if(r<l){c('Style').set(p,'opacity',0);c('Style').set(q,'opacity',0);}else if(r>=l&&r<m){var s=(r-l)/(m-l);c('Style').set(p,'opacity',s);c('Style').set(q,'opacity',s);break;}else{c('Style').set(p,'opacity',1);c('Style').set(q,'opacity',1);}}},_handleScroll:function(){var l=c('tickerPhoteSnowLiftOpenStatus').checkIsOpen();if(l)this._preventFlyoutDismiss=true;if(!this._preventScrollDismiss&&!l){if(!this._preventFlyoutDismiss){this._deactivateStory(true);}else this._preventFlyoutDismiss=false;}else this._preventScrollDismiss=false;if(!this._handleScrollThrottled)this._handleScrollThrottled=c('throttle')(this._handleScrollInner.bind(this));this._handleScrollThrottled();},_handleScrollInner:function(){this._fadeTopmostStoryButton();this._checkInfiniteScroll();this._setIsUserScrolling();if(!this._scrollLogged){this._scrollLogged=true;var l=this._stories.childNodes.length,m=this._stories.getAttribute('data-gt'),n={ticker_scroll:1,number_stories:l,source:m};c('clickRefAction')('scroll',null,null,'FORCE',{gt:n});}},_setIsUserScrolling:function(){clearTimeout(this._userScrollingToken);if(this._isScrolledToTop()){this._userScrolling=false;return;}this._userScrolling=true;this._userScrollingToken=c('setTimeout')(function(){this._userScrolling=false;this._userScrollingToken=null;}.bind(this),this._userScrollGaurdDelay);},_isUserScrolling:function(){return this._userScrolling;},_handleStoriesInserted:function(){this._initInfiniteScrollListener();if(this._scrollableArea instanceof c('ScrollableArea'))this._scrollableArea.adjustGripper();},_handleScrollToTopClick:function(){this._scrollToTop(this._poll.bind(this));},_scheduleScrollToTop:function(){this._scrollToTopToken&&clearTimeout(this._scrollToTopToken);this._scrollToTopToken=c('setTimeout')(function(){if(this._isLocked()||this._isUserScrolling()){this._scheduleScrollToTop();}else{this._scrollToTopToken=null;this._scrollToTop();}}.bind(this),this._rescheduleScrollToTopDelay);},_scrollToTop:function(l){new (c('Animation'))(this._container).to('scrollTop',0).ease(c('Animation').ease.end).ondone(l).go();},_clearHoverTimeouts:function(){clearTimeout(this._hoverShowTimeout);clearTimeout(this._hoverHideTimeout);},_getAllStories:function(){return c('DOM').scry(this._root,'div.fbFeedTickerStory');},_findStoryById:function(l){var m=c('DOM').scry(this._root,'.fbFeedTickerStory'),n;for(story in m){n=m[story];if(l==this._getStoryDialogParams(n).token)return n;}return null;},_getInsertedStories:function(){return this._getAllStories().filter(function(l){return !c('CSS').hasClass(l,'queuedStory');});},_getQueuedStories:function(){return c('DOM').scry(this._storyQueue,'.fbFeedTickerStory.queuedStory');},_getStoryFromNode:function(l){return c('Parent').byClass(l,'fbFeedTickerStory');},_getActionButtonFromStory:function(l){return c('DOM').scry(l,'.tickerInlineActionButton')[0];},_getOpenableStory:function(l){var m=this._getStoryFromNode(l);return this._storyCanOpenDialog(m)?m:null;},_getStoryDialog:function(l){return this._fetchedStoriesDialog[l.id]||c('getLegacyContextualDialogInstance')(l);},_getStoryDialogParams:function(l){var m=l&&l.getAttribute('data-flyoutdata')||null;return m&&JSON.parse(m)||null;},_storyCanOpenDialog:function(l){return !!this._getStoryDialogParams(l)&&!this._storyIsHidden(l);},_storyCanOpenExternally:function(l){return !!l.getAttribute('data-href')||!this._storyCanOpenDialog(l);},_storyIsHidden:function(l){return c('CSS').hasClass(l,'tickerStoryHidden');},hideActiveStory:function(){this._activeStory&&this.hideStory(this._activeStory);},hideStory:function(l){this._deactivateStory();if(c('getElementText')(l)==='')c('DOM').remove(l);c('CSS').addClass(l,'tickerStoryHidden');c('CSS').removeClass(l,'tickerStoryClickable');},undoHideStory:function(l){c('CSS').addClass(l,'tickerStoryClickable');c('CSS').removeClass(l,'tickerStoryHidden');},insertStoriesAtBottom:function(l){if(!l)return;var m=c('DOM').create('div');m.appendChild(l);var n=c('DOM').scry(m,'.fbFeedTickerStory'),o=c('DOM').find(m,'.tickerMorePager'),p=[];for(var q=0;q<n.length;q++)if(!this.dedupeStory(n[q]))p.push(n[q]);if(p.length){p.push(o);c('DOM').replace(c('DOM').find(this._root,'.tickerMorePager'),p);}c('Arbiter').inform('Ticker/storiesInserted');},_scheduleHide:function(){if(this._popupOnHover&&!this._selectedStory){this._clearHoverTimeouts();this._hoverHideTimeout=this._setTimeout(this._deactivateStory.bind(this),100);}},_setScrollTopPromptVisible:function(l){this._scrollTopPromptVisible=l;c('CSS').conditionShow(this._scrollTopPrompt,l);if(l&&!this._listeners.scrollTop){this._listeners.scrollTop=c('Event').listen(this._scrollTopPrompt,{click:this._handleScrollToTopClick.bind(this)});}else if(!l&&this._listeners.scrollTop){this._listeners.scrollTop.click.remove();this._listeners.scrollTop=null;}},_isUserIdle:function(){return !c('UserActivity').isActive(this._userIdleTimeout);},_schedulePoll:function(){clearTimeout(this._pollToken);this._pollToken=this._setTimeout(this._poll.bind(this),this._timeout);},_poll:function(){if(!this._isTickerVisible())return;if(this._storiesToRemove.length>0){if(this._isInsertingStory)return this._schedulePoll();var l=this._storiesToRemove.pop();this.removeStory(l);}var m=!this._isScrolledToTop()&&this._getQueuedStories().length;this._setScrollTopPromptVisible(m);var n=Date.now(),o=n-this._lastInsert;if(o<this._insertTimeout||this._isLocked())return this._schedulePoll();var p=this._getQueuedStories(),q=this._isUserIdle(),r=p.length>0;if(r){var s=p.shift();this.insertStory(s);return this._schedulePoll();}if(q)return c('UserActivity').subscribeOnce(this._poll.bind(this));var t=false,u=false;if(this._pollOnly){u=n-this._lastUpdate>this._heartbeatTimeout;}else t=n-this._lastPull>this._pullTimeout;var v=t||u;if(!v)return this._schedulePoll();this.update({pull:t,fullpoll:u});},_updatePollOnlyHeartbeatTimeout:function(){if(this._pollOnly&&this._heartbeatTimeout<this._maxHeartbeatTimeout)this._heartbeatTimeout=Math.min(this._heartbeatTimeout+5000,this._maxHeartbeatTimeout);},update:function(l){this._updatePollOnlyHeartbeatTimeout();if(!this._pollOnly)return this._schedulePoll();var m={newest:l.fullpoll||l.cache_update?this._newest:this._page_newest,source:this._tickerSource};if(!m.newest||m.newest==='0')throw new Error(c('ex')('Trying to request new ticker stories with an invalid cursor %s, with'+' the settings fullpoll %s, cache_update %s, value coming from this.%s',typeof m.newest==='string'?'"'+m.newest+'"':m.newest,l.fullpoll,l.cache_update,l.fullpoll||l.cache_update?'_newest':'_page_newest'));Object.assign(m,l);new (c('AsyncRequest'))().setURI(this._heartbeatEndpoint).setReadOnly(true).setOption('retries',0).setData(m).setHandler(this._handleResponse.bind(this)).setFinallyHandler(this._poll.bind(this)).setAllowCrossPageTransition(true).send();this._lastUpdate=Date.now();if(m.pull)this._lastPull=this._lastUpdate;},insertStory:function(l){this._lastInsert=Date.now();window.LiveTimer&&c('LiveTimer').addTimeStamps(l);c('CSS').removeClass(l,'queuedStory');if(this._isUserScrolling()){this._fadeStoryIn(l);}else this._scrollToTop(this._flyStoryIn.bind(this,l));if(this._storiesWithActions&&c('CSS').hasClass(l,'tickerStoryWithButton'))this._storiesWithActions[l.getAttribute('data-story-key')]=l;this._removeOldStories();},_removeOldStories:function(){var l=this._getInsertedStories();if(l.length<=this._maxStoriesToKeep)return;var m=this._minStoriesToKeep,n=l.slice(m);n.forEach(c('DOM').remove);if(this._storiesWithActions)for(var o=0;o<n.length;o++)delete this._storiesWithActions[n[o].getAttribute('data-story-key')];this._resetMorePager();},_resetMorePager:function(){var l=this._getInsertedStories();if(!l||!l.length)return;var m=l[l.length-1].getAttribute('data-ticker-timestamp'),n=c('DOM').scry(this._root,'.tickerMorePager a')[0];if(!n||!m)return;var o=new (c('URI'))(n.getAttribute('ajaxify'));o.addQueryData({oldest:m});n.setAttribute('ajaxify',o);},_setLocked:function(l){this._locked=l;},_isLocked:function(){return !!(this._locked||this._activeStory);},informAndRemoveStory:function(l,m,n){var o=this._getStoryFromNode(l),p=o.getAttribute('data-story-key');c('DOM').setContent(o,m);c('CSS').addClass(o,'highlightedStory');this._setTimeout(this.removeStory.bind(this,p),n||6000);},_getStoryByStoryKey:function(l){var m=this._getAllStories();for(var n=0;n<m.length;n++){var o=m[n];if(o.getAttribute('data-story-key')==l)return o;}return null;},removeStory:function(l){this._removedStoryIDs[l]=true;var m=this._getStoryByStoryKey(l);if(!m)return;if(this._storiesWithActions)delete this._storiesWithActions[l];if(m==this._activeStory)this._deactivateStory();var n=this._getStoryDialog(m);n&&n.destroy();this._lastKStoriesRemove(m);var o=m.getAttribute("data-dedupe-key");if(o)delete this._dedupeKeys[o];if(c('CSS').hasClass(m,'queuedStory')){c('DOM').remove(m);return;}this._animateStoryOut(m);},_isScrolledToTop:function(){return this._container.scrollTop<=this._scrollTopThreshold;},_flyStoryIn:function(l){var m=c('DOM').create('div',{style:{marginTop:'-1000px'}},l);c('Style').set(m,'opacity',0);c('DOM').prependContent(this._stories,m);var n=c('Vector').getElementDimensions(m).y;c('Style').set(m,'marginTop','-'+n+'px');this._isInsertingStory=true;new (c('Animation'))(m).to('marginTop',0).ease(c('Animation').ease.end).checkpoint(.5).to('opacity',1).ondone(function(){c('DOM').replace(m,l);this._afterInsert(l);this._isInsertingStory=false;}.bind(this)).go();},_fadeStoryIn:function(l){new (c('Animation'))(this._stories).to('opacity',.5).ondone(function(){c('DOM').prependContent(this._stories,l);this._container.scrollTop=this._container.scrollTop+this._stories.firstChild.offsetHeight;this._scheduleScrollToTop();new (c('Animation'))(this._stories).to('opacity',1).ondone(function(){this._afterInsert(l);}.bind(this)).go();}.bind(this)).go();},_animateStoryOut:function(l){var m=c('DOM').create('div',{style:{overflow:'hidden',position:'relative'}});c('DOM').insertBefore(l,m);c('DOM').appendContent(m,l);new (c('Animation'))(m).to('top',20).to('height',0).to('opacity',0).ease(c('Animation').ease.end).ondone(function(){c('DOM').remove(m);c('Arbiter').inform('Ticker/animateOut');}.bind(this)).go();},_afterInsert:function(l){c('Arbiter').inform('Ticker/afterInsert');},setPushChannel:function(l){this._pushSubscription&&this._pushSubscription.unsubscribe();this._pushSubscription=c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(l),this._handleTickerPush.bind(this));e(['ChatConfig','ChannelConnection'],function(m,n){this._channelConnection=n;this._checkChannelConnection();this._channelConnectionSubscription=this._channelConnection.subscribe([this._channelConnection.CONNECTED,this._channelConnection.RECONNECTING,this._channelConnection.SHUTDOWN,this._channelConnection.MUTE_WARNING,this._channelConnection.UNMUTE_WARNING],this._handleChannelConnection.bind(this));}.bind(this));},_checkChannelConnection:function(){c('CSS').conditionClass(this._root,'disconnected',this._channelConnection.disconnected());},_handleTickerPush:function(l,m){var n=m.obj;if(n.delete_id){this._storiesToRemove.push(n.delete_id);return;}var o=n.story_xhp;if(!o)return;var p=c('HTML')(o).getRootNode();if(!n.story_time||n.story_time==='0')throw new Error(c('ex')('An invalid story time was pushed: %s, for ticker story: %s',typeof n.story_time==='string'?'"'+n.story_time+'"':n.story_time,p.getAttribute('data-flyoutdata')));this._newest=n.story_time;this.queueStory(p,n.flyout_js_cmds);this._newestStory={actorID:n.actor,storyKey:p.getAttribute('data-story-key')};},_handleComposerPublish:function(l,m){m.tickerMarkup&&this.insertStory(m.tickerMarkup);},_logRender:function(){if(this._loggedRender)return;var l=this._tickerInSidebarMode;if(l||c('Parent').byClass(this._content,'home_right_column')){new (c('AsyncSignal'))('/ajax/log_ticker_render.php',{sidebar_mode:l}).send();this._loggedRender=true;}},_isTickerVisible:function(){var l=c('TickerController').getActiveInstance()==this;l&&this._logRender();return l;},_handleResponse:function(l){var m=l.getPayload();if(m.newest)this._newest=this._page_newest=m.newest;if(m.content)if(m.content instanceof Array){for(var n=0;n<m.content.length;n++)this.queueStoryMarkup(m.content[n]);}else this.queueStoryMarkup(m.content);},queueStoryMarkup:function(l){var m=c('HTML')(l).getRootNode();this.queueStory(m);},dedupeStory:function(l){var m=l.getAttribute('data-story-key'),n=m&&(!!this._objectIDs[m]||!!this._removedStoryIDs[m]);n=n||!!this._lastKStories.actors[l.getAttribute('data-actor')]||!!this._lastKStories.apps[l.getAttribute('data-app')];var o=l.getAttribute('data-dedupe-key');n=n||o&&this._dedupeKeys[o];if(l.getAttribute('data-force-push'))n=false;m&&(this._objectIDs[m]=true);return n;},queueStory:function(l,m){if(this.dedupeStory(l))return;this._lastKStoriesInsert(l);var n=l.getAttribute("data-dedupe-key");if(n)this._dedupeKeys[n]=true;c('CSS').addClass(l,'queuedStory');c('DOM').appendContent(this._storyQueue,l);var o=m&&m.length;if(o)m.forEach(function(q){new Function(q).apply();});l.setAttribute('id',l.id+'_'+this._root.id);var p=this._getQueuedStories();p.slice(0,-this._maxQueueLength).forEach(c('DOM').remove);if(o)this._fetchedStories[l.id]=true;},_cleanup:function(){c('TickerController').clearRHCplaceholder();if(!c('Parent').byClass(this._content,'hasRightCol'))return;this._objectIDs=[];this._subscriptions.forEach(c('Arbiter').unsubscribe);this._channelConnectionSubscription&&this._channelConnection.unsubscribe(this._channelConnectionSubscription);this._pushSubscription&&this._pushSubscription.unsubscribe();for(var l in this._listeners)this._listeners[l]&&this._listeners[l].remove();clearTimeout(this._pollToken);this._pollToken=null;this._cleanupInputFocusListener();this._cleanupContentResizeListener();c('Arbiter').inform('Ticker/cleanup');},_onNavHandler:function(l,m){var n=m.params.key;if(n!='lf'&&n!='h')this._cleanup();},registerStoryDialog:function(l,m){if(this._uaCurStoryIDFetch==l.id)this._uaCurStoryIDFetch=null;if(this._uaCurStoryIDPrefetch==l.id)this._uaCurStoryIDPrefetch=null;this._fetchedStories[l.id]=true;this._fetchedStoriesDialog[l.id]=m;m.setContext(l);m.subscribe('hide',this._deactivateStory.bind(this,true));m.subscribe('success',this._focusStory.bind(this,l));m.subscribe('beforehide',function(){if(this._selecting){this._selecting=false;return false;}}.bind(this));if(this._popupOnHover){m.subscribe('mouseenter',this._clearHoverTimeouts.bind(this));m.subscribe('mouseleave',this._scheduleHide.bind(this));m.subscribe('show',function(){c('setTimeout')(this._highlightDialogScrollbar.bind(this,m),0);var n=c('Event').listen(m.getContent(),'mousedown',function(){this._selectStory(l);n.remove();}.bind(this));}.bind(this));}if(l==this._activeStory)this._openDialog(m);},_highlightDialogScrollbar:function(l){var m=c('DOM').scry(l.getContent(),'.uiScrollableArea')[0];m&&c('ScrollableArea').poke(m);},_openStoryExternally:function(l,event){var m=l.getAttribute('data-href');if(!m||m=='#')return;var n=l.getAttribute('data-story-rel');switch(n){case 'theater':this._deactivateAndClearStory();c('Bootloader').loadModules(["PhotoViewer"],function(q){q.bootstrap(m,l);},'TickerStoryList');return;case 'async':this._deactivateAndClearStory();c('AsyncRequest').bootstrap(m,l);return;}var o=l.getAttribute('data-target'),p=event.which!=1||event.getModifiers().any||o=='_blank';p?window.open(m,'_blank'):c('goURI')(m);},_deactivateAndClearStory:function(){this._clearHoverTimeouts();this._deactivateStory();},_focusStoryWillTriggerScroll:function(l){var m=this._container,n=m.clientHeight,o=l.offsetHeight,p=m.scrollTop,q=p+n,r=l.offsetTop,s=r+o;return r<p||s>q;},_focusStory:function(l){if(this._focusStoryWillTriggerScroll(l))this._preventScrollDismiss=true;var m=new (c('Rect'))(l),n=c('Parent').byClass(l,'scrollable'),o=m.boundWithin(new (c('Rect'))(n)).getPositionVector(),p=m.getPositionVector().sub(o);if(p.y!==0)p.scrollElementBy(n);l.focus();},_selectStory:function(l){this._selectedStory=l;c('CSS').addClass(l,'tickerStorySelected');c('CSS').addClass(this._root,'tickerChildSelected');},_activateStory:function(l,m){this._clearHoverTimeouts();if(l==this._activeStory||!this._storyCanOpenDialog(l))return;this._deactivateStory();this._focusStory(l);this._activeStory=l;c('CSS').addClass(l,'tickerStoryActive');window.Toggler&&c('Toggler').hide();if(this._logFlyouts){m=m||'unknown';new (c('AsyncSignal'))('/ajax/feed/ticker/flyout.php',{src:m}).send();}c('TickerReadStateTracking').log(l);var n=this._getStoryDialog(l);if(n){if(this._storyDialogResources[l.id])c('Bootloader').loadResources(this._storyDialogResources[l.id]);this._openDialog(n);c('BanzaiODS').bumpEntityKey('ticker_stories','flyouts.open');return;}if(!(l.id in this._fetchedStories))this._uaCurStoryIDFetch=l.id;this._fetchStory(l);},handleRemoveStory:function(){this._deactivateStory(true);},_deactivateStory:function(l){if(this._activeStory===this._deactivatingStory)return;this._deactivatingStory=this._activeStory;if(this._dialog){if(l){this._dialog.enableBehavior(c('LayerFadeOnHide'));}else this._dialog.disableBehavior(c('LayerFadeOnHide'));this._dialog.hide();}if(this._activeStory){c('CSS').removeClass(this._activeStory,'tickerStoryActive');c('CSS').removeClass(this._activeStory,'tickerStorySelected');c('CSS').removeClass(this._root,'tickerChildSelected');}this._dialog=this._selectedStory=this._activeStory=null;this._cleanupInputFocusListener();this._cleanupContentResizeListener();this._deactivatingStory=null;},_logUserAction:function(l,m,event){c('clickRefAction')(m,l,event,'FORCE');},_fetchStory:function(l){clearTimeout(this._fetchToken);var m=[],n=this._getInsertedStories(),o=n.indexOf(l);[-1,0,1].forEach(function(p){var q=n[o+p];q&&m.push(q);},this);this._fetchToken=c('setTimeout')(this._fetchStories.bind(this,m),100);},_fetchStories:function(l){var m=[],n,o=function(p){clearTimeout(n);l.forEach(function(q){c('CSS').conditionClass(q,'tickerStoryFetching',p);});};l=l.filter(function(p){if(p.id in this._fetchedStories)return false;this._fetchedStories[p.id]=true;var q=this._getStoryDialogParams(p);if(!q)return false;q.uniq_id=p.getAttribute('id');q.referrer=this._tickerSource;m.push(q);return true;},this);if(!m.length)return;n=this._setTimeout(o.bind(null,true),500);new (c('AsyncRequest'))('/ajax/feed/ticker/multi_story').setInitialHandler(this._handleDialogResponse.bind(this,m)).setFinallyHandler(o.bind(null,false)).setErrorHandler(c('emptyFunction')).setData({stories:m}).setAllowCrossPageTransition(this._tickerInSidebarMode).send();},_handleDialogResponse:function(l,m){if(m&&m.resource_map){var n=[];for(var o in m.resource_map){var p=m.resource_map[o];if(p.type==='css'&&!p.permanent)n.push(o);}if(n.length>0)for(var q=0;q<l.length;q++)this._storyDialogResources[l[q].uniq_id]=n;}},_tickerDeClicker:function(event){var l=event.getTarget(),m=c('Parent').byTag(l,'a'),n=this._getStoryFromNode(l);if(n&&m&&c('CSS').hasClass(n,'tickerStoryClickable')&&!c('CSS').hasClass(m,'tickerStoryAllowClick')&&!this._storyIsHidden(n))m.setAttribute('rel','ignore');var o=event.button==2,p=event.type==='keydown',q=n&&this._getActionButtonFromStory(n);if(!o&&q&&!p)this._setClickedStory(n);},_handleMouseup:function(event){this._clearClickedStory();},_setClickedStory:function(l){this._clearClickedStory();c('CSS').addClass(l,'tickerStoryClicked');this._clickedStory=l;},_clearClickedStory:function(){if(this._clickedStory){c('CSS').removeClass(this._clickedStory,'tickerStoryClicked');this._clickedStory=null;}},_initInfiniteScrollListener:function(){var l=this._getInsertedStories();if(this._storiesWithActions)for(var m=0;m<l.length;m++){var n=l[m];if(c('CSS').hasClass(n,'tickerStoryWithButton'))this._storiesWithActions[n.getAttribute('data-story-key')]=n;}var o=Math.max(0,l.length-this._autoloadStoryIndex);this._infiniteScrollStory=l[o];this._checkInfiniteScroll();},_checkInfiniteScroll:function(){if(this._infiniteScrollStory){var l=c('Vector').getElementPosition(this._infiniteScrollStory).y,m=c('Vector').getElementPosition(this._container).y+c('Vector').getElementDimensions(this._container).y;if(l<m){var n=c('DOM').scry(this._root,'.tickerMorePager a')[0];if(n){var o=c('Parent').byClass(n,'stat_elem')||n;new (c('AsyncRequest'))(n.getAttribute('ajaxify')).setReadOnly(true).setRelativeTo(n).setStatusElement(o).setAllowCrossPageTransition(true).send();}this._infiniteScrollStory=null;this._autoloadStoryIndex=5;}}},_setFixed:function(l){if(!this._selectedStory)return;var m=this._getStoryDialog(this._selectedStory);if(m){m.setFixed&&m.setFixed(l);m.updatePosition();}},_setTimeout:function(l,m){return c('setTimeout')(l,m,!this._tickerInSidebarMode);},_scrollDialogToBottom:function(){var l=this._dialog&&this._dialog.getContent(),m=l&&c('DOM').scry(l,'.uiScrollableAreaWrap')[0],n=m&&c('ScrollableArea').getInstance(m);n&&n.scrollToBottom();},_redrawFlyout:function(l,m){if(this._hasUFIUpdated)return;var n=this._dialog;if(n&&n.isShown()&&c('containsNode')(n.getContent(),m.form)){this._hasUFIUpdated=true;this._updateDialogPosition();}},_openDialog:function(l){if(!this._tickerInSidebarMode)c('CSS').addClass(l.getRoot(),'tickerStoryOverlayOnTop');this._hasUFIUpdated=false;var m=c('DOMVector').getScrollPosition();this._dialog=l.show();window.scrollTo(m.x,m.y);this._updateDialogPosition();this._writeSwfFrame(l);c('setTimeout')(this._initCommentFocusListener.bind(this),0);c('setTimeout')(this._initContentResizeListener.bind(this),0);this._stupidIE7VideoResizeHack(l);},_stupidIE7VideoResizeHack:function(l){if(c('UserAgent_DEPRECATED').ie()===7){var m=c('DOM').scry(l.getContent(),'.uiVideoThumb .img');m.forEach(function(n){c('Style').set(n,'width','');});}},_updateDialogPosition:function(){var l=this._tickerInSidebarMode||!!c('Parent').byClass(this._root,'fixed_elem');this._dialog.setFixed&&this._dialog.setFixed(l);this._adjustFlyoutContentHeight();this._dialog.updatePosition();},_writeSwfFrame:function(l){var m=this._dialog&&this._dialog.getContent(),n=c('DOM').scry(m,'.swfObject')[0];if(!n)return;var o=n.getAttribute('data-swfid');if(o&&window[o]){var p=window[o];p.write(n);}},_initCommentFocusListener:function(){var l=this._dialog&&this._dialog.getContent(),m=l&&c('DOM').scry(l,'.tickerDialogFooter textarea')[0];if(!m)return;this._listeners.inputFocus=c('Event').listen(m,'focus',this._scrollDialogToBottom.bind(this));},_cleanupInputFocusListener:function(){if(this._listeners.inputFocus){this._listeners.inputFocus.remove();this._listeners.inputFocus=null;}},_initContentResizeListener:function(){var l=this._dialog&&this._dialog.getContent();if(!l)return;this._listeners.contentResize=c('Event').listen(l,'click',function(){c('setTimeout')(this._dialog.updatePosition.bind(this._dialog),0);}.bind(this));},_cleanupContentResizeListener:function(){if(this._listeners.contentResize){this._listeners.contentResize.remove();this._listeners.contentResize=null;}},_adjustFlyoutContentHeight:function(){var l=this._dialog&&this._dialog.getContent(),m=l&&c('DOM').scry(l,'.uiScrollableAreaWrap')[0];if(!m)return;var n=c('Vector').getElementDimensions(m),o=c('Vector').getElementPosition(m),p=c('DOM').scry(m,'.uiUfi .uiUfiComment'),q=c('DOM').scry(m,".UFILikeSentence")[0],r=this.FLYOUT_MAX_HEIGHT;if(q){var s=c('Vector').getElementPosition(q).y||0;r=Math.max(r,this.FLYOUT_TARGET_HEIGHT_OFFSET+m.scrollTop+s+q.offsetHeight-o.y);}var t=c('Vector').getViewportDimensions().y-this.FLYOUT_VIEWPORT_PADDING;r=Math.min(r,t);var u=r-this.FLYOUT_TARGET_HEIGHT_OFFSET;for(var v=0;v<p.length;v++){var w=p[v],x=c('Vector').getElementPosition(w),y=x.y-o.y;if(Math.abs(y-u)<=this.FLYOUT_OFFSET_THRESHOLD){u=y+this.FLYOUT_COMMENT_OFFSET;break;}}if(n.y>=u){c('Style').set(m,'height',u+'px');c('Style').set(m,'max-height',null);}else{c('Style').set(m,'max-height',r+'px');c('Style').set(m,'height',null);}},_initObjectIDs:function(){var l=this._getAllStories();for(var m=l.length-1;m>=0;m--){var n=l[m].getAttribute('data-story-key');if(n){this._objectIDs[n]=true;this._lastKStoriesInsert(l[m]);var o=l[m].getAttribute("data-dedupe-key");if(o)this._dedupeKeys[o]=true;}}},_handleChatOpened:function(){this._deactivateStory();},_handleChannelConnection:function(){this._checkChannelConnection();},getNewest:function(){return this._newest;}});f.exports=k;},null);