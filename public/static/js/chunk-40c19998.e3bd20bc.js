(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c19998"],{"3a0b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{fixed:"top",toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[n("font-awesome-icon",{attrs:{icon:["fab","font-awesome"]}})],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[t._l(t.navArr,(function(e,i){return[n("b-nav-item",{key:i,attrs:{active:e.props.isActive},on:{click:function(n){return t.navClick(e.index)}}},[t._v(" "+t._s(e.props.label)+" ")])]}))],2),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[t._v("User")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[n("font-awesome-icon",{attrs:{icon:["fas","sign-out-alt"]}}),n("em",[t._v("Sign Out")])],1)],1)],1)],1)],1)],1)},s=[],r=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),o=n("2f62"),a=n("dcb3"),l=n("b42e"),c=n("228e"),u=n("7b1e");function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="BNavbar",f={tag:{type:String,default:"nav"},type:{type:String,default:"light"},variant:{type:String,default:function(){return Object(c["c"])(d,"variant")}},toggleable:{type:[Boolean,String],default:!1},fixed:{type:String},sticky:{type:Boolean,default:!1},print:{type:Boolean,default:!1}},p=a["a"].extend({name:d,functional:!0,props:f,render:function(t,e){var n,i=e.props,s=e.data,r=e.children,o="",a=Object(c["a"])()[0];return i.toggleable&&Object(u["j"])(i.toggleable)&&i.toggleable!==a?o="navbar-expand-".concat(i.toggleable):!1===i.toggleable&&(o="navbar-expand"),t(i.tag,Object(l["a"])(s,{staticClass:"navbar",class:(n={"d-print":i.print,"sticky-top":i.sticky},h(n,"navbar-".concat(i.type),i.type),h(n,"bg-".concat(i.variant),i.variant),h(n,"fixed-".concat(i.fixed),i.fixed),h(n,"".concat(o),o),n),attrs:{role:"nav"===i.tag?null:"navigation"}}),r)}}),b=n("a999"),v=n("59fb");function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(b["a"])(["tag","fill","justified","align","small"],v["b"]),m=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},y=a["a"].extend({name:"BNavbarNav",functional:!0,props:O,render:function(t,e){var n,i=e.props,s=e.data,r=e.children;return t(i.tag,Object(l["a"])(s,{staticClass:"navbar-nav",class:(n={"nav-fill":i.fill,"nav-justified":i.justified},g(n,m(i.align),i.align),g(n,"small",i.small),n)}),r)}}),w=n("aa59");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=Object(w["b"])();C.href.default=void 0,C.to.default=void 0;var P=k({},C,{tag:{type:String,default:"div"}}),$=a["a"].extend({name:"BNavbarBrand",functional:!0,props:P,render:function(t,e){var n=e.props,i=e.data,s=e.children,r=n.to||n.href,o=r?w["a"]:n.tag;return t(o,Object(l["a"])(i,{staticClass:"navbar-brand",props:r?Object(b["a"])(C,n):{}}),s)}}),S=n("602d"),x=n("8c18"),T="BNavbarToggle",B="bv::toggle::collapse",N="bv::collapse::state",D="bv::collapse::sync::state",I=a["a"].extend({name:T,mixins:[S["a"],x["a"]],props:{label:{type:String,default:function(){return Object(c["c"])(T,"label")}},target:{type:String,required:!0}},data:function(){return{toggleState:!1}},created:function(){this.listenOnRoot(N,this.handleStateEvt),this.listenOnRoot(D,this.handleStateEvt)},methods:{onClick:function(t){this.$emit("click",t),t.defaultPrevented||this.$root.$emit(B,this.target)},handleStateEvt:function(t,e){t===this.target&&(this.toggleState=e)}},render:function(t){return t("button",{class:["navbar-toggler"],attrs:{type:"button","aria-label":this.label,"aria-controls":this.target,"aria-expanded":this.toggleState?"true":"false"},on:{click:this.onClick}},[this.normalizeSlot("default")||t("span",{class:["navbar-toggler-icon"]})])}});function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L=Object(w["b"])(),A=a["a"].extend({name:"BNavItem",functional:!0,props:H({},L,{linkAttrs:{type:Object,default:function(){}},linkClasses:{type:[String,Object,Array],default:null}}),render:function(t,e){var n=e.props,i=e.data,s=e.listeners,r=e.children;return delete i.on,t("li",Object(l["a"])(i,{staticClass:"nav-item"}),[t(w["a"],{staticClass:"nav-link",class:n.linkClasses,attrs:n.linkAttrs,props:n,on:s},r)])}}),R=n("2326"),z=n("8690"),M=n("a5d7"),V=n("90ef"),U=n("f0bd"),W=n("01e7"),q=n("6d40"),G=n("906c"),J=n("938d"),K=n("686b"),Q={passive:!0,capture:!1},X={data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(G["e"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Q),t&&Object(G["f"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Q))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="ontouchstart"in document.documentElement?"touchstart":"click"),this.listenForClickOut&&Object(G["f"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Q)},beforeDestroy:function(){Object(G["e"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,Q)},methods:{isClickOut:function(t){return!Object(G["d"])(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}},Y={passive:!0,capture:!1},Z={data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(G["e"])(this.focusInElement,"focusin",this._focusInHandler,Y),t&&Object(G["f"])(this.focusInElement,"focusin",this._focusInHandler,Y))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(G["f"])(this.focusInElement,"focusin",this._focusInHandler,Y)},beforeDestroy:function(){Object(G["e"])(this.focusInElement,"focusin",this._focusInHandler,Y)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}};function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){nt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var it=function(t){return(t||[]).filter(G["p"])},st="bv::dropdown::",rt="".concat(st,"shown"),ot="".concat(st,"hidden"),at=J["f"]?450:150,lt={FORM_CHILD:".dropdown form",ITEM_SELECTOR:[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", ")},ct={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},ut={mixins:[V["a"],X,Z],provide:function(){return{bvDropdown:this}},props:{disabled:{type:Boolean,default:!1},text:{type:String,default:""},html:{type:String},dropup:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},right:{type:Boolean,default:!1},offset:{type:[Number,String],default:0},noFlip:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},popperOpts:{default:function(){}}},data:function(){return{visible:!1,inNavbar:null,visibleChangePrevented:!1}},computed:{toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var n=t?"show":"hide",i=new q["a"](n,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(i),i.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off("hidden",this.focusToggler);"show"===n?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null,this.$_noop=function(){}},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.$emit(e,t),this.$root.$emit("".concat(st).concat(e),t)},showMenu:function(){var t=this;if(!this.disabled){if(Object(u["f"])(this.inNavbar)&&this.isNav&&(this.inNavbar=Boolean(Object(G["c"])(".navbar",this.$el))),!this.inNavbar)if("undefined"===typeof U["a"])Object(K["a"])("b-dropdown: Popper.js not found. Falling back to CSS positioning.");else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.$root.$emit(rt,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit("shown")}))}},hideMenu:function(){this.whileOpenListen(!1),this.$root.$emit(ot,this),this.$emit("hidden"),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new U["a"](t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},clearHideTimeout:function(){this.$_hideTimeout&&(clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null)},getPopperConfig:function(){var t=ct.BOTTOM;this.dropup?t=this.right?ct.TOPEND:ct.TOP:this.dropright?t=ct.RIGHT:this.dropleft?t=ct.LEFT:this.right&&(t=ct.BOTTOMEND);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}};return this.boundary&&(e.modifiers.preventOverflow={boundariesElement:this.boundary}),et({},e,{},this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](rt,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(G["v"])((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once("hidden",this.focusToggler))},toggle:function(t){t=t||{};var e=t.type,n=t.keyCode;"click"!==e&&("keydown"!==e||n!==W["a"].ENTER&&n!==W["a"].SPACE&&n!==W["a"].DOWN)||(this.disabled?this.visible=!1:(this.$emit("toggle",t),t.preventDefault(),t.stopPropagation(),this.visible?this.hide(!0):this.show()))},click:function(t){this.disabled?this.visible=!1:this.$emit("click",t)},onKeydown:function(t){var e=t.keyCode;e===W["a"].ESC?this.onEsc(t):e===W["a"].DOWN?this.focusNext(t,!1):e===W["a"].UP&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,t.preventDefault(),t.stopPropagation(),this.$once("hidden",this.focusToggler))},clickOutHandler:function(t){var e=this,n=t.target;if(this.visible&&!Object(G["d"])(this.$refs.menu,n)&&!Object(G["d"])(this.toggler,n)){var i=function(){return e.visible=!1,null};this.clearHideTimeout(),this.$_hideTimeout=this.inNavbar?setTimeout(i,at):i()}},focusInHandler:function(t){this.clickOutHandler(t)},focusNext:function(t,e){var n=this;!this.visible||t&&Object(G["c"])(lt.FORM_CHILD,t.target)||(t.preventDefault(),t.stopPropagation(),this.$nextTick((function(){var i=n.getItems();if(!(i.length<1)){var s=i.indexOf(t.target);e&&s>0?s--:!e&&s<i.length-1&&s++,s<0&&(s=0),n.focusItem(s,i)}})))},focusItem:function(t,e){var n=e.find((function(e,n){return n===t}));n&&n.focus&&n.focus()},getItems:function(){return it(Object(G["x"])(lt.ITEM_SELECTOR,this.$refs.menu))},focusMenu:function(){this.$refs.menu.focus&&this.$refs.menu.focus()},focusToggler:function(){var t=this;this.$nextTick((function(){var e=t.toggler;e&&e.focus&&e.focus()}))}}},ht=n("1947"),dt="BDropdown",ft={toggleText:{type:String,default:function(){return Object(c["c"])(dt,"toggleText")}},size:{type:String,default:function(){return Object(c["c"])(dt,"size")}},variant:{type:String,default:function(){return Object(c["c"])(dt,"variant")}},block:{type:Boolean,default:!1},menuClass:{type:[String,Array],default:null},toggleTag:{type:String,default:"button"},toggleClass:{type:[String,Array],default:null},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String,default:function(){return Object(c["c"])(dt,"splitVariant")}},splitClass:{type:[String,Array],default:null},splitButtonType:{type:String,default:"button",validator:function(t){return Object(R["a"])(["button","submit","reset"],t)}},role:{type:String,default:"menu"},boundary:{type:[String,M["b"]],default:"scrollParent"}},pt=(V["a"],x["a"],Object(b["a"])(["menuClass","toggleClass","noCaret","role"],ft)),bt=a["a"].extend({name:"BNavItemDropdown",mixins:[V["a"],ut,x["a"]],props:pt,computed:{isNav:function(){return!0},dropdownClasses:function(){return[this.directionClass,{show:this.visible}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){return[this.toggleClass,{"dropdown-toggle-no-caret":this.noCaret}]}},render:function(t){var e=t(w["a"],{ref:"toggle",staticClass:"nav-link dropdown-toggle",class:this.toggleClasses,props:{href:"#",disabled:this.disabled},attrs:{id:this.safeId("_BV_button_"),"aria-haspopup":"true","aria-expanded":this.visible?"true":"false"},on:{click:this.toggle,keydown:this.toggle}},[this.$slots["button-content"]||this.$slots.text||t("span",{domProps:Object(z["a"])(this.html,this.text)})]),n=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,ref:"menu",attrs:{tabindex:"-1","aria-labelledby":this.safeId("_BV_button_")},on:{keydown:this.onKeydown}},!this.lazy||this.visible?this.normalizeSlot("default",{hide:this.hide}):[t()]);return t("li",{staticClass:"nav-item b-nav-dropdown dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[e,n])}});function vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(n),!0).forEach((function(e){Ot(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var mt=Object(w["b"])(),yt=a["a"].extend({name:"BDropdownItem",mixins:[x["a"]],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:gt({},mt,{variant:{type:String,default:null}}),methods:{closeDropdown:function(){var t=this;Object(G["v"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){return t("li",{attrs:{role:"presentation"}},[t(w["a"],{props:this.$props,staticClass:"dropdown-item",class:Ot({},"text-".concat(this.variant),this.variant&&!(this.active||this.disabled)),attrs:gt({},this.$attrs,{role:"menuitem"}),on:{click:this.onClick},ref:"item"},this.normalizeSlot("default"))])}}),wt=n("5843"),jt=n("c074"),kt={prefix:"fab",iconName:"font-awesome",icon:[448,512,[],"f2b4","M397.8 32H50.2C22.7 32 0 54.7 0 82.2v347.6C0 457.3 22.7 480 50.2 480h347.6c27.5 0 50.2-22.7 50.2-50.2V82.2c0-27.5-22.7-50.2-50.2-50.2zm-45.4 284.3c0 4.2-3.6 6-7.8 7.8-16.7 7.2-34.6 13.7-53.8 13.7-26.9 0-39.4-16.7-71.7-16.7-23.3 0-47.8 8.4-67.5 17.3-1.2.6-2.4.6-3.6 1.2V385c0 1.8 0 3.6-.6 4.8v1.2c-2.4 8.4-10.2 14.3-19.1 14.3-11.3 0-20.3-9-20.3-20.3V166.4c-7.8-6-13.1-15.5-13.1-26.3 0-18.5 14.9-33.5 33.5-33.5 18.5 0 33.5 14.9 33.5 33.5 0 10.8-4.8 20.3-13.1 26.3v18.5c1.8-.6 3.6-1.2 5.4-2.4 18.5-7.8 40.6-14.3 61.5-14.3 22.7 0 40.6 6 60.9 13.7 4.2 1.8 8.4 2.4 13.1 2.4 22.7 0 47.8-16.1 53.8-16.1 4.8 0 9 3.6 9 7.8v140.3z"]},Et=n("ecee"),Ct=n("ad3d");function Pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Pt(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Et["c"].add(jt["i"],kt);var St={name:"TheNavbar",data:function(){return{index:0}},computed:$t({},Object(o["e"])({navArr:function(t){return t.navbar.items},actIndex:function(t){return t.navbar.index},isBriefContent:function(t){return t.isBriefContent}})),watch:{index:function(){return this.asyUpdateNavbar(this.index)}},methods:$t({navClick:function(t){var e=this;t!=e.actIndex&&(e.index=t),e.isBriefContent||e.asyUpdateNavbar(e.index)}},Object(o["b"])(["asyUpdateNavbar"])),created:function(){this.asyUpdateNavbar(this.index)},components:{"b-navbar":p,"b-navbar-nav":y,"b-navbar-brand":$,"b-navbar-toggle":I,"b-nav-item":A,"b-nav-item-dropdown":bt,"b-dropdown-item":yt,"b-collapse":wt["a"],"font-awesome-icon":Ct["a"]}},xt=St,Tt=n("2877"),Bt=Object(Tt["a"])(xt,i,s,!1,null,null,null);e["default"]=Bt.exports},5843:function(t,e,n){"use strict";var i=n("dcb3"),s=n("90ef"),r=n("602d"),o=n("8c18"),a=n("938d"),l=n("b42e"),c=n("906c"),u=function(t){t.style.height=0,Object(c["v"])((function(){Object(c["r"])(t),t.style.height="".concat(t.scrollHeight,"px")}))},h=function(t){t.style.height=null},d=function(t){t.style.height="auto",t.style.display="block",t.style.height="".concat(Object(c["h"])(t).height,"px"),Object(c["r"])(t),t.style.height=0},f=function(t){t.style.height=null},p={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},b={enter:u,afterEnter:h,leave:d,afterLeave:f},v=i["a"].extend({name:"BVCollapse",functional:!0,props:{appear:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,i=e.data,s=e.children;return t("transition",Object(l["a"])(i,{props:p,on:b},{props:n}),s)}});n.d(e,"a",(function(){return k}));var g="bv::collapse::state",O="bv::collapse::accordion",m="bv::collapse::sync::state",y="bv::toggle::collapse",w="bv::request::collapse::state",j={passive:!0,capture:!1},k=i["a"].extend({name:"BCollapse",mixins:[s["a"],r["a"],o["a"]],model:{prop:"visible",event:"input"},props:{isNav:{type:Boolean,default:!1},accordion:{type:String,default:null},visible:{type:Boolean,default:!1},tag:{type:String,default:"div"},appear:{type:Boolean,default:!1}},data:function(){return{show:this.visible,transitioning:!1}},computed:{classObject:function(){return{"navbar-collapse":this.isNav,collapse:!this.transitioning,show:this.show&&!this.transitioning}}},watch:{visible:function(t){t!==this.show&&(this.show=t)},show:function(t,e){t!==e&&this.emitState()}},created:function(){this.show=this.visible},mounted:function(){var t=this;this.show=this.visible,this.listenOnRoot(y,this.handleToggleEvt),this.listenOnRoot(O,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(w,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&a["h"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){var e=t?c["f"]:c["e"];e(window,"resize",this.handleResize,j),e(window,"orientationchange",this.handleResize,j)},toggle:function(){this.show=!this.show},onEnter:function(t){this.transitioning=!0,this.$emit("show")},onAfterEnter:function(t){this.transitioning=!1,this.$emit("shown")},onLeave:function(t){this.transitioning=!0,this.$emit("hide")},onAfterLeave:function(t){this.transitioning=!1,this.$emit("hidden")},emitState:function(){this.$emit("input",this.show),this.$root.$emit(g,this.safeId(),this.show),this.accordion&&this.show&&this.$root.$emit(O,this.safeId(),this.accordion)},emitSync:function(){this.$root.$emit(m,this.safeId(),this.show)},checkDisplayBlock:function(){var t=Object(c["m"])(this.$el,"show");Object(c["t"])(this.$el,"show");var e="block"===Object(c["j"])(this.$el).display;return t&&Object(c["b"])(this.$el,"show"),e},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(c["j"])(this.$el).display&&(Object(c["q"])(e,".nav-link,.dropdown-item")||Object(c["c"])(".nav-link,.dropdown-item",e))&&(this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){this.accordion&&e===this.accordion&&(t===this.safeId()?this.show||this.toggle():this.show&&this.toggle())},handleResize:function(){this.show="block"===Object(c["j"])(this.$el).display}},render:function(t){var e=this,n={visible:this.show,close:function(){return e.show=!1}},i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},[this.normalizeSlot("default",n)]);return t(v,{props:{appear:this.appear},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},"59fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var i=n("dcb3"),s=n("b42e");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={tag:{type:String,default:"ul"},fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},align:{type:String,default:null},tabs:{type:Boolean,default:!1},pills:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},small:{type:Boolean,default:!1},cardHeader:{type:Boolean,default:!1}},a=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},l=i["a"].extend({name:"BNav",functional:!0,props:o,render:function(t,e){var n,i=e.props,o=e.data,l=e.children;return t(i.tag,Object(s["a"])(o,{staticClass:"nav",class:(n={"nav-tabs":i.tabs,"nav-pills":i.pills&&!i.tabs,"card-header-tabs":!i.vertical&&i.cardHeader&&i.tabs,"card-header-pills":!i.vertical&&i.cardHeader&&i.pills&&!i.tabs,"flex-column":i.vertical,"nav-fill":!i.vertical&&i.fill,"nav-justified":!i.vertical&&i.justified},r(n,a(i.align),!i.vertical&&i.align),r(n,"small",i.small),n)}),l)}})}}]);
//# sourceMappingURL=chunk-40c19998.e3bd20bc.js.map