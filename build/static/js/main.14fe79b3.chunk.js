(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[2],{219:function(t,e,n){t.exports=n(537)},224:function(t,e,n){},246:function(t,e){},252:function(t,e){},253:function(t,e){},280:function(t,e){},282:function(t,e){},298:function(t,e){},300:function(t,e){},332:function(t,e){},334:function(t,e){},418:function(t,e){},420:function(t,e){},426:function(t,e){},438:function(t,e){},441:function(t,e){},446:function(t,e){},537:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(119),i=n.n(o),c=n(49),u=n(3),l=n(4),s=n(10),f=n(9),h=n(14),p=(n(224),function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"spinner-wrapper"},a.a.createElement("div",{className:"donut"})))}}]),n}(r.Component)),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,600))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(1),n.e(7)]).then(n.bind(null,602))})),d=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,601))})),y=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(p,null)},a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/dashboard",component:m}),a.a.createElement(h.b,{exact:!0,path:"/event",component:v}),a.a.createElement(h.b,{exact:!0,path:"/table",component:d}),a.a.createElement(h.a,{to:"/dashboard"})))}}]),n}(r.Component),g=n(82),b=n(120),w=n(83),E=n.n(w);function x(){x=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,d=v&&v(v(L([])));d&&d!==e&&n.call(d,a)&&(m=d);var y=p.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(a,o){function i(){return new e((function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var j=function(){var t=new E.a(E.a.givenProvider||"http://localhost:7545"),e=a.a.useState(),n=Object(b.a)(e,2),r=n[0],o=n[1];return a.a.useEffect((function(){function e(){return(e=Object(g.a)(x().mark((function e(){var n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.requestAccounts();case 2:n=e.sent,o(n[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),window.ethereum.on("accountsChanged",function(){var t=Object(g.a)(x().mark((function t(e){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o(e[0]);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.a.createElement("nav",{className:"navbar p-0 fixed-top d-flex flex-row custom-nav "},a.a.createElement("div",{className:"navbar-menu-wrapper flex-grow d-flex align-items-stretch"},a.a.createElement("ul",{style:{display:" flex",flexDirection:"column"},className:"navbar-nav navbar-nav-right "},a.a.createElement("li",null,r),a.a.createElement("li",null,a.a.createElement("h5",null," ",a.a.createElement(c.b,{to:"/"},"Home")," ")," "),a.a.createElement("li",null,a.a.createElement("h5",null," ",a.a.createElement(c.b,{to:"/event"},"Event"))," "))))},O=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"d-sm-flex justify-content-center justify-content-sm-between py-2 w-100"},a.a.createElement("span",{className:"text-muted text-center text-sm-left d-block d-sm-inline-block"},"Copyright \xa9 ",a.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"}," "),"2022"))))}}]),n}(r.Component),L=n(542),N=function(t){Object(s.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.isFullPageLayout?"":a.a.createElement(j,null),e=this.state.isFullPageLayout?"":a.a.createElement(O,null);return a.a.createElement("div",{className:"container-scroller "},a.a.createElement("div",{className:"container-fluid page-body-wrapper"},t,a.a.createElement("div",{className:"main-panel "},a.a.createElement("div",{className:"content-wrapper"},a.a.createElement(y,null)),e)))}}]),n}(r.Component),k=Object(L.a)()(Object(h.g)(N));i.a.render(a.a.createElement(c.a,null,a.a.createElement(k,null)),document.getElementById("root"))}},[[219,3,4]]]);
//# sourceMappingURL=main.14fe79b3.chunk.js.map