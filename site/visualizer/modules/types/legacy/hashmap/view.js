define(["../../../default/defaultview","src/util/typerenderer"],function(a,b){function c(){}return c.prototype=$.extend(!0,{},a,{init:function(){this.dom=$("<table><tbody></tbody></table>"),this.module.getDomContent().html(this.dom),this.resolveReady()},inDom:function(){},onResize:function(){},renderElement:function(a,c,d,e){var f=this;b.toScreen(a,this.module,{},c.jpath).always(function(a){""==a&&f.module.getConfiguration("hideemptylines",!1)||(c.printf&&(a=sprintf(c.printf,a)),e.append("<tr><td>"+c.label+"</td><td>"+a+"</td></tr>"))})},update:{hashmap:function(a){if(a)for(var b=this.module.getConfiguration("keys"),c=this.dom.children(" tbody ").empty(),d=0,e=b.length;e>d;d++)null!=b[d].jpath&&this.renderElement(a,b[d],d,c)}},getDom:function(){return this.dom},typeToScreen:{}}),c});