"use strict";define(["src/util/ui","src/header/components/default","src/util/util"],function(a,b,c){function d(){}return c.inherits(d,b,{initImpl:function(){this.dialogOptions={title:"Share view",width:550,height:170}},_onClick:function(){a.couchShare(this.options,this.dialogOptions)}}),d});