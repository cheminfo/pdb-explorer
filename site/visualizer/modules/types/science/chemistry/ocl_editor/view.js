"use strict";define(["modules/default/defaultview","src/util/util","openchemlib/openchemlib-full"],function(a,b,c){function d(){this.id=b.getNextUniqueId()}return $.extend(!0,d.prototype,a,{init:function(){this.editor=null},inDom:function(){this.dom=$("<div>").attr("id",this.id).css({height:"99%",width:"100%"}),this.module.getDomContent().html(this.dom)},onResize:function(){this.editor||this.initEditor()},blank:{mol:function(){this.clearEditor()},smiles:function(){this.clearEditor()},actid:function(){this.clearEditor()}},update:{mol:function(a){this.editor.setMolFile(String(a.get()))},smiles:function(a){this.editor.setSmiles(String(a.get()))},actid:function(a){var b=String(a.get());b.coordinates&&(b+=" "+b.coordinates),this.editor.setIDCode(b)}},initEditor:function(){this.editor=c.StructureEditor.createEditor(this.id),this.editor.setChangeListenerCallback(this.module.controller.onChange.bind(this.module.controller)),this.resolveReady()},clearEditor:function(){this.editor.setIDCode("")}}),d});