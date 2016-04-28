"use strict";define(["modules/default/defaultcontroller"],function(a){function b(){}return $.extend(!0,b.prototype,a),b.prototype.moduleInformation={name:"GC-MS",description:"Displays a GC-MS using the plot library",author:"Norman Pellet",date:"24.12.2013",license:"MIT",cssClass:"gcms"},b.prototype.references={fromtoGC:{label:"From - To on GC",type:["fromTo","object"]},centerGC:{label:"Center GC",type:["number","string","array"]},fromtoMS:{label:"From - To on MS",type:"fromTo"},ingredientList:{label:"List of ingredients",type:"array"},GCIntegration:{label:"Integration on the GC",type:"object"},MSTrace:{label:"MS data corresponding to an integration",type:"object"},MSIon:{label:"An integrated ion trace",type:"object"},gcms:{type:["jcamp","array","object"],label:"GC-MS data"},jcamp:{type:["jcamp","string"],label:"GC-MS data via JCamp"},gc:{type:["jcamp"],label:"GC"},ms:{type:["array"],label:"MS"},msdata:{type:["array"],label:"Parsed MS Data"},gcdata:{type:["array"],label:"Parsed GC Data"},mscont:{type:["jcamp"],label:"Continuous MS"},annotationgc:{type:["array"],label:"Array of annotations for the GC"},mzList:{type:["array"],label:"List of m/z selected"},selectedIngredient:{type:["object"],label:"Selected ingredient"},msIndex:{type:["number"],label:"MS Index"},msMouse:{type:["array"],label:"Current MS Moused"},msAUC:{type:["array"],label:"AUC MS"},RIComponents:{type:["array"],label:"RI Components"}},b.prototype.events={onZoomGCChange:{label:"Zoom over GC spectra",refAction:["fromtoGC","centerGC"]},onZoomMSChange:{label:"Zoom over MS spectra",refAction:["fromtoMS"]},onIntegralSelect:{label:"Integration is selected",refVariable:["GCIntegration","MSTrace"],refAction:["GCIntegration","MSTrace"]},onIntegralAdd:{label:"Integral is added",refAction:["GCIntegration"]},onIntegralRemove:{label:"Integral is removed",refAction:["GCIntegration"]},onIntegralChange:{label:"Integral is changed",refAction:["GCIntegration","MSTrace"],refVariable:["GCIntegration","MSTrace"]},onMSTrackingAdded:{label:"Add vertical tracking line over MS spectra",refAction:["MSIon"],refVariable:["MSIon"]},onJCampParsed:{label:"After the Jcamp has been parsed",refVariable:["msdata","gcdata"]},onMZSelectionChange:{label:"m/z selection has changed",refAction:["mzList"]},onIngredientSelected:{label:"Ingredient is selected",refAction:["selectedIngredient"]},onMSIndexChanged:{label:"MS Index has changed",refAction:["msIndex"],refVariable:["msMouse"]},onMSChange:{label:"MS has changed",refVariable:["ms"]}},b.prototype.variablesIn=["gcms","jcamp","gc","ms","mscont","annotationgc","ingredientList","RIComponents"],b.prototype.actionsIn={fromtoGC:"From - To on GC",fromtoMS:"From - To on MS",zoomOnAnnotation:"Zoom on annotation",annotation:"Annotation",displayChemicalLabels:"Display chemical labels",hideChemicalLabels:"Hide chemical labels",centerGC:"Center GC at value",externalMS:"Set external MS",setMSIndexData:"Change MS data index"},b.prototype.configurationStructure=function(a){return{groups:{group:{options:{type:"list"},fields:{continuous:{type:"checkbox",title:"MS Continuous",options:{continuous:"Continuous"}}}}}}},b.prototype.configFunctions={continuous:function(a){return"continuous"==a[0]}},b.prototype.configAliases={continuous:["groups","group",0,"continuous",0]},b});