"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{90101:function(e,t,n){n.r(t),n.d(t,{__N_SSP:function(){return S},default:function(){return T},messages:function(){return D}});var r=n(39827),i=n(48756),l=n(61084),a=n(2722);n(69483);var o=n(12366),s=n(70079),c=n(949),u=n(66873),d=n(47527),p=n(16640),g=n(91128),f=n(53197),h=n(10518),x=n(19841),m=n(9063),b=n(84692),v=n(68498),j=n(66520),y=n(35250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e){let{auth0Provider:t,enableNewAuthFlow:n,nextUrl:r,isStorageComplianceEnabled:i}=e,l=(0,m.Z)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,y.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,y.jsx)("h1",{"aria-label":l.formatMessage(E.ariaLabel),children:(0,y.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,y.jsx)("div",{children:j.L})})})}),(0,y.jsxs)("div",{className:"relative flex w-full grow flex-col items-center justify-center",children:[(0,y.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,y.jsx)(b.Z,O({},E.pageTitle))}),(0,y.jsx)("div",{className:"mt-5 w-full max-w-[440px]",children:n?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"flex w-full flex-col gap-3",children:[(0,y.jsx)(L,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",onClick:()=>{h.m9.logEvent("chatgpt_auth_log_in",null,{provider:"google"}),g.A.logEvent(f.M.authLogin,{provider:"google"}),(0,a.signIn)("openai",{callbackUrl:r},{prompt:"login",login_hint:(0,p.W_)({idp:"google"})})},children:(0,y.jsx)(b.Z,O({},E.continueWithGoogle))}),(0,y.jsx)(L,{icon:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",onClick:()=>{h.m9.logEvent("chatgpt_auth_log_in",null,{provider:"microsoft"}),g.A.logEvent(f.M.authLogin,{provider:"microsoft"}),(0,a.signIn)("openai",{callbackUrl:r},{prompt:"login",login_hint:(0,p.W_)({idp:"microsoft"})})},children:(0,y.jsx)(b.Z,O({},E.continueWithMicrosoft))}),(0,y.jsx)("div",{className:"my-2 w-full border-t border-black/5"}),(0,y.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,y.jsx)(L,{primary:!0,className:"justify-center",onClick:()=>{h.m9.logEvent("chatgpt_auth_log_in",null,{provider:"openai"}),g.A.logEvent(f.M.authLogin,{provider:"openai"}),(0,a.signIn)("openai",{callbackUrl:r},{prompt:"login",login_hint:(0,p.W_)({idp:"openai"})})},children:(0,y.jsx)(b.Z,O({},E.logIn))}),(0,y.jsx)(L,{primary:!0,className:"justify-center",onClick:()=>{h.m9.logEvent("chatgpt_auth_sign_up",null,{provider:"openai"}),g.A.logEvent(f.M.authSignup,{provider:"openai"}),(0,a.signIn)("openai",{callbackUrl:r},{prompt:"login",login_hint:(0,p.W_)({idp:"openai",screen:"signup"})})},children:(0,y.jsx)(b.Z,O({},E.signUp))})]})]})}):(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",children:[(0,y.jsx)(L,{primary:!0,testid:"login-button",onClick:()=>{h.m9.logEvent("chatgpt_auth_log_in",null,{provider:"auth0"}),g.A.logEvent(f.M.authLogin,{provider:"auth0"}),(0,a.signIn)(t,{callbackUrl:r},{prompt:"login"})},children:(0,y.jsx)(b.Z,O({},E.logIn))}),(0,y.jsx)(L,{primary:!0,as:"button",onClick:()=>{h.m9.logEvent("chatgpt_auth_sign_up",null,{provider:"auth0"}),g.A.logEvent(f.M.authSignup,{provider:"auth0"}),(0,a.signIn)(t,{callbackUrl:r},{prompt:"login",screen_hint:"signup"})},children:(0,y.jsx)(b.Z,O({},E.signUp))})]})})})]}),(0,y.jsxs)("div",{className:"mt-10 flex flex-col justify-center ",children:[(0,y.jsx)("div",{className:"flex justify-center text-gray-300 md:mb-3",children:(0,y.jsx)(d.nV,{className:"h-[22px] w-auto"})}),(0,y.jsx)(u.VL,{isStorageComplianceEnabled:i})]})]})})}function L(e){let{icon:t,children:n,className:r,onClick:i,testid:l,style:a="new",primary:o=!1}=e;return(0,y.jsxs)("button",{className:(0,x.default)("relative",r,{"btn-neutral flex items-center justify-center gap-3 rounded p-3 text-center text-base":"legacy"===a,"flex h-12 items-center justify-center rounded-md text-center text-base font-medium":"new"===a,"bg-black/5 hover:bg-black/10 dark:bg-[rgba(255,255,255,0.15)] dark:hover:bg-white/20":"new"===a&&!o,"bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]":"new"===a&&o}),"data-testid":l,onClick:i,children:[t?(0,y.jsx)("div",{className:(0,x.default)("h-5 w-5 justify-self-start",{"absolute left-5 top-1/2 -translate-y-1/2":"new"===a}),style:{backgroundImage:t}}):null,(0,y.jsx)("div",{className:(0,x.default)({"relative -top-[1px]":"new"===a}),children:n})]})}let E=(0,v.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"}});var M=n(9015),I=n(65455),C=n(88565),P=n(34777),A=n(21243);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=!0;function T(e){var t;let{serviceStatus:n,examples:r,auth0Provider:c,enableNewAuthFlow:u,cfConnectingIp:d,isStorageComplianceEnabled:p,statsigShowCapacityGate:h}=e,x=(0,o.useRouter)(),{next:b}=x.query,v="string"==typeof b&&b.startsWith("/")?b:"/";x.asPath.includes("#")&&(v+="#"+x.asPath.split("#")[1]);let j=(0,m.Z)(),w=!!(null==n?void 0:n.oof)||!0===h,O=(0,s.useRef)(!1),k="sso"in x.query&&(null===(t=x.query.sso)||void 0===t||t),L=k?x.query.connection:void 0;(0,s.useEffect)(()=>{if(k&&!w){var e;let t=null===(e=C.bX.getCookie(C.cn.DeviceId))||void 0===e?void 0:e.toString();(0,a.signIn)("openai"===k?"openai":"auth0",{callbackUrl:v},_(_({},t?{device_id:t}:{}),L?{connection:L}:{}))}},[v,k,L,w]),(0,s.useEffect)(()=>{g.A.logEvent(f.M.loggedOutOpenedAuthLogin,{cfConnectingIp:d})},[d]),(0,s.useEffect)(()=>{"#pricing"===window.location.hash&&C.bX.setCookie(C.cn.ShowPaymentModal,!0,{maxAge:21600})},[]),(0,s.useEffect)(()=>{if(O.current)return;O.current=!0;let{inv_ws_name:e,inv_email:t}=x.query;e=Array.isArray(e)?e[0]:e,t=Array.isArray(t)?t[0]:t,e&&t&&I.m.success(j.formatMessage(D.invitedToastMessage,{workspace_name:e,email:t}),{hasCloseButton:!0,duration:600})},[x.query,j]);let E=function(){let{layer:e}=(0,P.AH)(P.VG.AnonChatLayer),t=e.get(P.yp.ANON_IS_SPANISH_TRANSLATION_ENABLED,!1),{locale:n,setLocale:r}=(0,M.bU)();return(0,s.useEffect)(()=>{!(!t||F(n))&&F(window.navigator.language)&&r("es-ES",!1)},[t,r,n]),F(n)?"es-ES":"en-US"}();return w?(0,y.jsx)(i.Z,{}):k?null:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{}),(0,y.jsx)(W,{auth0Provider:c,enableNewAuthFlow:u,examples:r[E],nextUrl:v,isStorageComplianceEnabled:p},E)]})}let W=e=>{let{auth0Provider:t,enableNewAuthFlow:n,examples:r=[],nextUrl:i,isStorageComplianceEnabled:l}=e;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(U,{auth0Provider:t,enableNewAuthFlow:n,nextUrl:i,examples:r,isStorageComplianceEnabled:l}),!1]})};function U(e){let{auth0Provider:t,enableNewAuthFlow:n,nextUrl:r,examples:i=[],isStorageComplianceEnabled:l}=e,{resolvedTheme:a}=(0,A.F)(),o="dark"===a,u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{null===u.current&&(u.current=document.body.style.backgroundColor);let e=o?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==u.current&&(document.body.style.backgroundColor=u.current)}},[o]),(0,y.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[(0,y.jsx)(c.O,{examples:i}),(0,y.jsx)(k,{auth0Provider:t,enableNewAuthFlow:n,nextUrl:r,isStorageComplianceEnabled:l})]})}function F(e){return"es"===e||e.startsWith("es-")}let D=(0,v.vU)({pageTitle:{id:"Login.pageTitle",defaultMessage:"Get started"},ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},welcome:{id:"Login.welcome",defaultMessage:"Welcome to ChatGPT"},logIn:{id:"Login.logIn",defaultMessage:"Log in"},signUp:{id:"Login.signUp",defaultMessage:"Sign up"},continueWithGoogle:{id:"Login.continueWithGoogle",defaultMessage:"Continue with Google"},continueWithMicrosoft:{id:"Login.continueWithMicrosoft",defaultMessage:"Continue with Microsoft"},useDevAuth:{id:"Login.useDevAuth",defaultMessage:"Use dev auth"},useProdAuth:{id:"Login.useProdAuth",defaultMessage:"Use prod auth"},orTryAnotherWay:{id:"Login.orTryAnotherWay",defaultMessage:"Or try another way"},logInWithOpenAI:{id:"Login.logInWithOpenAI",defaultMessage:"Log in with your OpenAI account to continue"},invitedToastMessage:{id:"Login.invitedToastMessage",defaultMessage:"You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation."}})},66873:function(e,t,n){n.d(t,{VL:function(){return m},Wk:function(){return x},jI:function(){return v},xh:function(){return h}});var r,i=n(39827),l=n(73017),a=n(18405),o=n(84692),s=n(68498),c=n(21389),u=n(47527),d=n(59674),p=n(35250);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let h=c.Z.div(r||(r=(0,l.Z)(["w-96 flex flex-col flex-auto justify-center items-center"])));function x(e){let{children:t,showTerms:n=!0,isStorageComplianceEnabled:r}=e;return(0,p.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",children:[t,n&&(0,p.jsx)(m,{isStorageComplianceEnabled:r})]})}function m(e){let{isStorageComplianceEnabled:t}=e;return(0,p.jsxs)("div",{className:"flex gap-3 py-3 text-xs text-token-text-tertiary",children:[(0,p.jsx)(d.Z,{href:"https://openai.com/policies/terms-of-use",type:"neutral",openNewTab:!0,children:(0,p.jsx)(o.Z,f({},j.terms))}),(0,p.jsx)(b,{}),(0,p.jsx)(d.Z,{href:"https://openai.com/policies/privacy-policy",openNewTab:!0,type:"neutral",children:(0,p.jsx)(o.Z,f({},j.privacy))}),t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{}),(0,p.jsx)("button",{className:"underline",onClick:()=>a.vm.openModal(a.B.CookieManagement),children:(0,p.jsx)(o.Z,f({},j.cookies))})]})]})}let b=()=>(0,p.jsx)("span",{className:"text-token-text-tertiary",children:"|"});function v(){return(0,p.jsx)("div",{className:"mb-5",children:(0,p.jsx)(u.nI,{})})}let j=(0,s.vU)({terms:{id:"AuthPage.terms",defaultMessage:"Terms of use"},privacy:{id:"AuthPage.privacy",defaultMessage:"Privacy policy"},cookies:{id:"AuthPage.cookies",defaultMessage:"Manage cookies"}})},949:function(e,t,n){n.d(t,{O:function(){return g}});var r=n(9063),i=n(68498),l=n(39827),a=n(19841),o=n(70079),s=n(35250);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){let{examples:t}=e,{0:n,1:r}=(0,o.useState)({promptIndex:0,answerIndex:0,tokenStreamIndexList:Array.from({length:t.length},()=>0)}),i=(0,o.useRef)(null),l=(0,o.useRef)(n),c=()=>{if(document.hidden){i.current=setTimeout(c,1e3);return}let{promptIndex:e,answerIndex:n,tokenStreamIndexList:a}=l.current,o=t[e].answerTokens[n],s=a[e]+1,d=90;if(s===o.length){let t=[...a];t[e]=s,l.current=u(u({},l.current),{},{tokenStreamIndexList:t}),d=2500}else if(s>o.length){let r=n+1;if(r>=t[e].answerTokens.length){let n=(e+1)%t.length,r=[...a];r[n]=0,l.current={promptIndex:n,answerIndex:0,tokenStreamIndexList:r},d=900}else{let t=[...a];t[e]=0,l.current=u(u({},l.current),{},{answerIndex:r,tokenStreamIndexList:t}),d=500}}else{let t=[...a];t[e]=s,l.current=u(u({},l.current),{},{tokenStreamIndexList:t})}r(l.current),i.current=setTimeout(c,d)};return(0,o.useEffect)(()=>(c(),()=>{i.current&&clearTimeout(i.current)}),[]),(0,s.jsx)(s.Fragment,{children:t.map((e,r)=>{let i=(n.promptIndex+1)%t.length,l=(r+1)%t.length===n.promptIndex;return(0,s.jsxs)("div",{className:(0,a.default)("absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10",{"opacity-100":n.promptIndex===r,"opacity-0":n.promptIndex!==r,"translate-y-[calc(-50%-1em+16px)]":l,"translate-y-[calc(-50%-1em)] delay-[500ms]":n.promptIndex===r,"translate-y-[calc(-50%-1em-16px)]":i===r}),children:[(0,s.jsx)("div",{className:"relative font-bold",children:e.prompt}),(0,s.jsx)("div",{className:"relative",children:e.answerTokens.map((e,t)=>(0,s.jsxs)("div",{className:"absolute left-0 top-0 max-w-[650px] transition-opacity duration-300",children:[e.map((e,r)=>(0,s.jsx)("span",{className:(0,a.default)("inline transition-opacity duration-300",{hidden:t===n.answerIndex&&r>=n.tokenStreamIndexList[n.promptIndex],"opacity-0":t!==n.answerIndex}),children:e},r)),(0,s.jsxs)("span",{className:(0,a.default)("inline-block font-circle delay-[300ms]",{"scale-0 transition-transform duration-300":l||t!==n.answerIndex||n.tokenStreamIndexList[n.promptIndex]===e.length}),children:[n.tokenStreamIndexList[n.promptIndex]>0?(0,s.jsx)("span",{children:" "}):null,"●"]})]},t))})]},r)})})}var p=n(66520);function g(e){let{examples:t}=e,n=(0,r.Z)();return(0,s.jsxs)("div",{className:"relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",children:[(0,s.jsx)("nav",{className:"left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",children:(0,s.jsx)("h1",{"aria-label":n.formatMessage(f.ariaLabel),children:(0,s.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,s.jsx)("div",{children:p.L})})})}),(0,s.jsx)("div",{className:"flex flex-col text-[32px] leading-[1.2] md:text-[40px]","aria-hidden":"true",children:t.length>0&&(0,s.jsx)(d,{examples:t})})]})}let f=(0,i.vU)({ariaLabel:{id:"Login.ariaLabel",defaultMessage:"ChatGPT by OpenAI"}})},66520:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(35250);let i=(0,r.jsxs)(r.Fragment,{children:["ChatGPT ",(0,r.jsx)("span",{className:"font-circle",children:"●"})]})}}]);
//# sourceMappingURL=101-fc91c9ddd15d78dd.js.map