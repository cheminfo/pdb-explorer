"use strict";define(["modules/default/defaultview","forms/button","src/util/ui"],function(a,b,c){function d(){}return $.extend(!0,d.prototype,a,{init:function(){var a,d=this;this.dom=$("<div></div>");var e=this.module.getConfiguration("toggle");a="toggle"===e&&"off"===this.module.getConfiguration("startState")?this.module.getConfiguration("offLabel"):"toggle"===e&&"on"===this.module.getConfiguration("startState")?this.module.getConfiguration("onLabel"):this.module.getConfiguration("label");var f=new b(a,function(a,b){var g=Promise.resolve(!0);d.module.getConfigurationCheckbox("askConfirm","yes")&&(g=c.confirm(d.module.getConfiguration("confirmText"),d.module.getConfiguration("okLabel"),d.module.getConfiguration("cancelLabel"))),g.then(function(a){a&&(b||"toggle"!==e?"toggle"===e&&(f.setTitle(d.module.getConfiguration("onLabel")),d.setButtonColor(d.module.getConfiguration("onColor"))):(f.setTitle(d.module.getConfiguration("offLabel")),d.setButtonColor(d.module.getConfiguration("offColor"))),d.module.controller.onClick(b))})},{color:"Grey",disabled:!1,checkbox:"click"!==this.module.getConfiguration("toggle"),value:"on"===this.module.getConfiguration("startState")});this.module.getDomContent().html(this.dom),this.dom.html(f.render()),this.button=f,"toggle"===e&&d.setButtonColor(d.module.getConfiguration("offColor")),this.resolveReady()},setButtonColor:function(a){a="rgba("+a.join(",")+")",this.button.setColorCss(a)}}),d});