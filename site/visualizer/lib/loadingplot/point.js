"use strict";define(["src/util/api","src/util/util"],function(a,b){function c(){}function d(a,b,c,d){this.construct(a,b,c,d),this._displayed=!0,this._labelVisible=!0,this.g=this.createElement("g"),this._a=this.createElement("circle",{cx:0,cy:0,r:1,fill:d.c,opacity:d.o,transform:"translate("+b+" "+c+") rotate( "+d.a+") scale("+d.w+" "+d.h+")"},!1),this._b=this.createElement("circle",{cx:0,cy:0,r:1,fill:"transparent",stroke:d.c,"vector-effect":"non-scaling-stroke",transform:"translate("+b+" "+c+") rotate( "+d.a+") scale("+d.w+" "+d.h+")"},!1),this.g.appendChild(this._a),this.g.appendChild(this._b),this.writeLabel(),this.changeZoom(),this._data=d}function e(a,b,c,d){this.construct(a,b,c,d),this._displayed=!0,this._labelVisible=!0,this.g=this.createElement("g"),this._i=this.createElement("image",{x:0,y:0,width:1,height:1,transform:"translate("+b+" "+c+") rotate( "+d.a+") scale("+d.w+" "+d.h+")"},!1,!1),this.g.appendChild(this._i),this.writeLabel(),this.changeZoom(),this._data=d}function f(a,b,c,d){this.construct(a,b,c,d),this.pieElements=[],this._chart=d.chart,this._displayed=!0,this._failure={},this.charthashmap={},this._rmin=1,this._rzoom0=3,this._rthresh=10,this._rmaxpie=30,this._circleSlope=(this._rzoom0-this._rmin)/this.svg._izoom,this._zoomThresh=(this._rthresh-this._rzoom0)/this._circleSlope,this._lastAngle=0,this._circle=this.createElement("circle",{fill:d.c,stroke:"black","vector-effect":"non-scaling-stroke",cx:this._x,cy:this._y,r:.01}),this._g=this.createElement("g",{transform:"translate("+this._x+", "+this._y+")"}),this.writeLabel(),this.changeZoom(this.svg._izoom)}return c.prototype.construct=function(a,b,c,d){this.svg=a,this._x=b,this._y=c,this._data=d,this._label=null,this._line=null,this._visibility={filter:!0,zoom:!1,force:!1},this._fontsize=12,this.highlightMag=1,this._highlightgroup=this.createElement("g",{class:"highlightgroup"},!1,!0),this._labelVisible=!0,this._zoomThreshLabel=1500,this.allowLabelScale=!1,this.highlightEffect={}},c.prototype.createElement=function(a,b,c,d){var e=document.createElementNS("http://www.w3.org/2000/svg",a);for(var f in b)e.setAttributeNS(null,f,b[f]);return this._nodes=this._nodes||[],c||(d?this._nodes.push(e):this._highlightgroup.appendChild(e)),e},c.prototype.setLabelDisplayThreshold=function(a){this._zoomThreshLabel=parseFloat(a),this.changeZoom()},c.prototype.setLabelStroke=function(a){this._labelStroke=a,this._label&&this._labelStroke&&(this._label.setAttributeNS(null,"stroke","black"),this._label.setAttributeNS(null,"stroke-width",1/this.svg._zoom))},c.prototype.allowLabelDisplay=function(a){this.allowLabelDisplay=a},c.prototype.setLabelScale=function(a){this.allowLabelScale=a},c.prototype.setHighlightMag=function(a){this.highlightMag=a},c.prototype.setHighlightEffect=function(a){this.highlightEffect=a},c.prototype.labelVisibility=function(){this._visibility.filter&&this._visibility.zoom||this._visibility.force?(this._labelVisible||(this._line&&this._line.setAttributeNS(null,"display","block"),this._label&&(this._label.setAttributeNS(null,"pointer-events","none"),this._label.setAttributeNS(null,"display","block"),this._labelVisible=!0)),this._label.setAttributeNS(null,"stroke-width",1/this.svg._zoom),this._label.setAttributeNS(null,"font-size",this._fontsize/(this.allowLabelScale?this.svg._izoom:this.svg._zoom))):this._labelVisible&&(this._label&&(this._labelVisible=!1,this._label.setAttributeNS(null,"display","none")),this._line&&this._line.setAttributeNS(null,"display","none"))},c.prototype.isLabelVisible=function(){return this._labelVisible},c.prototype.doDisplayLabel=function(a){this._visibility.zoom=a,this.labelVisibility()},c.prototype.forceField=function(a){this._forceField=a},c.prototype.setLabelSize=function(a){this._label&&this._label.setAttributeNS(null,"font-size",a/this.svg._zoom),this._fontsize=a},c.prototype.createLabel=function(a,b,c){var d=document.createElementNS("http://www.w3.org/2000/svg","text");return d.textContent=c,d.setAttributeNS(null,"x",a),d.setAttributeNS(null,"y",b),d.setAttributeNS(null,"fill",this._lc||this._data.lc||"black"),this.labelVisibility(),this._label=d,d},c.prototype.getX=function(){return this._x},c.prototype.getY=function(){return this._y},c.prototype.changeZoom=function(){},c.prototype.inDom=function(){},c.prototype.mouseover=function(){var b=this;a.highlight(b._data,1),this.hoverCallback&&this.hoverCallback.call(this)},c.prototype.mouseout=function(){var b=this;a.highlight(b._data,0)},c.prototype.doLine=function(){var a=document.createElementNS("http://www.w3.org/2000/svg","line");return this._line=a,this._nodes.push(a),a},c.prototype.writeLabel=function(){this._data.l&&(this._label=this.createLabel(this._x,this._y,this._data.l),this.doLine())},c.prototype.setColor=function(a){this._color=a,this._a.setAttributeNS(null,"fill",a),this._b.setAttributeNS(null,"stroke",a)},c.prototype.highlight=function(a){a?(this._highlightgroup.setAttributeNS(null,"transform","translate("+this._x+", "+this._y+") scale("+this.highlightMag+") translate("+-this._x+", "+-this._y+")"),this._visibility.force=!0,this.labelVisibility(),this._label.setAttributeNS(null,"font-size",this._fontsize*this.highlightMag/this.svg._zoom)):(this._highlightgroup.removeAttributeNS(null,"transform"),this._visibility.force=!1,this.labelVisibility(),this._label.setAttributeNS(null,"font-size",this._fontsize/this.svg._zoom)),this.implHighlight&&this.implHighlight(a),this.svg.timeSpringUpdate(200)},b.inherits(d,c),d.prototype.filter=function(a){void 0!=a[this._data.n]&&(this._a.setAttributeNS(null,"display",a[this._data.n]?"block":"none"),this._b.setAttributeNS(null,"display",a[this._data.n]?"block":"none"),this._visibility.filter=!!a[this._data.n],this.labelVisibility())},d.prototype.getOptimalSpringParameter=function(){return 1.2*Math.max(this._data.w,this._data.h)},d.prototype.inDom=function(){this._highlightgroup.setAttributeNS(null,"data-id",this.id)},d.prototype.changeZoom=function(){this.doDisplayLabel(this.svg._zoom>=this._zoomThreshLabel)},d.prototype.implHighlight=function(a){this.highlightEffect.yStroke&&(a?(this._b.setAttributeNS(null,"stroke","yellow"),this._b.setAttributeNS(null,"stroke-width","5px")):(this._b.setAttributeNS(null,"stroke",this._data.c),this._b.setAttributeNS(null,"stroke-width","1px")))},d.prototype.getCoordsSprings=function(a){if(this._forceField){if(!this._labelSpringEl){var b=new ArrayBuffer(36);this._labelSpringEl=new Float32Array(b),this._labelSpringEl[0]=this._x+1.2*Math.max(this._data.w,this._data.h),this._labelSpringEl[1]=this._y,this._labelSpringEl[2]=0,this._labelSpringEl[3]=this._fontsize/this.svg._zoom,this._labelSpringEl[4]=this._x,this._labelSpringEl[5]=this._y,this._labelSpringEl[6]=0,this._labelSpringEl[7]=0}return this.isLabelVisible()&&this._label?((isNaN(this._labelSpringEl[0])||isNaN(this._labelSpringEl[1]))&&(this._labelSpringEl[0]=this._x+1.2*Math.max(this._data.w,this._data.h),this._labelSpringEl[1]=this._y),this._labelSpringEl[2]=this._label.getComputedTextLength(),this._labelSpringEl[3]=this._fontsize/this.svg._zoom,this._labelSpringEl[8]=this.getOptimalSpringParameter(),a.push(this._labelSpringEl),[this._label,this._line]):void 0}},b.inherits(e,c),e.prototype.filter=function(a){void 0!=a[this._data.n]&&(this._i.setAttributeNS(null,"display",a[this._data.n]?"block":"none"),this._visibility.filter=!!a[this._data.n],this.labelVisibility())},e.prototype.getOptimalSpringParameter=function(){return 1.2*Math.max(this._data.w,this._data.h)},e.prototype.inDom=function(){this._highlightgroup.setAttributeNS(null,"data-id",this.id),this._i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",this._data.iu)},e.prototype.changeZoom=function(){this.doDisplayLabel(this.svg._zoom>=this._zoomThreshLabel)},e.prototype.implHighlight=function(a){},e.prototype.getCoordsSprings=function(a){if(this._forceField){if(!this._labelSpringEl){var b=new ArrayBuffer(36);this._labelSpringEl=new Float32Array(b),this._labelSpringEl[0]=this._x+1.2*Math.max(this._data.w,this._data.h),this._labelSpringEl[1]=this._y,this._labelSpringEl[2]=0,this._labelSpringEl[3]=this._fontsize/this.svg._zoom,this._labelSpringEl[4]=this._x,this._labelSpringEl[5]=this._y,this._labelSpringEl[6]=0,this._labelSpringEl[7]=0}return this.isLabelVisible()&&this._label?((isNaN(this._labelSpringEl[0])||isNaN(this._labelSpringEl[1]))&&(this._labelSpringEl[0]=this._x+1.2*Math.max(this._data.w,this._data.h),this._labelSpringEl[1]=this._y),this._labelSpringEl[2]=this._label.getComputedTextLength(),this._labelSpringEl[3]=this._fontsize/this.svg._zoom,this._labelSpringEl[8]=this.getOptimalSpringParameter(),a.push(this._labelSpringEl),[this._label,this._line]):void 0}},b.inherits(f,c),f.prototype.inDom=function(){if(this._chart){this._highlightgroup.setAttributeNS(null,"data-id",this.id);for(var a=0;a<this._chart.length;a++){this.charthashmap[this._chart[a].n]=this._chart[a].v;var b=this.createElement("path",{fill:this._chart[a].c,stroke:"black","stroke-width":1,"stroke-linejoin":"round","vector-effect":"non-scaling-stroke"},!1);this._g.appendChild(b),this.pieElements.push(b)}this.drawPie()}},f.prototype.getPiePart=function(a){var b=1,c=Math.cos(this._lastAngle)*b,d=Math.sin(this._lastAngle)*b;this._lastAngle+=-2*Math.PI*a.v;var e=Math.cos(this._lastAngle)*b-c,f=Math.sin(this._lastAngle)*b-d;return"M 0, 0 l "+c+" "+d+" a "+b+", "+b+" 0 "+(a.v>.5?1:0)+", 0 "+e+", "+f+" z"},f.prototype.drawPie=function(){for(var a=0,b=this.pieElements.length;b>a;a++)this.pieElements[a].setAttributeNS(null,"d",this.getPiePart(this._data.chart[a]))},f.prototype.setPieVisibility=function(a){this._pieVisible=a,this._displayed&&this._g.setAttributeNS(null,"display",a?"block":"none")},f.prototype.setCircleVisibility=function(a){this._displayed&&this._circle.setAttributeNS(null,"display",a?"block":"none")},f.prototype.changeZoom=function(){var a=this.svg._zoom;if(a<this._zoomThresh)this.setPieVisibility(!1),this.setCircleVisibility(!0),this._pieradius=!1,this._currentEl=this._circle,this._circleradius=this._rmin+this._circleSlope*a,this._lastRadius=this._circleradius/a;else{this._pieVisible||(this.setPieVisibility(!0),this.setCircleVisibility(!1));var b=this._rmin+this._circleSlope*a;b>this._rmaxpie&&(b=this._rmaxpie),this._lastRadius=b/a,this._g.setAttributeNS(null,"transform","translate("+this._x+" "+this._y+") scale("+this._lastRadius+")"),this._currentEl=this._g}this._circle.setAttributeNS(null,"r",this._lastRadius),this.doDisplayLabel(a>=this._zoomThreshLabel)},f.prototype.getOptimalSpringParameter=function(){return 1.5*this._lastRadius},f.prototype.getCoordsSprings=function(a){if(this._forceField){if(!this._labelSpringEl){var b=new ArrayBuffer(36);this._labelSpringEl=new Float32Array(b),this._labelSpringEl[0]=this._x+1.2*Math.max(this._data.w,this._data.h),this._labelSpringEl[1]=this._y,this._labelSpringEl[2]=0,this._labelSpringEl[3]=0,this._labelSpringEl[4]=this._x,this._labelSpringEl[5]=this._y,this._labelSpringEl[6]=0,this._labelSpringEl[7]=0}return this.isLabelVisible()&&this._label?(this._labelSpringEl[2]=this._label.getComputedTextLength(),this._labelSpringEl[3]=this._fontsize/this.svg._zoom,this._labelSpringEl[8]=this.getOptimalSpringParameter(),a.push(this._labelSpringEl),[this._label,this._line]):void 0}},f.prototype.filter=function(a){var b=0;for(var c in a){void 0!==this.charthashmap[c]&&(b=this.charthashmap[c]);var d=b>=a[c][0]&&b<=a[c][1];if(d||(this._failure[c]=!0),this._displayed&&!d)this._currentEl.setAttributeNS(null,"display","none"),this._displayed=!1,this._visibility.filter=!1,this.labelVisibility();else if(!this._displayed&&this._failure[c]&&d){this._failure[c]=!1;for(var e in this._failure)if(this._failure[e]===!0)return;this._displayed=!0,this._currentEl.setAttributeNS(null,"display","block"),this._visibility.filter=!0,this.labelVisibility()}}},f.prototype.implHighlight=function(a){this.highlightEffect.yStroke&&(a?(this._circle.setAttributeNS(null,"stroke","yellow"),this._circle.setAttributeNS(null,"stroke-width","7px"),this._circle.setAttributeNS(null,"display","block")):(this._circle.setAttributeNS(null,"stroke","black"),this._circle.setAttributeNS(null,"stroke-width","1px"),this._currentEl!=this._circle&&this._circle.setAttributeNS(null,"display","none")))},{SVGElement:c,Ellipse:d,Image:e,Pie:f}});