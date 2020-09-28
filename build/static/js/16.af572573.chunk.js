/*! For license information please see 16.af572573.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{240:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(29),o=n.n(r),l=n(35),c=n(0),i=n.n(c),s=n(36),d=n(5),u=[];function m(e){var t=function(){var e="https://js.paystack.co/v1/inline.js",t=Object(c.useState)({loaded:!1,error:!1}),n=t[0],a=t[1];return Object(c.useEffect)((function(){if(!u.includes(e)){u.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=function(){a({loaded:!0,error:!1})},r=function(){var n=u.indexOf(e);n>=0&&u.splice(n,1),t.remove(),a({loaded:!0,error:!0})};return t.addEventListener("load",n),t.addEventListener("complete",n),t.addEventListener("error",r),document.body.appendChild(t),function(){t.removeEventListener("load",n),t.removeEventListener("error",r)}}a({loaded:!0,error:!1})}),[e]),[n.loaded,n.error]}(),n=t[0],a=t[1],r=e.publicKey,o=e.firstname,l=e.lastname,i=e.phone,s=e.email,d=e.amount,m=e.reference,f=e.metadata,p=void 0===f?{}:f,b=e.currency,g=void 0===b?"NGN":b,v=e.channels,x=e.label,y=void 0===x?"":x,h=e.plan,E=void 0===h?"":h,w=e.quantity,O=void 0===w?"":w,N=e.subaccount,j=void 0===N?"":N,S=e.transaction_charge,k=void 0===S?0:S,P=e.bearer,C=void 0===P?"account":P;return Object(c.useEffect)((function(){if(a)throw new Error("Unable to load paystack inline script")}),[a]),function(t,c){if(a)throw new Error("Unable to load paystack inline script");n&&function(e){var t=window.PaystackPop&&window.PaystackPop.setup(e);t&&t.openIframe()}({callback:t||function(){return null},onClose:c||function(){return null},key:r,ref:m,email:s,firstname:o,lastname:l,phone:i,amount:d,currency:g,plan:E,quantity:O,"data-custom-button":e["data-custom-button"]||"",channels:v,subaccount:j,transaction_charge:k,bearer:C,label:y,metadata:p})}}var f=function(){return(f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function p(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}var b=Object(c.createContext)({initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),g=function(e){var t=e.children,n=e.onSuccess,a=e.onClose,r=m(p(e,["children","onSuccess","onClose"]));return i.a.createElement(b.Provider,{value:{initializePayment:r,onSuccess:n,onClose:a}},t)},v=function(e){var t=e.children,n=e.ref,a=Object(c.useContext)(b),r=a.initializePayment,o=a.onSuccess,l=a.onClose;return t({initializePayment:function(){return r(o,l)},ref:n})};Object(c.forwardRef)((function(e,t){var n=e.children,a=e.onSuccess,r=e.onClose,o=p(e,["children","onSuccess","onClose"]),l=a||function(){return null},c=r||function(){return null};return i.a.createElement(g,f({},o,{onSuccess:l,onClose:c}),i.a.createElement(v,{ref:t},n))})),t.default=function(e){var t,n,r,u=m({reference:null===(t=JSON.parse(localStorage.getItem("eaze-token")))||void 0===t?void 0:t.id,ref:null===(n=JSON.parse(localStorage.getItem("eaze-token")))||void 0===n?void 0:n.id,email:null===(r=JSON.parse(localStorage.getItem("eaze-token")))||void 0===r?void 0:r.email,amount:1,publicKey:"pk_live_ca4976f3889369eecfd5881f5147cd5f984e917e",currency:"GHS",callback:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t.reference)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),f=Object(c.useState)(null),p=Object(a.a)(f,2),b=p[0],g=p[1],v=Object(c.useState)(!1),x=Object(a.a)(v,2),y=x[0],h=x[1],E=Object(c.useState)(localStorage.getItem("eaze-token")),w=Object(a.a)(E,1)[0],O=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,Object(s.a)("/fetchUser",{id:JSON.parse(w).id});case 4:n=e.sent,h(!1),g(null===(t=n.data)||void 0===t?void 0:t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){document.title="Welcome - Easywill",Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=5;break}return h(!0),e.next=4,O();case 4:h(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]),i.a.createElement(c.Fragment,null,i.a.createElement("header",{className:"bg-white shadow"},i.a.createElement("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},i.a.createElement("div",{class:"md:flex md:items-center md:justify-between"},i.a.createElement("div",{class:"flex-1 min-w-0"},i.a.createElement("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"},"Dashboard")),i.a.createElement("div",{class:"mt-4 flex md:mt-0 md:ml-4"},y?"Loading...":(null===b||void 0===b?void 0:b.payment)?i.a.createElement("span",{class:"ml-3 shadow-sm rounded-md"},i.a.createElement("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"},"Download Will")):i.a.createElement("span",{class:"shadow-sm rounded-md"},i.a.createElement("button",{onClick:function(){return u()},type:"button",class:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"},"Go Premium")))))),i.a.createElement("main",null,i.a.createElement("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"},i.a.createElement("div",{className:"px-4 py-6 sm:px-0"},i.a.createElement("div",null,i.a.createElement("div",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},i.a.createElement(d.b,{to:"biography",className:"bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"},i.a.createElement("div",{className:"px-4 py-5 sm:p-6"},i.a.createElement("dl",null,i.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Biography"),i.a.createElement("dd",{className:"mt-1 text-3xl leading-9 font-semibold text-gray-900"},y?"Loading...":(null===b||void 0===b?void 0:b.personalInformation)?"Done":"Pending")))),i.a.createElement(d.b,{to:"assets",className:"bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"},i.a.createElement("div",{className:"px-4 py-5 sm:p-6"},i.a.createElement("dl",null,i.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Assets"),i.a.createElement("dd",{className:"mt-1 text-3xl leading-9 font-semibold text-gray-900"},y?"Loading...":(null===b||void 0===b?void 0:b.assets)?"Done":"Pending")))),i.a.createElement(d.b,{to:"beneficiaries",className:"bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"},i.a.createElement("div",{className:"px-4 py-5 sm:p-6"},i.a.createElement("dl",null,i.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Beneficiaries"),i.a.createElement("dd",{className:"mt-1 text-3xl leading-9 font-semibold text-gray-900"},y?"Loading...":(null===b||void 0===b?void 0:b.beneficiaries)?"Done":"Pending")))),i.a.createElement(d.b,{to:"executor",className:"bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"},i.a.createElement("div",{className:"px-4 py-5 sm:p-6"},i.a.createElement("dl",null,i.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Executor"),i.a.createElement("dd",{className:"mt-1 text-3xl leading-9 font-semibold text-gray-900"},y?"Loading...":(null===b||void 0===b?void 0:b.executor)?"Done":"Pending")))),i.a.createElement(d.b,{to:"asset_distribution",className:"bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"},i.a.createElement("div",{className:"px-4 py-5 sm:p-6"},i.a.createElement("dl",null,i.a.createElement("dt",{className:"text-sm leading-5 font-medium text-gray-500 truncate"},"Asset Distributor"),i.a.createElement("dd",{className:"mt-1 text-3xl leading-9 font-semibold text-gray-900"},y?"Loading...":(null===b||void 0===b?void 0:b.distribution)?"Done":"Pending"))))))))))}}}]);
//# sourceMappingURL=16.af572573.chunk.js.map