"use strict";define("goals/handlers",["_"],function(e){return{renderHandler:function(n,i){if(!n||!i||window.constructorMode||window.previewMode)return"";var t='<%= eventHandlerName %>="<%= handlers %>"',a={yandex:"analyticsHandler('siteYandexMetrika.mainId', 'reachGoal', '<%= identifier %>');",google:"analyticsHandler('siteGoogleAnalytics.mainId', null, 'send', {hitType: 'event', eventLabel: '<%= identifier %>'});"},r=[];return e.each(i,function(n,i){r.push(e.template(a[i],{identifier:n.identifier}))}),e.template(t,{eventHandlerName:n,handlers:r.join("")})},getHandlerFunction:function(n){if(!n||window.constructorMode||window.previewMode)return function(){};var i={yandex:function(e){window.analyticsHandler("siteYandexMetrika.mainId","reachGoal",e.identifier)},google:function(e){window.analyticsHandler("siteGoogleAnalytics.mainId",null,"send",{hitType:"event",eventLabel:e.identifier,eventCategory:e.category,eventAction:e.action,eventValue:e.worth})}};return function(){e.each(n,function(e,n){i[n](e)})}}}});
//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map

//# sourceMappingURL=goals-handlers.js.map
