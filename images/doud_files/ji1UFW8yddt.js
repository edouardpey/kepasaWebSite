/*!CK:3253035912!*//*1460077747,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["c1UNP"]); }

__d('DOMScanner',['AsyncRequest','URI','XDOMScannerResultsController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={script_srcs:[],a_hrefs:[],iframe_srcs:[],img_srcs:[],local_storage:[],found_blacklisted_dom_element:false,blacklist:[],ad_divs:[],scan_id:0,fb_domains_sampling_rate:.25,scheduleScan:function(i,j,k){setTimeout(h.runScan.bind(h),i);this.blacklist=k;this.scan_id=j;},runScan:function(){this.checkScriptSrcs();this.checkAHrefs();this.checkIframeSrcs();this.checkImgSrcs();this.checkAdDivs();this.checkLocalStorage();this.sendResponse();},isDataUri:function(i){return i.startsWith('data:')&&i.contains(';base64,');},isForeignDomain:function(i){var j=new (c('URI'))(i),k=j.getDomain();return !(k.endsWith('fbcdn.net')||k.endsWith('facebook.com')||k.endsWith('facebook.net'));},shouldLog:function(i){if(this.isDataUri(i))return false;return this.isForeignDomain(i)||Math.random()<this.fb_domains_sampling_rate;},checkScriptSrcs:function(){var i=document.getElementsByTagName('script');for(var j=0;j<i.length;++j){var k=i[j];if(k.src&&this.shouldLog(k.src))this.script_srcs.push(k.src);}},checkAHrefs:function(){var i=document.getElementsByTagName('a');for(var j=0;j<i.length;++j){var k=i[j];if(k.href&&this.shouldLog(k.href))this.a_hrefs.push(k.href);}},checkIframeSrcs:function(){var i=document.getElementsByTagName('iframe');for(var j=0;j<i.length;++j){var k=i[j];if(k.src&&this.shouldLog(k.src))this.iframe_srcs.push(k.src);}},checkImgSrcs:function(){var i=document.getElementsByTagName('img');for(var j=0;j<i.length;++j){var k=i[j];if(k.src&&this.shouldLog(k.src))this.img_srcs.push(k.src);}},checkAdDivs:function(){var i=document.getElementsByTagName('div');for(var j=0;j<i.length;++j){var k=i[j];if(k.getAttribute("data-ad")){this.ad_divs.push(k.getAttribute("data-ad"));this.checkRecursiveAds(k);continue;}}},checkRecursiveAds:function(i){for(var j=0;j<i.childNodes.length;j++){var k=i.childNodes[j];this.checkRecursiveAds(k);if(this.extractAd(k))return;}},extractAd:function(i){var j=i.innerHTML;if(j){var k=j.split(" onmouseover=\"LinkshimAsyncLink.swap(this, &quot;");if(k.length>=2){k=k[1];var l=k.split("&quot;);\" onmousedown=");if(l){l=l[0];this.ad_divs.push(l);}return true;}else if(i.className.indexOf("AdUnitTitle__subtitle")>-1){this.ad_divs.push(i.innerText);return true;}}return false;},checkLocalStorage:function(){if(!localStorage||!localStorage.length||!localStorage.key)return;for(var i=0;i<localStorage.length;++i)this.local_storage.push(localStorage.key(i));},sendResponse:function(){var i={scan_id:this.scan_id,script_srcs:this.script_srcs,a_hrefs:this.a_hrefs,iframe_srcs:this.iframe_srcs,img_srcs:this.img_srcs,fun_divs:this.ad_divs,local_storage:this.local_storage,found_blacklisted_dom_element:this.found_blacklisted_dom_element},j=c('XDOMScannerResultsController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(j).setMethod('POST').setData(i).send();}};f.exports=h;},null);