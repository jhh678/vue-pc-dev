webpackJsonp([7],{130:function(e,t,n){"use strict";var o=n(191),i=n.n(o),a=n(190),s=n.n(a),r=n(33),l=n(479),c=n(131),d=n(489),u=this,m=function(){return n.e(0).then(n.bind(null,513))},p=function(){return n.e(5).then(n.bind(null,512))},h=function(){return n.e(2).then(n.bind(null,511))},f=function(){return n.e(1).then(n.bind(null,508))},v=function(){return n.e(3).then(n.bind(null,509))},g=function(){return n.e(4).then(n.bind(null,510))};r.a.use(l.a);var b=new l.a({routes:[{path:"*",component:h,meta:{hasMaster:!1,name:"页面去寻找诗和远方了"}},{path:"/",component:m,meta:{hasMaster:!1,name:"登录"}},{path:"/login",component:m,meta:{hasMaster:!1,name:"登录"}},{path:"/home",component:p,meta:{hasMaster:!0,name:"首页"}},{path:"/demo/demo",component:f,meta:{hasMaster:!0,name:"基本示例"}},{path:"/demo/message",component:v,meta:{hasMaster:!0,name:"消息提示"}},{path:"/demo/reserve",component:g,meta:{hasMaster:!0,name:"敬请期待"}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});b.beforeEach(function(){var e=s()(i.a.mark(function e(t,n,o){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("/"!==t.path&&"/login"!==t.path){e.next=4;break}o(),e.next=12;break;case 4:if(!d.a.isLogined()){e.next=11;break}return e.next=7,d.a.getUserInfo();case 7:if(!e.sent){e.next=9;break}o();case 9:e.next=12;break;case 11:d.a.goLogin();case 12:case"end":return e.stop()}},e,u)}));return function(t,n,o){return e.apply(this,arguments)}}()),b.afterEach(function(e,t){if(e.meta.hasMaster){for(var n=c.a.state.openedTabs,o=0,i=n.length;o<i;o++)if(n[o].path===e.path)return void c.a.dispatch("updateTabIndex",o);n.length>9&&n.splice(1,1),n.push({path:e.path,name:e.meta.name||e.path}),c.a.dispatch("updateTabIndex",c.a.state.openedTabs.length-1)}}),t.a=b},131:function(e,t,n){"use strict";var o=n(33),i=n(241),a=n(491),s=(n.n(a),n(490)),r=n(493),l=n(492);o.a.use(i.a),t.a=new i.a.Store({state:{openedTabs:[{name:"首页",path:"/home"}],currentTabIndex:0},getters:a,actions:s,mutations:r,modules:{Demo:l.a}})},192:function(e,t,n){"use strict";var o=n(486),i=n(487);n.d(t,"b",function(){return o.a}),n.d(t,"a",function(){return i.a})},193:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(504),i=n.n(o),a="production".trim(),s={};s.env=a,s.envConfig=i.a[a],t.b=s;var r=i.a.menuList},194:function(e,t,n){"use strict";var o=n(484),i=n.n(o),a=n(129),s=n.n(a),r=n(33),l=n(203),c=n.n(l),d=n(501),u=n.n(d),m=n(193),p=n(488),h=n(66),f=n(192),v=void 0,g={},b=m.b.envConfig.apiOrigin;c.a.defaults.baseURL=b,c.a.defaults.timeout=8e3,c.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",c.a.defaults.transformRequest=[function(e){return u.a.stringify(e)}],c.a.interceptors.request.use(function(e){return v&&v.close(),v=n.i(f.b)({message:"拼命加载中..."}),g[e.url]=setTimeout(function(){v.close(),n.i(f.a)({message:"链接超时！",type:"warning"})},8e3),e},function(e){return s.a.reject(e)}),c.a.interceptors.response.use(function(e){if(clearTimeout(g[e.config.url]),v.close(),200===e.status){var t=e.data.code,o=e.data.msg||"请求异常，请稍后再试！";if(101===t)return void n.i(f.a)({message:"token过期，请重新登录",type:"info"});200!==t&&n.i(f.a)({message:o,type:"error"})}else{var i=e.statusText||"请求异常，请稍后再试！";n.i(f.a)({message:i,type:"error"})}return e},function(e){return n.i(f.a)({message:e.msg,type:"error"}),s.a.reject(e)});var y=function(e,t){return{get:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=h.d.get("SESSION");return c.a.get(t,i()({},{token:a},n),i()({},{baseURL:e},o))},post:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=h.d.get("SESSION");return c.a.post(t,i()({},{token:a},n),i()({},{baseURL:e},o))}}},w=function(e){return y(b,p.a[e])};t.a=w,r.a.prototype.$api=w},195:function(e,t,n){"use strict";var o={events:{MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",FOCUS:"focus",BLUR:"blur",CLICK:"click",INPUT:"input",KEY_DOWN:"keydown",KEY_UP:"keyup",KEY_PRESS:"keypress"},triggers:{CLICK:"click",HOVER:"hover",FOCUS:"focus",HOVER_FOCUS:"hover-focus",OUTSIDE_CLICK:"outside-click",MANUAL:"manual"},placements:{TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},on:function(e,t,n){e.addEventListener(t,n)},off:function(e,t,n){e.removeEventListener(t,n)},removeFromDom:function(e){try{e.parentNode.removeChild(e)}catch(e){}},addClass:function(e,t){if(e.className){var n=e.className.split(" ");n.indexOf(t)<0&&(n.push(t),e.className=n.join(" "))}else e.className=t},removeClass:function(e,t){if(e.className){for(var n=e.className.split(" "),o=[],i=0,a=n.length;i<a;i++)n[i]!==t&&o.push(n[i]);e.className=o.join(" ")}},hasClass:function(e,t){for(var n=e.className.split(" "),o=0,i=n.length;o<i;o++)if(n[o]===t)return!0;return!1},hasScrollbar:function(e){return e.scrollHeight>e.clientHeight},getViewportSize:function(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}},savedScreenSize:null,scrollbarWidth:null,getScrollbarWidth:function(e){e=e||!1;var t=this.getViewportSize();if(null!==this.scrollbarWidth&&!e&&t.height===this.savedScreenSize.height&&t.width===this.savedScreenSize.width)return this.scrollbarWidth;if("loading"===document.readyState)return null;var n=document.createElement("div"),o=document.createElement("div");return n.style.width=o.style.width=n.style.height=o.style.height="100px",n.style.overflow="scroll",o.style.overflow="hidden",document.body.appendChild(n),document.body.appendChild(o),this.scrollbarWidth=Math.abs(n.scrollHeight-o.scrollHeight),document.body.removeChild(n),document.body.removeChild(o),this.savedScreenSize=t,this.scrollbarWidth},toggleBodyOverflow:function(e){e?document.body.style.paddingRight=null:this.hasScrollbar(document.documentElement)&&(document.body.style.paddingRight=this.getScrollbarWidth()+"px")},setDropdownPosition:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.documentElement,i=(window.pageXOffset||o.scrollLeft)-(o.clientLeft||0),a=(window.pageYOffset||o.scrollTop)-(o.clientTop||0),s=t.getBoundingClientRect(),r=e.getBoundingClientRect();e.style.right="auto",e.style.bottom="auto",n.menuRight?e.style.left=i+s.left+s.width-r.width+"px":e.style.left=i+s.left+"px",n.dropup?e.style.top=a+s.top-r.height-4+"px":e.style.top=a+s.top+s.height+"px"},ensureElementMatchesFunction:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})},setTooltipPosition:function(e,t,n,i,a){var s=void 0,r=void 0,l=void 0;if(void 0===a||"body"===a){s=document.body;var c=document.documentElement;l=(window.pageXOffset||c.scrollLeft)-(c.clientLeft||0),r=(window.pageYOffset||c.scrollTop)-(c.clientTop||0)}else s=document.querySelector(a),l=s.scrollLeft,r=s.scrollTop;if(i){var d=[o.placements.TOP,o.placements.RIGHT,o.placements.BOTTOM,o.placements.LEFT];if(!this.isAvailableAtPosition(t,e,n))for(var u=0,m=d.length;u<m;u++){for(var p=0;p<m;p++)this.removeClass(e,d[p]);if(this.addClass(e,d[u]),this.isAvailableAtPosition(t,e,d[u])){n=d[u];break}}}var h=t.getBoundingClientRect(),f=e.getBoundingClientRect();n===o.placements.BOTTOM?(e.style.top=r+h.top+h.height+"px",e.style.left=l+h.left+h.width/2-f.width/2+"px"):n===o.placements.LEFT?(e.style.top=r+h.top+h.height/2-f.height/2+"px",e.style.left=l+h.left-f.width+"px"):n===o.placements.RIGHT?(e.style.top=r+h.top+h.height/2-f.height/2+"px",e.style.left=l+h.left+h.width+"px"):(e.style.top=r+h.top-f.height+"px",e.style.left=l+h.left+h.width/2-f.width/2+"px")},isAvailableAtPosition:function(e,t,n){var i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),s=o.getViewportSize(),r=void 0;switch(n){case o.placements.TOP:r=i.top>=a.height;break;case o.placements.RIGHT:var l=i.right+a.width<=s.width,c=i.top+i.height/2>=a.height/2;r=l&&c;break;case o.placements.BOTTOM:r=i.bottom+a.height<=s.height;break;case o.placements.LEFT:var d=i.left-a.width>=0,u=i.top+i.height/2>=a.height/2;r=d&&u}return r}};t.a=o},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(33),i=n(224),a=n.n(i),s=n(130),r=n(131),l=n(236),c=(n.n(l),n(235));n.n(c),n(495),n(194);o.a.config.productionTip=!1,new o.a({el:"#app",router:s.a,store:r.a,render:function(e){return e(a.a)}})},221:function(e,t,n){e.exports=n.p+"static/img/logo.6e2d499.png"},224:function(e,t,n){n(237);var o=n(59)(n(496),n(229),"data-v-12d25f37",null);e.exports=o.exports},225:function(e,t,n){var o=n(59)(n(497),null,null,null);e.exports=o.exports},226:function(e,t,n){n(240);var o=n(59)(n(498),n(232),"data-v-84b9c7ac",null);e.exports=o.exports},227:function(e,t,n){n(239);var o=n(59)(n(499),n(231),"data-v-7c23b880",null);e.exports=o.exports},228:function(e,t,n){n(238);var o=n(59)(n(500),n(230),"data-v-2dc74090",null);e.exports=o.exports},229:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page",attrs:{id:"app"}},[!0===e.$route.meta.hasMaster?n("div",{staticClass:"master"},[n("div",{staticClass:"page-sidebar"},[e._m(0),e._v(" "),n("ul",e._l(e.menuList,function(t,o){return n("li",{key:o,class:{active:-1!==e.$route.path.indexOf(t.link)}},[n("i",{staticClass:"iconfont",class:t.icon}),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),n("i",{staticClass:"iconfont icon-zhankai"}),e._v(" "),n("div",{staticClass:"sub-menu"},e._l(t.sub,function(t,o){return n("div",{key:o,staticClass:"group"},[n("div",{staticClass:"group-name"},[e._v(e._s(t.groupName))]),e._v(" "),n("ul",e._l(t.pages,function(t,o){return n("li",{key:o},[n("router-link",{staticClass:"hover-layer",attrs:{to:t.link}},[e._v(e._s(t.name))])],1)}))])}))])}))]),e._v(" "),n("div",{staticClass:"page-content"},[n("div",{ref:"header",staticClass:"header"},[n("div",{staticClass:"header-bar"},[n("span",{staticClass:"company-name"},[e._v("XXX股份有限公司")]),e._v(" "),n("div",{staticClass:"account-nav pull-right clearfix"},[e._m(1),e._v(" "),n("b-dropdown",{attrs:{"menu-right":!0}},[n("div",{staticClass:"dropdown-toggle hover-layer",attrs:{role:"button","data-role":"trigger"}},[n("span",[e._v(e._s(e.userName))]),e._v(" "),n("i",{staticClass:"iconfont icon-zhankai"})]),e._v(" "),n("template",{slot:"dropdown"},[n("li",[n("a",{attrs:{role:"button"}},[e._v("修改密码")])]),e._v(" "),n("li",[n("a",{attrs:{role:"button"},on:{click:e.loginOut}},[e._v("退出")])])])],2)],1)]),e._v(" "),n("b-tab-page")],1),e._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{ref:"subPage",staticClass:"sub-page"},[n("div",{ref:"subPageContent",staticClass:"panel panel-default"},[n("keep-alive",[n("router-view")],1)],1)])])])]):e._e(),e._v(" "),!1===e.$route.meta.hasMaster?[n("keep-alive",[n("router-view")],1)]:e._e()],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"logo-wrap"},[o("img",{attrs:{src:n(221),alt:"logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"clearfix"},[n("li",{staticClass:"hover-layer",attrs:{role:"button"}},[n("i",{staticClass:"iconfont icon-yujing"})]),e._v(" "),n("li",{staticClass:"hover-layer",attrs:{role:"button"}},[n("i",{staticClass:"iconfont icon-xiaoxi"}),e._v(" "),n("span",{staticClass:"badge-count"},[e._v("99+")])]),e._v(" "),n("li",{staticClass:"hover-layer",attrs:{role:"button"}},[n("i",{staticClass:"iconfont icon-bangzhu"})])])}]}},230:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-page"},[n("div",{staticClass:"tabs-nav-wrap"},[n("ul",e._l(e.tabs,function(t,o){return n("li",{key:t.path,staticClass:"hover-layer",class:{active:e.activeIndex===o,home:!o},on:{click:function(n){e.switchTab(t.path)}}},[n("a",{attrs:{href:"javascript:void(0);"}},[n("span",{staticClass:"tab-name"},[e._v(e._s(t.name))]),n("i",{directives:[{name:"show",rawName:"v-show",value:o,expression:"index"}],staticClass:"iconfont icon-close hover-layer",on:{click:function(n){n.stopPropagation(),e.$closeTabPage(t.path)}}})])])}))])])},staticRenderFns:[]}},231:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"b-message-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:["b-message",e.type&&!e.iconClass?"b-message-"+e.type:"",e.customClass],attrs:{role:"message"},on:{mouseenter:e.clearTimer,mouseleave:e.startTimer}},[e._t("default",[e.dangerouslyUseHTMLString?n("p",{staticClass:"b-message__content",attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.message)}}):n("p",{staticClass:"b-message__content",attrs:{tabindex:"0"}},[e._v(e._s(e.message))])]),e._v(" "),e.showClose?n("i",{staticClass:"b-message__closeBtn iconfont icon-close hover-layer",attrs:{tabindex:"0",role:"button","aria-label":"close"},on:{click:e.close,keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;t.stopPropagation(),e.close(t)}}}):e._e()],2)])},staticRenderFns:[]}},232:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"loading-pop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"loading-mask"},[n("div",{staticClass:"loading"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),e._v(" "),n("div",{staticClass:"rect2"}),e._v(" "),n("div",{staticClass:"rect3"}),e._v(" "),n("div",{staticClass:"rect4"}),e._v(" "),n("div",{staticClass:"rect5"})]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.message,expression:"message"}],staticClass:"loading-text"},[e._v(e._s(e.message))])])])])},staticRenderFns:[]}},235:function(e,t){},236:function(e,t){},237:function(e,t){},238:function(e,t){},239:function(e,t){},240:function(e,t){},486:function(e,t,n){"use strict";var o=n(33),i=o.a.extend(n(226)),a=[],s=function(){if(a.length>0){var e=a[0];return a.splice(0,1),e}return new i({el:document.createElement("div")})},r=function(e){e&&a.push(e)},l=function(e){e.target.parentNode&&e.target.parentNode.removeChild(e.target)};i.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",l),this.closed=!0,r(this)};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration||8e3,n=s();return n.closed=!1,clearTimeout(n.timer),n.message="string"==typeof e?e:e.message,document.body.appendChild(n.$el),o.a.nextTick(function(){n.visible=!0,n.$el.removeEventListener("transitionend",l),t&&(n.timer=setTimeout(function(){n.closed||n.close()},t))}),n};t.a=c},487:function(e,t,n){"use strict";var o=n(33),i=n(227),a=n.n(i),s=n(494),r=n(66),l=o.a.extend(a.a),c=void 0,d=[],u=1,m=function e(t){if(!o.a.prototype.$isServer){t=t||{},"string"==typeof t&&(t={message:t});var i=t.onClose,a="message_"+u++;return t.onClose=function(){e.close(a,i)},c=new l({data:t}),c.id=a,n.i(r.c)(c.message)&&(c.$slots.default=[c.message],c.message=null),c.vm=c.$mount(),document.body.appendChild(c.vm.$el),c.vm.visible=!0,c.dom=c.vm.$el,c.dom.style.zIndex=s.a.nextZIndex(),d.push(c),c.vm}};["success","warning","info","error"].forEach(function(e){m[e]=function(t){return"string"==typeof t&&(t={message:t}),t.type=e,m(t)}}),m.close=function(e,t){for(var n=0,o=d.length;n<o;n++)if(e===d[n].id){"function"==typeof t&&t(d[n]),d.splice(n,1);break}},m.closeAll=function(){for(var e=d.length-1;e>=0;e--)d[e].close()},o.a.prototype.$message=m,t.a=m},488:function(e,t,n){"use strict";var o={login:"/api/permission/login",getUserInfo:"/api/permission/user"};t.a=o},489:function(e,t,n){"use strict";var o=n(191),i=n.n(o),a=n(190),s=n.n(a),r=n(130),l=n(194),c=n(66),d=n(192),u={isLogined:function(){return!!c.a.get("token")},goLogin:function(){r.a.push({path:"/login?router="+r.a.history.current.path})},getUserInfo:function(){var e=this;return s()(i.a.mark(function t(){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c.a.get("userInfo")){t.next=4;break}return o=e,t.next=4,n.i(l.a)("getUserInfo").post({token:c.a.get("token")}).then(function(e){if(200===e.data.code){var t=e.data.data.userInfo,i={};return t.permissions.forEach(function(e){i[e.per_code]=!0}),t.permissions=i,c.a.set("userInfo",t),!0}return n.i(d.a)({message:"用户信息获取失败，请尝试重新登陆",type:"error"}),setTimeout(function(){o.goLogin()},3e3),!1});case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}},t,e)}))()}};t.a=u},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"updateTabIndex",function(){return o});var o=function(e,t){(0,e.commit)("updateTabIndex",t)}},491:function(e,t){},492:function(e,t,n){"use strict";var o=n(129),i=n.n(o),a={shopCar:[]},s={},r={addShop:function(e,t){var n=e.commit;e.state;n("ADD_SHOP",t)},deleShop:function(e,t){var n=e.commit,o=e.state;return new i.a(function(e,i){setTimeout(function(){var i=o.shopCar.filter(function(e){return e.id!==t});n("DELE_SHOP",i),e(i)},1e3)})}},l={ADD_SHOP:function(e,t){e.shopCar.push(t)},DELE_SHOP:function(e,t){e.shopCar=t}};t.a={state:a,getters:s,actions:r,mutations:l}},493:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"updateTabIndex",function(){return o});var o=function(e,t){e.currentTabIndex=t}},494:function(e,t,n){"use strict";var o=n(33),i=n(195),a=!1,s=function(){if(!o.a.prototype.$isServer){var e=l.modalDom;return e?a=!0:(a=!1,e=document.createElement("div"),l.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()}),e.addEventListener("click",function(){l.doOnModalClick&&l.doOnModalClick()})),e}},r={},l={zIndex:2e3,modalFade:!0,getInstance:function(e){return r[e]},register:function(e,t){e&&t&&(r[e]=t)},deregister:function(e){e&&(r[e]=null,delete r[e])},nextZIndex:function(){return l.zIndex++},modalStack:[],doOnModalClick:function(){var e=l.modalStack[l.modalStack.length-1];if(e){var t=l.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,n,r,l){if(!o.a.prototype.$isServer&&e&&void 0!==t){this.modalFade=l;for(var c=this.modalStack,d=0,u=c.length;d<u;d++){if(c[d].id===e)return}var m=s();if(i.a.addClass(m,"v-modal"),this.modalFade&&!a&&i.a.addClass(m,"v-modal-enter"),r){r.trim().split(/\s+/).forEach(function(e){return i.a.domUtils.addClass(m,e)})}setTimeout(function(){i.a.removeClass(m,"v-modal-enter")},200),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(m):document.body.appendChild(m),t&&(m.style.zIndex=t),m.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:r})}},closeModal:function(e){var t=this.modalStack,n=s();if(t.length>0){var o=t[t.length-1];if(o.id===e){if(o.modalClass){o.modalClass.trim().split(/\s+/).forEach(function(e){return i.a.removeClass(n,e)})}t.pop(),t.length>0&&(n.style.zIndex=t[t.length-1].zIndex)}else for(var a=t.length-1;a>=0;a--)if(t[a].id===e){t.splice(a,1);break}}0===t.length&&(this.modalFade&&i.a.addClass(n,"v-modal-leave"),setTimeout(function(){0===t.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none",l.modalDom=void 0),i.a.removeClass(n,"v-modal-leave")},200))}},c=function(){if(!o.a.prototype.$isServer&&l.modalStack.length>0){var e=l.modalStack[l.modalStack.length-1];if(!e)return;return l.getInstance(e.id)}};o.a.prototype.$isServer||window.addEventListener("keydown",function(e){if(27===e.keyCode){var t=c();t&&t.closeOnPressEscape&&(t.handleClose?t.handleClose():t.handleAction?t.handleAction("cancel"):t.close())}}),t.a=l},495:function(e,t,n){"use strict";var o=n(33),i=n(130),a=n(131);o.a.prototype.$closeTabPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a.history.current.path,t=void 0;return!!a.a.state.openedTabs.some(function(n,o){if(n.path===e)return t=o,!0})&&(a.a.state.openedTabs.splice(t,1),a.a.state.currentTabIndex===t?(a.a.dispatch("updateTabIndex",t-1),i.a.push({path:a.a.state.openedTabs[a.a.state.currentTabIndex].path})):a.a.state.currentTabIndex>t&&(a.a.dispatch("updateTabIndex",a.a.state.currentTabIndex-1),i.a.push({path:a.a.state.openedTabs[a.a.state.currentTabIndex].path})),!0)}},496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(66),i=n(193),a=n(225),s=n.n(a),r=n(228),l=n.n(r);t.default={name:"App",components:{BDropdown:s.a,BTabPage:l.a},data:function(){return{userName:o.a.get("userInfo")&&o.a.get("userInfo").userName,menuList:i.a}},updated:function(){var e=this;this.initSubPageHeight(),window.onresize=function(){var t=void 0;t&&clearTimeout(t),t=setTimeout(function(){e.initSubPageHeight()},20)}},methods:{initSubPageHeight:function(){var e=document.body.style;if(this.$route.meta.hasMaster){var t=document.documentElement.clientWidth<1260?20:1,n=document.documentElement.clientHeight-this.$refs.header.clientHeight-t;this.$refs.subPage.style.height=n+"px",e.overflowY="hidden"}else e.overflowY="auto"},loginOut:function(){o.a.clear(),this.$router.push("/login")}}}},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(195);t.default={name:"BDropdown",componentName:"BDropdown",render:function(e){return e(this.tag,{class:{dropdown:!this.dropup,dropup:this.dropup,open:this.show}},[this.$slots.default,e("ul",{class:{"dropdown-menu":!0,"dropdown-menu-right":this.menuRight},ref:"dropdown"},[this.$slots.dropdown])])},props:{tag:{type:String,default:"div"},appendToBody:{type:Boolean,default:!1},value:{type:Boolean},dropup:{type:Boolean,default:!1},menuRight:{type:Boolean,default:!1},notCloseElements:{type:Array},positionElement:{}},data:function(){return{show:!1,triggerEl:void 0}},watch:{value:function(e){this.toggle(e)}},mounted:function(){this.triggerEl=this.$el.querySelector('[data-role="trigger"]'),this.triggerEl&&o.a.on(this.triggerEl,o.a.events.CLICK,this.toggle),o.a.on(window,o.a.events.CLICK,this.windowClicked),this.value&&this.toggle(!0)},beforeDestroy:function(){this.removeDropdownFromBody(),this.triggerEl&&o.a.off(this.triggerEl,o.a.events.CLICK,this.toggle),o.a.off(window,o.a.events.CLICK,this.windowClicked)},methods:{toggle:function(e){this.show="boolean"==typeof e?e:!this.show,this.appendToBody&&(e?this.appendDropdownToBody():this.removeDropdownFromBody()),this.$emit("input",this.show)},windowClicked:function(e){var t=e.target;if(this.show&&t){var n=!1;if(this.notCloseElements)for(var o=0,i=this.notCloseElements.length;o<i;o++)if(this.notCloseElements[o].contains(t)){n=!0;break}var a=this.$refs.dropdown.contains(t);this.$el.contains(t)&&!a||n||this.toggle(!1)}},appendDropdownToBody:function(){try{var e=this.$refs.dropdown;e.style.display="block",document.body.appendChild(e);var t=this.positionElement||this.$el;o.a.setDropdownPosition(e,t,this)}catch(e){}},removeDropdownFromBody:function(){try{var e=this.$refs.dropdown;e.removeAttribute("style"),this.$el.appendChild(e)}catch(e){}}}}},498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{message:String,duration:{type:Number,default:0},className:{type:String,default:""}},data:function(){return{visible:!1}}}},499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={success:"success",info:"info",warning:"warning",error:"error"};t.default={name:"BMessage",componentName:"BMessage",data:function(){return{visible:!1,message:"",duration:3e3,type:"info",iconClass:"",customClass:"",onClose:null,showClose:!1,closed:!1,timer:null,dangerouslyUseHTMLString:!1,center:!1,initFocus:null,originFocus:null}},computed:{typeClass:function(){return this.type&&!this.iconClass?"b-message__icon iconfont icon-"+o[this.type]:""}},watch:{closed:function(e){e&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onClose&&this.onClose(this),this.originFocus&&this.originFocus.focus()},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var e=this;this.duration>0&&(this.timer=setTimeout(function(){e.closed||e.close()},this.duration))},keydown:function(e){46===e.keyCode||8===e.keyCode?this.clearTimer():27===e.keyCode?this.closed||this.close():this.startTimer()}},mounted:function(){this.startTimer(),this.originFocus=document.activeElement,document.addEventListener("keydown",this.keydown)},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}}},500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{tabs:function(){return this.$store.state.openedTabs},activeIndex:function(){return this.$store.state.currentTabIndex}},methods:{switchTab:function(e){this.$router.push({path:e})}}}},504:function(e,t){e.exports={development:{apiOrigin:"http://rapapi.org/mockjsdata/31083"},test:{apiOrigin:"http://rapapi.org/mockjsdata/31083"},production:{apiOrigin:"http://rapapi.org/mockjsdata/31083"},menuList:[{name:"演示",icon:"icon-search",sub:[{groupName:"示例",pages:[{name:"基本示例",link:"/demo/demo"},{name:"消息组件示例",link:"/demo/message"}]}]},{name:"采购",icon:"icon-caigouguanli",sub:[{groupName:"采购单据",pages:[{name:"采购订单",link:"/demo/reserve"},{name:"采购入库单",link:"/demo/reserve"},{name:"采购退货单",link:"/demo/reserve"},{name:"在线采购",link:"/demo/reserve"}]},{groupName:"采购报表",pages:[{name:"采购明细表",link:"/demo/reserve"},{name:"采购汇总表（按商品）",link:"/demo/reserve"},{name:"采购汇总表（按供应商）",link:"/demo/reserve"}]}]},{name:"销售",icon:"icon-xiaoshou",sub:[{groupName:"销售单据",pages:[{name:"销售订单",link:"/demo/reserve"},{name:"销售出库单",link:"/demo/reserve"},{name:"零售单",link:"/demo/reserve"},{name:"销售退货",link:"/demo/reserve"}]},{groupName:"销售报表",pages:[{name:"销售明细表",link:"/demo/reserve"},{name:"销售汇总表（按商品）",link:"/demo/reserve"},{name:"销售汇总表（按客户）",link:"/demo/reserve"},{name:"销售汇总表（按经手人）",link:"/demo/reserve"}]}]},{name:"仓储",icon:"icon-cangchu",sub:[{groupName:"仓储单据",pages:[{name:"入库单",link:"/demo/reserve"},{name:"出库单",link:"/demo/reserve"},{name:"调拨单",link:"/demo/reserve"},{name:"盘点单",link:"/demo/reserve"}]},{groupName:"仓储报表",pages:[{name:"库存表",link:"/demo/reserve"},{name:"商品入出库明细表",link:"/demo/reserve"},{name:"商品入出库汇总表",link:"/demo/reserve"}]}]},{name:"会员营销",icon:"icon-huiyuan",sub:[{groupName:"会员管理",pages:[{name:"会员管理",link:"/demo/reserve"},{name:"会员卡充值",link:"/demo/reserve"},{name:"会员积分",link:"/demo/reserve"},{name:"积分兑换",link:"/demo/reserve"},{name:"会员业务明细查询",link:"/demo/reserve"}]},{groupName:"营销活动",pages:[{name:"优惠券管理",link:"/demo/reserve"},{name:"奖励活动",link:"/demo/reserve"},{name:"商品促销",link:"/demo/reserve"},{name:"消息群发（含短信）",link:"/demo/reserve"}]}]},{name:"财务管理",icon:"icon-caigouguanli",sub:[{groupName:"结算管理",pages:[{name:"业务单据",link:"/demo/reserve"},{name:"往来管理（应收应付）",link:"/demo/reserve"},{name:"预收预付（收付款）",link:"/demo/reserve"},{name:"往来预警设置",link:"/demo/reserve"}]}]},{name:"统计分析",icon:"icon-tongjifenxi",sub:[{groupName:"报表分析",pages:[{name:"老板一张表",link:"/demo/reserve"},{name:"会员统计报表",link:"/demo/reserve"},{name:"会员销售统计",link:"/demo/reserve"}]}]},{name:"基础资料",icon:"icon-jichuziliao",sub:[{groupName:"基础资料",pages:[{name:"组织架构",link:"/demo/reserve"},{name:"银行账户",link:"/demo/reserve"},{name:"职员管理",link:"/demo/reserve"},{name:"客户管理",link:"/demo/reserve"},{name:"供货商管理",link:"/demo/reserve"},{name:"商品管理",link:"/demo/reserve"},{name:"商品定价管理",link:"/demo/reserve"},{name:"仓库管理",link:"/demo/reserve"},{name:"作物维护",link:"/demo/reserve"}]},{groupName:"系统管理",pages:[{name:"角色管理",link:"/demo/reserve"},{name:"系统用户",link:"/demo/reserve"},{name:"参数配置",link:"/demo/reserve"},{name:"单据设置",link:"/demo/reserve"},{name:"结存",link:"/demo/reserve"},{name:"业务日期冻结",link:"/demo/reserve"},{name:"报警薄",link:"/demo/reserve"}]}]}]}},505:function(e,t,n){n(198),e.exports=n(199)},66:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return d});var o=n(480),i=n.n(o),a=n(485),s=n.n(a),r={set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=0===n?0:(new Date).getTime()+1e3*n;"object"===(void 0===t?"undefined":s()(t))?(t=i()(t),t="obj-"+t):t="str-"+t,t=i()({data:t,time:o}),window.localStorage.setItem(e,t)},get:function(e){var t=window.localStorage.getItem(e);if(t){var n=JSON.parse(t),o=n.data,i=+n.time;return 0!==i&&(new Date).getTime()-i>0?void window.localStorage.removeItem(e):0===o.indexOf("obj-")?(o=o.slice(4),JSON.parse(o)):0===o.indexOf("str-")?o.slice(4):void 0}},remove:function(e){e&&window.localStorage.removeItem(e)},clear:function(){window.localStorage.clear()}},l={set:function(e,t){"object"===(void 0===t?"undefined":s()(t))?(t=i()(t),t="obj-"+t):t="str-"+t,window.sessionStorage.setItem(e,t)},get:function(e){var t=window.sessionStorage.getItem(e);if(t)return 0===t.indexOf("obj-")?(t=t.slice(4),JSON.parse(t)):0===t.indexOf("str-")?t.slice(4):void 0},remove:function(e){e&&window.sessionStorage.removeItem(e)},clear:function(){window.sessionStorage.clear()}},c={set:function(e,t,n){var o=new Date,i=location.host,a=void 0;n=n||30,o.setDate(o.getDate()+n),a=i.substring(i.indexOf("."),i.length),document.cookie=e+"="+encodeURIComponent(t)+";expires="+o.toUTCString()+";path=/;domain="+a},get:function(e){for(var t=document.cookie.split("; "),n=0,o=t.length;n<o;n++){var i=t[n].split("=");if(i[0]===e)return decodeURIComponent(i[1])}return""},remove:function(e){this.set(e,"",-1)},clear:function(){var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()}},d=(function(){var e=navigator.userAgent;e.indexOf("Trident"),e.indexOf("Presto"),e.indexOf("AppleWebKit"),e.indexOf("Gecko")>-1&&e.indexOf("KHTML"),e.match(/AppleWebKit.*Mobile.*/),e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),e.indexOf("Android")>-1||e.indexOf("Linux"),e.indexOf("iPhone"),e.indexOf("iPad"),e.indexOf("Safari"),e.indexOf("MicroMessenger"),e.match(/\sQQ/i)}(),function(e){return"object"===(void 0===e?"undefined":s()(e))&&Object.prototype.hasOwnProperty.call(e,"componentOptions")})}},[505]);