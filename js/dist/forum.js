module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,o){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,e,o){"use strict";o.r(e);var n=o(2),i=o(0),r=o.n(i),a=o(3),u=o.n(a),s=o(1),l=o(4),p=o.n(l),c=o(5),d=o.n(c),f=o(6),h=o.n(f),g=o(7),b=o.n(g),v=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var o=e.prototype;return o.init=function(){this.textAreaObj=null,this.loading=!1},o.view=function(){return m("div",{className:"Button hasIcon irony-github-upload-button Button--icon"},[this.loading?b.a.component({className:"Button-icon"}):d()("far fa-file",{className:"Button-icon"}),m("span",{className:"Button-label"},this.loading?r.a.translator.trans("flarum-ext-github-upload.forum.states.loading"):r.a.translator.trans("flarum-ext-github-upload.forum.buttons.attach")),m("form#irony-github-upload-form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},o.process=function(t){var e=$(t.target)[0].files;this.loading=!0,m.redraw(),this.uploadFiles(e,this.success,this.failure)},o.uploadFiles=function(t,e,o){for(var n=new FormData,i=0;i<t.length;i++)n.append("files[]",t[i]);return r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/irony/github/upload",serialize:function(t){return t},data:n}).then(this.success.bind(this),this.failure.bind(this))},o.alertNotice=function(t,e){var o;r.a.alerts.show(o=new h.a({type:t,children:e})),setTimeout((function(){r.a.alerts.dismiss(o)}),3e3)},o.failure=function(t){this.alertNotice("error",t)},o.success=function(t){var e=this;t.forEach((function(t){e.textAreaObj.insertAtCursor(t+"\n")})),void 0!==this.textAreaObj.props.preview&&this.textAreaObj.props.preview(),setTimeout((function(){document.getElementById("irony-github-upload-form").reset(),e.loading=!1}),1e3)},e}(p.a),y=function(){function t(t){this.initialized||(this.uploadButton=t,this.textarea=$("#composer .Composer"),$(this.textarea).on("dragover",this.in.bind(this)),$(this.textarea).on("dragleave",this.out.bind(this)),$(this.textarea).on("dragend",this.out.bind(this)),$(this.textarea).on("drop",this.dropping.bind(this)),this.isDropping=this.over=!1,this.initialized=!0)}var e=t.prototype;return e.in=function(t){t.preventDefault(),this.over||(this.textarea.toggleClass("irony-github-upload-dragging",!0),this.over=!0)},e.out=function(t){t.preventDefault(),this.over&&(this.textarea.toggleClass("irony-github-upload-dragging",!1),this.over=!1)},e.dropping=function(t){var e=this;t.preventDefault(),this.isDropping||(this.isDropping=!0,this.textarea.addClass("irony-github-upload-dropping"),m.redraw(),this.uploadButton.uploadFiles(t.originalEvent.dataTransfer.files).then((function(){e.textarea.removeClass("irony-github-upload-dropping"),e.isDropping=!1})))},t}(),x=function(){function t(t){this.initialized||(this.uploadButton=t,document.addEventListener("paste",this.paste.bind(this)))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var e=t.clipboardData.items,o=[],n=0;n<e.length;n++)-1!==e[n].type.indexOf("image")&&o.push(e[n].getAsFile());o.length>0&&(m.redraw(),this.uploadButton.uploadFiles(o))}},t}();r.a.initializers.add("irony-github-upload",(function(t){var e,o,i;Object(n.extend)(u.a.prototype,"controlItems",(function(o){t.forum.attribute("canUpload")&&((e=new v).textAreaObj=this,o.add("irony-github-upload",e,0),$(".Button-label",".item-irony-github-upload > div").hide(),$(".item-irony-github-upload > div").hover((function(){$(".Button-label",this).show(),$(this).removeClass("Button--icon")}),(function(){$(".Button-label",this).hide(),$(this).addClass("Button--icon")})))})),Object(n.extend)(u.a.prototype,"configTextarea",(function(){t.forum.attribute("canUpload")&&(o||(o=new y(e)),i||(i=new x(e)))}))}))}]);
//# sourceMappingURL=forum.js.map