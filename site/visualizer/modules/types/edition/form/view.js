"use strict";define(["modules/default/defaultview","src/util/datatraversing","src/util/api"],function(a,b,c){function d(){}return $.extend(!0,d.prototype,a,{init:function(){this.dom=$("<div />"),this.module.getDomContent().html(this.dom),this.callback=null},inDom:function(){var a,b,c,d=this,e=this.module.getConfiguration("structure"),f=this.module.getConfiguration("tpl_file"),g=this.module.getConfiguration("tpl_html");try{b=JSON.parse(e)}catch(a){return}c=f?$.get(f,{}):g,require(["./forms/form"],function(e){$.when(c).done(function(c){a=new e({}),a.init({onValueChanged:function(a,b){b.field.options.jpath}}),a.setStructure(b),a.onStructureLoaded().done(function(){a.fill({})}),a.onLoaded().done(function(){a.setTpl(c),d.dom.html(a.makeDomTpl()),a.inDom(),d.resolveReady()})})}),this.form=a}}),d});