define(["../../../default/defaultcontroller","src/util/api","src/util/datatraversing","src/util/urldata"],function(a,b,c,d){function e(){}return e.prototype=$.extend(!0,{},a,{initimpl:function(){this.searchTerms={};var a;if(a=this.module.getConfiguration("searchparams"))for(var b in a)b&&(this.searchTerms[a[b].name]=a[b].defaultvalue);this.result=null,this.request=null,this.module.getConfiguration("onloadsearch")&&this.doSearch()},doSearch:function(){var a=this,b={},b=a.searchTerms;if(this.module.view.lock(),a.module.resultfilter){var c=a.module.resultfilter(b);c&&(b=c)}a.module.view.unlock(),"object"==typeof b&&(b=new DataObject.check(b,!0)),a.onSearchDone(b)},onSearchDone:function(a){var b=this;b.result=a,b.module.model.data=a,this.setVarFromEvent("onSearchReturn",a)},configurationSend:{events:{onSearchReturn:{label:"An edition has been completed",description:""}},rels:{results:{label:"Results",description:""}}},configurationReceive:{vartrigger:{type:[],label:"A variable to trigger the search",description:""}},moduleInformations:{name:"Var Editor"},configurationStructure:function(a){return{groups:{group:{options:{type:"list"},fields:{button:{type:"checkbox",title:"Search button",options:{button:""}},buttonlabel:{type:"text",title:"Button text"},buttonlabel_exec:{type:"text",title:"Button text (executing)"},onloadsearch:{type:"checkbox",title:"Make one query on load",options:{button:""}},resultfilter:{type:"jscode",title:"Result data filter",default:"/**\r\ndata.result = parseInt(data.var1)+parseInt(data.var2);\r\nreturn data;\r\n*/"}}},searchparams:{options:{type:"table",multiple:!0,title:"Variable creation parameters"},fields:{name:{type:"text",title:"Term name"},label:{type:"text",title:"Term label"},defaultvalue:{type:"text",title:"Default value"},fieldtype:{type:"combo",title:"Field type",options:[{key:"text",title:"Text"},{key:"combo",title:"Combo"},{key:"checkbox",title:"Checkbox"}]},fieldoptions:{type:"text",title:"Field options (a:b;)"}}}}}},configFunctions:{button:function(a){return a.indexOf("button")>-1}},configAliases:{button:["groups","group",0,"button",0],searchparams:["groups","searchparams",0],buttonlabel:["groups","group",0,"buttonlabel",0],buttonlabel_exec:["groups","group",0,"buttonlabel_exec",0],onloadsearch:["groups","group",0,"onloadsearch",0,0],resultfilter:["groups","group",0,"resultfilter",0]},export:function(){}}),e});