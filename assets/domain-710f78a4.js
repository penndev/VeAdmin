import{g as z,p as G,a as H,d as I}from"./wafcdn-fd922e36.js";import{r as h,f as u,o as _,c as b,g as e,w as l,j as d,t as C,a as D,F as V,s as E,E as g,v as J,h as B}from"./index-c64b86e5.js";import"./request-2ce32609.js";const K=D("br",null,null,-1),O={key:1},Q={key:1},W={class:"dialog-footer"},le={__name:"domain",setup(X){const y=h({data:[]}),S=({column:n,prop:o,order:r})=>{let s="";r==="descending"?s="-":r==="ascending"&&(s="+"),y.value.query.order=s+o,v()},v=()=>{z().then(n=>{y.value.data=n})},a=h({visible:!1,title:"dialog",form:{},formRule:{email:[{required:!0,message:"邮箱",trigger:"blur"},{min:5,message:"用户名最少为5个字符",trigger:"blur"}]},formAction:"add"}),A=()=>{a.value.title="绑定新域名",a.value.visible=!0,a.value.formAction="add",a.value.form={}},T=n=>{a.value.title="修改 "+n.domain+" 的配置",a.value.visible=!0,a.value.formAction="edit",n.ssl.crt=atob(n.ssl.crt),n.ssl.key=atob(n.ssl.key),a.value.form=n},x=h(null),$=()=>{x.value.validate(n=>{n?a.value.formAction==="add"?G(a.value.form).then(o=>{a.value.visible=!1,g.info(o),v()}):a.value.formAction==="edit"?(H(a.value.form).then(o=>{a.value.visible=!1,g.info(o),v()}),a.value.visible=!1):g.info("提交错误"):g.error("请输入正确的数据！")})},q=n=>{J.confirm(`请仔细确认是否删除数据[${n}]?`,"警告",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{I({id:n}).then(o=>{g.warning(o),v()})})};return v(),(n,o)=>{const r=u("el-button"),s=u("el-table-column"),U=u("el-text"),w=u("el-link"),R=u("el-table"),F=u("el-main"),m=u("el-input"),p=u("el-form-item"),N=u("el-input-number"),k=u("el-tab-pane"),i=u("el-col"),P=u("el-row"),L=u("el-tabs"),M=u("el-form"),j=u("el-dialog");return _(),b(V,null,[e(F,{style:{"background-color":"#fff"}},{default:l(()=>[e(r,{type:"primary",icon:"Plus",onClick:A},{default:l(()=>[d(" 新增 ")]),_:1}),e(R,{data:y.value.data,style:{width:"100%"},onSortChange:S},{default:l(()=>[e(s,{label:"域名",prop:"domain",align:"center",width:"200"}),e(s,{label:"端口(http)",prop:"port",align:"center",width:"120"}),e(s,{label:"端口(https)",prop:"ssl.port",align:"center",width:"120"}),e(s,{label:"源站",align:"center",width:"300"},{default:l(t=>[e(U,{type:"info"},{default:l(()=>[d(" 回源地址: ")]),_:1}),d(),e(w,{type:"primary"},{default:l(()=>[d(C(t.row.backend.url),1)]),_:2},1024),d(),K,e(U,{type:"info"},{default:l(()=>[d(" 回源域名: ")]),_:1}),d(),e(w,{type:"warning"},{default:l(()=>[d(C(t.row.backend.host),1)]),_:2},1024)]),_:1}),e(s,{label:"缓存目录",prop:"cache.dir",align:"center",width:"200"}),e(s,{fixed:"right",label:"操作",width:"105"},{default:l(t=>[e(r,{link:"",type:"primary",onClick:c=>T(t.row)},{default:l(()=>[d(" 编辑 ")]),_:2},1032,["onClick"]),e(r,{link:"",type:"danger",onClick:c=>q(t.row.id)},{default:l(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(j,{modelValue:a.value.visible,"onUpdate:modelValue":o[10]||(o[10]=t=>a.value.visible=t),title:a.value.title,"close-on-click-modal":!1,"destroy-on-close":"","close-on-press-escape":"",center:""},{footer:l(()=>[D("span",W,[e(r,{onClick:o[9]||(o[9]=t=>a.value.visible=!1)},{default:l(()=>[d("取消")]),_:1}),e(r,{type:"primary",onClick:$},{default:l(()=>[d("确定")]),_:1})])]),default:l(()=>[e(M,{ref_key:"dialogRef",ref:x,"label-position":"left",model:a.value.form,rules:a.value.formRule},{default:l(()=>[e(L,{type:"border-card"},{default:l(()=>[e(k,{label:"域名设置"},{default:l(()=>[e(p,{label:"域名",prop:"domain"},{default:l(()=>[e(m,{modelValue:a.value.form.domain,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.form.domain=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"端口",prop:"port"},{default:l(()=>[e(N,{modelValue:a.value.form.port,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.form.port=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(k,{label:"回源管理"},{default:l(()=>[e(p,{label:"回源路径",prop:"backend.url"},{default:l(()=>[e(m,{modelValue:a.value.form.backend.url,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.form.backend.url=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"回源域名",prop:"backend.url"},{default:l(()=>[e(m,{modelValue:a.value.form.backend.url,"onUpdate:modelValue":o[3]||(o[3]=t=>a.value.form.backend.url=t)},null,8,["modelValue"])]),_:1}),e(p,{label:"回源请求头"},{default:l(()=>[(_(!0),b(V,null,E(a.value.form.backend.req_header,(t,c)=>(_(),b(V,{key:c},[e(i,{span:11},{default:l(()=>[e(m,{modelValue:t.name,"onUpdate:modelValue":f=>t.name=f,placeholder:"名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{span:2,style:{"text-align":"center"}},{default:l(()=>[c==0?(_(),B(r,{key:0,type:"primary",icon:"Plus",circle:"",onClick:o[4]||(o[4]=f=>a.value.form.backend.req_header.push({name:"",value:""}))})):(_(),b("span",O,"-"))]),_:2},1024),e(i,{span:11},{default:l(()=>[e(m,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,placeholder:"值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{span:24,style:{height:"5px"}})],64))),128))]),_:1}),e(p,{label:"回源返回头"},{default:l(()=>[(_(!0),b(V,null,E(a.value.form.backend.resp_header,(t,c)=>(_(),b(V,{key:c},[e(i,{span:11},{default:l(()=>[e(m,{modelValue:t.name,"onUpdate:modelValue":f=>t.name=f,placeholder:"名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{span:2,style:{"text-align":"center"}},{default:l(()=>[c==0?(_(),B(r,{key:0,type:"primary",icon:"Plus",circle:"",onClick:o[5]||(o[5]=f=>a.value.form.backend.resp_header.push({name:"",value:""}))})):(_(),b("span",Q,"-"))]),_:2},1024),e(i,{span:11},{default:l(()=>[e(m,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,placeholder:"值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{span:24,style:{height:"5px"}})],64))),128))]),_:1})]),_:1}),e(k,{label:"SSL"},{default:l(()=>[e(p,{label:"回源路径",prop:"ssl.port"},{default:l(()=>[e(m,{modelValue:a.value.form.ssl.port,"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.form.ssl.port=t)},null,8,["modelValue"])]),_:1}),e(P,null,{default:l(()=>[e(i,{span:11},{default:l(()=>[e(p,{label:"证书",prop:"ssl.crt"},{default:l(()=>[e(m,{modelValue:a.value.form.ssl.crt,"onUpdate:modelValue":o[7]||(o[7]=t=>a.value.form.ssl.crt=t),rows:"15",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{span:11},{default:l(()=>[e(p,{label:"密钥",prop:"ssl.key"},{default:l(()=>[e(m,{modelValue:a.value.form.ssl.key,"onUpdate:modelValue":o[8]||(o[8]=t=>a.value.form.ssl.key=t),rows:"15",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{label:"缓存配置"},{default:l(()=>[d(" Task ")]),_:1}),e(k,{label:"安全配置"},{default:l(()=>[d(" Task ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])],64)}}};export{le as default};
