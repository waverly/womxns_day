(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{331:function(e,t,n){__NEXT_REGISTER_PAGE("/add",function(){return e.exports=n(332),{page:e.exports.default}})},332:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(59);t.default=function(e){return o.a.createElement("div",null,o.a.createElement(a.a,null))}},59:function(e,t,n){"use strict";var r=n(35),o=n.n(r),a=n(0),i=n.n(a),l=n(37),s=n(34),c=n.n(s),u=n(36),f=n.n(u),p=n(38),m=n.n(p),d=n(1),b=Object(d.d)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),h=d.b.form.withConfig({displayName:"Form",componentId:"sc-1g9snaq-0"})(["padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;position:fixed;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;left:0;bottom:0;.close{position:fixed;top:10px;right:10px;}label{display:block;margin-bottom:1rem;color:white;}input,textarea,select{padding:0.5rem;font-size:1rem;color:",";font-size:16px;border:unset;&:focus{outline:0;border-bottom:2px solid ",';}}input#name{width:70vw;border-bottom:2px solid black;font-size:10vw;color:black;font-family:"Khand",sans-serif;}input[type="submit"]{width:auto;background:transparent;color:',';border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border:2px solid;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;border-radius:30%;border-collapse:separate;display:block;border:unset;}.wrapper{display:flex;flex-direction:row;width:100%;justify-content:space-between;label{width:70%;display:flex;flex-direction:column;align-items:flex-start;color:transparent;}input{width:100%;width:100%;background-color:transparent;::-webkit-input-placeholder{color:black;font-size:10vw;font-family:"Khand",sans-serif;}::-moz-placeholder{color:black;font-size:10vw;font-family:"Khand",sans-serif;}:-ms-input-placeholder{color:black;font-size:10vw;font-family:"Khand",sans-serif;}:-moz-placeholder{color:black;font-size:10vw;font-family:"Khand",sans-serif;}}}fieldset{border:0;padding:0;display:flex;&[disabled]{opacity:0.5;}&[aria-busy="true"]::before{background-size:50% auto;animation:'," 0.5s linear infinite;}}"],function(e){return e.theme.green},function(e){return e.theme.green},function(e){return e.theme.green},b),g=d.b.button.withConfig({displayName:"Form__Button",componentId:"sc-1g9snaq-1"})(["width:auto;background:transparent;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;font-size:2.5rem;font-weight:600;padding:0.5rem 1.2rem;border-radius:30%;border-collapse:separate;display:",';display:block;position:fixed;bottom:10px;right:10px;&:focus{outline:unset;}span{margin-right:10px;text-transform:uppercase;font-family:"Khand",sans-serif;}svg{height:20px;}'],function(e){return e.willdisplay?"block":"none"}),w=h,y=(n(4),d.b.div.withConfig({displayName:"ErrorMessage__ErrorStyles",componentId:"sc-1gj85wk-0"})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"])),v=function(e){var t=e.error;return t&&t.message?t.networkError&&t.networkError.result&&t.networkError.result.errors.length?t.networkError.result.errors.map(function(e,t){return i.a.createElement(y,{key:t},i.a.createElement("p",{"data-test":"graphql-error"},i.a.createElement("strong",null,"Shoot!"),e.message.replace("GraphQL error: ","")))}):i.a.createElement(y,null,i.a.createElement("p",{"data-test":"graphql-error"},i.a.createElement("strong",null,"Shoot!"),t.message.replace("GraphQL error: ",""))):null};v.defaultProps={error:{}};var E=v,x=n(33),k=n(46);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation CREATE_WOMAN_MUTATION($name: String!, $slug: String!) {\n    createWoman(name: $name, slug: $slug) {\n      name\n      slug\n      id\n    }\n  }\n"]);return P=function(){return e},e}var M=f()(P()),N=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return r=this,o=(e=z(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==L(o)&&"function"!=typeof o?S(r):o,C(S(S(n)),"state",{name:""}),C(S(S(n)),"handleChange",function(e){var t=e.target,r=t.type,o=t.value,a="number"===r?parseFloat(o):o,i=Object(x.c)(a);n.setState({name:a,slug:i})}),n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this;return i.a.createElement(a.Fragment,null,i.a.createElement(l.Mutation,{mutation:M,variables:this.state},function(t,n){var r=n.loading,a=n.error;return i.a.createElement(w,{onSubmit:function(){var n,r=(n=o.a.mark(function n(r){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t({refetchQueries:[{query:k.a}]});case 3:n.sent,m.a.push("/names#".concat(e.state.slug)),e.setState({name:"",slug:""});case 6:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(e){O(a,r,o,i,l,"next",e)}function l(e){O(a,r,o,i,l,"throw",e)}i(void 0)})});return function(e){return r.apply(this,arguments)}}()},i.a.createElement(c.a,{href:"/names"},i.a.createElement("a",null,i.a.createElement("svg",{className:"close",width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9.20022 24.7566L5.6216 21.178L11.5109 15.2887L5.88929 9.6671L9.66706 5.88934L15.2887 11.5109L21.1779 5.62164L24.7566 9.20027L18.8673 15.0896L24.5163 20.7386L20.7385 24.5163L15.0895 18.8673L9.20022 24.7566Z",fill:"black"})))),i.a.createElement(E,{error:a}),i.a.createElement("fieldset",{disabled:r,"aria-busy":r},i.a.createElement("div",{className:"wrapper"},i.a.createElement("label",{htmlFor:"title"},"Name",i.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"...",required:!0,value:e.state.name,onChange:e.handleChange})),i.a.createElement(g,{willdisplay:e.state.name.length>0,type:"submit"},i.a.createElement("span",null,"Submit"),i.a.createElement("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M23 19L23 19.75L23.75 19.75L23.75 19L23 19ZM0.469667 18.4697C0.176775 18.7626 0.176775 19.2374 0.469667 19.5303L5.24264 24.3033C5.53553 24.5962 6.01041 24.5962 6.3033 24.3033C6.59619 24.0104 6.59619 23.5355 6.3033 23.2426L2.06066 19L6.3033 14.7574C6.59619 14.4645 6.59619 13.9896 6.3033 13.6967C6.01041 13.4038 5.53553 13.4038 5.24264 13.6967L0.469667 18.4697ZM22.25 1.84178e-06L22.25 19L23.75 19L23.75 1.97292e-06L22.25 1.84178e-06ZM23 18.25L0.999998 18.25L0.999998 19.75L23 19.75L23 18.25Z",fill:"black"}))))))}))}}])&&_(n.prototype,r),s&&_(n,s),t}();t.a=N}},[[331,1,0]]]);