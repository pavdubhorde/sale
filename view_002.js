"use strict";define("widget-button-view",[],function(){var e=!(window.constructorMode||window.previewMode||window.backupPreviewMode);return{isAllowedToGo:!0,init:function(){},open:function(e){var t=this;window.localStorage&&document.referrer&&!localStorage.getItem("firstReferrer")&&localStorage.setItem("firstReferrer",document.referrer),"function"==typeof window.requireFullConfOnce?window.requireFullConfOnce(function(){t.addEvents(e)}):this.addEvents(e);var o=document.querySelector("#".concat(e,'.ul-w-button a[href="/shop/order/success"]'));return o?"function"==typeof window.requireFullConfOnce?void window.requireFullConfOnce(function(){t.getShopButtonData(o)}):void this.getShopButtonData(o):void 0},getShopButtonData:function(t){(window.previewMode||window.backupPreviewMode)&&(t.setAttribute("href",""),t.dataset.previewHref="/__shop_order_success");var o=t.getAttribute("href")||t.dataset.previewHref;"/shop/order/success"!==o&&"/__shop_order_success"!==o||require(["jquery","shop/navigation"],function(o,r){e&&o.ajax({url:r.getUrl("shopAvailability",e),type:"GET",contentType:"application/json"}).done(function(e){e[1].isAvailable||(t.dataset.isDisabled=!0)})})},addEvents:function(e){var t=this;if(!window.constructorMode){var o=document.querySelector("#".concat(e,".ul-w-button a"));o&&o.addEventListener("click",function(e){t.isAllowedToGo=!0,(e.cancelBubble||e.defaultPrevented)&&(t.isAllowedToGo=!1),e.preventDefault(),t.eventActions(e,o)})}},eventActions:function(t,o){var r=this;require(["jquery","U","shop/navigation","goals/handlers"],function(n,i,a,s){var c=n(o),u=s.getHandlerFunction(c.data("goalsData"));u();var d=c.attr("href")||c.attr("data-preview-href"),l=i.orderFormUrl.check(d);("/shop/order/success"===d||"/__shop_order_success"===d||c.attr("data-is-disabled"))&&(r.isAllowedToGo=!1,c.attr("data-is-disabled",!0),require(["shop/checkoutAPI","shop/cartAPI"],function(t,o){t.checkout(e,function(t){if(t){if(c.removeAttr("data-is-disabled"),t.limit&&!c.attr("show-error")){c.attr("show-error",!0);var r=n("<p>".concat(t.message,"</p>")).appendTo(c.parent());setTimeout(function(){return r.fadeOut(1e3,function(){return c.removeAttr("show-error")})},5e3)}}else o.clear(),e||a.goTo("orderSuccess",{isPublishedMode:e,replace:!0})})})),null!=l&&r.isAllowedToGo&&(r.isAllowedToGo=!1,c.css({"pointer-events":"none"}),require(["orderForm"],function(e){n(document).trigger("openButtonOrderForm"),e.open(l,null,function(){c.css({"pointer-events":""}),n(document).trigger("closeButtonOrderForm")})})),r.isAllowedToGo&&!window.previewMode&&window.open(t.target.href,t.target.getAttribute("target"))})}}});
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
