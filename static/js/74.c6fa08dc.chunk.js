(this["webpackJsonpiwatchtv_02-07-20_930pm"]=this["webpackJsonpiwatchtv_02-07-20_930pm"]||[]).push([[74],{350:function(t,o,e){"use strict";e.r(o),e.d(o,"ion_tab_bar",(function(){return a})),e.d(o,"ion_tab_button",(function(){return l}));var n=e(51),i=e(13),r=e(383),a=function(){function t(t){Object(n.l)(this,t),this.keyboardVisible=!1,this.translucent=!1,this.ionTabBarChanged=Object(n.d)(this,"ionTabBarChanged",7)}return t.prototype.selectedTabChanged=function(){void 0!==this.selectedTab&&this.ionTabBarChanged.emit({tab:this.selectedTab})},t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout((function(){return t.keyboardVisible=!1}),50)},t.prototype.onKeyboardWillShow=function(){"top"!==this.el.getAttribute("slot")&&(this.keyboardVisible=!0)},t.prototype.componentWillLoad=function(){this.selectedTabChanged()},t.prototype.render=function(){var t,o=this.color,e=this.translucent,i=this.keyboardVisible,a=Object(n.e)(this);return Object(n.i)(n.a,{role:"tablist","aria-hidden":i?"true":null,class:Object.assign(Object.assign({},Object(r.a)(o)),(t={},t[a]=!0,t["tab-bar-translucent"]=e,t["tab-bar-hidden"]=i,t))},Object(n.i)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--color:var(--ion-tab-bar-color,var(--ion-color-step-450,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:50px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb,255,255,255),0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb),.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){var o=this;Object(n.l)(this,t),this.disabled=!1,this.selected=!1,this.onKeyUp=function(t){"Enter"!==t.key&&" "!==t.key||o.selectTab(t)},this.onClick=function(t){o.selectTab(t)},this.ionTabButtonClick=Object(n.d)(this,"ionTabButtonClick",7)}return t.prototype.onTabBarChanged=function(t){this.selected=this.tab===t.detail.tab},t.prototype.componentWillLoad=function(){void 0===this.layout&&(this.layout=i.b.get("tabButtonLayout","icon-top"))},t.prototype.selectTab=function(t){void 0!==this.tab&&(this.disabled||this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),t.preventDefault())},Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tabIndex",{get:function(){return this.disabled?-1:this.el.hasAttribute("tabindex")?this.el.getAttribute("tabindex"):0},enumerable:!0,configurable:!0}),t.prototype.render=function(){var t,o=this,e=o.disabled,i=o.hasIcon,r=o.hasLabel,a=o.tabIndex,l=o.href,s=o.rel,d=o.target,b=o.layout,c=o.selected,u=o.tab,h=Object(n.e)(this),p={download:this.download,href:l,rel:s,target:d};return Object(n.i)(n.a,{onClick:this.onClick,onKeyup:this.onKeyUp,role:"tab",tabindex:a,"aria-selected":c?"true":null,id:void 0!==u?"tab-button-"+u:null,class:(t={},t[h]=!0,t["tab-selected"]=c,t["tab-disabled"]=e,t["tab-has-label"]=r,t["tab-has-icon"]=i,t["tab-has-label-only"]=r&&!i,t["tab-has-icon-only"]=i&&!r,t["tab-layout-"+b]=!0,t["ion-activatable"]=!0,t["ion-selectable"]=!0,t["ion-focusable"]=!0,t)},Object(n.i)("a",Object.assign({},p,{tabIndex:-1}),Object(n.i)("slot",null),"md"===h&&Object(n.i)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}::slotted(ion-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-icon){margin-top:4px;font-size:30px}::slotted(ion-icon:before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:calc(50% + 35px);top:10px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:calc(50% + 30px);top:10px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"},enumerable:!0,configurable:!0}),t}()},383:function(t,o,e){"use strict";e.d(o,"a",(function(){return r})),e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return i})),e.d(o,"d",(function(){return s}));var n=e(1),i=function(t,o){return null!==o.closest(t)},r=function(t){var o;return"string"===typeof t&&t.length>0?((o={"ion-color":!0})["ion-color-"+t]=!0,o):void 0},a=function(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return o[t]=!0})),o},l=/^[a-z][a-z0-9+\-.]*:/,s=function(t,o,e){return Object(n.__awaiter)(void 0,void 0,void 0,(function(){var i;return Object(n.__generator)(this,(function(n){return null!=t&&"#"!==t[0]&&!l.test(t)&&(i=document.querySelector("ion-router"))?(null!=o&&o.preventDefault(),[2,i.push(t,e)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=74.c6fa08dc.chunk.js.map