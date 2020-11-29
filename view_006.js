"use strict";define("widget-sliderWysiwyg-view",["jquery","owlEdit","U","goals/handlers","goals/helper"],function(l,t,o,e,i){var n={init:function(t,e){var i=this;l(window).off(".sliderWysy"),i.initOwl(t,e),window.localStorage&&document.referrer&&(localStorage.getItem("firstReferrer")||localStorage.setItem("firstReferrer",document.referrer));var n=null,a=l(".ul-image .ul-slider-item-overlay",t).map(function(){return l(this).outerHeight(!0)+l(this).position().top-l(window).scrollTop()});n=Math.max.apply(null,a),t.find(".ul-image").outerHeight(!0)<n&&t.find(".ul-image").outerHeight(n+30),l(window).on("colResized.sliderWysy",function(){var t=[].slice.call(arguments,1);setTimeout(function(){l.each(t,function(t,o){var e=l(o).find(".ul-slider-wysy");e.length&&i._responseCarousel(e)})},500)}),window.constructorMode&&l(window).on("changeDeviceMode.sliderWysy",function(){i._responseCarousel()}),window.constructorMode||t.on("click",".ul-w-btn-el",function(t){var e=(l(this),o.orderFormUrl.check(l(this).attr("href")));return null!=e?(require(["orderForm"],function(l){l.open(e,"")}),t.preventDefault(),!1):void 0})},_responseCarousel:function(t){void 0==t?l(".ul-slider-wysy").each(function(){l(this).data("owlCarousel").reinit()}):void 0!=t.data("owlCarousel")&&t.data("owlCarousel").reinit()},initOwl:function(t,o){var e=!1;e=!t.data("edit")&&o.autoPlay&&o.autoPlay?1e3*o.autoPlayTime:!1;var i=function(){var o=0;l(".ul-control-panel .ul-owl-page",t).each(function(t,e){o+=l(e).outerWidth(!0)});var e=5;o+=l(".ul-control-panel .ul-add-image",t).outerWidth(!0),l(".ul-control-panel .ul-owl-pagination",t).width(o+e)},n=function(e){t.data("edit")&&(l(".ul-control-panel",t).show(),i(e,this),t.data("edit")&&(l(".ul-control-panel .ul-owl-page",t).eq(o.active).addClass("active"),t.find(".ul-slider-wysy").trigger("owl.jumpTo",o.active)),l(".ul-control-panel .ul-sliderWysy-slide-thumb-left",t).click(function(){var o=parseInt(l(".ul-control-panel .ul-owl-pagination",t).css("margin-left"));l(".ul-control-panel .ul-owl-pagination",t).animate({marginLeft:o+l(".ul-owl-controls",t).width()<=0?o+l(".ul-owl-controls",t).width():0},200)}),l(".ul-control-panel .ul-sliderWysy-slide-thumb-right",t).click(function(){var o=parseInt(l(".ul-control-panel .ul-owl-pagination",t).css("margin-left")),e=l(".ul-control-panel .ul-owl-controls",t).width()+-1*o>=l(".ul-control-panel .ul-owl-pagination",t).width()?o:-1*l(".ul-owl-controls",t).width()+o+168;l(".ul-control-panel .ul-owl-pagination",t).animate({marginLeft:e},200)}),l(".ul-control-panel .ul-owl-page",t).click(function(){l(".active",l(this).parent()).removeClass("active"),l(this).addClass("active"),t.find(".ul-slider-wysy").data("owlCarousel").goTo(l(this).index())})),"click"==o.controls&&(l(".owl-buttons .owl-next",t).addClass("click"),l(".owl-buttons .owl-prev",t).addClass("click"),l(".ul-image",t).addClass("ul-click"),l(".owl-buttons .owl-next",t).css("pointer-events","none"),l(".owl-buttons .owl-prev",t).css("pointer-events","none"),l(".ul-image",t).on("click",function(o){t.data("edit")?t.data("activeEdit")||l(o.target).hasClass("ul-slider-item-overlay")||l(o.target).closest(".ul-slider-item-overlay").length||(l(".ul-control-panel .ul-owl-page.active ",t).removeClass("active"),o.offsetX<l(this).width()/2?l(".owl-buttons .owl-prev",t).trigger("touchend"):l(".owl-buttons .owl-next",t).trigger("touchend")):l(o.target).hasClass("ul-slider-item-overlay")||l(o.target).closest(".ul-slider-item-overlay").length||(o.offsetX<l(this).width()/2?l(".owl-buttons .owl-prev",t).trigger("touchend"):l(".owl-buttons .owl-next",t).trigger("touchend"))}))},a=t.find(".ul-slider-wysy");a&&t.find(".ul-slider-wysy").owlCarousel({controlsClick:"click"==o.controls,items:o.count,autoPlay:e,singleItem:!(o.count>1),slideSpeed:500,responsive:!0,responsiveRefreshRate:100,mouseDrag:!1,navigation:!0,dragBeforeAnimFinish:!0,touchDrag:!1,pagination:o.pagination,navigationText:!1,lazyLoad:!0,scrollPerPage:!0,itemsScaleUp:!0,addClassActive:!0,rewindNav:!0,transitionStyle:o.animation,afterMove:function(o){if(t.data("edit")){l(".ul-control-panel .ul-owl-page",t).removeClass("active");var e=o.find(".owl-wrapper .active").index();if(l(".ul-control-panel .ul-owl-page",t).eq(e).addClass("active"),l(window).trigger("slideMove",e),l(".ul-control-panel .active",t).length){var i=l(".ul-control-panel .active",t).position(),n=l(".ul-control-panel .active",t).outerWidth(!0);i.left+n+50>l(".ul-control-panel .ul-owl-controls",t).width()&&l(".ul-control-panel .ul-sliderWysy-slide-thumb-right",t).trigger("click"),i.left+n<150&&l(".ul-control-panel .ul-sliderWysy-slide-thumb-left",t).trigger("click")}}},afterUpdate:i,afterInit:n})},setSlide:function(l,t){l.find(".ul-slider-wysy").data("owlCarousel").jumpTo(t)},autoScrollStop:function(l){l.find(".ul-slider-wysy").data("owlCarousel").stop()},autoScrollStart:function(l){l.find(".ul-slider-wysy").data("owlCarousel").play()},open:function(t){var o=this,e=l("#"+t);if(!e.length)return void console.log('Widget with id "'+t+'" not exists!');var i=e.data("options");o.init(e,i)},destroy:function(t){var o=l("#"+t);l(".ul-owl-controls .ul-owl-pagination",o).hasClass("ui-sortable")&&l(".ul-owl-controls .ul-owl-pagination",o).sortable("destroy"),l(window).off(".sliderWysy")}};return n});
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
