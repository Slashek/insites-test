/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{constructor(){this.isSearching=!1}onSearchHandler(e){let t=e.which||e.keyCode;this.onSearch.emit({value:e.target.value,keyCode:t})}val(e,t){let a={placeholder:this.placeholder,value:this.value,isSearching:this.isSearching};if(e&&"object"==typeof e&&!t);else{if(e&&!t)return this[e];if(!e||!t)return a;this[e]=t}}render(){return e("div",{class:"ins-searchbar-wrap"},e("div",{class:"ins-sw-in"},e("input",{type:"text",placeholder:this.placeholder,value:this.value,onKeyUp:e=>this.onSearchHandler(e),class:"ins-form-field"}),this.isSearching?e("div",{class:"spinner"}):e("i",{class:"icon-search"})))}static get is(){return"ins-searchbar"}static get properties(){return{isSearching:{type:Boolean,attr:"is-searching",mutable:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},val:{method:!0},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"onSearch",method:"onSearch",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-searchbar .ins-sw-in{position:relative}ins-searchbar .ins-sw-in input{-webkit-box-shadow:none;box-shadow:none;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:400;color:#2c3148;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:20px;padding:.5rem 32px .5rem .5rem}ins-searchbar .ins-sw-in input::-webkit-input-placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input::-ms-input-placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input::placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input::-moz-placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input:-ms-input-placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input:-moz-placeholder{color:#8c94a4}ins-searchbar .ins-sw-in input:hover{border-color:#8c94a4}ins-searchbar .ins-sw-in input:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none;outline:0}ins-searchbar .ins-sw-in input:focus+.icon-search{color:#1e86e3}ins-searchbar .ins-sw-in input:disabled{border-color:#e4e6ec!important;background-color:#fafbfc}ins-searchbar .ins-sw-in .icon-search{font-size:16px;position:absolute;right:8px;top:calc(50% - 8px);color:#8c94a4;-webkit-transition:color .25s ease-in-out;transition:color .25s ease-in-out}ins-searchbar .spinner,ins-searchbar .spinner:after{border-radius:50%;width:18px;height:18px}ins-searchbar .spinner{position:absolute;right:15px;top:calc(50% - 10px);border-top:2px solid #e4e6ec;border-right:2px solid #e4e6ec;border-bottom:2px solid #e4e6ec;border-left:2px solid #8c94a4;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}\@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"}}export{t as InsSearchbar};