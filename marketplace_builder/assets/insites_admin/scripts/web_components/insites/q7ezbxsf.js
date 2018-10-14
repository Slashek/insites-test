/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{constructor(){this.hasError=!1,this.readonly=!1,this.disabled=!1,this.required=!1}onTextareaHandler(e){let t=e.which||e.keyCode;this.oninput.emit({value:e.target.value,keyCode:t}),this.valueChange.emit(e.target.value)}render(){return e("div",{class:"ins-textarea-wrap"},e("div",{class:"ins-ta"},this.label?e("label",null,this.label):"",e("textarea",{class:"ins-textarea-field",name:this.name,placeholder:this.placeholder,value:this.value,disabled:this.disabled,readonly:this.readonly,required:this.required,onKeyUp:e=>this.onTextareaHandler(e)}),this.hasError?e("div",{class:"ins-form-error"},this.errorMessage):""))}static get is(){return"ins-textarea"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",mutable:!0},errorMessage:{type:String,attr:"error-message",mutable:!0},hasError:{type:Boolean,attr:"has-error",mutable:!0},label:{type:String,attr:"label",mutable:!0},name:{type:String,attr:"name",mutable:!0},placeholder:{type:String,attr:"placeholder",mutable:!0},readonly:{type:Boolean,attr:"readonly",mutable:!0},required:{type:Boolean,attr:"required",mutable:!0},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"oninput",method:"oninput",bubbles:!0,cancelable:!0,composed:!0},{name:"valueChange",method:"valueChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".ins-ta{position:relative}.ins-ta textarea{-webkit-box-shadow:none;box-shadow:none;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:20px;padding:.5rem 30px .5rem .5rem}.ins-ta textarea:active,.ins-ta textarea:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-ta textarea:active+.icon-search,.ins-ta textarea:focus+.icon-search{color:#1e86e3}.ins-ta label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\",sans-serif;margin-bottom:2px}"}}export{t as InsTextarea};