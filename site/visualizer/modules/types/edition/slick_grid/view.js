"use strict";define(["modules/default/defaultview","src/util/debug","lodash","src/util/util","src/util/api","src/util/typerenderer","slickgrid","src/util/sandbox"],function(a,b,c,d,e,f,g,h){function i(){}function j(){return"..."}function k(){return'<div style="width:100%; height: 100%; display: table-cell"><a class="recycle-bin"><i class="fa fa-trash"></i></a></div>'}function l(a,b,c,d){c.__group||(this.module.data.traceSync([b]),a&&f.render(a,c,d.jpath))}function m(a){var b;if(b=a.match(/^"(.*)"$/))return function(a){return b=b.toLowerCase(),a=a.toString().toLowerCase(),a.match(b[1])};if(b=a.match(/^\/(.*)\/(i?)/))return function(a){return a.toString().match(new RegExp(b[1],b[2]||void 0))};if(b=a.match(/^([<>=]{1,2})([0-9.]+)$/)){if("<"===b[1])return function(a){return a<b[2]};if("<="===b[1]||"=<"===b[1])return function(a){return a<=b[2]};if(">"===b[1])return function(a){return a>b[2]};if(">="===b[1]||"=>"===b[1])return function(a){return a>=b[2]};if("=="===b[1]||"="===b[1])return function(a){return a==b[2]}}return b=a.match(/^([0-9.]+)\.\.([0-9.]*)$/),b?function(a){return a>=b[1]&&a<=b[2]}:function(b){return b.toString().toLowerCase().match(a.toLowerCase())}}var n=[];n.push(d.loadCss("components/slickgrid/slick.grid.css"));var o=Promise.all(n),p={},q={},r=0,s={typerenderer:j,"slick.text":g.Formatters.Text,"slick.percent":g.Formatters.PercentComplete,"slick.percentbar":g.Formatters.PercentCompleteBar,"slick.yesno":g.Formatters.YesNoSelect},t={boolean:g.CustomEditors.Checkbox,mf:g.CustomEditors.TextValue,color:g.CustomEditors.ColorValue,string:g.CustomEditors.TextValue,number:g.CustomEditors.TextValue,date:g.CustomEditors.Date,DataString:g.CustomEditors.DataStringEditor,DataNumber:g.CustomEditors.DataNumberEditor,DataBoolean:g.CustomEditors.DataBooleanEditor,longtext:g.CustomEditors.LongText};$.extend(!0,i.prototype,a,{init:function(){var a=this;this._setScript(""),this.title=String(this.module.definition.title),this.$container||(this._id=d.getNextUniqueId(),this.$rowHelp=$("<div>").attr("class","rowHelp"),this.$container=$("<div>").attr("id",this._id).addClass("main-container"),this.module.getDomContent().html(this.$rowHelp),this.module.getDomContent().append(this.$container)),this.actionOutButtons=this.module.getConfiguration("actionOutButtons"),this.actionOutButtons=this.actionOutButtons||[],this.actionOutButtons=c.filter(this.actionOutButtons,function(a){return a.actionName&&a.buttonTitle}),this.$container.on("mouseleave",function(){a.module.controller.lastHoveredItemId=null}),this.slick={},this.colConfig=(this.module.getConfiguration("cols")||[]).filter(function(a){return a.name}),this.idPropertyName="_sgid",this.hiddenColumns=[],"pref"===this.module.getConfiguration("filterType")&&this._setScript(this.module.getConfiguration("filterRow")),this.resolveReady()},preventRowHelp:function(){this._preventRowHelp=!0},deleteRowSelection:function(){for(var a=this.grid.getSelectedRows(),b=new Array(a.length),c=0;c<a.length;c++){var d=this._getItemInfoFromRow(a[c]);b[c]=d.idx}b=b.sort();var e=0,f=[];for(c=0;c<a.length;c++){var g=this.module.data.splice(b[c]-e++,1);g.length&&f.push(g[0])}this.lastSelectedRows=[],this.module.controller.onRowsDelete(f),this.module.data.triggerChange()},getAllSlickColumns:function(){function a(a){var b,c=e.module.data.get(0).getChildSync(a);return b=c instanceof DataString?g.CustomEditors.DataStringEditor:c instanceof DataNumber?g.CustomEditors.DataNumberEditor:c instanceof DataBoolean?g.CustomEditors.DataBooleanEditor:t[d(a)]}function d(a){var b,c=a.slice(0);c.unshift(0);var d=e.module.data.getChildSync(c);return d instanceof DataObject&&(b=d.type),b}var e=this,f=$.proxy(l,this),h=this.colConfig.filter(function(a){return a.name}).map(function(c){var h,i;return"auto"===c.editor&&e.module.data?e.module.data.length?(h=a(c.jpath),i=d(c.jpath)):(h=g.CustomEditors.DataString,b.warn("Slick grid: using editor based on type when the input variable is empty. Cannot determine type")):(h=t[c.editor],i=d(c.jpath)),{id:c.name,name:c.name,field:c.name,width:+c.width||void 0,minWidth:+c.minWidth||void 0,maxWidth:+c.maxWidth||void 0,resizable:!0,selectable:!0,focusable:!0,sortable:!0,defaultSortAsc:!0,editor:h,compositeEditor:h===g.CustomEditors.LongText?g.CustomEditors.SimpleLongText:void 0,formatter:s[c.formatter],asyncPostRender:"typerenderer"===c.formatter?f:void 0,jpath:c.jpath,simpleJpath:1===c.jpath.length,dataType:i,colDef:c}});if(h=c.filter(h,function(a){return a.name}),c.isEmpty(h)){for(var i=[],j=0;j<e.module.data.length;j++)i=c(i).push(c.keys(e.module.data[j])).flatten().uniq().value();h=c(i).filter(function(a){return"_"!==a[0]}).map(function(b){return{id:b,name:b,field:b,resisable:!0,selectable:!0,focusable:!0,sortable:!1,editor:a([b]),dataType:d([b]),jpath:[b],formatter:s.typerenderer,asyncPostRender:f}}).value()}if(this.module.getConfigurationCheckbox("autoColumns","remove")&&h.unshift({id:"rowDeletion",width:30,field:"rowDeletion",selectable:!1,resizable:!1,focusable:!1,sortable:!1,formatter:k}),this.module.getConfigurationCheckbox("autoColumns","select")){var m=new g.CheckboxSelectColumn({cssClass:"slick-cell-checkboxsel"});this.slick.plugins.push(m),h.unshift(m.getColumnDefinition())}return h},getSlickColumns:function(){var a=this,b=this.getAllSlickColumns();return b.filter(function(b){return-1===a.hiddenColumns.indexOf(b.name)})},getSlickOptions:function(){var a=this;return{editable:a.module.getConfigurationCheckbox("slickCheck","editable"),enableAddRow:a.module.getConfigurationCheckbox("slickCheck","enableAddRow"),enableCellNavigation:a.module.getConfigurationCheckbox("slickCheck","editable"),autoEdit:a.module.getConfigurationCheckbox("slickCheck","autoEdit"),enableTextSelectionOnCells:!0,enableColumnReorder:!0,forceFitColumns:a.module.getConfigurationCheckbox("slickCheck","forceFitColumns"),multiColumnSort:!0,asyncEditorLoading:!0,asyncEditorLoadDelay:30,enableAsyncPostRender:!0,asyncPostRenderDelay:0,defaultColumnWidth:a.module.getConfiguration("slick.defaultColumnWidth")||80,dataItemColumnValueExtractor:function(a,b){return a},explicitInitialization:!0,rowHeight:a.module.getConfiguration("slick.rowHeight"),showHeaderRow:a.module.getConfigurationCheckbox("slickCheck","filterColumns"),headerRowHeight:30}},_openDetails:function(){var a=this;if(!this.grid.getEditorLock().isActive()||this.grid.getEditorLock().commitCurrentEdit()){var b=this.slick.columns.filter(function(a){return a.editor});if(0!==b.length){var c=$("<div class='item-details-form'></div>");c=$.tmpl("<div class='item-details-form'>\n    {{each columns}}\n    <div class='item-details-label'>\n        ${name}\n    </div>\n    <div class='item-details-editor-container' data-editorid='${id}'></div>\n    {{/each}}\n\n    <hr/>\n    <div class='item-details-form-buttons'>\n        <button data-action='save'>Save</button>\n        <button data-action='cancel'>Cancel</button>\n    </div>\n</div>",{context:this.grid.getDataItem(this.grid.getActiveCell().row),columns:b}).appendTo("body"),c.keydown(function(b){b.which==$.ui.keyCode.ENTER?(a.grid.getEditController().commitCurrentEdit(),b.stopPropagation(),b.preventDefault()):b.which==$.ui.keyCode.ESCAPE&&(a.grid.getEditController().cancelCurrentEdit(),b.stopPropagation(),b.preventDefault())}),c.find("[data-action=save]").click(function(){a.grid.getEditController().commitCurrentEdit()}),c.find("[data-action=cancel]").click(function(){a.grid.getEditController().cancelCurrentEdit()});var d=$.map(b,function(a){return c.find("[data-editorid="+a.id+"]")}),e=new g.CompositeEditor(b,d,{destroy:function(){c.remove()}});this.grid.editActiveCell(e)||c.remove()}}},inDom:function(){},update:{script:function(a,b){"invar"===this.module.getConfiguration("filterType")&&(this._setScript(a.get()),this._runFilter({event:"scriptChanged"}))},list:function(a,d){function f(a){for(var b in p)if(void 0!==b&&""!==p[b]){var d=h.slick.data.getIdxById(a[h.idPropertyName]),e=h.grid.getColumns()[h.grid.getColumnIndex(b)],f=c.clone(DataObject.resurrect(e.jpath));if(f.unshift(d),!h.module.data.getChildSync(f)||!q[b](h.module.data.getChildSync(f).get()))return!1}return!0}var h=this;this.module.data=a,this._updateHighlights(),this.dataObjectsDone=!1,this.slick.plugins=[],this.slick.options=this.getSlickOptions(),this.generateUniqIds(),this.addRowAllowed=this.module.getConfigurationCheckbox("slickCheck","enableAddRow"),o.then(function a(){if(h.$container.html(""),h.slick.columns=h.getSlickColumns(),h.$rowToolbar=$("<div>").attr("class","rowToolbar"),h.module.getConfigurationCheckbox("toolbar","add")&&(h.$addButton=$('<input type="button" value="New"/>'),h.$addButton.on("click",function(){var a=h.grid.getColumns(),b=c.findIndex(a,function(a){return a.editor});b>-1&&(h.preventRowHelp(),h.grid.gotoCell(h.slick.data.getLength(),b,!0)),h._openDetails()}),h.$rowToolbar.append(h.$addButton)),h.module.getConfigurationCheckbox("toolbar","update")&&(h.$updateButton=$('<input type="button" value="Update"/>'),h.$updateButton.on("click",function(){h._openDetails()}),h.$rowToolbar.append(h.$updateButton)),h.module.getConfigurationCheckbox("toolbar","remove")&&(h.$deleteButton=$('<input type="button" value="Delete"/>'),h.$deleteButton.on("click",function(){h.deleteRowSelection()}),h.$rowToolbar.append(h.$deleteButton)),h.module.getConfigurationCheckbox("toolbar","showHide")){var d=h.getAllSlickColumns().filter(function(a){return"rowDeletion"!==a.id&&"_checkbox_selector"!==a.id});h.$showHideSelection=$.tmpl('<input type="button" value="Show/Hide Column"/>\n    <div class="mutliSelect" style="display:none">\n        <ul>\n            {{each columns}}\n            \n            <li><input type="checkbox" value="${name}" checked/>${name}</li>\n            {{/each}}\n        </ul>\n    </div>',{columns:d}),h.columnSelectionShown&&h.$showHideSelection.filter("div").show(),h.$showHideSelection.on("click",function(){h.$showHideSelection.filter("div").toggle(),h.columnSelectionShown=h.$showHideSelection.filter("div").is(":visible"),h.onResize()});for(var i=0;i<h.hiddenColumns.length;i++)h.$showHideSelection.find('input[value="'+h.hiddenColumns[i]+'"]').removeAttr("checked");h.$showHideSelection.find('input[type="checkbox"]').on("change",function(){if(this.checked){var b=h.hiddenColumns.indexOf(this.value);b>-1&&h.hiddenColumns.splice(b,1)}else h.hiddenColumns.push(this.value);return h.$container.html(""),a()}),h.$rowToolbar.append(h.$showHideSelection)}h.$actionButtons=new Array(h.actionOutButtons.length);for(var i=0;i<h.actionOutButtons.length;i++)!function(a){h.$actionButtons[a]=$('<input type="button" value="'+h.actionOutButtons[a].buttonTitle+'"/>'),h.$actionButtons[a].on("click",function(){h.module.controller.sendActionButton(h.actionOutButtons[a].actionName,h._getSelectedItems())})}(i);h.$rowToolbar.append(h.$actionButtons),h.$container.append(h.$rowToolbar),h.module.getConfiguration("toolbar")&&0===h.module.getConfiguration("toolbar").length&&h.$actionButtons&&0===h.$actionButtons.length&&h.$rowToolbar&&h.$rowToolbar.remove(),h.$slickgrid=$("<div>").addClass("flex-1"),h.$container.append(h.$slickgrid),h.slick.groupItemMetadataProvider=new g.Data.GroupItemMetadataProvider,h.slick.plugins.push(h.slick.groupItemMetadataProvider),h.slick.data=new g.Data.DataView({groupItemMetadataProvider:h.slick.groupItemMetadataProvider}),h.slick.data.setModule(h.module),h.grid=new g.Grid(h.$slickgrid,h.slick.data,h.slick.columns,h.slick.options),h._newSandbox();for(var i=0;i<h.slick.plugins.length;i++)h.grid.registerPlugin(h.slick.plugins[i]);"row"===h.module.getConfiguration("slick.selectionModel")?h.grid.setSelectionModel(new g.RowSelectionModel):h.grid.setSelectionModel(new g.CellSelectionModel),$(h.grid.getHeaderRow()).delegate(":input","change keyup",function(a){var b=$(this).data("columnId");null!=b&&(p[b]=$.trim($(this).val()),q[b]=m(p[b]),h.slick.data.refresh())}),h.grid.onHeaderRowCellRendered.subscribe(function(a,b){$(b.node).empty(),$("<input type='text'>").css("width","100%").data("columnId",b.column.id).val(p[b.column.id]).appendTo(b.node)}),h.grid.init(),h._activateHighlights(),h.grid.module=h.module,h.module.getConfigurationCheckbox("slickCheck","oneUncollapsed")&&h.slick.groupItemMetadataProvider.onGroupExpanded.subscribe(function(a,b){this.getData().collapseAllGroups(b.item.level),this.getData().expandGroup(b.item.groupingKey)}),h.slick.data.onRowCountChanged.subscribe(function(a,b){h.grid.updateRowCount(),h.grid.render()}),h.slick.data.onRowsChanged.subscribe(function(a,b){if(h.hasFilter){var c=h._getItemsInfo(b.rows);h._runFilter({event:"rowsChanged",rows:c})}h.grid.invalidateRows(b.rows),h.grid.render()}),h.grid.onAddNewRow.subscribe(function(a,b){h.module.controller.onRowNew(h.module.data.length-1,h.module.data[h.module.data.length-1]),h.module.model.dataTriggerChange(h.module.data),h._resetDeleteRowListeners()}),h.grid.onViewportChanged.subscribe(function(){function a(){if(h.lastViewport=h.grid.getViewport(),h.module.getConfigurationCheckbox("slickCheck","rowNumbering")&&!h._preventRowHelp){var a=h.grid.getDataLength();h.$rowHelp.html(Math.min(a,h.lastViewport.bottom-(h.addRowAllowed?2:1)).toString()+"/"+a),h.$rowHelp.fadeIn(),clearTimeout(h.lastRowHelp),h.lastRowHelp=setTimeout(function(){h.$rowHelp.fadeOut()},1e3)}h._preventRowHelp=!1,h._resetDeleteRowListeners(),h._jpathColor(),h._inViewFilter()}setTimeout(function(){var b=h.grid.getViewport();b!==h.lastViewport&&a()},250),a()}),h.grid.onMouseEnter.subscribe(function(a){h._hl&&e.highlightId(h._hl,0),h.count=void 0===h.count?0:h.count,h.count++,h.hovering=!0;var b=h._getItemInfoFromEvent(a);if(b){var c=b.item._highlight;h._hl=c,c&&(e.highlightId(c,1),u=c),h.module.controller.onHover(b.idx,b.item)}}),h.grid.onMouseLeave.subscribe(function(a){h._e=a,h.count--,h.hovering=!1;var b=h._getItemInfoFromEvent(a);if(b){var c=b.item._highlight;c?e.highlightId(c,0):u&&e.highlightId(u,0)}}),h.grid.onColumnsResized.subscribe(function(){var a=h.grid.getColumns().filter(function(a){return"rowDeletion"!==a.id&&"_checkbox_selector"!==a.id});if(h.colConfig.length===a.length)for(var b=0;b<a.length;b++){var c=h.colConfig.filter(function(c){return c===a[b].colDef});c.length&&(c[0].width=a[b].width)}h.grid.invalidate()}),h.grid.onCellChange.subscribe(function(a,b){var c=h.getSlickColumns()[b.cell],d=h._getItemInfoFromRow(b.row);d&&(h.hasFilter&&h._runFilter({event:"cellChanged",row:d,cell:h._getCell(b),column:c}),h.module.controller.onRowChange(d.idx,d.item)),h._resetDeleteRowListeners()}),h.grid.onClick.subscribe(function(a,b){var c=h.grid.getColumns(),d=h._getItemInfoFromRow(b.row);d&&c[b.cell]&&"rowDeletion"!==c[b.cell].id&&h.module.controller.onClick(d.idx,d.item)}),h.grid.onActiveCellChanged.subscribe(function(a,b){h.lastActiveCell=b.cell,h.lastActiveRow=b.row;var c=h.grid.getColumns(),d=h._getItemInfoFromRow(b.row);d&&c[b.cell]&&"rowDeletion"!==c[b.cell].id&&h.module.controller.onActive(d.idx,d.item)}),h.grid.onColumnsReordered.subscribe(function(){var a=h.grid.getColumns(),d=h.module.definition.configuration.groups.cols[0],e=c.pluck(d,"name"),f=c.pluck(a,"id");if(e.concat().sort().join()!==f.concat().sort().join())return void b.warn("Something might be wrong, number of columns in grid and in configuration do not match");h.module.definition.configuration.groups.cols[0]=[];for(var g=0;g<a.length;g++){var i=e.indexOf(f[g]);i>-1&&h.module.definition.configuration.groups.cols[0].push(d[i])}}),h.grid.onSelectedRowsChanged.subscribe(function(a,b){h.lastSelectedRows=b.rows;var d=h._getItemsInfo(b.rows);h.hasFilter&&h._runFilter({event:"rowsSelected",rows:d}),h.module.controller.onRowsSelected(c.pluck(d,"item"))}),h.grid.onSort.subscribe(function(a,b){h._makeDataObjects();var c=h.slick.data.getItems(),d=0;for(d=0;d<c.length;d++)c[d].__elementPosition=d;var e;for(e=b.sortCols?b.sortCols:[{sortCol:b.sortCol,sortAsc:b.sortAsc}],d=e.length-1;d>=0;d--)!function(a){var b=function(b,c){var d=b.getChildSync(e[a].sortCol.jpath),f=c.getChildSync(e[a].sortCol.jpath);return void 0===d?e[a].sortAsc?1:-1:void 0===f?e[a].sortAsc?-1:1:(d=d.get(),f=f.get(),f>d?-1:d>f?1:b.__elementPosition-c.__elementPosition)};h.slick.data.sort(b,e[a].sortAsc)}(d);for(d=0;d<c.length;d++)delete c[d].__elementPosition;h._updateHighlights(),h.grid.invalidateAllRows(),h.grid.render()}),h.slick.data.beginUpdate();var j=c.chain(h.module.getConfiguration("groupings")).filter(function(a){return a&&a.groupName&&a.getter?!0:!1}).map(function(a){var b={};return a.getter&&a.getter.length>1?(b.getter=function(b){return b.getChildSync(a.getter)},h._makeDataObjects()):b.getter=a.getter[0],b.formatter=function(b){return a.groupName+": "+b.value+"  <span style='color:green'>("+b.count+" items)</span>"},b.aggregateCollapsed=!1,b.lazyTotalsCalculation=!0,b}).value();j.length&&(h.slick.data.setGrouping(j),h.module.getConfigurationCheckbox("slickCheck","collapseGroup")&&h.slick.data.collapseAllGroups(0)),h.module.getConfigurationCheckbox("slickCheck","filterColumns")&&h.slick.data.setFilter(f),h.slick.data.setItems(h.module.data,h.idPropertyName),h.slick.data.endUpdate(),h.lastViewport&&!h.module.getConfigurationCheckbox("slickCheck","backToTop")&&h.grid.scrollRowToTop(h.lastViewport.top),Array.isArray(h.lastSelectedRows)?h.grid.setSelectedRows(h.lastSelectedRows):c.isUndefined(h.lastActiveRow)||h.module.getConfigurationCheckbox("slickCheck","forgetLastActive")||h.grid.setActiveCell(h.lastActiveRow,h.lastActiveCell),h.grid.render(),h._resetDeleteRowListeners(),h._setBaseCellCssStyle(),h.lastViewport=h.grid.getViewport(),h._jpathColor(),h._inViewFilter()})}},blank:{list:function(a){this.$container.html("")},script:function(a){"invar"===this.module.getConfiguration("filterType")&&this._setScript("")}},_setBaseCellCssStyle:function(){var a=this.grid.getColumns();this.baseCellCssStyle={};for(var b=0;b<a.length;b++)this.baseCellCssStyle[a[b].id]="highlighted-cell"},_resetDeleteRowListeners:function(){var a=this,b=a.$rb=$("#"+a._id).find("a.recycle-bin");b.off("click"),b.on("click",function(b){var c=a.grid.getColumns(),d=a.grid.getCellFromEvent(b);if(a.lastViewport=a.grid.getViewport(),c[d.cell]&&"rowDeletion"===c[d.cell].id){var e=a._getItemInfoFromRow(d.row),f=a.module.data.splice(e.idx,1);f.length&&a.module.controller.onRowsDelete(f),a.module.data.triggerChange()}})},_getItemInfoFromEvent:function(a){var b=this,c=this.grid.getCellFromEvent(a);if(!c)return null;var d=b.slick.data.mapRowsToIds([c.row])[0];return d?{id:d,idx:b.slick.data.getIdxById(d),item:b.slick.data.getItemById(d)}:null},_getItemInfoFromRow:function(a){var b=this;if(c.isUndefined(a))return null;var d=b.slick.data.mapRowsToIds([a])[0];return d?{id:d,idx:b.slick.data.getIdxById(d),item:b.slick.data.getItemById(d)}:null},_jpathColor:function(){var a=this;if(a.lastViewport){var b=a.module.getConfiguration("colorjPath"),c=a.grid.getColumns();if(b&&b.length>0){a._makeDataObjects();for(var d=a.lastViewport.top;d<=a.lastViewport.bottom;d++){var e=a.grid.getDataItem(d);if(e&&e.__group!==!0){var f=e.getChildSync(b);if(f)for(var g=0;g<c.length;g++){var h=a.grid.getCellNode(d,g);$(h).css("background-color",f.get())}}}}}},_setScript:function(a){this.filterScript=a||"",this.hasFilter=this._hasFilter(),this._newSandbox()},_newSandbox:function(){this._sandbox=new h,this._sandbox.setContext(this._getNewContext());try{this.filter=this._sandbox.run("(function() {"+this.filterScript+"\n})","Slickgrid"+this.module.getId())}catch(a){this._reportError(a)}},_runFilter:function(a){if(this.hasFilter)try{this.filter.call(a)}catch(a){this._reportError(a)}},_getNewContext:function(){var a=this;return{getGrid:function(){return a.grid},getData:function(){return a.module.data}}},_reportError:function(a){var c="";a&&a.stack&&(c=a.message,a=a.stack);var d="Code executor error";this.title&&(d+=" ("+this.title+")"),c&&(d+=": "+c),b.error(d),b.warn(a)},_inViewFilter:function(){var a=this;if(a.hasFilter&&a.lastViewport){var b=a._getRowsFromViewport(),c=a._getItemsInfo(b);a._runFilter({rows:c,cell:null,event:"inView"})}},_selectHighlight:function(){if(!this.hovering){var a=this,b=c.findIndex(this._highlights,function(b){return b===a._highlighted[0]||b.indexOf&&b.indexOf(a._highlighted[0])>-1});if(this.lastViewport=this.grid.getViewport(),b>-1&&this.module.getConfigurationCheckbox("slickCheck","highlightScroll")){var d=a.slick.data.getItemByIdx(b),e=a.slick.data.mapIdsToRows([d[a.idPropertyName]])[0];if(!e)return;(e<this.lastViewport.top||e>=this.lastViewport.bottom)&&this.grid.scrollRowToTop(e)}}},_updateHighlights:function(){this._highlights=c.pluck(this.module.data,"_highlight")},_drawHighlight:function(){var a=this;this.grid.removeCellCssStyles("highlight");var b={};this._selectHighlight(),this.lastViewport=this.grid.getViewport();for(var d=this.lastViewport.top;d<=this.lastViewport.bottom;d++){var e=this._getItemInfoFromRow(d);if(e){var f=e.item;c.any(a._highlighted,function(a){var b=f._highlight;return Array.isArray(b)||(b=[b]),b.indexOf(a)>-1})&&(b[e.idx]=a.baseCellCssStyle)}}this.grid.setCellCssStyles("highlight",b)},_activateHighlights:function(){var a=this,b=c(this.module.data).pluck("_highlight").flatten().filter(function(a){return!c.isUndefined(a)}).value();a._highlighted=[],e.killHighlight(this.module.getId());for(var d=0;d<b.length;d++)!function(d){e.listenHighlight({_highlight:b[d]},function(b,d){Array.isArray(d)||(d=[d]),b?a._highlighted=c(a._highlighted).push(d).flatten().uniq().value():a._highlighted=c.filter(a._highlighted,function(a){return-1===d.indexOf(a)}),a._drawHighlight()},!1,a.module.getId())}(d)},_makeDataObjects:function(){if(!this.dataObjectsDone){for(var a=0;a<this.module.data.length;a++)this.module.data[a]=DataObject.check(this.module.data[a]);this.dataObjectsDone=!0}},_getRowsFromViewport:function(){if(!this.lastViewport)return[];for(var a=new Array(this.lastViewport.bottom-this.lastViewport.top+1),b=0;b<a.length;b++)a[b]=this.lastViewport.top+b;return a},_getItemsInfo:function(a){var b=[];if(!this.slick.data)return b;for(var c=0;c<a.length;c++){var d=this._getItemInfoFromRow(a[c]);d&&b.push(d)}return b},_getItems:function(a){var b=this._getItemsInfo(a);return c.pluck(b,"item")},_getCell:function(a){if(!a||void 0===a.row||void 0===a.cell)return null;var b=this._getItemInfoFromRow(a.row),c=this.getSlickColumns()[a.cell].jpath.slice();c.unshift(b.idx);var d=this.module.data.getChildSync(c);return void 0!==d&&(d=d.get()),d},_getSelectedItems:function(){return this._getItems(this.grid.getSelectedRows())},onResize:function(){this.grid&&this.grid.resizeCanvas(),this.$rowHelp.css({bottom:0})},getNextIncrementalId:function(){return++r},generateUniqIds:function(){if(this.module.data)for(var a=0;a<this.module.data.length;a++)this.module.data[a][this.idPropertyName]||Object.defineProperty(this.module.data[a],this.idPropertyName,{value:"id_"+ ++r,writable:!1,configurable:!1,enumerable:!1})},_hasFilter:function(){return c.any(this.filterScript.split("\n"),function(a){var b=a.replace(" ","");return b?!b.match(/^\s*\/\/a/):!1})},exportToTabDelimited:function(){var a,b,c=this.grid.getColumns(),d="",e=[];for(a=0;a<c.length;a++)c[a].jpath&&e.push(c[a].name||"");for(d+=e.join("	")+"\r\n",a=0;a<this.module.data.length;a++){for(e=[],b=0;b<c.length;b++){var f=c[b].jpath;if(f){f=f.slice(0),f.unshift(a);var g=this.module.data.getChildSync(f,!1);g=g?g.get():"","string"==typeof g&&(g=g.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")),e.push(g)}}d+=e.join("	")+"\r\n"}return d},onActionReceive:{hoverRow:function(a){var b;if(b=c.isNumber(a)||a instanceof DataNumber?this.module.data[a]:a,b&&b[this.idPropertyName]){var d=this.slick.data.mapIdsToRows([b[this.idPropertyName]])[0],e=this.slick.data.getIdxById(b[this.idPropertyName]);this.module.controller.onHover(e,b),this.grid.scrollRowToTop(d)}},selectRow:function(a){var b;if(b=c.isNumber(a)||a instanceof DataNumber?this.module.data[a]:a,b&&b[this.idPropertyName]){var d=this.slick.data.mapIdsToRows([b[this.idPropertyName]])[0],e=this.slick.data.getIdxById(b[this.idPropertyName]);this.module.controller.onClick(e,b),c.isUndefined(d)||(this.grid.scrollRowToTop(d),this.grid.setActiveCell(d,0))}}}});var u="";return i});