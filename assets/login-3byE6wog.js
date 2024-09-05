import{s as B,_ as q,r as u,b as w,d as F,u as L,e as N,f as n,c as R,a,g as t,w as s,o as x,h as M,i as P,j as T,p as j,k as z,l as A,m as G,E as H}from"./index-B0tZCabm.js";const J=l=>B({url:"/captcha",method:"get",params:l}),y=l=>(j("data-v-1b39e20f"),l=l(),z(),l),K={id:"userLayout"},O={class:"login_panel"},Q={class:"login_panel_form"},W=y(()=>a("div",{class:"login_panel_form_title"},[a("img",{class:"login_panel_form_title_logo",src:A}),a("div",{class:"login_panel_form_title_p"}," 用户登录 ")],-1)),X={class:"input-icon"},Y={class:"input-icon"},Z={class:"vPicBox"},$={class:"vPic"},ee=["src"],te=y(()=>a("div",{class:"login_panel_right"},null,-1)),oe=120*1e3,ae={__name:"login",setup(l){const i=u("lock"),b=()=>{i.value=i.value==="lock"?"unlock":"lock"},f=u("");let d=Date.now();const _=()=>{J().then(c=>{f.value=c.captchaURL,e.captchaID=c.captchaID,e.captcha=null,typeof e.captchaExpires=="number"?d=Date.now()+e.captchaExpires*1e3:d=Date.now()+oe})};_();const e=w({username:"",password:"",captchaID:"",captcha:""}),V=w({username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"用户名最少为5个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码最少为6个字符",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"},{len:4,message:"验证码长度为四位",trigger:"change"}]}),g=u(null),m=u(null),v=F(),C=L(),D=N(),E=()=>{if(Date.now()>d){m.value.validateState="error",m.value.validateMessage="验证码过期 请点击验证码刷新重试";return}g.value.validate(c=>{c&&G(e).then(o=>{if(typeof o.token>"u"){H.error("登录失败，未获取到token！");return}v.token=o.token,v.routes=o.routes,C.push(D.query.redirect??o.index??"/")}).catch(()=>{_()})})};return(c,o)=>{const I=n("User"),k=n("el-icon"),h=n("el-input"),p=n("el-form-item"),S=n("el-button"),U=n("el-form");return x(),R("div",K,[a("div",O,[a("div",Q,[W,t(U,{ref_key:"loginForm",ref:g,rules:V,model:e},{default:s(()=>[t(p,{prop:"username"},{default:s(()=>[t(h,{modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=r=>e.username=r),placeholder:"请输入用户名"},{suffix:s(()=>[a("span",X,[t(k,null,{default:s(()=>[t(I)]),_:1})])]),_:1},8,["modelValue"])]),_:1}),t(p,{prop:"password"},{default:s(()=>[t(h,{modelValue:e.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.password=r),placeholder:"请输入密码",type:i.value==="lock"?"password":"text"},{suffix:s(()=>[a("a",Y,[t(k,null,{default:s(()=>[(x(),M(P(i.value),{onClick:b}))]),_:1})])]),_:1},8,["modelValue","type"])]),_:1}),t(p,{ref_key:"captchaForm",ref:m,prop:"captcha"},{default:s(()=>[a("div",Z,[t(h,{modelValue:e.captcha,"onUpdate:modelValue":o[2]||(o[2]=r=>e.captcha=r),placeholder:"请输入验证码",style:{width:"60%"}},null,8,["modelValue"]),a("div",$,[a("img",{alt:"验证码",src:f.value,onClick:_},null,8,ee)])])]),_:1},512),t(p,null,{default:s(()=>[t(S,{type:"primary",size:"large",style:{width:"46%"},onClick:E},{default:s(()=>[T(" 登 录 ")]),_:1})]),_:1})]),_:1},8,["rules","model"])]),te])])}}},le=q(ae,[["__scopeId","data-v-1b39e20f"]]);export{le as default};
