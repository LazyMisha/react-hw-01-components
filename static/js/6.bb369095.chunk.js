(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[6],{111:function(t,e,n){"use strict";n.r(e);var a=n(29),r=n(30),o=n(32),c=n(31),u=n(0),i=n.n(u),s=n(58),l=n.n(s),f=function(t){var e=t.title,n=t.children;return i.a.createElement("div",{className:l.a.section},i.a.createElement("h1",null,e),n)},p=n(59),d=n.n(p),b=function(t){var e=t.onLeaveFeedback;return i.a.createElement("div",{className:d.a.button},i.a.createElement("button",{value:"good",onClick:e},"Good"),i.a.createElement("button",{value:"neutral",onClick:e},"Neutral"),i.a.createElement("button",{value:"bad",onClick:e},"Bad"))},m=n(9),v=n.n(m),y=n(60),g=n.n(y),h=function(t){var e=t.good,n=t.neutral,a=t.bad,r=t.total,o=t.positivePercentage;return i.a.createElement("div",{className:g.a.items},i.a.createElement("h1",null,"Statistics"),i.a.createElement("p",null,"Good: ",e),i.a.createElement("p",null,"Neutral: ",n),i.a.createElement("p",null,"Bad: ",a),i.a.createElement("p",null,"Total: ",r),i.a.createElement("p",null,"Positive feedack: ",o,"%"))};h.prototypes={good:v.a.number.isRequired,neutral:v.a.number.isRequired,bad:v.a.number.isRequired,total:v.a.number.isRequired,positivePercentage:v.a.number.isRequired};var P=h,E=function(t){var e=t.message;return i.a.createElement("h1",null,e)};E.prototypes={message:v.a.string.isRequired};var k=E,_=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={good:0,neutral:0,bad:0,total:0,positivePercentage:0},t.updtaePositivePersentage=function(){t.setState({positivePercentage:Math.round(t.state.good/t.state.total*100)})},t.onLeaveFeedback=function(e){switch(e.target.value){case"good":t.setState({good:t.state.good+1,total:t.state.total+1},t.updtaePositivePersentage);break;case"neutral":t.setState({neutral:t.state.neutral+1,total:t.state.total+1},t.updtaePositivePersentage);break;case"bad":t.setState({bad:t.state.bad+1,total:t.state.total+1},t.updtaePositivePersentage)}},t.getStatistic=function(){return t.state.total>0?i.a.createElement(P,{good:t.state.good,neutral:t.state.neutral,bad:t.state.bad,total:t.state.total,positivePercentage:t.state.positivePercentage}):i.a.createElement(k,{message:"No feedback given"})},t}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement(f,{title:"Please leave feedback"},i.a.createElement(b,{onLeaveFeedback:this.onLeaveFeedback}),this.getStatistic())}}]),n}(u.Component);e.default=_},29:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},30:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))},31:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return function(){var e,n=a(t);if(r()){var o=a(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return c(this,e)}}n.d(e,"a",(function(){return u}))},32:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return r}))},58:function(t,e,n){t.exports={section:"styles_section__khDa5"}},59:function(t,e,n){t.exports={button:"styles_button__1UIQl"}},60:function(t,e,n){t.exports={items:"styles_items__3TxdY"}}}]);
//# sourceMappingURL=6.bb369095.chunk.js.map