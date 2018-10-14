/*! Built with http://stenciljs.com */
insites.loadBundle("4ri5i94y",["exports"],function(t){var e=window.insites.h,n=function(){function t(){this.logoLink="",this.instance="",this.instanceLink="",this.withSubItem=!1}return t.prototype.routeInstanceHandler=function(){this.routeInstance.emit({instance:this.instance,logoLink:this.logoLink,withSubItem:this.withSubItem}),this.subItemState=!0},t.prototype.emitActiveSubItem=function(){this.activeSubItem.emit(),this.subItemState=!1},t.prototype.val=function(t,e){var n={logoLink:this.logoLink,instance:this.instance,instanceLink:this.instanceLink,withSubItem:this.withSubItem};if(t&&"object"==typeof t&&!e);else{if(t&&!e)return this[t];if(!t||!e)return n;this[t]=e}},t.prototype.render=function(){var t=this;return e("div",{class:"ins-instances-item-wrap "+(this.subItemState?"sub-item-active":"")},e("a",{href:this.instanceLink,onClick:function(){return t.routeInstanceHandler()},class:"ins-instances-item"},e("div",{class:"logo-wrap"},e("img",{src:this.logoLink?this.logoLink:"http://ins-styleguide.s3-website-us-west-2.amazonaws.com/assets/images/insites_logo_icon.svg"})),e("span",{class:"instance-label"},this.instance?this.instance:"Label"),e("i",{class:"icon-chevron-right"})),this.withSubItem?e("div",{class:"instance-sub-item__container"},e("a",{onClick:function(){return t.emitActiveSubItem()}},e("i",{class:"fas icon-chevron-left"}),e("span",null,this.instance)),e("slot",null)):"")},Object.defineProperty(t,"is",{get:function(){return"ins-instances-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},instance:{type:String,attr:"instance",mutable:!0},instanceLink:{type:String,attr:"instance-link",mutable:!0},logoLink:{type:String,attr:"logo-link",mutable:!0},subItemState:{state:!0},val:{method:!0},withSubItem:{type:Boolean,attr:"with-sub-item",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"routeInstance",method:"routeInstance",bubbles:!0,cancelable:!0,composed:!0},{name:"activeSubItem",method:"activeSubItem",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ins-instances-item-wrap{text-align:left;margin-right:2px}.ins-instances-item-wrap.sub-item-active .instance-sub-item__container{display:block}.ins-instances-item-wrap .instance-sub-item__container{display:none}.ins-instances-item-wrap a{display:block;width:100%;padding:15px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;color:#8c94a4;font-size:16px;position:relative}.ins-instances-item-wrap a .logo-wrap{float:left;width:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #eee;border-radius:50%;margin-right:15px;background-color:#fafbfc;overflow:hidden}.ins-instances-item-wrap a .logo-wrap img{width:100%}.ins-instances-item-wrap a .instance-label{float:left;margin-top:3px}.ins-instances-item-wrap a .icon-chevron-right{position:absolute;font-size:10px;top:calc(50% - 5px);right:20px;opacity:0}.ins-instances-item-wrap a:after{clear:both;content:\"\";display:block}.ins-instances-item-wrap a:hover{color:#2c3148;background-color:#e4e6ec}.ins-instances-item-wrap a:hover .icon-chevron-right{opacity:1}.ins-instances-item-wrap .instance-sub-item__container a{color:#1f86e3;font-weight:600;padding-left:29px}.ins-instances-item-wrap .instance-sub-item__container a:hover{background-color:unset}.ins-instances-item-wrap .instance-sub-item__container a i.fas{font-size:10px;margin-right:20px;vertical-align:1px}"},enumerable:!0,configurable:!0}),t}();t.InsInstancesItem=n,Object.defineProperty(t,"__esModule",{value:!0})});