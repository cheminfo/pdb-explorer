"use strict";define(["jquery","src/util/ui","src/header/components/default","./../../util/couchshare","forms/button","src/util/util"],function(a,b,c,d,e,f){function g(){}var h={couchUrl:"http://visualizer.epfl.ch",database:"x",tinyUrl:"http://visualizer.epfl.ch/tiny"};return f.inherits(g,c,{initImpl:function(){},_onClick:function(){b.feedback(this.options,h)}}),g});