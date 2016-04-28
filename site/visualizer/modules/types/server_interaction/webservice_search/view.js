"use strict";define(["modules/default/defaultview","src/util/ui"],function(a,b){function c(){}return $.extend(!0,c.prototype,a,{init:function(){var a,c=this,d=$.proxy(this.module.getConfiguration,this.module);if(this.dom=$("<div></div>"),this.search=$('<table class="Search" cellpadding="5" cellspacing="0"><col width="100"><col width="*"></table>').css("width","90%"),this.dom.append(this.search),this.$feedback=$('<div id="ci-webservice-search-feedback"/>'),this.dom.append(this.$feedback),this.module.getDomContent().html(this.dom),this.oldVal={},this._url=!1,a=d("searchparams")){for(var e in a)e&&a[e].label&&this.search.append("<tr><td><nobr>"+a[e].label+"</nobr></td><td>"+this._makeFormEl(a[e],e)+"</td></tr>");d("url");this.button=d("button",!1),this.button&&require(["forms/button"],function(a){c.search.append((c.buttonInst=new a(d("buttonlabel")||"Search",function(){var a=Promise.resolve(!0);c.module.getConfigurationCheckbox("askConfirm","yes")&&(a=b.confirm(c.module.getConfiguration("confirmText"))),a.then(function(a){a&&c.module.controller.doSearch()})})).render())}),this.search.on("keyup","input[type=text], textarea",function(a){var b=$(this),d=b.val();"float"===b.attr("data-type")&&(d=parseFloat(d));var e=b.attr("name");return c.oldVal[e]&&c.oldVal[e]===d||b.trigger("change"),void 0!==e&&c.module.controller.addValue({name:e,destination:b.attr("data-dest")},d),c.button?void(c.buttonInst&&13==a.keyCode&&c.module.controller.doSearch()):void c.module.controller.doSearch()}),this.search.on("change","select",function(){var a=$(this),b=a.val();"float"===a.attr("data-type")&&(b=parseFloat(b));var d=a.attr("name");void 0!==d&&c.module.controller.addValue({name:d,destination:a.attr("data-dest")},b),c.button||c.module.controller.doSearch()}),this.search.on("change","input[type=checkbox]",function(){var a=$(this),b=a.is(":checked"),d=a.attr("name");void 0!==d&&c.module.controller.addValue({name:d,destination:a.attr("data-dest")},b),c.button||c.module.controller.doSearch()})}this.resolveReady()},_makeFormEl:function(a,b){var c='name="'+a.name+'" data-dest="'+a.destination+'" data-type="'+a.fieldtype+'"';switch(a.fieldtype){case"combo":var d,e=(a.fieldoptions||"").split(";"),f="";f+="<option "+(""==a.defaultvalue?'selected="selected" ':"")+'value=""></option>';for(var g=0,h=e.length;h>g;g++)d=e[g].split(":"),f+="<option "+(a.defaultvalue==d[0]?'selected="selected" ':"")+'value="'+d[0]+'">'+(d[1]||d[0])+"</option>";return"<select "+c+">"+f+"</select>";case"checkbox":return'<input type="checkbox" '+(a.defaultvalue?'checked="checked"':"")+' value="1" offvalue="0" '+c+" />";case"textarea":return"<textarea "+c+' style="width: 100%" '+(a.fieldoptions||"")+">"+(a.defaultvalue||"")+"</textarea>";default:case"float":case"text":return'<input type="text" value="'+(a.defaultvalue||"")+'" '+c+' style="width: 100%" />'}},inDom:function(){this.search.find("input:last").trigger("change")},lock:function(){this.locked=!0,this.buttonInst&&(this.buttonInst.setTitle(this.module.getConfiguration("buttonlabel_exec","Loading...")||"Loading..."),this.buttonInst.disable())},unlock:function(){this.locked=!1,this.buttonInst&&(this.buttonInst.setTitle(this.module.getConfiguration("buttonlabel","Search")||"Search"),this.buttonInst.enable())},update:{vartrigger:function(a){void 0!=a&&this.module.controller.doSearch()},url:function(a){this._url=a.get()}},onActionReceive:{doSearch:function(){this.module.controller.doSearch()},buttonColor:function(a){this.buttonInst&&this.buttonInst.setColor(a)}},showError:function(){this.$feedback.html("Error").css("color","red"),this._feedbackTimeout()},showSuccess:function(a){this.$feedback.html("Request successful with status "+a).css("color","green"),this._feedbackTimeout()},_feedbackTimeout:function(){var a=this;this._ftimeout&&clearTimeout(this._ftimeout),this._ftimeout=setTimeout(function(){a.$feedback.html("")},5e3)}}),c});