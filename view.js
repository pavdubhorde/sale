"use strict";define("widget-mainmenu-view",["jquery"],function(e){return{isOpen:!1,isAbsolute:!1,headerHeight:e("header").outerHeight(!0),menuHeight:e(".ul-w-mainmenu").outerHeight(!0),$menuParent:e("header .ul-w-mainmenu").parent(),$bodyFict:e("#body-fict"),isFirstTime:!0,appendScriptFor:function(n){var t=e("script[src='".concat(n,"']")).length>0;if(!t){var i=e('<script type="text/javascript" src=\''.concat(n,"'></script>"));e("head").append(i),this.scriptsInserted=!0}},insertMenuScripts:function(){var e="/widgets/mainmenu/js/preView.js",n="/widgets/mainmenu/js/fontobserver.js";this.appendScriptFor(n),this.appendScriptFor(e)},open:function(n){var t=this;this.insertMenuScripts(),t.menuHeight=e(".ul-w-mainmenu").outerHeight(!0),t.headerHeight=e("header").outerHeight(!0);var i=window.location.hash,a=function(n){setTimeout(function(){if(!s(n)){var i=0;i=e(window).width()>768&&"true"===e("header .ul-w-mainmenu").attr("data-fixed")?e(n).offset().top-t.menuHeight:e(n).offset().top,e("html, body").animate({scrollTop:i},100)}},500)},s=function(e){var n=e.get(0).getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(n.bottom-n.height<0||n.top-(t-n.height)>=0)};if(i.search(/[А-яЁё\/=\.\,\:\;]/)<0&&!/#=.{2}-.{2}=/.test(i)){var o=e(i);o.length&&("complete"===document.readyState?a(o):e(window).on("load",function(){a(o)}))}e("header .ul-w-mainmenu").parent().hasClass("ul-menu-fixed-container-inside")||(t.$menuParent=e("header .ul-w-mainmenu").parent()),t.$viewEl=e("#"+n),this.isOpen||(this.isOpen=!0,this.init(e("#"+n)))},destroy:function(){e(document).off(".mainmenu"),e("#ul-main").off(".mainmenu")},init:function(){var n=this,t=this,i=".vertical-menu:not(.not-prevent) .ul-w-mainmenu > .ul-w-mainmenu-nav",a=".ul-w-mainmenu-nested",s=".ul-w-mainmenu-item.ul-w-mainmenu-have-nested",o=".js-w-mainmenu",r=".ul-w-mainmenu-toggle",u=i+" > "+s+" > "+o+", "+i+" > "+r+" "+s+" > "+o,m=i+" > "+s+", "+i+" > "+r+" "+s,l=i+" > "+s+" > "+a+" > "+s+" > "+o+", "+i+" > "+r+" "+s+" > "+a+" > "+s+" > "+o,d=i+" > "+s+" > "+a+" > "+s+", "+i+" > "+r+" > "+s+" > "+a+" > "+s;e(u).on("click.mainmenu",function(){var n=e(this).parent();return e(m).each(function(){this!=n.get(0)&&e(this).hasClass("opened")&&e(this).removeClass("opened")}),e(d).each(function(){e(this).parent().parent().hasClass("opened")||e(this).removeClass("opened")}),e(this).parent().hasClass("opened")?void e(this).parent().removeClass("opened"):(n.addClass("opened"),!1)}),e(l).on("click.mainmenu",function(){var n=e(this).parent();return e(d).each(function(){this!=n.get(0)&&e(this).hasClass("opened")&&e(this).removeClass("opened")}),n.hasClass("opened")?void 0:(n.addClass("opened"),!1)}),e(document).on("click.mainmenu",function(e){n.handlerClickBurger(e)}),window.constructorMode||("true"===e("header .ul-w-mainmenu").attr("data-fixed")&&(t.isAbsolute=t.checkPosPub({isAbsolute:t.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:t.headerHeight,menuHeight:t.menuHeight,$menuParent:t.$menuParent,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")})),e('.js-w-mainmenu, a[href*="#"]:not([data-reactlink])').click(function(){var n=e(this).attr("href").split("#");if(e(window).width()>768){if(n[1]&&(n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")||n[0]===location.pathname.replace(/^\/site_import\/interactive_preview\/(.*?)(\/index|\/|$)/i,"/"))){var i=n[1];if(i.search(/[А-яЁё\/]/)>=0)return;var a=window.document.getElementById(i);if(!a)return;var s=0;return s=e("header .ul-w-mainmenu").attr("data-fixed")?e(a).offset().top-t.menuHeight:e(a).offset().top,s!=e(document).scrollTop()&&(e("html, body").animate({scrollTop:s},500),t.selectMenuItemByHash(e(this).attr("href"))),!1}if(n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/"))return 0!==e(document).scrollTop()&&(e("html, body").animate({scrollTop:0},500),t.selectMenuItemByHash(e(this).attr("href"))),!1}else if(n[1]&&n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")){var a=window.document.getElementById(n[1]);if(!a)return;t.selectMenuItemByHash(e(this).attr("href"))}else n[0]===location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")&&t.selectMenuItemByHash(e(this).attr("href"))}),e(document).on("scroll.mainmenu",function(){"true"!==e("header .ul-w-mainmenu").attr("data-fixed")||window.constructorMode||(t.isAbsolute=t.checkPosPub({isAbsolute:t.isAbsolute,$menu:e("header .ul-w-mainmenu"),top:e(document).scrollTop(),headerHeight:t.headerHeight,menuHeight:t.menuHeight,$menuParent:t.$menuParent,bgcolor:e("header .ul-w-mainmenu").attr("data-bgcolor"),bgtransparent:e("header .ul-w-mainmenu").attr("data-bgtransparent")}))}).on("resize.mainmenu",function(){t.menuHeight=e(".ul-w-mainmenu").outerHeight(!0),t.headerHeight=e("header").outerHeight(!0)}),t.selectMenuItemByHash(e(this).attr("href"))),t.fireResize()},checkPosPub:function(n){var t=n.isAbsolute;if(n.headerHeight-n.top<n.menuHeight&&!t&&window.innerWidth>768){if(e(".iframe-preview-content").length>=1&&e(".iframe-preview-content").width()>768||0===e(".iframe-preview-content").length){var i=this.addFixedContainer(n);this.fixedContainerColors(n),i.css("left","0"),i.css("width","100%"),n.$menuParent.css("height",n.menuHeight),t=!0,this.fireResize()}}else n.top<=n.headerHeight-n.menuHeight&&(this.removeFixedContainer(n),e("header .ul-w-mainmenu").length||(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),t&&this.fireResize(),t=!1);return e(window).width()<768&&e(".ul-menu-fixed").length>=1&&(e("header .ul-w-mainmenu").length||n.$menu.appendTo(n.$menuParent),this.removeFixedContainer(n),t&&this.fireResize(),t=!1),t},checkPosStop:function(n){return"false"===n.isFixed&&n.headerHeight-n.top<=n.menuHeight&&e(".ul-menu-fixed").length?(this.removeFixedContainer(n),e("header .ul-w-mainmenu").length||(n.$menu.appendTo(n.$menuParent),n.$menuParent.css("height","")),this.fireResize()):"true"===n.isFixed&&n.headerHeight-n.top<n.menuHeight&&!e(".ul-menu-fixed").length&&(this.setSizeByDevice({$fixedContainer:this.addFixedContainer(n),device:e("#body").attr("data-device")}),this.fixedContainerColors(n),this.fireResize()),n.isAbsolute},addFixedContainer:function(n){var t=e('<div class="ul-menu-fixed hide"></div>'),i=e('<div class="ul-menu-fixed-container"></div>'),a=e('<div class="ul-menu-fixed-container-inside"></div>');return t.appendTo(n.$menuParent),i.appendTo(t),a.appendTo(i),n.$menu.appendTo(a),t.css({position:"fixed",top:"0","z-index":"300",height:n.$menu.height}),e("header .ul-w-mainmenu-nav").css({"margin-top":0,"margin-bottom":0}),a.css({"max-width":1170,"min-width":375,margin:"auto",padding:"0 15px"}),t.animate({opacity:"show"},400),t.removeClass("hide"),t},setSizeByDevice:function(n){var t=e("body").hasClass("ul-left-panel-hide"),i=e(".ul-buypremium-bar").length;"desktop"===n.device?(n.$fixedContainer.removeClass("hide"),n.$fixedContainer.css("left",(t?48:280)+"px"),n.$fixedContainer.css("width","calc(100% - "+(t?48:280)+"px)")):(n.$fixedContainer.addClass("hide"),n.$fixedContainer.css("left",e("#body").offset().left),n.$fixedContainer.css("width",e("#body").width())),n.$fixedContainer.css("top",i?"60px":"0px"),n.$fixedContainer.css("height","")},fixedContainerColors:function(n){n.headerHeight-n.top<=n.menuHeight&&("0"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(245,245,245,"+n.bgtransparent/100+")"),"1"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(168,168,168,"+n.bgtransparent/100+")"),"2"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(68,68,68,"+n.bgtransparent/100+")"),"3"===n.bgcolor&&e(".ul-menu-fixed").css("background","rgba(15,15,15,"+n.bgtransparent/100+")"))},removeFixedContainer:function(n){e("header .ul-w-mainmenu-nav").css({"margin-top":"","margin-bottom":""}),n.$menuParent.css("height",""),n.$menu.appendTo(n.$menuParent),e(".ul-menu-fixed").remove()},removeFixedContainerEXP:function(n){e("header .ul-w-mainmenu-nav").css({"margin-top":"","margin-bottom":""}),n.$menuParent.css("height",""),n.$menu.appendTo(n.$menuParent),setTimeout(function(){e(".ul-menu-fixed").remove()},100)},selectMenuItemByHash:function(n){var t=n?n.replace(/^.*?(\/.*?#.*)/,"$1"):window.location.pathname.replace(/^\/preview\/(.*?)(\/index|\/|$)/i,"/")+window.location.hash,i=e('.js-w-mainmenu[href="'+t+'"]');i.length&&(e(".ul-w-mainmenu-item").removeClass("ul-w-mainmenu-active-item"),i.closest(".ul-w-mainmenu-item").addClass("ul-w-mainmenu-active-item"),i.parents().hasClass("ul-w-mainmenu-have-nested")&&i.parents().closest(".ul-w-mainmenu-have-nested").addClass("ul-w-mainmenu-active-item"))},triggerEvent:function(e,n){var t;if(document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent(n,!0,!0)):(t=document.createEventObject(),t.eventType=n),t.eventName=n,document.createEvent)e.dispatchEvent(t);else if("resize"===n){var i=document.documentElement.style.width;document.documentElement.style.width="99.999999%",setTimeout(function(){document.documentElement.style.width=i},50)}else e.fireEvent("on"+t.eventType,t)},fireResize:function(){this.triggerEvent(window,"resize")},handlerClickBurger:function(n){var t=e(n.target);e(n.target).hasClass("ul-w-mainmenu-toggle-more")?t.closest(".ul-w-mainmenu-toggle").toggleClass("active"):t.closest(".ul-w-mainmenu-toggle").removeClass("active"),e(n.target).parents().closest(".vertical-menu").length>0?(e(n.target).closest(".ul-w-mainmenu-showButton").length>0&&(t.siblings(".ul-w-mainmenu-nav").toggleClass("show-menu"),t.toggleClass("show-menu")),e(n.target).closest(".ul-w-mainmenu-toggle-button").length>0&&(t.closest(".ul-w-mainmenu-nav").removeClass("show-menu"),t.parent().siblings(".ul-w-mainmenu-showButton").removeClass("show-menu"))):(e(n.target).closest(".ul-w-mainmenu-toggle-button").length>0?t.closest(".ul-w-mainmenu").toggleClass("ul-w-mainmenu-collapse-in"):t.closest(".ul-w-mainmenu").removeClass("ul-w-mainmenu-collapse-in"),e(n.target).closest(".ul-w-mainmenu-showButton").length>0?t.siblings(".ul-w-mainmenu-nav").toggleClass("show-menu"):t.siblings(".ul-w-mainmenu-nav").removeClass("show-menu"))}}});
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
