"use strict";define(["src/util/api","src/util/debug","modules/default/defaultview","src/util/util","lodash","bowser","components/jquery.panzoom/dist/jquery.panzoom","components/jquery-mousewheel/jquery.mousewheel"],function(a,b,c,d,e,f){function g(){}function h(a){if(6!==a.length)throw new Error("getCssTransform expects array of length 6");return"matrix("+a.join(",")+")"}var i=Promise.resolve(),j=.5;return $.extend(!0,g.prototype,c,{init:function(){this.toHide=this.toHide||{},this.transforms=this.transforms||{};var a=this;this.dom||(this._id=d.getNextUniqueId(),this.dom=$(' <div id="'+this._id+'"></div>').css("height","100%").css("width","100%"),this.module.getDomContent().html(this.dom)),this.dom.off("mouseleave"),this.dom.on("mouseleave",function(){a.highlightOff()}),this.images=[],this.state="done"},blank:{picture:function(){}},inDom:function(){this.resolveReady()},update:{picture:function(a,b){return this.doImage(b,a,{},!0)},svg:function(a,b){this.doSvg(b,a,{},!0)}},clearImages:function(){if(!this.images)return void(this.images=[]);for(var a=0;a<this.images.length;a++)this.images[a].$panzoomEl.panzoom("destroy");this.dom.html(""),this.images=[]},doImage:function(a,c,d,e){var f=this;return i=i.then(function(){return f.addImage(a,c,d)}).then(function(){f.panzoomMode(a),f.reorderImages(),e&&(f.processHighlights(),f.listenHighlights())},function(a){b.warn("panzoom: image failed to load",a)})},doSvg:function(a,b,c,d){return c.isSvg=!0,this.doImage(a,b,c,d)},reorderImages:function(){for(var a=0;a<this.images.length;a++)this.images[a].$panzoomEl.css("z-index",parseInt(this.images[a].conf.order)||a)},addSvg:function(a,b,c){},addImage:function(b,c,d){var f=this;return new Promise(function(g,i){function j(a){p&&p.remove(),i(a)}function k(){r.type=n,r.name=l.variable,r.$panzoomEl=m.find(".panzoom"),r.$parent=m,r.$img=o,r.conf=l,r.transform=null,"__highlight__"===r.name&&m.css({"pointer-events":"none"}),f.dom.append(m),"svg"===n?(r.width=this.width(),r.height=this.height()):(r.width=this.width,r.height=this.height);var a=r.conf.scaling;if("maxIfLarge"===a&&(a=r.width>f.width||r.height>f.height?"max":"no"),"max"===a&&(r.width/r.height>f.width/f.height?(r.f=f.width/r.width,r.transform=h([r.f,0,0,r.f,0,0])):(r.f=f.height/r.height,r.transform=h([r.f,0,0,r.f,0,0]))),"asHighlight"===a&&f.himg.f){var b=[f.himg.f,0,0,f.himg.f,f.highlightImage.shiftx*f.himg.f,f.highlightImage.shifty*f.himg.f];r.transform=h(b)}q||f.images.push(r),p&&p.remove(),o.css({transform:r.transform,transformOrigin:"0 0",display:"block"}),o.show(),g()}void 0===c&&(c=a.getData(b));var l=e.find(f.module.getConfiguration("img"),function(a){return a.variable===b});if(l=f._completeConf(l,b,d),!l.variable)throw new Error("panzoom: conf is expected to have a variable name");var m=f.dom.find("#"+f.getImageDomId(b));m.find(".panzoom").panzoom("destroy");var n,o,p;0===m.length&&"__highlight__"===b?(m=f.newCanvasDom(b),o=$(f.highlightImage.canvas),m.find(".panzoom").append(o),n="canvas"):"__highlight__"===b?(m.find("canvas").remove(),o=$(f.highlightImage.canvas),m.find(".panzoom").append(o),n="canvas"):0===m.length&&"svg"===c.type?(m=f.newSvgDom(b),o=$(c.get()),m.find(".panzoom").append(o),n="svg"):"svg"===c.type?(p=m.find("svg"),o=$(c.get()),m.find(".panzoom").append(o),n="svg"):0===m.length?(m=f.newImageDom(b),o=m.find("img"),n="image"):(p=m.find("img"),o=$('<img style="display: none;"/>'),m.find(".panzoom").append(o),n="image");var q=!1,r=e.find(f.images,function(a){return a.name===b});return r&&(q=!0),r=r||{},f.toHide&&f.toHide[l.variable]?(p&&p.hide(),o.remove(),g()):(o.css("opacity",l.opacity).addClass(l.rendering),void("__highlight__"===b?k.call(f.highlightImage.canvas):"svg"===c.type?k.call(o):o.attr("src",c.get()).on("load",k).on("error",j)))})},processHighlights:function(){var c;this.highlights=null;for(var e=0;e<this.images.length;e++)"__highlight__"!==this.images[e].name&&a.getData(this.images[e].name)._highlightArray&&(c=this.images[e]);if(c){var f=a.getData(c.name);if(f._highlightArray.length!==c.width*c.height)return void b.warn("Panzoom: unexpected highlight length");this._highlightArray=f._highlightArray,this._highlight=f._highlight||[],"Array"!==d.objectToString(this._highlight)&&(this._highlight=[this._highlight]),this.himg=c,this.highlights={};for(var e=0;e<f._highlightArray.length;e++){var g=f._highlightArray[e];"Array"!==d.objectToString(g)&&(g=[g]);for(var h=0;h<g.length;h++)if(void 0!==g[h]&&-1!==this._highlight.indexOf(g[h])){this.highlights[g[h]]?this.highlights[g[h]].data.push(e):this.highlights[g[h]]={data:[e],shiftx:e%c.width,shifty:e/c.width|0,shiftX:e%c.width,shiftY:e/c.width|0};var i=e/c.width|0,j=e%c.width;j<this.highlights[g[h]].shiftx?this.highlights[g[h]].shiftx=j:j>this.highlights[g[h]].shiftX&&(this.highlights[g[h]].shiftX=j),i<this.highlights[g[h]].shifty?this.highlights[g[h]].shifty=i:i>this.highlights[g[h]].shiftY&&(this.highlights[g[h]].shiftY=i)}}for(var k in this.highlights)this.highlights[k].width=this.highlights[k].shiftX-this.highlights[k].shiftx+1,this.highlights[k].height=this.highlights[k].shiftY-this.highlights[k].shifty+1}},listenHighlights:function(){var b=this;if(a.killHighlight(this.module.getId()),this.highlights){var c=Object.keys(this.highlights);b._highlighted=[];for(var d=0;d<c.length;d++)!function(d){a.listenHighlight({_highlight:c[d]},function(a,c,d,f){Array.isArray(c)||(c=[c]),a?b._highlighted=e(b._highlighted).push(c).flatten().uniq().value():b._highlighted=e.filter(b._highlighted,function(a){return-1===c.indexOf(a)}),b._drawHighlight(f)},!1,b.module.getId())}(d)}},_drawHighlight:function(a){var b=this;this._highlighted&&this._highlighted.length?(this.toHide.__highlight__=!1,this.highlightImage=this._createHighlight(this._highlighted)):(this.toHide.__highlight__=!0,this.highlightImage=this.highlightImage||{},this.highlightImage.dataUrl="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),this.doImage("__highlight__").then(function(){if(b.module.getConfigurationCheckbox("focusOnHighlight","yes")&&a!==b.module.getId()){var c=b.highlightImage.canvas.width,d=b.highlightImage.canvas.height,e=b.highlightImage.shiftx,f=b.highlightImage.shifty;e=Math.max(e-j*c,0),f=Math.max(f-j*d,0);var g=Math.min(b.himg.width/c*j,b.himg.height/d*j);g=Math.max(1,g);var h=[g,0,0,g,-g*b.himg.f*e,-g*b.himg.f*f];b.setTransform(h)}})},newImageDom:function(a){return $('<div class="ci-panzoom-parent" id="'+this.getImageDomId(a)+'"><div class="panzoom"><img style="display: none;"/></div></div>')},newCanvasDom:function(a){return $('<div class="ci-panzoom-parent" id="'+this.getImageDomId(a)+'"><div class="panzoom"></div></div>')},newSvgDom:function(a){return $('<div class="ci-panzoom-parent" id="'+this.getImageDomId(a)+'"><div class="panzoom"></div></div>')},getImageDomId:function(a){return"ci-panzoom-image-"+a},panzoomMode:function(a){function b(a,b,d){for(var e=0;e<c.images.length;e++){var f=c.images[e].$img[0].getBoundingClientRect(),g={x:(a.pageX-f.left)*c.images[e].width/f.width|0,y:(a.pageY-f.top)*c.images[e].height/f.height|0};g.x>=0&&g.x<c.images[e].width&&g.y>=0&&g.y<c.images[e].height&&(0===e&&(d.x=g.x,d.y=g.y),b[c.images[e].name]=g)}}var c=this,d=0,f=this.images.length;if(a){var g=e.findIndex(c.images,function(b){return b.name===a});d=-1===g?void 0:g,f=g+1}for(var h=d;f>h;h++){if(c.images[h].$panzoomEl.panzoom({increment:.1,maxScale:100,minScale:1e-6,duration:0,startTransform:"none",onEnd:function(){"pan"===c.state&&$(this).css("cursor","pointer")}}).css("cursor","pointer"),c.lastTransform){var i=c.images[h].$panzoomEl.panzoom("instance");i.setMatrix(c.lastTransform)}c.images[h].$panzoomEl.off("panzoompan"),c.images[h].$panzoomEl.on("panzoompan",function(a,b){c.lastTransform=b.getMatrix();for(var d=0;d<c.images.length;d++){"done"===c.state&&(c.images[d].$panzoomEl.css("cursor","move"),c.state="pan");var e=c.images[d].$panzoomEl.panzoom("instance");e!==b&&e.setMatrix(c.lastTransform)}})}c.dom.off("mousewheel.focal"),c.dom.on("mousewheel.focal",function(a){a.preventDefault();var b=1,d=.2;if(c.images.length>0){var e=c.images[0].$panzoomEl.panzoom("getMatrix")[0];b=d*e}var f=a.delta||a.originalEvent.wheelDelta,g=f?0>f:a.originalEvent.deltaY>0;c.images[0].$panzoomEl.panzoom("zoom",g,{increment:b,animate:!1,focal:a}),c.lastTransform=c.images[0].$panzoomEl.panzoom("getMatrix");for(var h=1;h<c.images.length;h++){var i=c.images[h].$panzoomEl.panzoom("instance");i.setMatrix(c.lastTransform)}c.rerender()}),c.dom.off("click.panzoom"),c.dom.on("click.panzoom",function(a){if("pan"===c.state)return void(c.state="done");c.state="done",$(this).css("cursor","pointer");var d={},f={};b(a,d,f),e.isEmpty(f)||c.module.controller.clickedPixel(f),e.isEmpty(d)||c.module.controller.allClickedPixels(d)}),c.dom.off("mousemove.panzoom"),c.dom.on("mousemove.panzoom",function(a){if("pan"!==c.state){var d={},f={};b(a,d,f),e.isEmpty(f)||e.isEqual(DataObject.resurrect(c.lastHoverPixel),f)||(c.module.controller.hoverPixel(f),c.lastHoverPixel=f,c.highlightOn(f)),e.isEmpty(f)&&c.highlightOff(),e.isEmpty(f)||void 0!==c._hl||c.highlightOn(f),e.isEmpty(d)||e.isEqual(DataObject.resurrect(c.lastAllHoverPixels),d)||(c.module.controller.allHoverPixels(d),c.lastAllHoverPixels=d)}}),this.dom.off("dblclick"),this.dom.dblclick(function(){for(var a=0;a<c.images.length;a++)c.images[a].$panzoomEl.panzoom("reset"),0===a&&(c.lastTransform=c.images[a].$panzoomEl.panzoom("getMatrix"))})},setTransform:function(a){this.lastTransform=a;for(var b=0;b<this.images.length;b++){var c=this.images[b].$panzoomEl.panzoom("instance");c.setMatrix(this.lastTransform)}},_createHighlight:function(a){if(!this.highlights)return null;Array.isArray(a)||(a=[a]);for(var b=1/0,c=1/0,d=-(1/0),e=-(1/0),f=0;f<a.length;f++){var g=a[f];b=Math.min(b,this.highlights[g].shiftx),c=Math.min(c,this.highlights[g].shifty),d=Math.max(d,this.highlights[g].shiftX),e=Math.max(e,this.highlights[g].shiftY)}var h=document.createElement("canvas"),i=e-c+1,j=d-b+1;h.height=i,h.width=j;for(var k=h.getContext("2d"),l=k.createImageData(j,i),m=l.data,f=0;i*j>f;f++)m[4*f]=255,m[4*f+1]=255,m[4*f+2]=153,m[4*f+3]=0;for(var n=0;n<a.length;n++)for(f=0;f<this.highlights[a[n]].data.length;f++){var o=this.highlights[a[n]].data[f],p=o%this.himg.width,q=o/this.himg.width|0,r=p-b,s=q-c,t=s*j+r;m[4*t+3]=255}return k.putImageData(l,0,0),{canvas:h,shiftx:b,shifty:c}},highlightOn:function(a){var b=this;if(d.isArray(b._highlightArray)){var c=a.x+b.himg.width*a.y,f=b._highlightArray[c],g=e.any(f,function(a){return-1!==b._highlight.indexOf(a)});f&&g?b._hl!==f&&(b.module.model.highlightId(b._hl,0),b.module.model.highlightId(f,1),b._hl=f):b._hl&&b.highlightOff()}},highlightOff:function(){void 0!==this._hl&&(this.module.model.highlightId(this._hl,0),this._hl=void 0)},rerender:e.debounce(function(){for(var a=0;a<this.images.length;a++)(this.images[a].conf.rerender&&this.images[a].conf.rerender.indexOf("yes")>-1||"crisp-edges"===this.images[a].conf.rendering&&f.chrome)&&this.doImage(this.images[a].name)},300),onResize:function(){this.doAllImages()},doAllImages:function(){for(var a=0;a<this.images.length;a++)this.doImage(this.images[a].name)},getDom:function(){return this.dom},onActionReceive:{hide:function(a){var b;b="string"==typeof a?a:a.name,this.toHide[b]||(this.toHide[b]=!0,this.doImage(b))},show:function(a){this.toHide=this.toHide||{};var b;b="string"==typeof a?a:a.name,this.toHide[b]&&(this.toHide[b]=!1,this.doImage(b))}},_getDefaultConf:function(){return{opacity:.5,"z-index":1,rendering:"Normal",scaling:"max"}},_completeConf:function(a,b,c){if(!a)return this._completeConf(this._getDefaultConf(),b,c);"__highlight__"===b&&(c={"z-index":1e6,scaling:"asHighlight",rendering:"crisp-edges"}),a.variable=b;var d=e.assign(a,c);return d}}),g});