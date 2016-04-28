"use strict";define(["modules/types/client_interaction/code_editor/controller","src/util/api","src/util/debug","src/util/sandbox","src/util/util"],function(a,b,c,d,e){function f(){a.call(this),this.currentScript=null,this.outputObject={},this.reloaded=!0,this.scriptID=0}function g(a,b){this.controller=a,this.title=String(a.module.definition.title),this.libs=b;var c=h(this),e=this.controller.module.view._code;this._sandbox=new d,this._sandbox.setContext(c);try{this.theFunction=this._sandbox.run("(function("+a.neededAliases+") {"+e+"\n})","CodeExecutor"+this.controller.module.getId())}catch(a){i(this.title,a)}this.wasSet=!1}function h(a){var c=function(b,c){a.wasSet=!0,a.doVariable(b,c)},d=function(){a.wasSet=!0,a.controller.outputObject={}},e=function(b){a.wasSet=!0,delete a.controller.outputObject[b]},f=function(b){a.done(b)},g=function(){a.async()},h=function(a,c){b.doAction(a,c)},i={variables:{},event:null,button:null,action:null,defined:0,set:c,get:function(a){var b=this.variables[a];return b?b.get():void 0},sendAction:h,setAsync:g,done:f,clear:d,unset:e},j={getVariable:function(){return i.variable},getVariables:function(){return i.variables},getEvent:function(){return i.event},getButton:function(){return i.button},getAction:function(){return i.action},getDefined:function(){return i.defined},set:c,get:function(a){return i.get(a)},sendAction:h,setAsync:g,done:f,clear:d,unset:e};return a.context=i,j}function i(a,b){var d="";b&&b.stack&&(d=b.message,b=b.stack);var e="Code executor error";a&&(e+=" ("+a+")"),d&&(e+=": "+d),c.error(e),c.warn(b)}return e.inherits(f,a),f.prototype.moduleInformation={name:"Code executor",description:"Write code that can be executed on input variable, action or just the push of a button",author:"Michaël Zasso",date:"12.01.2015",license:"MIT"},f.prototype.references={inputValue:{label:"Input value"},outputValue:{label:"Output value"}},f.prototype.events={onScriptEnded:{label:"Code execution ended",refVariable:["outputValue"]}},f.prototype.variablesIn=["inputValue"],f.prototype.actionsIn=$.extend({},f.prototype.actionsIn,{execute:"Execute the code"}),f.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{display:{type:"checkbox",title:"Display",options:{editor:"Code editor",buttons:"Buttons"},default:["editor","buttons"]},execOnLoad:{type:"checkbox",title:"Execute on load",options:{yes:"Yes"},default:[]},script:{type:"jscode",title:"Code",default:""}}},libs:{options:{type:"table",multiple:!0,title:"Required libraries"},fields:{lib:{type:"text",title:"url"},alias:{type:"text",title:"alias"}}},buttons:{options:{type:"table",multiple:!0,title:"Buttons"},fields:{name:{type:"text",title:"Name",default:"button1"},label:{type:"text",title:"Label",default:"Execute"}}}}}},f.prototype.configAliases={script:["groups","group",0,"script",0],execOnLoad:["groups","group",0,"execOnLoad",0],display:["groups","group",0,"display",0],libs:["groups","libs",0],buttons:["groups","buttons",0]},f.prototype.onButtonClick=function(a){this.initExecutor().then(function(b){b.setButton(a),b.execute()})},f.prototype.onLoadScript=function(){this.initExecutor().then(function(a){a.setLoadScript(),a.execute()})},f.prototype.onVariableIn=function(a){this.initExecutor().then(function(b){b.setVariable(a),b.execute()})},f.prototype.onActionIn=function(a,b){this.initExecutor().then(function(c){c.setAction(a,b),c.execute()})},f.prototype.initImpl=function(){var a=this.module.getConfiguration("libs"),b=[],c=[];if(a)for(var d=0;d<a.length;d++){var e=a[d];e.lib&&(b.push(e.lib),c.push(e.alias||"required_anonymous_"+d))}b.unshift("src/util/api"),c.unshift("API"),this.neededUrls=b,this.neededAliases=c.join(", "),this.resolveReady(),this.reloaded=!0,this.module.getConfigurationCheckbox("execOnLoad","yes")&&this.onLoadScript()},f.prototype.initExecutor=function(){var a,b=this.module.view._code;if(this.reloaded||this.currentScript!=b){var c=this;this.reloaded=!1;var d=new Promise(function(a,d){require(c.neededUrls,function(){for(var d=new Array(c.neededUrls.length),e=0;e<c.neededUrls.length;e++)d[e]=arguments[e];var f=new g(c,d);c.currentScript=b,c._executor=f,c._loadingExecutor=null,a(f)})});this._loadingExecutor=d,a=d}else a=Promise.resolve(this._executor||this._loadingExecutor);return a.then(function(a){return a.init(),a})},f.prototype.onGlobalPreferenceChange=function(){this.reloaded=!0},g.prototype.init=function(){this.context.event=null,this.context.button=null,this.context.action=null,this.context.variable=null,this.context.variables={},this.context.defined=0},g.prototype.setButton=function(a){this.context.event="button",this.context.button=a},g.prototype.setLoadScript=function(){this.context.event="load"},g.prototype.setVariable=function(a){this.context.variable=a,this.context.event="variable"},g.prototype.setAction=function(a,b){this.context.event="action",this.context.action={name:a,value:b}},g.prototype.doVariable=function(a,b){this.controller.outputObject[a]=b},g.prototype.execute=function(){var a=this.controller.module.view._input,b={},c=0;for(var d in a)null!=a[d]&&(c++,b[d]=a[d]);this.context.variables=b,this.context.defined=c,this.wasSet=!1,this._async=!1,this._done=Promise.resolve();try{this.theFunction.apply(this.context,this.libs)}catch(a){i(this.title,a)}this.setOutput()},g.prototype.setOutput=function(){var a=this;this._done.then(function(){a.wasSet&&a.controller.createDataFromEvent("onScriptEnded","outputValue",a.controller.outputObject)},function(b){i(a.title,b)})},g.prototype.async=function(){if(!this._async){this._async=!0;var a=this;this._done=new Promise(function(b,c){a.done=function(a){"Error"===e.objectToString(a)?c(a):b()}})}},g.prototype.done=function(){},f});