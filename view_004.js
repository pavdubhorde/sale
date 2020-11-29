"use strict";define("widget-backCall-view",["jquery","_","ulib/util/time","aDialog","goals/handlers","text!/widgets/backCall/html/templateDialog.html","css!/css/require/widgets/backCallView.css","css!font-awesome-css"],function(e,t,o,a,n){return{timeOut:0,waitingForNextSend:!1,open:function(e){var t=this,o=document.getElementById(e);o&&this.initI18n().then(function(){t.init(o)})},initI18n:function(){var e=this;return new Promise(function(t){window.cache.backCall&&window.cache.backCall.i18n?t():window.require(["i18n-view"],function(o){e.i18n=o("widgets.backCall"),t()})})},i18n:function(e){return window.cache.backCall&&window.cache.backCall.i18n[e]},init:function(o){var s=this,i=(o.id,e(o)),r={},l=s.i18n;if(s.translate={widgetName:l("name"),phone:l("phone"),username:l("username"),today:l("today"),tomorrow:l("tomorrow"),timeZone:l("Time zone"),seconds:l("seconds"),sending:l("sending"),errorsendtimeoutversion2:l("error send timeout version2"),errorsendtimeoutversion3:l("error send timeout version3"),requestacallfromwebsite:l("request a call from website"),selecttoreceiveacall:l("select to receive a call"),errornotcorrectfillinput:l("error not correct fill input"),successsending:l("message succesfully"),successsendingwithouttime:l("we callback later"),insertphone:l("insert phone"),usernamename:l("username name"),insertusername:l("insert username"),insertusernameinput:l("insert username input"),errorsendmessage:l("error send message"),errorsendmessageconstructormode:l("error send message constructor mode"),errorsendnotnumber:l("error send not number"),errorsendtimeout:l("error send timeout"),phonemask:l("phone mask placeholder"),timeDescription:l("time description call"),order:l("Order"),receivecall:l("like to receive a call"),useragreementlabel:l("user agreement label")},s.timelist=[{caption:l("soon"),type:"soon",show:!0,today:!0},{caption:l("today morning"),type:"morning",show:!0,today:!0},{caption:l("today day"),type:"day",show:!0,today:!0},{caption:l("today evening"),type:"evening",show:!0,today:!0},{caption:l("tomorrow morning"),type:"morning",show:!0,today:!1},{caption:l("tomorrow day"),type:"day",show:!0,today:!1},{caption:l("tomorrow evening"),type:"evening",show:!0,today:!1}],0==i.length)return!1;var c=n.getHandlerFunction(i.find(".ul-call-wrapper").data("goalsData")),d=function(){e(document).trigger("backCallLoaded")},m=function(){window.top.$(window.top.document).off("mobileCartStatusChanged.mobileBackCall").on("mobileCartStatusChanged.mobileBackCall",function(t,o){o.isEmpty?(i.addClass("special-position-bottom"),"right"===i.attr("data-party")&&e("#upbutton-container").css("bottom",160)):(i.removeClass("special-position-bottom"),"right"===i.attr("data-party")&&e("#upbutton-container").css("bottom",110))})};window.previewMode&&window.top.$(window.top.document).off("changePreviewDevise.backCall").on("changePreviewDevise.backCall",function(t,o){return i.length?(i.removeClass("special-position-bottom"),s._isMobile()&&!i.hasClass("show-mobile")?i.hide():i.show(),s._isMobile()&&"right"===i.attr("data-party")&&i.hasClass("show-mobile")&&i.children().length?e("#upbutton-container").css("bottom",110):e("#upbutton-container").css("bottom",""),void("desktop"!==o.mode&&d())):void window.top.$(window.top.document).off("changePreviewDevise.backCall")}),s._isMobile()&&!i.hasClass("show-mobile")&&i.hide(),window.previewMode||window.constructorMode||(s._isMobile()&&"right"===i.attr("data-party")&&i.hasClass("show-mobile")&&i.children().length?e("#upbutton-container").css("bottom",110):e("#upbutton-container").css("bottom","")),s.timeRange={soon:l("soon"),morning:l("morning"),day:l("day"),evening:l("evening")},r.showTime=i.data("showtime"),r.showUsername=i.data("showusername"),i.animate({opacity:1},100,function(){(s._isMobile()||window.previewMode)&&(m(),d())}),e(".ul-chart",i).on("click.sendSMS",function(){r.showTime=i.data("showtime"),r.showUsername=i.data("showusername");var o=i.data("useragreement");return"string"==typeof o&&(o=JSON.parse(decodeURIComponent(o))),o&&(r.userAgreement=o),i.hasClass("red")?r.color="ul-w-backCall-red":i.hasClass("purple")?r.color="ul-w-backCall-purple":i.hasClass("blue")?r.color="ul-w-backCall-blue":i.hasClass("turquoise")?r.color="ul-w-backCall-turquoise":r.color="ul-w-backCall-green",r.isConstructor=window.constructorMode,t.extend(r,s.getTime()),a.opened?!1:void a.open({templateData:{data:r,translate:s.translate,timelist:s.timelist},templateUrl:"text!/widgets/backCall/html/templateDialog.html",afterOpen:function(t){window.constructorMode&&(a.noClose=!0,e(document).trigger("openAdialogBackCall")),e(document).trigger("openButtonOrderForm"),s.eventDialog(t,r,i,c),i.hide(),s.waitingForNextSend&&a.msg.show()},beforeClose:function(t){window.constructorMode&&(a.noClose=null,e(document).trigger("closeAdialogBackCall")),e(document).trigger("closeButtonOrderForm"),s.destroyEvent(t),i.show()}})})},hideDialogConstr:function(){a.opened&&a.hide()},eventDialog:function(o,a,n,s){var i=this,r=!(window.constructorMode||window.constructorPreviewMode||window.previewMode);r?(i.repositionWidget(n),t.extend(a,i.checkPass(a,o)),i.timeOut>0&&i.showError(o,i.translate.errorsendtimeoutversion3),o.on("click.viewBackCall",".js-w-backCall-overlay.active",function(){return i.timeOut>0?!1:void e(this).removeClass("active").removeAttr("data-layout")}).on("keydown.viewBackCall",".js-phone #inputNumber",function(t){var n=t.keyCode,s=!0;s=-1==e(this).val().indexOf("+");var r=i.checkValidInput(t,n,s);return 8==n||r?void(8!=n?(i.timeOut>0&&i.showError(o,i.translate.errorsendtimeoutversion3),0==i.timeOut&&(""!=e(this).val()&&e(".js-phone",o).removeClass("error"),(e(this).val().length+1==1||""==e(this).val()&&a.showTime&&!e(".js-time select",o).find(":selected").data("time"))&&e(".js-phone",o).addClass("error"),(e(this).val().length+1>0||""!=e(this).val()&&a.showTime&&e(".js-time select",o).find(":selected").data("time"))&&0==i.timeOut?e(".js-phone",o).removeClass("error"):e(".js-phone",o).addClass("error"))):""!=e(this).val()&&e(".js-time select",o).find(":selected").data("time")&&a.showTime&&e(".js-phone",o).removeClass("error")):!1}),e(".js-time",o).on("change.formBackCall",function(){e(".js-time",o).removeClass("error")}),e(".js-formBackCall",o).on("submit.formBackCall",function(r){return r.stopPropagation(),r.preventDefault(),e(".error",o).removeClass("error"),e(".js-phone input",o).val().length?!e(".js-time select",o).find(":selected").data("time")&&a.showTime?(e(".js-time",o).addClass("error"),e(".js-phone input",o).val().length?!1:(e(".js-phone",o).addClass("error"),!1)):void(e(".js-userAgreement__checkbox",o).length&&!e(".js-userAgreement__checkbox",o).prop("checked")||(e(".js-error-send",o).hide(),e(".js-error-timeout",o).hide(),e(".js-error-not-number",o).hide(),t.extend(a,i.getData(o,n)),i.sendSMS(a,o,s))):(e(".js-phone",o).addClass("error"),!e(".js-time select",o).find(":selected").data("time")&&a.showTime?(e(".js-time",o).addClass("error"),!1):!1)})):(e(document).on("changeoption.viewBackCall",function(t,n){e(".js-callBtn",o).removeClass(a.color),a.color="ul-w-backCall-".concat(n.color),e(".js-callBtn",o).addClass(a.color)}),o.on("click.viewBackCall",".js-w-backCall-overlay.active",function(){return i.timeOut>0?!1:(e(this).removeClass("active").removeAttr("data-layout"),void e(this).removeClass("preview-mode"))}),e(".js-formBackCall",o).on("submit.formBackCall",function(t){t.preventDefault(),(window.previewMode||window.constructorMode)&&e(".js-w-backCall-overlay",o).addClass("preview-mode"),e(".js-w-backCall-overlay",o).attr("data-layout",i.translate.errorsendmessageconstructormode).addClass("active")}))},destroyEvent:function(t){e(".js-callBtn",t).off(".formBackCall"),t.off(".viewBackCall"),e(document).off("changeoption.viewBackCall"),e(".js-callBtn",t).off(".formBackCall"),e(".js-time",t).on(".formBackCall")},timer:function s(e,t){var o,s,a=this;o=0==a.timeOut?Math.round(a.time/1e3)+1:Math.round(a.timeOut/1e3)+1,a.time=o,s=setInterval(function(){o--,a.time--,a.timeOut=a.timeOut-1e3,0>=o?(clearInterval(s),a.timeOut=0,o=0,a.time=0,e.removeAttr("data-layout"),e.removeClass("active")):e.attr("data-layout","".concat(t," ").concat(a.time," ").concat(a.translate.seconds))},1e3)},sendSMS:function(t,o,n){var s=this;a.msg.show({loading:!0,text:s.translate.sending,headerOverlap:!0}),e.ajax({type:"post",dataType:"json",url:"/api/callMe",data:t,api:!1,success:function(e){switch(!e[0]&&e[1]&&e[1].send&&n(),!0){case Boolean(e[0]&&e[0].data["delay sending"]):a.msg.show({text:s.translate.errorsendmessage,headerOverlap:!0,autoHide:s.timeOut}),setTimeout(function(){s.delayBeforeNextSend(e[0].data["delay sending"])},3e3);break;case Boolean(e[1]&&e[1]._pass):var o=s.translate.successsending;t.showTime||(o=s.translate.successsendingwithouttime),a.msg.show({text:o,headerOverlap:!0,autoHide:s.timeOut});break;case Boolean(e[1]&&e[1].delaySending):var o=s.translate.successsending;t.showTime||(o=s.translate.successsendingwithouttime),a.msg.show({text:o,headerOverlap:!0}),setTimeout(function(){s.delayBeforeNextSend(e[1].delaySending)},3e3);break;case Boolean(e[0]&&"sms not sent"===e[0].data.send):a.msg.show({text:s.translate.errorsendmessage,headerOverlap:!0,autoHide:s.timeOut});break;case Boolean(null==e[0]&&!e[1].__pass):a.msg.show({text:s.translate.errorsendmessage,headerOverlap:!0,autoHide:s.timeOut});break;default:setTimeout(function(){var e=s.translate.successsending;t.showTime||(e=s.translate.successsendingwithouttime),a.msg.show({text:e,headerOverlap:!0,autoHide:s.timeOut})},1e3)}},error:function(){setTimeout(function(){e(".js-error-send",o).show()},1e3)}})},showError:function(t,o){var a=this;a.timeOut>0&&a.timer(e(".js-w-backCall-overlay",t),o)},hideError:function(t){e(".js-w-backCall-overlay.active",t).click()},getTime:function(){var t=this,o=new Date,a=parseInt(o.getHours()),n={};return n.time=t.translate.today,e.each(t.timelist,function(){this.today&&a>=21&&(this.show=!1),this.today&&a>=12&&"morning"==this.type&&(this.show=!1),this.today&&a>=17&&"day"==this.type&&(this.show=!1)}),n},getCallTime:function(e){var t=e.find(".js-time select option:selected"),a=t.data("time"),n=t.data("today"),s=this.timeRange[a],i=new Date,r=i.getTimezoneOffset(),l=o.getUtcTimeZoneText(r),c=o.getMskRelativeTimeZone(r),d="".concat(s," ").concat(c),m="".concat(s," ").concat(l),u="".concat(this.translate.tomorrow," ").concat(d),h="".concat(this.translate.tomorrow," ").concat(m);return s?"soon"===a?{msk:s,local:s}:n?{msk:d,local:m}:{msk:u,local:h}:{msk:"",local:""}},getPhone:function(e){var t=e.find(".js-phone input").val();return"string"!=typeof t||t.length<1?"":t.replace(/[^\d]/g,"").replace(/^(7\d{10,10})$/,"+$1")},getData:function(e,t){var o=this.getCallTime(e),a=this.getPhone(e),n=e.find(".js-username input").val(),s=t.find('[name="_id"]').val();return{time:this.translit(o.local),localeTime:o.msk,phone:a,username:this.translit(n),localeUsername:n,format:"json",_Id:s}},checkPass:function(t,o){return e.ajax({type:"get",dataType:"json",url:"/api/callMe/pass",data:t,api:!1,success:function(e){t[e.name]=""},error:function(){e(".js-error-send",o).show(),e(".js-callBtn",o).attr("disabled",!0)}}),t},delayBeforeNextSend:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!this.waitingForNextSend){this.waitingForNextSend=!0;var n=Math.round(e/1e3)+1;a.msg.show({text:this.translate.errorsendtimeoutversion3+n,headerOverlap:!0});var s=setInterval(function(){n--,a.msg.changeText(t.translate.errorsendtimeoutversion3+n),0>=n&&(a.msg.hide(),clearInterval(s),t.waitingForNextSend=!1,o())},1e3)}},translit:function(t){var o={"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g","Д":"D","д":"d","Е":"E","е":"e","Ё":"Yo","ё":"yo","Ж":"Zh","ж":"zh","З":"Z","з":"z","И":"I","и":"i","Й":"Y","й":"y","К":"K","к":"k","Л":"L","л":"l","М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o","П":"P","п":"p","Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t","У":"U","у":"u","Ф":"F","ф":"f","Х":"Kh","х":"kh","Ц":"Ts","ц":"ts","Ч":"Ch","ч":"ch","Ш":"Sh","ш":"sh","Щ":"Sch","щ":"sch","Ъ":'"',"ъ":'"',"Ы":"Y","ы":"y","Ь":"'","ь":"'","Э":"E","э":"e","Ю":"Yu","ю":"yu","Я":"Ya","я":"ya"},a="";return e.each(t.split(""),function(){a+=o[this]?o[this]:this}),a},_isMobile:function(){var e=navigator.userAgent;return e?/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e):!1},checkValidInput:function(e,t,o){var a=this;return void 0==o&&(o=!0),13!=t?e.shiftKey&&187==t||a._isMobile()&&187==t||61==t&&o||107==t&&o||!a._isMobile()&&0==t||8==t||46==t||t>=112&&123>=t||t>=96&&105>=t||t>=33&&40>=t||(e.ctrlKey||e.metaKey)&&(88==t||86==t||67==t||90==t||82==t)||t&&!e.shiftKey&&t>=48&&57>=t:"enter"},repositionWidget:function(e){"left"==e.attr("data-party")?e.css("left",98-e.width()/2):e.css("right",98-e.width()/2)}}});
//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map

//# sourceMappingURL=view.js.map
