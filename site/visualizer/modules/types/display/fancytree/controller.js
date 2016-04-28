"use strict";define(["modules/default/defaultcontroller"],function(a){function b(){}return $.extend(!0,b.prototype,a),b.prototype.moduleInformation={name:"Hierarchical structure",description:"Displays a hierarchical structure",author:"Michaël Zasso",date:"02.06.2014",license:"MIT",cssClass:"fancytree"},b.prototype.references={tree:{label:"Hierarchical structure (tree)",type:"tree"},nodeData:{label:"Node data"}},b.prototype.variablesIn=["tree"],b.prototype.events={onActivate:{label:"Select a node",refVariable:["nodeData"]}},b.prototype.configurationStructure=function(){var a=this.module.model.getjPath("nodeData");return{groups:{group:{options:{type:"list",multiple:!1},fields:{expand:{type:"combo",title:"Auto-expand children",default:"none",options:[{title:"None",key:"none"},{title:"First level",key:"lvl1"},{title:"All nodes",key:"all"}]}}},cols:{options:{type:"table",multiple:!0,title:"Columns"},fields:{name:{type:"text",title:"Columns title"},jpath:{type:"combo",title:"jPath",options:a},width:{type:"text",title:"Width"}}}}}},b.prototype.configAliases={columns:["groups","cols",0],expand:["groups","group",0,"expand",0]},b.prototype.onActivate=function(a){this.createDataFromEvent("onActivate","nodeData",a)},b});