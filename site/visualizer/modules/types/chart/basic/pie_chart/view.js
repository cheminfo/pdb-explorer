"use strict";define(["modules/default/defaultview","src/util/datatraversing","src/util/api","src/util/util","lib/flot/jquery.flot","lib/flot/jquery.flot.pie"],function(a,b,c,d){function e(){}return $.extend(!0,e.prototype,a,{init:function(){this.dom||(this._id=d.getNextUniqueId(),this.dom=$('<div id="'+this._id+'"></div>').css("height","100%").css("width","100%"),this.module.getDomContent().html(this.dom)),this.dom&&this.dom.empty(),this._flot&&delete this._flot,this.loadedData=$.Deferred(),this.updateOptions(),this._data=[],this.resolveReady()},onResize:function(){var a=this;this.loadedData.done(function(){a._plot=$.plot("#"+a._id,a._data,a._options),$("#"+a._id).bind("plotclick",function(a,b,c){}),$("#"+a._id).bind("plothover",function(b,c,d){d?a.module.controller.elementHover(a._data[d.seriesIndex]):a.module.controller.elementOut()}),c.killHighlight(a.module.getId());for(var b=0;b<a._data.length;b++)a._data[b]._highlight&&!function(b){c.listenHighlight(a._data[b],function(c,d){c?a._plot.highlight(0,b):a._plot.unhighlight(0,b)},!1,a.module.getId())}(b)})},update:{chart:function(a){a&&a.value&&(this._convertChartToData(a.get()),this.loadedData.resolve(),this.onResize())},yArray:function(a){this._data=a.get(),this.loadedData.resolve(),this.onResize()}},_convertChartToData:function(a){this._data=[];var c=this;if(Array.isArray(a.data)&&a.data[0]&&Array.isArray(a.data[0].y))for(var d=a.data[0].y,e=a.data[0]._highlight,f=a.data[0].info,g=0;g<d.length;g++)this._data[g]={data:d[g]},Array.isArray(e)&&e.length>g&&(Array.isArray(e[g])?this._data[g]._highlight=e[g]:this._data[g]._highlight=[e[g]]),Array.isArray(f)&&f.length>g&&b.getValueFromJPath(f[g],"element.name").done(function(a){c._data[g].label=a,c._data[g].info=f[g]})},updateOptions:function(){this._options={grid:{clickable:!0,hoverable:!0},series:{pie:{show:!0}}};var a=$.proxy(this.module.getConfiguration,this.module);this._options.test=a("nodeSize")||1}}),e});