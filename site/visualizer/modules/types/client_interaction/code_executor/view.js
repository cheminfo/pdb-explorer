"use strict";define(["modules/default/defaultview","src/util/util","ace/ace","src/util/context","jquery"],function(a,b,c,d,e){function f(){}return e.extend(!0,f.prototype,a),f.prototype.init=function(){this._id=b.getNextUniqueId(),this._code="";var a=this.table=e("<table>").css({height:"100%",width:"100%"}),c=e("<tr>").appendTo(a).css("height","auto");this.buttonRow=e("<tr>").appendTo(a).css("height","30px"),this.editorCell=e("<td>").css("height","100%").appendTo(c),this.buttonCell=e("<td>").appendTo(this.buttonRow).css("text-align","center"),this._input={},this.module.getDomContent().html(a)},f.prototype.inDom=function(){var a=this,b=this.module.getConfiguration("script")||"";if(this._code=b,this.module.getConfigurationCheckbox("display","editor")&&(e('<div id="'+this._id+'"></div>').css("height","100%").css("width","100%").appendTo(this.editorCell),this.editor=c.edit(this._id),this.editor.$blockScrolling=1/0,this.editor.getSession().setMode("./mode/javascript"),this.editor.setValue(b,-1),this.editor.getSession().on("change",this.editorChanged.bind(this))),this.module.getConfigurationCheckbox("display","buttons")){var d=this.module.getConfiguration("buttons");d?d.forEach(function(b,c){var d=a.module.controller.onButtonClick.bind(a.module.controller,b.name);a.buttonCell.append(e("<span>"+b.label+"</span>").addClass("form-button").on("click",d)),0===c&&a.editor&&a.editor.commands.addCommand({name:"run",bindKey:{win:"Ctrl-Return",mac:"Command-Return"},exec:d})}):this.buttonRow.css("height",0)}else this.buttonRow.css("height",0);this.resolveReady()},f.prototype.onResize=function(){this.editor&&this.editor.resize()},f.prototype.editorChanged=function(){var a=this.editor.getValue();this._code=a,this.module.definition.configuration.groups.group[0].script[0]=a},f.prototype.blank.inputValue=function(a){this._input[a]=null},f.prototype.update.inputValue=function(a,b){this._input[b]=a,this.module.controller.onVariableIn(b)},f.prototype.onActionReceive.execute=function(a,b){this.module.controller.onActionIn(b,a)},f});