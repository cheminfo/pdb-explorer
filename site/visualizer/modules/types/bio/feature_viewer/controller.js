"use strict";define(["modules/default/defaultcontroller"],function(a){function b(){}return $.extend(!0,b.prototype,a),b.prototype.moduleInformation={name:"Protein Feature Viewer",description:"Displays Protein Annotations",author:"Daniel Kostro",date:"15.06.2014",license:"MIT",cssClass:"protein_viewer"},b.prototype.references={feature:{label:"An object describing a feature"}},b.prototype.events={onFeatureClicked:{label:"A feature was clicked",refVariable:["feature"]},onFeatureMouseOver:{label:"The mouse is over a feature",refVariable:["feature"]}},b.prototype.onFeatureClicked=function(a){this.createDataFromEvent("onFeatureClicked","feature",DataObject.check(a,!0))},b.prototype.onFeatureMouseOver=function(a){this.createDataFromEvent("onFeatureMouseOver","feature",DataObject.check(a,!0))},b.prototype.variablesIn=["feature"],b});