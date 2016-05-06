/*1461641183,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AaXt9"]); }

__d('legacy:Style',['Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.Style=c('Style');},3);
__d('PhotoViewerInitPagelet',['ge','DOM','PhotoSnowlift','PhotoTags','PhotoTagger','PhotoTagApproval'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';c('PhotoSnowlift').attachTagger(i.tagging,i.tokenizer);var j=c('PhotoSnowlift').getInstance(),k=j.getRoot();new (c('PhotoTags'))([c('ge')('fbPhotoSnowliftAuthorName'),c('DOM').find(k,'span.fbPhotoTagList')],c('ge')('fbPhotoSnowliftTagBoxes'),i.version);if(i.setupPhotoTagger){var l=new (c('PhotoTagger'))(j);l.initSnowlift(i.tagging,i.tokenizer,i.userId);l.setQueueName(i.queueName);}new (c('PhotoTagApproval'))(j);}f.exports=h;},null);