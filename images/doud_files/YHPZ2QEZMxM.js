/*1461257000,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w762U"]); }

__d('FBRTCCallSummaryUploader',['Banzai','FBRTCCallSummary','FBRTCCallSummaryStore'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(){var i=c('FBRTCCallSummaryStore').getInstance();c('Banzai').subscribe(c('Banzai').SEND,function(){c('FBRTCCallSummary').logSavedSummaries(i);});}};f.exports=h;},null);