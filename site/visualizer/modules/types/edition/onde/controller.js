"use strict";define(["modules/default/defaultcontroller","lib/json-schema/schema"],function(a,b){function c(){}function d(a,b){if("object"===a.type&&"object"==typeof a.properties)for(var c in a.properties){a.jpath=b;var e=b.slice();e.push(c),d(a.properties[c],e)}else if("array"===a.type&&a.items){a.jpath=b;var e=b.slice();e.push("$array$"),d(a.items,e)}else a.jpath=b}return $.extend(!0,c.prototype,a),c.prototype.moduleInformation={name:"Onde form",description:"Create a form base on a schema and output an object",author:"Michaël Zasso",date:"17.04.2014",license:"MIT",cssClass:"onde"},c.prototype.initImpl=function(){this.inputSchema={},this.resolveReady()},c.prototype.references={inputValue:{label:"Input object"},outputValue:{label:"Output object"},schema:{label:"JSON schema"}},c.prototype.events={onFormSubmit:{label:"The form was submitted",refVariable:["outputValue"],refAction:["outputValue"]}},c.prototype.variablesIn=["inputValue","schema"],c.prototype.actionsIn={},c.prototype.configurationStructure=function(){return{groups:{group:{options:{type:"list"},fields:{hasButton:{type:"checkbox",title:"Export options",default:["show"],options:{show:"Show button",onload:"Export data on load"}},button_text:{type:"text",title:"Text of the export button",default:"Export"},debouncing:{type:"float",title:"Debouncing",default:-1},output:{type:"combo",title:"Output result",options:[{title:"Modified input object",key:"modified"},{title:"New object",key:"new"}],default:"new"},mode:{type:"combo",title:"Form generation",options:[{title:"Input object",key:"object"},{title:"Schema",key:"schema"},{title:"Both",key:"both"}],default:"object",displaySource:{object:"o",schema:"s",both:"b"}},schemaSource:{type:"combo",title:"Schema source",options:[{title:"Input variable",key:"variable"},{title:"Config",key:"config"}],displayTarget:["s","b"],displaySource:{config:"c"},default:"config"},schema:{type:"jscode",mode:"json",title:"JSON schema",default:"{}",displayTarget:["c"]},onchangeFilter:{type:"jscode",title:"Execute on change"}}}}}},c.prototype.configAliases={output:["groups","group",0,"output",0],mode:["groups","group",0,"mode",0],schemaSource:["groups","group",0,"schemaSource",0],schema:["groups","group",0,"schema",0],button_text:["groups","group",0,"button_text",0],hasButton:["groups","group",0,"hasButton",0],debouncing:["groups","group",0,"debouncing",0],onchangeFilter:["groups","group",0,"onchangeFilter",0]},c.prototype.getSchema=function(){var a=this.module.getConfiguration("mode"),c={};if(("object"===a||"both"===a)&&(c=b.fromObject(this.module.view.inputVal)),"schema"===a||"both"===a){var e,f=this.module.getConfiguration("schemaSource");e="variable"===f?this.inputSchema:JSON.parse(this.module.getConfiguration("schema")),$.extend(!0,c,e)}return d(c,[]),c},c.prototype.onSubmit=function(a){var b=this.module.getConfiguration("output");"new"===b?this.createDataFromEvent("onFormSubmit","outputValue",a):this.module.view.inputObj&&this.module.view.inputObj.mergeWith(a,this.module.getId()),this.sendActionFromEvent("onFormSubmit","outputValue",a)},c});