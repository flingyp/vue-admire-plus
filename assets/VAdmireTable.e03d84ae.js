import{_ as B,d as F,r as b,I as V,v as c,w as q,J as m,K as S,L as U,M as x,y as a,F as N,z as D,N as $,O as j,x as l,P as H,t as L,u as W,Q as I,R as M,$ as K,S as O,a as R,T as G,f as J,g as Q,s as Y,B as g,U as T,G as X}from"./index.f4474693.js";/* empty css                     *//* empty css                  */const Z=F({__name:"VAdmireTableCom",props:{isStripe:{type:Boolean,required:!1,default:!0},isBorder:{type:Boolean,required:!1,default:!0},isLoading:{type:Boolean,required:!1,default:!1},isNeedCheckbox:{type:Boolean,required:!1,default:!1},tableHeader:{type:Array,required:!0},tableContent:{type:Array,required:!1},tableWidth:{type:String,required:!1,default:"100%"},tableHeight:{type:[String,Number,null],required:!1,default:void 0},sectionContent:{type:Array,required:!1},defaultPage:{type:Number,required:!1,default:1},defaultPageSize:{type:Number,required:!1,default:10},defaultPageSizes:{type:Array,required:!1,default:()=>[5,10,15,20,25]},handlePagination:{type:String,required:!1,default:"web"}},emits:["update:sectionContent","update:defaultPage","update:defaultPageSize"],setup(h,{emit:d}){const i=h,P=b(i.tableHeader||[]),k=b([]),y=t=>{d("update:sectionContent",t)},v=b(i.defaultPage),f=b(i.defaultPageSize),w=t=>{v.value=t,d("update:defaultPage",t)},C=t=>{f.value=t,d("update:defaultPageSize",t)},u=(t,s)=>{const o=H.cloneDeep(i.tableContent||[]);let e=[];return t===1?e=o==null?void 0:o.slice(0,s):e=o==null?void 0:o.slice((t-1)*s,t*s),e};return V(()=>{i.handlePagination==="web"?k.value=u(v.value,f.value):k.value=i.tableContent||[]}),(t,s)=>{const o=L,e=W,z=I,p=M;return c(),q("div",null,[m(" \u641C\u7D22\u6A21\u5757 "),S(t.$slots,"table-searchs"),m(" \u76F8\u5173\u6309\u94AE\u6A21\u5757 "),S(t.$slots,"table-buttons"),m(" \u8868\u683C\u6A21\u677F "),U((c(),x(e,{"element-loading-text":"\u52A0\u8F7D\u4E2D...",height:i.tableHeight,style:j({width:h.tableWidth,marginTop:"15px"}),data:k.value,stripe:i.isStripe,border:i.isBorder,onSelectionChange:y},{default:a(()=>[i.isNeedCheckbox?(c(),x(o,{key:0,type:"selection"})):m("v-if",!0),(c(!0),q(N,null,D(P.value,(r,_)=>(c(),x(o,{key:_,fixed:r.columnFixed,prop:r.columnProp,label:r.columnTitle,width:r.columnWidth},$({_:2},[r.columnCustom?{name:"default",fn:a(E=>[S(t.$slots,r.columnProp,{content:E.row})])}:void 0]),1032,["fixed","prop","label","width"]))),128))]),_:3},8,["height","style","data","stripe","border"])),[[p,i.isLoading]]),m(" \u5206\u9875\u6A21\u5757 "),l(z,{style:{"margin-top":"20px"},background:"",currentPage:v.value,"onUpdate:currentPage":s[0]||(s[0]=r=>v.value=r),"page-size":f.value,"onUpdate:page-size":s[1]||(s[1]=r=>f.value=r),layout:"->, total, sizes, prev, pager, next, jumper","page-sizes":i.defaultPageSizes,total:i.tableContent.length,onCurrentChange:w,onSizeChange:C},null,8,["currentPage","page-size","page-sizes","total"])])}}});var ee=B(Z,[["__file","/home/runner/work/vue-admire-plus/vue-admire-plus/src/components/VAdmireTableCom.vue"]]);const ae=async()=>{const h=await K.YPlusRequest({url:"/user/list",method:"post"});if(h.code===200)return h.data},te=g("\u6B63\u5E38"),ne=g("\u7981\u7528"),ie=g("\u4FEE\u6539"),le=g("\u5220\u9664"),oe=g("\u67E5\u8BE2"),re=g("\u65B0\u589E"),se=g("\u6279\u91CF\u5220\u9664"),ue=g("\u5BFC\u5165"),pe=g("\u5BFC\u51FA"),ge=F({__name:"VAdmireTable",async setup(h){let d,i;const P=[{columnTitle:"\u65E5\u671F",columnWidth:120,columnProp:"date"},{columnTitle:"\u7528\u6237\u540D",columnWidth:100,columnProp:"name"},{columnTitle:"\u5BB6\u5EAD\u5730\u5740",columnProp:"address"},{columnTitle:"\u72B6\u6001",columnProp:"status",columnCustom:!0,columnWidth:80},{columnTitle:"\u64CD\u4F5C",columnProp:"operation",columnCustom:!0,columnFixed:"right"}],k=b(([d,i]=O(()=>ae()),d=await d,i(),d||[])),y=[],v=o=>{T.alert("\u662F\u5426\u4FEE\u6539\u6570\u636E","\u4FEE\u6539\u6570\u636E",{confirmButtonText:"OK",callback:e=>{console.log(e,o)}})},f=o=>{T.alert("\u662F\u5426\u5220\u9664\u6570\u636E","\u5220\u9664\u6570\u636E",{confirmButtonText:"OK",callback:e=>{console.log(e,o)}})},w=b(1),C=b(10),u=R({date:"",name:"",address:"",status:0}),t=b(!1),s=async()=>{t.value=!0,setTimeout(async()=>t.value=!1,2e3)};return(o,e)=>{const z=G,p=X,r=J,_=Q,E=Y;return c(),x(ee,{"table-header":P,"table-content":k.value,"is-need-checkbox":!0,sectionContent:y,"onUpdate:sectionContent":e[3]||(e[3]=n=>y=n),defaultPage:w.value,"onUpdate:defaultPage":e[4]||(e[4]=n=>w.value=n),defaultPageSize:C.value,"onUpdate:defaultPageSize":e[5]||(e[5]=n=>C.value=n),"is-loading":t.value},{status:a(({content:n})=>[n.status===1?(c(),x(z,{key:0},{default:a(()=>[te]),_:1})):m("v-if",!0),n.status===0?(c(),x(z,{key:1,type:"warning"},{default:a(()=>[ne]),_:1})):m("v-if",!0)]),operation:a(({content:n})=>[l(p,{type:"primary",size:"small",onClick:A=>v(n)},{default:a(()=>[ie]),_:2},1032,["onClick"]),l(p,{type:"danger",size:"small",onClick:A=>f(n)},{default:a(()=>[le]),_:2},1032,["onClick"])]),"table-searchs":a(()=>[l(E,{inline:!0,model:u,class:"demo-form-inline"},{default:a(()=>[l(_,{label:"\u65E5\u671F"},{default:a(()=>[l(r,{modelValue:u.date,"onUpdate:modelValue":e[0]||(e[0]=n=>u.date=n),placeholder:"Please input date"},null,8,["modelValue"])]),_:1}),l(_,{label:"\u7528\u6237\u540D"},{default:a(()=>[l(r,{modelValue:u.name,"onUpdate:modelValue":e[1]||(e[1]=n=>u.name=n),placeholder:"Please input name"},null,8,["modelValue"])]),_:1}),l(_,{label:"\u5BB6\u5EAD\u5730\u5740"},{default:a(()=>[l(r,{modelValue:u.address,"onUpdate:modelValue":e[2]||(e[2]=n=>u.address=n),placeholder:"Please input address"},null,8,["modelValue"])]),_:1}),l(_,null,{default:a(()=>[l(p,{type:"primary",onClick:s},{default:a(()=>[oe]),_:1})]),_:1})]),_:1},8,["model"])]),"table-buttons":a(()=>[l(p,{type:"primary"},{default:a(()=>[re]),_:1}),l(p,{type:"success"},{default:a(()=>[se]),_:1}),l(p,{type:"info"},{default:a(()=>[ue]),_:1}),l(p,{type:"warning"},{default:a(()=>[pe]),_:1})]),_:1},8,["table-content","defaultPage","defaultPageSize","is-loading"])}}});var me=B(ge,[["__file","/home/runner/work/vue-admire-plus/vue-admire-plus/src/views/common/VAdmireTable.vue"]]);export{me as default};
