"use strict";define(["require","../text/element"],function(a,b){var c=function(){};return $.extend(c.prototype,b.prototype),c.prototype.validate=function(a){var b=!1,c=parseFloat(a);if(""==a||c==a){var d,e=0;if(this.field.options.validation&&this.field.options.validation.rules)for(d=this.field.options.validation.rules.length;d>e;e++){var b=!1;if("undefined"!=typeof this.field.options.validation.rules[e].max){var f=this.field.options.validation.rules[e].max;c>f&&(b=!0)}if("undefined"!=typeof this.field.options.validation.rules[e].min){var f=this.field.options.validation.rules[e].min;f>c&&(b=!0)}if(b)return this.validation.error=!0,void(this.validation.feedback=this.field.options.validation.rules[e].feedback);this.validation.error=!1}this.validation.value=c,this.validation.error=!1}else this.validation.errorType=1},c});