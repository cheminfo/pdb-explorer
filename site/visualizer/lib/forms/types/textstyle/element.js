"use strict";define(["src/util/util","components/farbtastic/src/farbtastic"],function(a){var b=function(){};return b.prototype.__makeDom=function(){var b=a.getWebsafeFonts(),c=this,d=$("<div />"),e=this.value,f=$("<ul />").addClass("form-textstyle-ul"),g=$("<li><span>B</span></li>").addClass("btn").attr("data-style","bold"),h=$("<li><span>I</span></li>").addClass("btn").attr("data-style","italic"),i=$("<li><span>U</span></li>").addClass("btn").attr("data-style","underline"),j=$("<li><select></select></li>").children("select").attr("data-style","fontface").append(function(){for(var a=[],c=0,d=b.length;d>c;c+=1)a.push('<option value="'+b[c].key+'">'+b[c].title+"</option>");return a}),k=$("<li><select></select></li>").children("select").attr("data-style","fontsize").append(function(){for(var a=[],b=10,c=20;c>b;b+=1)a.push('<option value="'+b+'">'+b+" pts</option>");return a}),l=$("<li><span>A</span></li>").addClass("form-textstyle-colorli").bind("click",function(){n.toggle(),$(this).toggleClass("selected")}),m=$("<li><span></span></li>").addClass("form-textstyle-bgcolorli").bind("click",function(){o.toggle(),$(this).toggleClass("selected")}),n=$("<div />").addClass("form-textstyle-color"),o=$("<div />").addClass("form-textstyle-color");return f.on("click",".btn",function(){e[$(this).attr("data-style")]=!$(this).hasClass("selected"),c.checkValue()}),f.on("change","select",function(){e[$(this).attr("data-style")]=$(this).attr("value"),c.checkValue()}),this.farb=$.farbtastic(n,{}),this.farb2=$.farbtastic(o,{}),f.append(g),f.append(h),f.append(i),f.append(j),f.append(k),f.append(l),f.append(m),this.div=f,this.dom=d,this.fieldElement=f,this.checkboxes={},this.checkValue(),this.farb.linkTo(function(){e.color=arguments[0],c.checkValue()}),this.farb2.linkTo(function(){e.bgcolor=arguments[0],c.checkValue()}),d.append(f,n,o),d},b.prototype.focus=function(){this.fieldElement.find("input:first").focus(),this.select()},b.prototype.checkValue=function(){if(this.value instanceof Object||this.setValueSilent({}),this.div)for(var a in this.value)if(this.value.hasOwnProperty(a))switch(a){case"bold":this.div.find('li[data-style="bold"]')[this.value[a]?"addClass":"removeClass"]("selected");break;case"italic":this.div.find('li[data-style="italic"]')[this.value[a]?"addClass":"removeClass"]("selected");break;case"underline":this.div.find('li[data-style="underline"]')[this.value[a]?"addClass":"removeClass"]("selected");break;case"color":this.div.find("li.form-textstyle-colorli").children().css("color",this.value[a]),this.farb.setColor(this.value[a]);break;case"bgcolor":this.div.find("li.form-textstyle-bgcolorli").children().css("background-color",this.value[a]),this.farb2.setColor(this.value[a]);break;case"fontface":this.div.find('select[data-style="fontface"]').attr("value",this.value[a]);break;case"fontsize":this.div.find('select[data-style="fontsize"]').attr("value",this.value[a])}},b.prototype.getOptions=function(){return this.combooptions||!1},b.prototype.setOptions=function(a){this.combooptions=a},b});