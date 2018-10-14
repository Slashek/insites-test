/*! Built with http://stenciljs.com */
insites.loadBundle("okooqlxj",["exports"],function(t){var e=window.insites.h,i=function(){function t(){}return t.prototype.render=function(){return e("div",{class:"action-container"},e("div",{class:"action-items"},e("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"ins-action"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ins-action{display:none}ins-action .action-container{display:inline-block;position:relative;z-index:1}ins-action .action-items{font-size:12px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;color:#e4e6ec;position:absolute;top:-13px}ins-action ins-action-item{cursor:pointer;color:#1e86e3}ins-action ins-action-item:not(:first-child){margin-left:16px}ins-action ins-action-item:not(:last-child){margin-right:8px}ins-action ins-action-item:hover{font-weight:600}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this.tableTitle="",this.buttonLabel="APPLY",this.pageNumber=1,this.pageSize=10,this.totalCount=0,this.dataSrc="",this.pageNumberState=1,this.pageSizeState=10,this.options=[10,20,150],this.tableHeaders=[],this.tableList=[],this.applyBtnState=!0,this.allData=[],this.selections=[],this.searchData=[]}return t.prototype.val=function(t,e){var i={tableTitle:this.tableTitle,withAction:this.withAction,buttonLabel:this.buttonLabel,pageNumber:this.pageNumber,pageSize:this.pageSize,sizeOptions:this.sizeOptions,totalCount:this.totalCount,noPagination:this.noPagination,tableStripe:this.tableStripe,actionOptions:this.actionOptions,actionLabel:this.actionLabel,dataSrc:this.dataSrc,loadingScreen:this.loadingScreen,noWrap:this.noWrap};return t&&!e?this[t]:t&&e?void(this[t]=e):i},t.prototype.dynamicKeySort=function(t){var e=1;return"-"===t[0]&&(e=-1,t=t.substr(1)),function(i,a){return(i[t]<a[t]?-1:i[t]>a[t]?1:0)*e}},t.prototype.onSortHandler=function(t){this.rawThEls=this.el.querySelectorAll('ins-th:not([sort-keyword="'+t.detail.sortKeyword+'"])'),this.rawThEls=this.rawThEls.slice(),this.rawThEls.forEach(function(t){return t.clearSortData()}),this.onSortInsTable.emit(t.detail);var e=this.pageNumberState*this.pageSizeState,i=e-this.pageSizeState+1,a=[];this.allData.forEach(function(t,n){n>=i&&n<=e&&a.push(t)}),this.sortedKeyword="ascending"===t.detail.order?t.detail.sortKeyword:"-"+t.detail.sortKeyword,a.sort(this.dynamicKeySort(this.sortedKeyword)),this.tableList=a},t.prototype.onCheckThCheckboxHandler=function(t){this.getTdCheckBoxes(),this.checkboxes.forEach(function(e){return e.checkBoxChange(t.detail.checked)}),this.updateApplyBtnState()},t.prototype.tdOnCheckHandler=function(t){this.updateSelections(t.detail.value),t.detail.checked||this.el.querySelector("ins-th-checkbox").thCheckBoxChangeState(t.detail.checked),this.updateApplyBtnState()},t.prototype.insDropdownOnChangeHandler=function(t){this.selectedBulkAction=t.detail.value},t.prototype.onClickInsActionItem=function(t){var e=this;swal({title:"",html:'\n        <ins-loader\n          state-icon="warning"\n          icon-color="warning"\n          state-message="Are you sure you want to archive this item?">\n        </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Archive"}).then(function(i){i.value&&(document.getElementById(t.detail.value).checkBoxChange(!1),e.deleteItem(t.detail.value),e.updatePageState())})},t.prototype.deleteItem=function(t){var e,i;this.allData&&(e=this.allData.findIndex(function(e){return e.Id===t})),this.searchData&&(i=this.searchData.findIndex(function(e){return e.Id===t})),e>-1&&this.allData.splice(e,1),i>-1&&this.searchData.splice(i,1)},t.prototype.bulkAction=function(){var t=this;"Archive"===this.selectedBulkAction&&swal({title:"",html:'\n        <ins-loader\n          state-icon="warning"\n          icon-color="warning"\n          state-message="Are you sure you want to archive these items?">\n        </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Archive"}).then(function(e){if(e.value){var i=0;t.selections.forEach(function(e){if(t.deleteItem(e),i++,t.selections.length===i){for(var a=t.el.querySelectorAll("ins-td-checkbox"),n=0;n<a.length;n++)a[n].checkBoxChange(!1);t.selections=[],t.updatePageState()}})}})},t.prototype.updateApplyBtnState=function(){var t=!0;this.getTdCheckBoxes(),this.checkboxes.forEach(function(e){e.getState()&&(t=!1)}),this.applyBtnState=t},t.prototype.updateSelections=function(t){var e=this.selections.findIndex(function(e){return e===t});-1===e?this.selections.push(t):this.selections.splice(e,1)},t.prototype.componentWillLoad=function(){this.pageNumberState=this.pageNumber,this.sizeOptions&&(this.options=this.sizeOptions),"string"==typeof this.options&&(this.isJSON(this.options)&&(this.options=JSON.parse(this.options)),Array.isArray(this.options)||(this.options=[10,20,50])),this.pageSizeState=Number(this.pageSize),this.getTdCheckBoxes(),this.dataSrc&&(this.actionOptions=["Archive"],this.fetchDataFromSrc())},t.prototype.fetchDataFromSrc=function(){this.loadingScreen=!0,this.rerendering=!1,this.loaderTitle="Processing Your Data",this.loaderMessage="Just a moment, we're fetching and processing your data.",this.loaderIcon="processing";var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);t.allData=e.list,t.totalCount=e.count,t.tableHeaders=[{label:"Default Column",type:"string"},{label:"Number Column",type:"number"},{label:"Date Column",type:"string"},{label:"Currency Column",type:"currency"}],t.updatePageState()}},e.open("GET",this.dataSrc,!0),e.send()},t.prototype.getTdCheckBoxes=function(){this.rawTdEls=this.el.querySelectorAll("ins-td-checkbox"),this.checkboxes=this.rawTdEls.slice()},t.prototype.isJSON=function(t){try{JSON.parse(t)}catch(t){return!1}return!0},t.prototype.componentDidLoad=function(){window.childNodes&&(this.noPagination||this.updatePageLabel(),this.overflowWrap=this.el.querySelector("ins-tr:first-child").childNodes.length,this.insConfirmModal=this.el.querySelector("ins-confirm-modal"))},t.prototype.watchPageNumber=function(){this.updatePageLabel()},t.prototype.updatePageLabel=function(){var t=this.pageSizeState*this.pageNumberState-(this.pageSizeState-1),e=this.pageSizeState*this.pageNumberState;e=e>this.totalCount?this.totalCount:e,this.prevDisabled=1===t,this.nextDisabled=e==this.totalCount,t>e&&(t=1,this.pageNumberState=1,this.prevDisabled=!0,this.nextDisabled=!0),this.currentPageLabel=t+"-"+e+" of "+this.totalCount,this.el.querySelector(".ins-table__page").textContent=this.currentPageLabel},t.prototype.actionButtonHandler=function(){var t=this.el.querySelector("ins-dropdown"),e=[];this.el.querySelector("ins-th-checkbox").thCheckBoxChangeState(!1),t.defaultCurrentFilterState(),this.getTdCheckBoxes(),this.checkboxes.forEach(function(t){t.getState()&&e.push(t.getValue()),t.checkBoxChange(!1)}),this.onApplyInsTable.emit({action:t.getValue(),keys:e}),this.updateApplyBtnState()},t.prototype.updatePageState=function(t){var e=this;if(this.rerendering=!1,!(this.pageNumberState<=1&&"prev"===t))if(this.pageNumberState*this.pageSizeState>=this.totalCount&&"next"===t)this.nextDisabled=!0;else{"prev"===t?this.pageNumberState--:"next"===t&&this.pageNumberState++,this.onPageChange.emit({pageNumber:this.pageNumberState});var i=this.pageNumberState*this.pageSizeState,a=i-this.pageSizeState+1,n=[];this.search_keyword?(this.searchData.forEach(function(t,s){s>=a&&s<=i?n.push(t):e.searchData.length<e.pageSizeState&&n.push(t)}),this.totalCount=this.searchData.length):(this.allData.forEach(function(t,e){e>=a&&e<=i&&n.push(t)}),this.totalCount=this.allData.length),this.sortedKeyword&&n.length>1&&(this.tableList=n.sort(this.dynamicKeySort(this.sortedKeyword))),this.tableList=n,this.updatePageLabel(),this.rerendering=!0,this.loadingScreen=!1}},t.prototype.updateRowPerPage=function(t){var e=this;this.pageSizeState=t.target.value,this.updatePageLabel(),this.onPageSizeChange.emit({pageSize:t.target.value,pageNumber:this.pageNumberState}),this.tableList=[];var i=[];this.allData.forEach(function(t,a){a<e.pageSizeState&&i.push(t)}),this.sortedKeyword&&(this.tableList=i.sort(this.dynamicKeySort(this.sortedKeyword))),this.tableList=i},t.prototype.onSearchTable=function(t){var e=this;if(this.search_keyword=t.detail.value,this.search_keyword){this.rerendering=!1;var i=[];this.allData.forEach(function(t){Object.keys(t).forEach(function(a){"Default Column"===a&&t[a].toLowerCase().includes(e.search_keyword.toLowerCase())&&i.push(t)})}),this.sortedKeyword&&i.length>1?this.tableList=i.sort(this.dynamicKeySort(this.sortedKeyword)):this.tableList=i,this.searchData=i,this.updatePageState(),this.searchData.length||(this.loaderTitle="",this.loaderMessage='No result found for "'+this.search_keyword+'"',this.loaderIcon="")}else this.updatePageState()},t.prototype.render=function(){var t=this;return e("div",{class:"ins-table "+(this.loadingScreen?"is-loading":"")+" "+(this.tableStripe||this.dataSrc?"ins-table__stripe":"")},e("div",{class:"ins-table-header-wrap"},this.tableTitle?e("div",{class:"ins-table__title"},this.tableTitle):"",this.dataSrc?e("div",{class:"ins-searchbar-container"},e("ins-searchbar",{placeholder:"Search..."})):e("slot",{name:"ins-searchbar"})),""===this.dataSrc?e("div",{class:"ins-table-overflow-wrap "+(this.overflowWrap>4&&!this.noWrap?"auto":"")},e("div",{class:"ins-table-wrap"},e("slot",null))):"",this.dataSrc?e("div",{class:"ins-table-overflow-wrap "+(this.overflowWrap>4&&!this.noWrap?"auto":"")},e("div",{class:"ins-table-wrap"},this.tableHeaders?e("ins-tr",null,this.loadingScreen?"":e("ins-th-checkbox",null),this.tableHeaders.map(function(t){return e("ins-th",{alignment:"number"===t.type||"currency"===t.type?"text-right":"text-left",bold:!0,"sort-keyword":t.label,label:t.label})})):"",this.tableList.map(function(i){return e("ins-tr",{"fixed-height":!0},e("ins-td-checkbox",{id:i.Id,value:i.Id}),t.tableHeaders.map(function(t){return e("ins-td",{alignment:"number"===t.type||"currency"===t.type?"text-right":"text-left",label:"currency"===t.type?"$"+i[t.label]:i[t.label]},"Default Column"===t.label?e("ins-action",null,e("ins-action-item",{label:"Archive",value:i.Id})):"")}))})),e("div",{class:"hide-slot"},e("slot",null)),this.loadingScreen||!this.tableList.length?e("div",{class:"loading-screen"},e("ins-loader",{"state-title":this.loaderTitle,"state-message":this.loaderMessage,"state-icon":this.loaderIcon})):""):"",this.noPagination?"":e("div",{class:"ins-table__settings"},this.withAction&&this.actionOptions||this.dataSrc?e("div",{class:"ins-table-action-container"},e("ins-dropdown",{disabled:this.applyBtnState,label:this.actionLabel,"theme-sm":!0,options:this.actionOptions,placeholder:"Bulk Options"}),e("ins-button",{disabled:this.applyBtnState,label:this.buttonLabel,size:"small",solid:!0,onClick:function(){return t.bulkAction()}})):"",e("div",{class:"ins-table__pagination"},e("span",null,"Rows per page:"),e("select",{class:"ins-table__pagination--option",onChange:function(e){return t.updateRowPerPage(e)}},this.options?this.options.map(function(i){return e("option",{value:i,selected:t.pageSizeState==i},i)}):"")),e("div",{class:"ins-table__page"},this.currentPageLabel),e("div",{class:"ins-table__prev-next"},e("button",{onClick:function(){return t.updatePageState("prev")},disabled:this.prevDisabled},e("i",{class:"icon-chevron-left"})," "),e("button",{onClick:function(){return t.updatePageState("next")},disabled:this.nextDisabled},e("i",{class:"icon-chevron-right"})," "))))},Object.defineProperty(t,"is",{get:function(){return"ins-table"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{actionLabel:{type:"Any",attr:"action-label",mutable:!0},actionOptions:{type:"Any",attr:"action-options",mutable:!0},allData:{state:!0},applyBtnState:{state:!0},buttonLabel:{type:String,attr:"button-label",mutable:!0},checkboxes:{state:!0},currentPageLabel:{state:!0},dataSrc:{type:String,attr:"data-src",mutable:!0},el:{elementRef:!0},insConfirmModal:{state:!0},loaderIcon:{state:!0},loaderMessage:{state:!0},loaderTitle:{state:!0},loadingScreen:{type:Boolean,attr:"loading-screen",mutable:!0},nextDisabled:{state:!0},noPagination:{type:Boolean,attr:"no-pagination",mutable:!0},noWrap:{type:Boolean,attr:"no-wrap",mutable:!0},options:{state:!0},overflowWrap:{state:!0},pageNumber:{type:Number,attr:"page-number",mutable:!0},pageNumberState:{state:!0},pageSize:{type:Number,attr:"page-size",mutable:!0},pageSizeState:{state:!0},prevDisabled:{state:!0},rawTdEls:{state:!0},rawThEls:{state:!0},rerendering:{state:!0},search_keyword:{state:!0},searchData:{state:!0},selectedBulkAction:{state:!0},selectedRows:{state:!0},selections:{state:!0},selectValue:{state:!0},sizeOptions:{type:"Any",attr:"size-options",mutable:!0},tableHeaders:{state:!0},tableList:{state:!0},tableStripe:{type:Boolean,attr:"table-stripe",mutable:!0},tableTitle:{type:String,attr:"table-title",mutable:!0},totalCount:{type:"Any",attr:"total-count",mutable:!0,watchCallbacks:["watchPageNumber"]},updatePageLabel:{method:!0},val:{method:!0},withAction:{type:Boolean,attr:"with-action",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onPageSizeChange",method:"onPageSizeChange",bubbles:!0,cancelable:!0,composed:!0},{name:"onPageChange",method:"onPageChange",bubbles:!0,cancelable:!0,composed:!0},{name:"onApplyInsTable",method:"onApplyInsTable",bubbles:!0,cancelable:!0,composed:!0},{name:"onSortInsTable",method:"onSortInsTable",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"onSort",method:"onSortHandler"},{name:"onCheckThCheckbox",method:"onCheckThCheckboxHandler"},{name:"onCheckTdCheckbox",method:"tdOnCheckHandler"},{name:"insDropdownOnChange",method:"insDropdownOnChangeHandler"},{name:"onClickInsActionItem",method:"onClickInsActionItem"},{name:"onSearch",method:"onSearchTable"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ins-table__title{color:#1a1d2c;font-size:24px;font-weight:300;font-family:\"Open Sans\",sans-serif;margin-bottom:20px;padding:15px 15px 0;display:inline-block}.ins-table__stripe .ins-table__title{padding-left:20px}.ins-table__stripe ins-tr:nth-child(even){background-color:#fafbfc}.ins-table__stripe ins-tr:hover:nth-child(odd){background-color:unset}.ins-table__stripe ins-tr>:first-child{padding-left:24px}.ins-table__stripe ins-tr>:last-child{padding-right:24px}.ins-table__stripe .ins-table__settings{padding:15px 24px}.ins-table ins-tr:hover ins-td.edit-mode ins-action{display:none}.ins-table ins-tr:hover ins-td ins-action{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ins-table ins-tr.fixed-height{height:63px}.ins-table ins-tr.va-middle ins-td,.ins-table ins-tr.va-middle ins-td-checkbox{vertical-align:middle}.ins-table ins-tr ins-td-checkbox{padding-top:0;padding-bottom:0}.ins-table__settings{padding:15px;text-align:right}.ins-table__settings>div{display:inline-block}.ins-table__settings:after{content:\"\";display:block;clear:both}.ins-table__page,.ins-table__pagination,.ins-table__prev-next,.ins-table__tablePage{color:#8c94a4;font-size:12px}.ins-table__page{margin:0 30px}.ins-table__prev-next button{padding:4px;cursor:pointer;color:#8c94a4;outline:0}.ins-table__prev-next button:disabled{cursor:not-allowed;opacity:.5}.ins-table__prev-next button:first-child{margin-right:22px}.ins-table__pagination{position:relative}.ins-table__pagination--option{color:#8c94a4;border:none;font-family:\"Open Sans\",sans-serif;padding:2px 15px 2px 2px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;display:inline;background-image:none;font-size:12px;width:auto;height:auto;margin:0}.ins-table__pagination--option:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.ins-table__pagination span{margin-right:30px}.ins-table__pagination:after{content:\"\";width:1px;height:1px;border-top:4px solid #8c94a4;border-left:4px solid transparent;border-right:4px solid transparent;position:absolute;top:10px}.ins-table .ins-table-action-container{font-family:Roboto,\"Open Sans\",sans-serif;font-weight:500;float:left}.ins-table .ins-table-action-container ins-dropdown{margin-right:8px}.ins-table .ins-table-action-container ins-dropdown .ins-dropdown__label{text-transform:none;float:left;font-size:10px;height:24px;padding:5px 8px}.ins-table .ins-table-action-container ins-dropdown .ins-dropdown__options{margin-top:0;top:calc(100% + 8px)}.ins-table .ins-table-action-container .ins-table-action-button{background-color:#3291e4;border:none;color:#fff;padding:7px 8px;font-size:10px;border-radius:2px;outline:0;letter-spacing:.5px;text-transform:uppercase;cursor:pointer;font-weight:600}.ins-table .ins-table-action-container .ins-table-action-button:hover{background-color:#087ee6}\@media (max-width:1440px){.ins-table .ins-table-overflow-wrap.auto{overflow:auto;width:100%}.ins-table .ins-table-overflow-wrap.auto .ins-table-wrap{min-width:1024px}}.ins-table .ins-table-wrap{display:table;font-size:14px;width:100%;table-layout:fixed}.ins-table .text-right{text-align:right}.ins-table .text-left{text-align:left}.ins-table .text-center{text-align:center}.ins-table .p-l-r-none{padding-left:0;padding-right:0}.ins-table div.loading-screen{padding:100px 0 0;min-height:674px}ins-table .ins-table-header-wrap{position:relative;padding:24px}ins-table .ins-table-header-wrap .ins-table__title{padding:0;margin:0}ins-table .ins-searchbar-container{position:absolute;min-width:350px;right:24px;top:calc(50% - 20px)}ins-table ins-tr ins-td:first-of-type{padding-left:24px;color:#1e86e3}ins-table ins-tr ins-td:first-of-type :hover{cursor:pointer;font-weight:600}ins-table ins-tr ins-td:last-of-type{padding-right:24px}ins-table ins-tr ins-td-checkbox+ins-td:first-of-type{padding-left:11px}ins-table .ins-table-overflow-wrap{min-height:674px}\@font-face{font-family:insites-20-fonticon;src:url(src/components/webfonts/insites-20-fonticon.eot?trsgv5);src:url(src/components/webfonts/insites-20-fonticon.eot?trsgv5#iefix) format('embedded-opentype'),url(src/components/webfonts/insites-20-fonticon.ttf?trsgv5) format('truetype'),url(src/components/webfonts/insites-20-fonticon.woff?trsgv5) format('woff'),url(src/components/webfonts/insites-20-fonticon.svg?trsgv5#insites-20-fonticon) format('svg');font-weight:400;font-style:normal}[class*=\" icon-\"],[class^=icon-]{font-family:insites-20-fonticon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-content_copy:before{content:\"\\e14d\"}.icon-code:before{content:\"\\e86f\"}.icon-format_bold:before{content:\"\\e238\"}.icon-format_italic:before{content:\"\\e23f\"}.icon-format_list_bulleted:before{content:\"\\e241\"}.icon-link2:before{content:\"\\e157\"}.icon-panorama:before{content:\"\\e40b\"}.icon-strikethrough_s:before{content:\"\\e257\"}.icon-remove:before{content:\"\\e15b\"}.icon-paragraph:before{content:\"\\e948\"}.icon-completed-outcomes:before{content:\"\\e944\"}.icon-disputes:before{content:\"\\e945\"}.icon-number-of-checks:before{content:\"\\e946\"}.icon-total-sales:before{content:\"\\e947\"}.icon-close-1:before{content:\"\\e943\"}.icon-utilities:before{content:\"\\e900\"}.icon-logout-1:before{content:\"\\e901\"}.icon-lock-1:before{content:\"\\e902\"}.icon-arrow-left-1:before{content:\"\\e903\"}.icon-headset-1:before{content:\"\\e904\"}.icon-notification-1:before{content:\"\\e905\"}.icon-settings-1:before{content:\"\\e906\"}.icon-support-1:before{content:\"\\e907\"}.icon-user-1:before{content:\"\\e908\"}.icon-globals:before{content:\"\\e909\"}.icon-image:before{content:\"\\e90a\"}.icon-plugin-store:before{content:\"\\e90b\"}.icon-dashboard:before{content:\"\\e90c\"}.icon-entries:before{content:\"\\e90d\"}.icon-maximize:before{content:\"\\e90e\"}.icon-notepad-1:before{content:\"\\e90f\"}.icon-briefcase-1:before{content:\"\\e910\"}.icon-email-1:before{content:\"\\e911\"}.icon-check-2:before{content:\"\\e912\"}.icon-phone-1:before{content:\"\\e913\"}.icon-analytic-1:before{content:\"\\e914\"}.icon-goal-1:before{content:\"\\e915\"}.icon-minimize-1:before{content:\"\\e916\"}.icon-monitor-1:before{content:\"\\e917\"}.icon-search-1:before{content:\"\\e918\"}.icon-menu-1:before{content:\"\\e919\"}.icon-notepad:before{content:\"\\e91a\"}.icon-phone:before{content:\"\\e91b\"}.icon-notifications:before{content:\"\\e91c\"}.icon-report:before{content:\"\\e91d\"}.icon-add:before{content:\"\\e91e\"}.icon-arrow-back:before{content:\"\\e91f\"}.icon-arrow-down:before{content:\"\\e920\"}.icon-arrow-forward:before{content:\"\\e921\"}.icon-arrow-up:before{content:\"\\e922\"}.icon-attachment:before{content:\"\\e923\"}.icon-cancel:before{content:\"\\e924\"}.icon-check-circle:before{content:\"\\e925\"}.icon-check:before{content:\"\\e926\"}.icon-chevron-left:before{content:\"\\e927\"}.icon-chevron-right:before{content:\"\\e928\"}.icon-clock:before{content:\"\\e929\"}.icon-close:before{content:\"\\e92a\"}.icon-crop:before{content:\"\\e92b\"}.icon-delete:before{content:\"\\e92c\"}.icon-edit:before{content:\"\\e92d\"}.icon-exit-to-app:before{content:\"\\e92e\"}.icon-external-link:before{content:\"\\e92f\"}.icon-file-download:before{content:\"\\e930\"}.icon-file-upload:before{content:\"\\e931\"}.icon-headset:before{content:\"\\e932\"}.icon-keyboard-arrow-down:before{content:\"\\e933\"}.icon-keyboard-arrow-up:before{content:\"\\e934\"}.icon-language:before{content:\"\\e935\"}.icon-link:before{content:\"\\e936\"}.icon-lock:before{content:\"\\e937\"}.icon-mail:before{content:\"\\e938\"}.icon-person:before{content:\"\\e939\"}.icon-play-circle-fill:before{content:\"\\e93a\"}.icon-print:before{content:\"\\e93b\"}.icon-retry:before{content:\"\\e93c\"}.icon-search:before{content:\"\\e93d\"}.icon-settings:before{content:\"\\e93e\"}.icon-today:before{content:\"\\e93f\"}.icon-view:before{content:\"\\e940\"}.icon-warning:before{content:\"\\e941\"}.icon-work:before{content:\"\\e942\"}"},enumerable:!0,configurable:!0}),t}(),n=function(){function t(){this.alignment="",this.clickable=!1,this.bold=!1,this.ellipsis=!1,this.breakWord=!0,this.inlineEdit=!1}return t.prototype.getnewText=function(t){this.newLabel=t.detail.value},t.prototype.onClickInsActionItemListener=function(t){"edit"===t.detail.label.toLowerCase()&&this.inlineEdit&&this.openEditor()},t.prototype.val=function(t,e){return t&&!e?this[t]:t&&e?void(this[t]=e):{label:void 0,alignment:"",clickable:!1,bold:!1,initial:void 0,imgLink:void 0,ellipsis:!1,breakWord:!0,inlineEdit:!1}},t.prototype.openEditor=function(){this.newLabel=this.label,this.insTd.classList.add("edit-mode"),this.insTd.querySelector(".td-label").classList.add("hide"),this.insTd.querySelector(".edit-container").classList.add("show")},t.prototype.newValue=function(){return this.newLabel},t.prototype.closeEditor=function(){this.insTd.classList.remove("edit-mode"),this.insTd.querySelector(".td-label").classList.remove("hide"),this.insTd.querySelector(".edit-container").classList.remove("show")},t.prototype.clickEventHandler=function(t){this.clickable&&this.onClickInsTd.emit(t)},t.prototype.componentWillLoad=function(){(this.imgLink||this.initial)&&(this.hasImg=!0)},t.prototype.render=function(){var t=this;return e("div",{class:"ins-td"},this.hasImg?e("div",{class:"ins-td__image"},this.imgLink?e("img",{src:this.imgLink}):e("span",null,this.initial)):"",e("div",{class:this.alignment+" "+(this.hasImg?"p-l-45":"")},e("div",{class:" "+(this.ellipsis?"ins-td__text-ellipsis":"")+" "+(this.breakWord?"ins-td__break-word":"")},e("span",{class:(this.clickable?"clickable":"")+" "+(this.bold?"text-bold":"")+" ins-label",onClick:function(e){return t.clickEventHandler(e)}},e("span",{class:"td-label"},this.label),this.inlineEdit?e("div",{class:"edit-container"},e("div",{class:"clearfix"},e("div",{class:"col-w-80"},e("ins-input",{value:this.label})),e("div",{class:"col-w-20"},e("ins-button",{label:"Update",class:"update",onClick:function(){return t.closeEditor()}})))):"")),e("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"ins-td"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{alignment:{type:String,attr:"alignment",mutable:!0},bold:{type:Boolean,attr:"bold",mutable:!0},breakWord:{type:Boolean,attr:"break-word",mutable:!0},clickable:{type:Boolean,attr:"clickable",mutable:!0},closeEditor:{method:!0},ellipsis:{type:Boolean,attr:"ellipsis",mutable:!0},hasImg:{state:!0},imgLink:{type:String,attr:"img-link",mutable:!0},initial:{type:String,attr:"initial",mutable:!0},inlineEdit:{type:Boolean,attr:"inline-edit",mutable:!0},insTd:{elementRef:!0},label:{type:String,attr:"label",mutable:!0},newLabel:{state:!0},newValue:{method:!0},openEditor:{method:!0},val:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onClickInsTd",method:"onClickInsTd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"oninput",method:"getnewText"},{name:"onClickInsActionItem",method:"onClickInsActionItemListener"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ins-td{display:table-cell;padding:10px;border-bottom:1px solid #e4e6ec;color:#2c3148;position:relative}ins-td .show{display:block!important}ins-td .hide{display:none!important}ins-td .edit-container{display:none}ins-td .edit-container ins-input input.ins-form-field{margin-bottom:0!important}ins-td .ins-label.clickable{color:#1e86e3}ins-td .ins-label.clickable:hover{cursor:pointer;font-weight:600}ins-td .p-l-45{padding-left:45px}ins-td .ins-td__image{background:#fff;border:1px solid #e4e6ec;border-radius:50%;width:30px;height:30px;display:inline-block;text-align:center;margin-right:14px;position:absolute;top:calc(50% - 16px)}ins-td .ins-td__image span{color:#8c94a4;font-size:12px;text-transform:uppercase;vertical-align:-webkit-baseline-middle}ins-td .ins-td__image img{border-radius:50%}ins-td .ins-td__break-word{word-break:break-word}ins-td .ins-td__text-ellipsis{overflow:hidden;text-overflow:ellipsis}ins-td [class*=col-w-]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box}ins-td .col-w-80{width:80%;padding-right:10px}ins-td .col-w-20{width:20%}:host{display:table-cell;padding:11px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148}:host .text-right{text-align:right}:host .text-left{text-align:left}:host .text-center{text-align:center}:host .text-bold{font-weight:600}"},enumerable:!0,configurable:!0}),t}();t.InsAction=i,t.InsTable=a,t.InsTd=n,Object.defineProperty(t,"__esModule",{value:!0})});