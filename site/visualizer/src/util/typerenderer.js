"use strict";define(["require","jquery","lodash","src/util/api","src/util/util"],function(a,b,c,d,e){function f(c,d,f,g){return new Promise(function(h){g=b.extend({},k,g),a([j],function(a){var i=e.getNextUniqueId(),j=Math.max(150,c.height()),k=c.width(),l=b("<canvas>",{id:i}),m=l.get(0);m.height=j,m.width=k,c.html(l),a.StructureView.drawStructure(i,d,f,g),h()})})}function g(c,d,f,g,h){return h=h||{},new Promise(function(g){a(["lib/bio-pv/bio-pv.min"],function(a){var i=b('<div style="width:100%; height:100%" />');d.html(i);var j;"pdb"===c?j=a.io.pdb(f,{loadAllModels:!0}):"mol3d"===c&&(j=a.io.sdf(f));var k=a.Viewer(i.get(0),{width:.99*d.width(),height:Math.max(250,.99*d.height()),quality:"medium"});k.addListener("viewerReady",function(){function a(){k.destroy(),d.off("remove")}h.mode=k[h.mode]?h.mode:"cartoon";var b=e.getNextUniqueId();"pdb"===c?(k.clear(),j.forEach(function(a){if("cartoon"===h.mode){var c=a.select({rnames:["RVP","SAH"]});k.ballsAndSticks("ligand-"+b,c)}k[h.mode](b,a),k.autoZoom()})):"mol3d"===c&&k.ballsAndSticks(b,j),k.fitTo(j),d.on("remove",a)}),g()})})}function h(a,c,d){return void 0==c?(a.html(""),Promise.resolve()):Promise.resolve(c.get(!0)).then(function(f){var g=c.getType().toLowerCase();if(!i[g])return e.warnOnce("no-typerenderer-"+g,"No renderer found for type "+g),void a.html(String(f));d=b.extend(d,c._options),d.backgroundColor&&a.css("background-color",d.backgroundColor);var h=l[g];return h||(h="function"==typeof i[g].init?Promise.resolve(i[g].init()):Promise.resolve(),l[g]=h),h.then(function(){return i[g].toscreen(a,f,c,d)})})}e.loadCss("components/font-awesome/css/font-awesome.min.css");var i={};i.sparkline={},i.sparkline.init=function(){return new Promise(function(b){a(["sparkline"],b)})},i.sparkline.toscreen=function(a,b,d,e){var f={width:"discrete"===e.type?"auto":"100%",height:"100%"};e=c.defaults(e,f),a.sparkline(b,e)},i.string={},i.string.toscreen=function(a,b){b=String(b),b.replace(/</g,"&lt;").replace(/>/g,"&gt;"),a.html(b)},i.html={},i.html.toscreen=function(a,b){a.html(String(b))},i.date={},i.date.toscreen=function(a,b){try{var c=new Date(b);a.html(c.toLocaleString())}catch(b){a.html("Invalid date")}},i.color={},i.color.toscreen=function(a,b){var c='<div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==); width:100%; height:100%"><div style="background-color: '+b+'; width: 100%; height:100%; padding:0; margin:0">&nbsp;</div></div>';a.html(c)},i.number={},i.number.toscreen=function(a,b,c,d){var e=Number(b);isNaN(e)?e="NaN":d.hasOwnProperty("toPrecision")?e=e.toPrecision(d.toPrecision):d.hasOwnProperty("toFixed")&&(e=e.toFixed(d.toFixed)),a.html(e)},i.picture={},i.picture.toscreen=function(a,c,d,e){var f=b("<img>");f.attr({src:c,width:e?e.width:void 0}),e.css&&f.css(e.css),a.html(f)},i.gif=i.picture,i.jpeg=i.picture,i.jpg=i.picture,i.png=i.picture,i.webp=i.picture,i.image=i.picture,i.svg={},i.svg.toscreen=function(a,c){var d=b(String(c)),e=[0,0,parseInt(d.attr("width")),parseInt(d.attr("height"))];d[0].setAttribute("viewBox",e.join(" ")),d.removeAttr("id"),d.attr("width","100%"),d.attr("height","100%"),d.css("display","block"),a.html(d)},i.doi={},i.doi.toscreen=function(a,b){return a.html(b.replace(/^(.*)$/,'<a target="_blank" href="http://dx.doi.org/$1"><img src="bin/logo/doi.png" /></a>'))};var j="openchemlib/openchemlib-viewer",k={suppressChiralText:!0,suppressESR:!0,suppressCIPParity:!0,noStereoProblem:!0};i.jme={},i.jme.toscreen=function(b,c,d,e){return new Promise(function(f){a(["lib/chemistry/jme-converter"],function(a){var g=a.toMolfile(c);f(i.mol2d.toscreen(b,g,d,e))})})},i.smiles={},i.smiles.toscreen=function(b,c,d,e){return new Promise(function(d){a([j],function(a){var g=a.Molecule.fromSmiles(String(c));d(f(b,g.getIDCode(),g.getIDCoordinates(),e))})})},i.actelionid={},i.actelionid.toscreen=function(b,c,d,e){return new Promise(function(c){a([j],function(a){if(!d.coordinates){var g=String(d.value),h=a.Molecule.fromIDCode(g,!0);Object.defineProperty(d,"coordinates",{configurable:!0,enumerable:!1,value:h.getIDCoordinates(),writable:!0})}c(f(b,String(d.value),String(d.coordinates),e))})})},i.mol2d={},i.mol2d.toscreen=function(b,c,d,e){return new Promise(function(d){a([j],function(a){var g=a.Molecule.fromMolfile(c);d(f(b,g.getIDCode(),g.getIDCoordinates(),e))})})},i.molfile2d=i.mol2d,i.mf={},i.mf.toscreen=function(a,b){a.html(b.replace(/\[([0-9]+)/g,"[<sup>$1</sup>").replace(/([a-zA-Z)])([0-9]+)/g,"$1<sub>$2</sub>").replace(/\(([0-9+-]+)\)/g,"<sup>$1</sup>"))},i.pdb={},i.pdb.toscreen=g.bind(i.pdb,"pdb"),i.mol3d={},i.mol3d.toscreen=g.bind(i.pdb,"mol3d"),i.molfile3d=i.mol3d,i.downloadlink={},i.downloadlink.toscreen=function(a,b){a.html(b.replace(/^(.*)$/,'<a href="$1">⤵</a>'))},i.openlink={},i.openlink.toscreen=function(a,b){a.html(b.replace(/^(.*)$/,'<a href="$1" target="_blank"><i class="fa fa-external-link"></i></a>'))},i.boolean={},i.boolean.toscreen=function(a,b){b?a.html('<span style="color: green;">&#10004;</span>'):a.html('<span style="color: red;">&#10008;</span>')},i.colorbar={},i.colorbar.toscreen=function(a,c){for(var d=b("<div>&nbsp;</div>"),e="linear-gradient(to right",f=0,g=0,h=c.length;h>g;f+=c[g++][0]);var i,j,k=0;for(g=0;h>g;g++)i=k+c[g][0]/f*100,j=c[g][1],e+=", "+j+" "+k+"%, "+j+" "+i+"%",k=i;e+=")",d.css({height:"100%",width:"100%"}).css("background",e),a.html(d)},i.indicator={},i.indicator.init=function(){var a,c=b('<div class="ci-tooltip"></div>').css({display:"none",opacity:0}).appendTo("#ci-visualizer"),d=b("#modules-grid");d.on("mouseenter","[data-tooltip]",function(d){a=setTimeout(function(){var a=b(d.target),e=a.offset();c.css({left:e.left,top:e.top,display:"block"}).text(a.attr("data-tooltip")),c.animate({opacity:1})},500)}),d.on("mouseleave","[data-tooltip]",function(b){clearTimeout(a),c.css({opacity:0,display:"none"})})},i.indicator.toscreen=function(c,d){return new Promise(function(e){a(["src/util/color"],function(a){if(!Array.isArray(d))return e();var f='<table cellpadding="0" cellspacing="0" style="text-align: center; height:100%; width:100%"><tr>';isNaN(d[0])||(d=d.map(function(a){return{size:a}}));for(var g=d.length,h=a.getDistinctColors(d.length),i=0,j=0;g>j;j++)d[j].bgcolor||(d[j].bgcolor=a.getColor(h[j])),d[j].size||0===d[j].size||(d[j].size=10),i+=d[j].size;for(var j=0;g>j;j++){var k=d[j],l=b("<td>&nbsp;</td>").css({width:100*k.size/i+"%",border:"none"});k.bgcolor&&l.css("background-color",k.bgcolor),k.color&&l.css("color",k.color),k.text&&l.append(k.text),k.class&&l.addClass(k.class),k.icon&&l.prepend('<i class="fa fa-'+k.icon+'"></i>'),k.css&&l.css(k.css),k.tooltip&&l.attr("data-tooltip",k.tooltip),f+=l.get(0).outerHTML}f+="</tr></table>",c.html(f),e()})})},i.regexp={},i.regexp.toscreen=function(c,d){var e=String(d);return new Promise(function(d){a(["lib/regexper/regexper"],function(a){var f=b("<div>").appendTo(c),g=new a(f.get(0));g.parse(e).invoke("render"),d()})})},i.regex=i.regexp;var l={};return{render:function(a,c,d,e){"object"!=typeof d||Array.isArray(d)||(e=d,d=null);var f=b(a);return c=DataObject.check(c,!0),d?c.getChild(d).then(function(a){return h(f,a,e)}):h(f,c,e)},addType:function(a,b){i[a]=b}}});