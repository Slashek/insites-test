/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{constructor(){this.instance="",this.link=""}routeInstanceSubItemHandler(){this.routeInstanceSubItem.emit({instance:this.instance,link:this.link})}val(t,e){let n={instance:this.instance,link:this.link};if(t&&"object"==typeof t&&!e);else{if(t&&!e)return this[t];if(!t||!e)return n;this[t]=e}}render(){return t("div",{class:"ins-instance-sub-item"},t("a",{href:this.link,onClick:()=>this.routeInstanceSubItemHandler()},t("span",{class:"instance-sub-item-label"},this.instance?this.instance:"Label")))}static get is(){return"ins-instances-sub-item"}static get encapsulation(){return"shadow"}static get properties(){return{instance:{type:String,attr:"instance",mutable:!0},link:{type:String,attr:"link",mutable:!0},val:{method:!0}}}static get events(){return[{name:"routeInstanceSubItem",method:"routeInstanceSubItem",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host .ins-instance-sub-item:hover{background-color:#e4e6ec}:host a{display:block;width:100%;padding:15px 20px 15px 57px;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;color:#8c94a4;font-size:16px;position:relative}"}}export{e as InsInstancesSubItem};