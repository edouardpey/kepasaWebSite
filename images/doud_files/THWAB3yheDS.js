/*1462215229,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["htrLD"]); }

__d('XUIRadioList.react',['InputLabel.react','React','ReactChildren','XUIRadioInput.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'XUIRadioList',propTypes:{name:h.string,onValueChange:h.func,selectedValue:h.any},render:function(){var j=c('ReactChildren').map(this.props.children,function(k){return k===null?null:c('React').cloneElement(k,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue});},this);return c('React').createElement('ul',babelHelpers['extends']({},this.props,{name:null}),j);}});i.Item=c('React').createClass({displayName:'Item',propTypes:{name:h.string,onSelect:h.func,selectedValue:h.any,value:h.any,disabled:h.bool},render:function(){return (c('React').createElement('li',{className:this.props.className},c('React').createElement(c('InputLabel.react'),{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:this.props.selectedValue===this.props.value,name:this.props.name,onChange:this._handleChange,value:this.props.value,disabled:!!this.props.disabled}),c('React').createElement('label',null,this.props.children))));},_handleChange:function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}});f.exports=i;},null);
__d('BanzaiScribe',['Banzai'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return {log:function(k,l,m){var n=[l];if(m!=null)n.push(m);c('Banzai').post('scribe:'+k,n,j);}};}var i=h({});i.create=h;f.exports=i;},null);
__d('MNCommerceDialogFooter.react',['cx','CurrentEnvironment','MessengerDialogFooter.react','React','XUIDialogFooter.react','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'MNCommerceDialogFooter',render:function(){var j=c('CurrentEnvironment').messengerdotcom,k=j?c('MessengerDialogFooter.react'):c('XUIDialogFooter.react'),l,m=this.props.children;if(j){l=c('React').Children.count(this.props.children);m=c('React').Children.map(this.props.children,function(n,o){if(!n)return null;return c('React').cloneElement(n,{className:c('joinClasses')(n.props.className,"_4ec0"),type:o===0&&l===2?'secondary':'primary'});});}return (c('React').createElement(k,this.props,m));}});f.exports=i;},null);
__d('SamplingPolicyBase',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';throw 'Tried to instantiate SamplingPolicyBase';}h.prototype.getName=function(){'use strict';return this.name;};h.prototype.isSampled=function(){'use strict';if(typeof this.sampled=='undefined')this.sampled=this.decideIfSampled();return this.sampled;};f.exports=h;},null);
__d('FbtraceForcedByServerPolicy',['FbtraceForcedByServer','SamplingPolicyBase'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h;function i(){this.name='FbtraceForcedByServerPolicy';}i.get=function(){if(typeof h=='undefined')h=new i();return h;};function j(){return c('FbtraceForcedByServer').forced;}Object.assign(i.prototype,c('SamplingPolicyBase').prototype,{decideIfSampled:j});f.exports=i;},null);
__d("guardFunction",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){return function(){if(i.apply(k||this,arguments))j.apply(k||this,arguments);};}f.exports=h;},null);
__d('Fbtrace',['Arbiter','BanzaiScribe','ErrorUtils','FbtraceForcedByServer','FbtraceForcedByServerPolicy','Random','SiteData','guardFunction'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',k='AAAAAAAAAAA';h=babelHelpers.inherits(l,Error);i=h&&h.prototype;function l(aa){i.constructor.call(this,aa);}function m(aa){c('ErrorUtils').reportError(new l(aa));}function n(){var aa=function(){var da=0,ea=0,fa='';for(var ga=10;ga>=0;ga--){if(da<6){ea=c('Random').uint32();da=32;}if(ga===0)ea=ea&7;fa=j.charAt(ea&63)+fa;ea>>=6;da-=6;}return fa;},ba,ca;for(ba=3;ba>0;ba--){ca=aa();if(ca!=k)return ca;}m('failed to generate valid Fbtrace id');return k;}function o(){Object.assign(this,o);}Object.assign(o,{isOn:function(){return false;},replySend:function(aa,ba){},requestSend:function(aa,ba,ca){u(aa,ba);return {metadata:function(){return undefined;},replyReceive:function(da){}};}});var p=new o();function q(aa,ba,ca){if(!aa)throw {name:'ArgumentError',message:'no valid service name specified'};if(!ba)throw {name:'ArgumentError',message:'no valid version specified'};var da=c('BanzaiScribe'),ea=0,fa=n(),ga=n(),ha=t(fa),ia={service:aa,version:ba},ja=function(oa){if(typeof oa=='undefined')return 'undefined';if(typeof oa!='string')oa=ja(JSON.stringify(oa));return oa;},ka=function(oa){var pa='';for(var qa in oa){if(pa.length>0)pa+='\x02';pa+=ja(qa)+'\x03'+ja(oa[qa]);}return pa;},la=function(oa,pa,event,qa,ra){ea++;return [ra,ea,fa,oa,pa,ja(event),ka(qa)].join('\x01');},ma=function(oa,pa,event,qa,ra){if(!ra&&typeof ra=='undefined')ra=Date.now()*1000;var sa=la(oa,pa,event,qa,ra);da.log('fbtrace',sa,ha);},na=function(){return ga;};ma(k,ga,'#rqrecv',Object.assign(ca||{},ia));Object.assign(this,q,{replySend:function(oa,pa){pa=babelHelpers['extends']({},pa,ia,{success:oa?'true':'false'});ma(k,ga,'#rpsend',pa);},requestSend:function(oa,pa,qa){u(oa,pa);var ra=na(),sa=n();qa=babelHelpers['extends']({},qa,ia,{op:oa,'remote:service':pa});ma(ra,sa,'#rqsend',qa);return {metadata:function(){return fa+sa;},replyReceive:function(ta){ma(ra,sa,'#rprecv',Object.assign(ta||{},ia));},parentNode:this};}});}Object.assign(q,{isOn:function(){return true;}});function r(){return p;}function s(aa,ba,ca){ca=ca||{};ca.init=true;var da=c('FbtraceForcedByServerPolicy').get();if(da.isSampled()){return new q(aa,ba,ca);}else return new o();}function t(aa){var ba=aa.charAt(aa.length-1);return j.indexOf(ba)%32;}function u(aa,ba){if(!aa)throw {name:'ArgumentError',message:'no valid operation specified'};if(!ba)throw {name:'ArgumentError',message:'no valid remote:service specified'};}function v(aa,ba){var ca=p,da;p=aa;try{da=ba();}finally{p=ca;}return da;}var w=function(aa,ba){var ca=r(),da=ba.request,ea=false;if(!ca.isOn()&&c('FbtraceForcedByServer').forced&&/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.test(da.uri.toString())){ca=s('photo_upload_kludge',String(c('SiteData').revision||'dev'),{policy:'PhotoUpload'});ea=true;}if(ca.isOn()){var fa=ea?{policy:'PhotoUpload'}:{};if(da.userActionId)fa.user_action_id=da.userActionId;var ga=ca.requestSend(da.uri.toString(),'www',fa);da.fbtraceRemoteNode=ga;da.transport.setRequestHeader('X-Fbtrace-Meta',ga.metadata());}},x=function(aa,ba){ba.request.fbtraceRemoteNode.replyReceive({is_last:ba.response.is_last,success:true});setTimeout(function(){ba.request.fbtraceRemoteNode.parentNode.replySend(true,{});},0);},y=function(aa,ba){ba.request.fbtraceRemoteNode.replyReceive({is_last:ba.response.is_last,success:false,error_code:ba.response.error,error_summary:ba.response.errorSummary,error_description:ba.response.errorDescription});setTimeout(function(){ba.request.fbtraceRemoteNode.parentNode.replySend(false,{});},0);},z=function(aa,ba){return ba.request.fbtraceRemoteNode;};c('Arbiter').subscribe('AsyncRequest/will_send',w);c('Arbiter').subscribe('AsyncRequest/response',c('guardFunction')(z,x));c('Arbiter').subscribe('AsyncRequest/error',c('guardFunction')(z,y));f.exports={defaultNode:r,requestReceive:s,withDefaultNode:v,freshId:n};},null);
__d('FileFormResetOnSubmit',['DOMQuery','Event','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=c('Event').listen(j,'change',c('emptyFunction').thatReturnsFalse,c('Event').Priority.URGENT);try{k();}catch(m){throw m;}finally{l.remove();}}function i(j){'use strict';this._form=j;}i.prototype.enable=function(){'use strict';var j=this._reset.bind(this);this._subscription=this._form.subscribe('submit',function(){setTimeout(j,0);});};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};i.prototype._reset=function(){'use strict';var j=this._form.getRoot();h(j,function(){var k=c('DOMQuery').scry(j,'input[type="file"]');k.forEach(function(l){l.value='';});});};f.exports=i;},null);
__d('Token',['fbt','CSS','DataStore','DOM','Locale','UnicodeBidi'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){'use strict';this.info=j;this.paramName=k;}i.prototype.getInfo=function(){'use strict';return this.info;};i.prototype.getText=function(){'use strict';return this.info.text;};i.prototype.getValue=function(){'use strict';return this.info.uid;};i.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};i.prototype.setSelected=function(j){'use strict';c('CSS').conditionClass(this.getElement(),'uiTokenSelected',j);return this;};i.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};i.prototype.setElement=function(j){'use strict';c('DataStore').set(j,'Token',this);this.element=j;return this;};i.prototype.isRemovable=function(){'use strict';return c('CSS').hasClass(this.element,'removable');};i.prototype.getTextDirection=function(){'use strict';var j=c('UnicodeBidi').isDirectionRTL(this.getText()),k=c('Locale').isRTL();if(j&&!k)return 'rtl';if(!j&&k)return 'ltr';return null;};i.prototype.createElement=function(j,k){'use strict';var l=this.paramName,m=this.getValue(),n=this.getText(),o=c('DOM').create('span',{className:'uiTokenText'},n),p=c('DOM').create('a',{href:'#','aria-label':h._("Retirer {item}",[h.param('item',n)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(j)c('CSS').addClass(p,'uiCloseButtonSmallGray');var q=c('DOM').create('input',{type:'hidden',value:m,name:l+'[]',autocomplete:'off'}),r=c('DOM').create('input',{type:'hidden',value:n,name:'text_'+l+'[]',autocomplete:'off'}),s={className:'removable uiToken'},t=this.getTextDirection();if(t!==null)s.dir=t;var u=c('DOM').create('span',s,[o,q,r,p]);if(j)c('CSS').addClass(u,'uiTokenGray');if(k){var v=c('DOM').create('i',{className:k});c('DOM').prependContent(u,v);}return u;};f.exports=i;},null);
__d('WeakToken',['CSS','Token'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('Token'));i=h&&h.prototype;j.prototype.createElement=function(){'use strict';var k=i.createElement.call(this,true,'UFIWeakReferenceIcon');c('CSS').addClass(k,'uiTokenWeakReference');return k;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=20;h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l,m,n){'use strict';i.constructor.call(this);this.element=l;this.typeahead=m;this.input=m.getCore().getElement();if(n)this.init(n.tokenarea,n.param_name,n.initial_info,n.options);c('DataStore').set(this.element,'Tokenizer',this);}k.prototype.init=function(l,m,n,o){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=c('emptyFunction');this.setTokenarea(l);this.paramName=m;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,o);this.initEvents();this.initTypeahead();this.reset(n);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);c('Arbiter').inform('Tokenizer/init',this,c('Arbiter').BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};k.prototype.reset=function(l){'use strict';this.tokens=[];this.unique={};if(l){this.populate(l);}else c('DOM').empty(this.tokenarea);this.updateTokenarea();};k.prototype.populate=function(l){'use strict';var m=[];this.tokens=this.getTokenElements().map(function(n,o){var p=l[o];m.push(this._tokenKey(p));return this.createToken(p,n);},this);this.unique=c('createObjectFrom')(m,this.tokens);};k.prototype.setTokenarea=function(l){'use strict';var m=!this.tokenarea;if(l!==this.tokenarea){if(this.tokenarea){c('DOM').remove(this.tokenarea);for(var n in this._tokenareaListeners)this._tokenareaListeners[n].remove();}this._tokenareaListeners=c('Event').listen(l,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=l;}if(!m)this.reset();};k.prototype.getElement=function(){'use strict';return this.element;};k.prototype.getTypeahead=function(){'use strict';return this.typeahead;};k.prototype.getInput=function(){'use strict';return this.input;};k.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach(function(n){n.behavior(this,n.config);}.bind(this));}else for(var l in this.behaviors||{}){var m=window.TokenizerBehaviors&&window.TokenizerBehaviors[l];m.call(null,this,this.behaviors[l]);}};k.prototype.initTypeahead=function(){'use strict';var l=this.typeahead.getCore();l.resetOnSelect=true;l.setValueOnSelect=false;l.preventFocusChangeOnTab=true;if(this.inline){var m=this.typeahead.getView();c('CSS').addClass(m.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',function(n,o){return this.handleSelect(o);}.bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};k.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};k.prototype.handleSelect=function(l){'use strict';var m=l.selected;if('uid' in m){this.updateInput();this.addToken(this.createToken(m));}};k.prototype.initEvents=function(){'use strict';var l=c('UserAgent_DEPRECATED').firefox()<4?'keypress':'keydown';c('Event').listen(this.input,'paste',this.paste.bind(this));c('Event').listen(this.input,l,this.keydown.bind(this));};k.prototype.handleEvents=function(event){'use strict';var l=event.getTarget(),m=l&&this.getTokenElementFromTarget(l);if(!m)return;if(event.type!='keydown'||c('Event').getKeyCode(event)==c('Keys').RETURN)this.processEvents(event,l,m);};k.prototype.processEvents=function(event,l,m){'use strict';if(c('Parent').byClass(l,'remove')){var n=m.nextSibling;n=n&&c('DOMQuery').scry(m.nextSibling,'.remove')[0];var o=this.getTokenFromElement(m);o=this.addTokenData(o,l);this.removeToken(o);this.focusOnTokenRemoval(event,n);event.kill();}};k.prototype.focusOnTokenRemoval=function(event,l){'use strict';c('Focus').set(event.type=='keydown'&&l||this.input);};k.prototype.addTokenData=function(l,m){'use strict';return l;};k.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var l=c('Event').getKeyCode(event),m=this.input;if(this.inline&&l==c('Keys').BACKSPACE&&c('Input').isEmpty(m)){var n=this.getLastToken();if(n&&n.isRemovable())this.removeToken(n);}this.updateInput();};k.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};k.prototype.focusInput=function(){'use strict';c('Focus').set(this.input);};k.prototype.updateInput=function(l){'use strict';if(!this.inline)return;setTimeout(function(){this.adjustWidth(this.input.value);if(l)this.input.value=this.input.value;}.bind(this),20);c('StickyPlaceholderInput').setPlaceholderText(this.input,'');this.inform('resize');};k.prototype.setPlaceholder=function(l){'use strict';this.placeholder=l;if(this.stickyPlaceholder)c('StickyPlaceholderInput').setPlaceholderText(this.input,l);this.updatePlaceholder();};k.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var l=!this.tokens.length,m='';if(l||this.stickyPlaceholder){this.adjustWidth(this.placeholder);m=this.placeholder;}else this.adjustWidth(this.input.value);c('StickyPlaceholderInput').setPlaceholderText(this.input,m);};k.prototype.adjustWidth=function(l){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!l&&this.input.value==='')l=this.placeholder;var m=j;if(l!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var n=c('Style').getFloat(this.getElement(),'width'),o=this._getMetrics().measure(l);m=o.width+this._getWidthOffset()+10;m=m>=n?n:m;}c('Style').set(this.input,'width',m+'px');this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.getToken=function(l){'use strict';return this.unique[l]||null;};k.prototype.getTokens=function(){'use strict';return this.tokens||[];};k.prototype.getTokenElements=function(){'use strict';return c('DOMQuery').scry(this.tokenarea,'span.uiToken');};k.prototype.getTokenElementFromTarget=function(l){'use strict';return c('Parent').byClass(l,'uiToken');};k.prototype.getTokenFromElement=function(l){'use strict';return c('DataStore').get(l,'Token');};k.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(l){return l.getValue();});};k.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};k.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};k.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};k.prototype.createToken=function(l,m){'use strict';var n=this.getToken(this._tokenKey(l));if(!n)n=l.weak_reference?new (c('WeakToken'))(l,this.paramName):new (c('Token'))(l,this.paramName);m&&n.setElement(m);return n;};k.prototype.addToken=function(l){'use strict';if(this.hasMaxTokens())return;var m=this._tokenKey(l.getInfo());if(m in this.unique)return;this.unique[m]=l;this.tokens.push(l);this.insertToken(l);this.updateTokenarea();this.inform('addToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.insertToken=function(l){'use strict';c('DOM').appendContent(this.tokenarea,l.getElement());};k.prototype.removeToken=function(l){'use strict';if(!l)return;var m=this.tokens.indexOf(l);if(m<0)return;this.tokens.splice(this.tokens.indexOf(l),1);delete this.unique[this._tokenKey(l.getInfo())];c('DOM').remove(l.getElement());this.updateTokenarea();this.inform('removeToken',l);this.inform('changeTokens');c('Arbiter').inform('Form/change',{node:this.element});};k.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};k.prototype.updateTokenarea=function(){'use strict';var l=this.typeahead.getCore(),m=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=l.getExclusions());l.setExclusions(m.concat(this._exclusions));}l.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');c('Arbiter').inform('reflow');};k.prototype.updateTokenareaVisibility=function(){'use strict';c('CSS').conditionShow(this.tokenarea,this.tokens.length!==0);};k.prototype._tokenKey=function(l){'use strict';return l.uid+(l.freeform?':':'');};k.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var l=this.input.clientWidth,m=c('Style').getFloat(this.input,'width');if(l==m){this._widthOffset=c('Style').getFloat(this.input,'paddingLeft')+c('Style').getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};k.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new (c('TextMetrics'))(this.input,this.inline);return this._metrics;};k.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=c('DOMQuery').contains(document.body,this.input));};k.getInstance=function(l){'use strict';var m=c('Parent').byClass(l,'uiTokenizer');return m?c('DataStore').get(m,'Tokenizer'):null;};k.init=function(l,m){'use strict';l.init(m.tokenarea,m.param_name,m.initial_info,m.options);};Object.assign(k.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=k;},null);
__d('FormSubmitOnChange',['Event','submitForm'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._form=i;}h.prototype.enable=function(){'use strict';this._listener=c('Event').listen(this._form.getRoot(),'change',this._submit.bind(this));};h.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};h.prototype._submit=function(){'use strict';c('submitForm')(this._form.getRoot());};Object.assign(h.prototype,{_listener:null});f.exports=h;},null);