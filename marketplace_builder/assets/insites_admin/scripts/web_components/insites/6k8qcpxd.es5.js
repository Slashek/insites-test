/*! Built with http://stenciljs.com */
insites.loadBundle("6k8qcpxd",["exports"],function(t){var e=window.insites.h,a=function(){function t(){this.tableTitle="",this.buttonLabel="APPLY",this.pageNumber=1,this.pageSize=10,this.dataSrc="",this.pageNumberState=1,this.pageSizeState=10,this.options=[10,20,50],this.tableHeaders=[],this.tableList=[],this.applyBtnState=!0,this.allData=[]}return t.prototype.val=function(t,e){var a={tableTitle:this.tableTitle,withAction:this.withAction,buttonLabel:this.buttonLabel,pageNumber:this.pageNumber,pageSize:this.pageSize,sizeOptions:this.sizeOptions,totalCount:this.totalCount,noPagination:this.noPagination,tableStripe:this.tableStripe,actionOptions:this.actionOptions,actionLabel:this.actionLabel,dataSrc:this.dataSrc,loadingScreen:this.loadingScreen,noWrap:this.noWrap};return t&&!e?this[t]:t&&e?void(this[t]=e):a},t.prototype.onSortHandler=function(t,e){console.log(t.target),this.onSortInsTable.emit(e)},t.prototype.onCheckThCheckboxHandler=function(t){this.getTdCheckBoxes(),this.checkboxes.forEach(function(e){return e.checkBoxChange(t.detail.checked)}),this.updateApplyBtnState()},t.prototype.applyBtnStateListener=function(t){t.detail.label===this.buttonLabel&&this.actionButtonHandler()},t.prototype.tdOnCheckHandler=function(t){t.detail.checked||this.el.querySelector("ins-th-checkbox").thCheckBoxChangeState(t.detail.checked),this.updateApplyBtnState()},t.prototype.updateApplyBtnState=function(){var t=!0;this.getTdCheckBoxes(),this.checkboxes.forEach(function(e){e.getState()&&(t=!1)}),this.applyBtnState=t},t.prototype.componentWillLoad=function(){this.pageNumberState=this.pageNumber,this.sizeOptions&&(this.options=this.sizeOptions),"string"==typeof this.options&&(this.isJSON(this.options)&&(this.options=JSON.parse(this.options)),Array.isArray(this.options)||(this.options=[10,20,50])),this.pageSizeState=Number(this.pageSize),this.getTdCheckBoxes(),this.dataSrc&&this.fetchDataFromSrc()},t.prototype.fetchDataFromSrc=function(){this.rerendering=!1;var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);t.allData=e.list,t.totalCount=e.count,t.tableHeaders=e.headers,t.tableList=e.list.slice(0,10),t.rerendering=!0,t.updatePageLabel()}},e.open("GET",this.dataSrc,!0),e.send()},t.prototype.getTdCheckBoxes=function(){this.rawTdEls=this.el.querySelectorAll("ins-td-checkbox"),this.checkboxes=this.rawTdEls.slice()},t.prototype.isJSON=function(t){try{JSON.parse(t)}catch(t){return!1}return!0},t.prototype.componentDidLoad=function(){this.order=this.sorted,this.noPagination||this.updatePageLabel(),this.overflowWrap=this.el.querySelector(".open-table-tr:first-child").childNodes.length},t.prototype.watchPageNumber=function(){this.updatePageLabel()},t.prototype.updatePageLabel=function(){var t=this.pageSizeState*this.pageNumberState-(this.pageSizeState-1),e=this.pageSizeState*this.pageNumberState;e=e>this.totalCount?this.totalCount:e,this.prevDisabled=1===t,this.nextDisabled=e==this.totalCount,t>e&&(t=1,this.pageNumberState=1,this.prevDisabled=!0,this.nextDisabled=!0),this.currentPageLabel=t+"-"+e+" of "+this.totalCount,this.el.querySelector(".ins-table__page").textContent=this.currentPageLabel},t.prototype.actionButtonHandler=function(){var t=this.el.querySelector("ins-dropdown"),e=[];this.el.querySelector("ins-th-checkbox").thCheckBoxChangeState(!1),t.defaultCurrentFilterState(),this.getTdCheckBoxes(),this.checkboxes.forEach(function(t){t.getState()&&e.push(t.getValue()),t.checkBoxChange(!1)}),this.onApplyInsTable.emit({action:t.getValue(),keys:e}),this.updateApplyBtnState()},t.prototype.updatePageState=function(t){var e=this;if(this.rerendering=!1,!(this.pageNumberState<=1&&"prev"===t))if(this.pageNumberState*this.pageSizeState>=this.totalCount&&"next"===t)this.nextDisabled=!0;else{"prev"===t?this.pageNumberState--:"next"===t&&this.pageNumberState++,this.onPageChange.emit({pageNumber:this.pageNumberState});var a=this.pageNumberState*this.pageSizeState,i=a-this.pageSizeState+1;a>this.totalCount||a===this.pageSizeState||(this.tableList=[],this.allData.forEach(function(t,n){n>=i&&n<=a&&e.tableList.push(t)}),this.updatePageLabel(),this.rerendering=!0)}},t.prototype.updateRowPerPage=function(t){var e=this;this.pageSizeState=t.target.value,this.updatePageLabel(),this.onPageSizeChange.emit({pageSize:t.target.value,pageNumber:this.pageNumberState}),this.allData.forEach(function(t,a){a<e.pageSizeState&&e.tableList.push(t)})},t.prototype.onSearchTable=function(t){var e=this,a=t.detail.value;a&&(this.rerendering=!1,this.tableList=[],this.allData.forEach(function(t){Object.keys(t).forEach(function(i){t[i].toLowerCase().includes(a.toLowerCase())&&e.tableList.push(t)})}))},t.prototype.render=function(){var t=this;return e("div",{class:"wrapper"},this.tableTitle?"":e("div",{class:"ins-searchbar__container clearfix"},e("ins-searchbar",{placeholder:"Search...",class:"outer"})),e("ins-card",{steady:!0,"no-padding":!0},e("div",{class:"ins-open-table "+(this.loadingScreen||!this.tableList.length?"is-loading":"")+" "+(this.tableStripe?"ins-table__stripe":"")},this.tableTitle?e("div",{class:"table-header clearfix"},e("div",{class:"ins-table__title"},this.tableTitle),e("div",{class:"ins-searchbar__container"},e("ins-searchbar",{placeholder:"Search...",class:"inner"}))):"",this.loadingScreen||!this.tableList.length?e("div",{class:"loading-screen"},e("ins-loader",{"state-title":"Processing Your Data","state-message":"Just a moment, we're fetching and processing your data.","state-icon":"processing"})):"",""===this.dataSrc?e("div",{class:"ins-open-table-overflow-wrap "+(this.overflowWrap>4&&!this.noWrap?"auto":"")},e("div",{class:"ins-open-table-wrap"},e("slot",null))):"",this.dataSrc?e("div",{class:"ins-open-table-overflow-wrap "+(this.overflowWrap>4&&!this.noWrap?"auto":"")},e("div",{class:"dynamic-table"},this.tableHeaders?e("div",{class:"open-table-tr"},this.noCheckboxes?"":e("ins-th-checkbox",null),this.tableHeaders.map(function(a){return e("div",{onClick:function(e){return t.onSortHandler(e,a)},class:"open-table-th"},a)})):"",this.tableList.map(function(a){return e("div",{class:"open-table-tr"},t.noCheckboxes?"":e("ins-td-checkbox",null),t.tableHeaders.map(function(t){return e("div",{class:"open-table-td"},a[t])}))})),e("div",{class:"hide-slot"},e("slot",null))):"",this.noPagination?"":e("div",{class:"ins-table__settings"},!this.noCheckboxes&&this.actionOptions?e("div",{class:"ins-open-table-action-container"},e("ins-dropdown",{disabled:this.applyBtnState,label:this.actionLabel,"theme-sm":!0,options:this.actionOptions}),e("ins-button",{disabled:this.applyBtnState,label:this.buttonLabel,size:"small",solid:!0})):"",e("div",{class:"ins-table__pagination"},e("span",null,"Row per page:"),e("select",{class:"ins-table__pagination--option",onChange:function(e){return t.updateRowPerPage(e)}},this.options?this.options.map(function(a){return e("option",{value:a,selected:t.pageSizeState==a},a)}):"")),e("div",{class:"ins-table__page"},this.currentPageLabel),e("div",{class:"ins-table__prev-next"},e("i",{class:"icon-chevron-left "+(this.prevDisabled?"disabled":""),"data-key":"prev",onClick:function(){return t.updatePageState("prev")}}),e("i",{class:"icon-chevron-right "+(this.nextDisabled?"disabled":""),"data-key":"next",onClick:function(){return t.updatePageState("next")}}))))))},Object.defineProperty(t,"is",{get:function(){return"ins-open-table"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{actionLabel:{type:"Any",attr:"action-label",mutable:!0},actionOptions:{type:"Any",attr:"action-options",mutable:!0},allData:{state:!0},applyBtnState:{state:!0},buttonLabel:{type:String,attr:"button-label",mutable:!0},checkboxes:{state:!0},currentPageLabel:{state:!0},dataSrc:{type:String,attr:"data-src",mutable:!0},el:{elementRef:!0},loadingScreen:{type:Boolean,attr:"loading-screen",mutable:!0},nextDisabled:{state:!0},noCheckboxes:{type:Boolean,attr:"no-checkboxes",mutable:!0},noPagination:{type:Boolean,attr:"no-pagination",mutable:!0},noWrap:{type:Boolean,attr:"no-wrap",mutable:!0},options:{state:!0},order:{state:!0},overflowWrap:{state:!0},pageNumber:{type:Number,attr:"page-number",mutable:!0},pageNumberState:{state:!0},pageSize:{type:Number,attr:"page-size",mutable:!0},pageSizeState:{state:!0},prevDisabled:{state:!0},rawTdEls:{state:!0},rawThEls:{state:!0},rerendering:{state:!0},selectValue:{state:!0},sizeOptions:{type:"Any",attr:"size-options",mutable:!0},sorted:{type:String,attr:"sorted",mutable:!0},sortKeyword:{type:String,attr:"sort-keyword",mutable:!0},tableHeaders:{state:!0},tableList:{state:!0},tableStripe:{type:Boolean,attr:"table-stripe",mutable:!0},tableTitle:{type:String,attr:"table-title",mutable:!0},totalCount:{type:"Any",attr:"total-count",mutable:!0,watchCallbacks:["watchPageNumber"]},updatePageLabel:{method:!0},val:{method:!0},withAction:{type:Boolean,attr:"with-action",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onPageSizeChange",method:"onPageSizeChange",bubbles:!0,cancelable:!0,composed:!0},{name:"onPageChange",method:"onPageChange",bubbles:!0,cancelable:!0,composed:!0},{name:"onApplyInsTable",method:"onApplyInsTable",bubbles:!0,cancelable:!0,composed:!0},{name:"onSortInsTable",method:"onSortInsTable",bubbles:!0,cancelable:!0,composed:!0},{name:"onSort",method:"onSort",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"onCheckThCheckbox",method:"onCheckThCheckboxHandler"},{name:"onClickInsButton",method:"applyBtnStateListener"},{name:"onCheckTdCheckbox",method:"tdOnCheckHandler"},{name:"onSearch",method:"onSearchTable"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ins-open-table{position:relative}.ins-open-table__title{color:#1a1d2c;font-size:24px;font-weight:300;font-family:\"Open Sans\",sans-serif;margin-bottom:20px;padding:15px 15px 0;display:inline-block}.ins-open-table__stripe .ins-open-table__title{padding-left:20px}.ins-open-table__stripe ins-tr:nth-child(even){background-color:#fafbfc}.ins-open-table__stripe ins-tr:hover:nth-child(odd){background-color:unset}.ins-open-table__stripe ins-tr>:first-child{padding-left:20px}.ins-open-table__stripe ins-tr>:last-child{padding-right:20px}.ins-open-table__stripe .ins-open-table__settings{padding:15px 20px}.ins-open-table ins-tr:hover ins-td.edit-mode ins-action{display:none}.ins-open-table ins-tr:hover ins-td ins-action{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ins-open-table ins-tr.fixed-height{height:63px}.ins-open-table ins-tr.va-middle ins-td,.ins-open-table ins-tr.va-middle ins-td-checkbox{vertical-align:middle}.ins-open-table ins-tr ins-td-checkbox{padding-top:0;padding-bottom:0}.ins-open-table__settings{padding:15px;text-align:right}.ins-open-table__settings>div{display:inline-block}.ins-open-table__settings:after{content:\"\";display:block;clear:both}.ins-open-table__page,.ins-open-table__pagination,.ins-open-table__prev-next,.ins-open-table__tablePage{color:#8c94a4;font-size:12px}.ins-open-table__page{margin:0 30px}.ins-open-table__prev-next i{cursor:pointer}.ins-open-table__prev-next i:first-child{margin-right:30px}.ins-open-table__prev-next i.disabled{cursor:not-allowed;opacity:.5}.ins-open-table__pagination{position:relative}.ins-open-table__pagination--option{color:#8c94a4;border:none;font-family:\"Open Sans\",sans-serif;padding:2px 15px 2px 2px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;display:inline;background-image:none;font-size:12px;width:auto;height:auto;margin:0}.ins-open-table__pagination--option:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.ins-open-table__pagination span{margin-right:30px}.ins-open-table__pagination:after{content:\"\";width:1px;height:1px;border-top:4px solid #8c94a4;border-left:4px solid transparent;border-right:4px solid transparent;position:absolute;top:10px}.ins-open-table .ins-open-table-action-container{font-family:Roboto,\"Open Sans\",sans-serif;font-weight:500;float:left}.ins-open-table .ins-open-table-action-container ins-dropdown{margin-right:8px}.ins-open-table .ins-open-table-action-container ins-dropdown .ins-dropdown__label{text-transform:none}.ins-open-table .ins-open-table-action-container .ins-open-table-action-button{background-color:#3291e4;border:none;color:#fff;padding:7px 8px;font-size:10px;border-radius:2px;outline:0;letter-spacing:.5px;text-transform:uppercase;cursor:pointer;font-weight:600}.ins-open-table .ins-open-table-action-container .ins-open-table-action-button:hover{background-color:#087ee6}.ins-open-table .ins-open-table-overflow-wrap.auto{overflow:auto;width:100%}.ins-open-table .ins-open-table-overflow-wrap.auto .ins-open-table-wrap{min-width:1024px}.ins-open-table .dynamic-table{display:table;min-height:490px;width:100%}.ins-open-table .ins-open-table-wrap{display:table;font-size:14px;width:100%;table-layout:fixed}.ins-open-table .text-left,.ins-open-table .text-right{text-align:right}.ins-open-table .text-center{text-align:center}.ins-open-table .p-l-r-none{padding-left:0;padding-right:0}.ins-open-table .ins-searchbar__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.ins-open-table div.loading-screen{display:table;width:100%;position:absolute;height:360px;z-index:9999}.ins-open-table div.loading-screen ins-loader{display:table-cell;vertical-align:middle;background-color:#fff}.ins-open-table div.loading-screen.hide{display:none}.ins-open-table.is-loading{position:relative}.ins-open-table.is-loading .ins-open-table__settings{position:absolute;bottom:0;width:100%}.ins-open-table.is-loading .ins-open-table-overflow-wrap{min-height:490px}.ins-open-table.is-loading .ins-open-table-wrap{display:none}.dynamic-table table{border-collapse:collapse;border-spacing:0;width:100%}.dynamic-table table thead{background:0 0;border:none}.dynamic-table table tr td{padding:10px}.outer .ins-searchbar-wrap{float:right;width:25%}.inner .ins-searchbar-wrap{float:right;width:50%}.inner{float:right;width:100%}.ins-table__title{padding:15px 25px!important;float:left;width:50%}.dynamic-table ins-th-checkbox{padding-left:25px}.dynamic-table ins-td-checkbox{padding-left:25px;border:none;border-bottom:1px solid #e4e6ec}.ins-open-table ins-searchbar{padding:25px!important}.wrapper{margin-bottom:30px}.open-table-tr{display:table-row}.open-table-tr:hover{background-color:#fafbfc}.open-table-th{font-weight:600}.open-table-td,.open-table-th{color:#2c3148;font-family:\"Open Sans\",sans-serif;font-size:14px;position:relative;display:table-cell;border-bottom:1px solid #e4e6ec;padding:18px 10px}.open-table-th .icon-arrow-down,.open-table-th .icon-arrow-up{color:#1e86e3;font-size:9px;margin-left:4px}"},enumerable:!0,configurable:!0}),t}();t.InsOpenTable=a,Object.defineProperty(t,"__esModule",{value:!0})});