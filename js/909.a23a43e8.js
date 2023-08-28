"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[909],{2909:function(t,e,l){l.r(e),l.d(e,{default:function(){return xt}});var o=l(3396),a=l(7139);const s={class:"text-end"},i={class:"table mt-4"},c=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},r={class:"text-right"},n={key:0,class:"text-success"},p={key:1,class:"text-muted"},u={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,l,g,_,b){const f=(0,o.up)("LoadingView"),P=(0,o.up)("ProductModal"),v=(0,o.up)("DelModal"),w=(0,o.up)("PaginationView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,o._)("div",s,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>b.openModal(!0))}," 增加一個產品 ")]),(0,o._)("table",i,[c,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.products,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.key},[(0,o._)("td",null,(0,a.zw)(e.category),1),(0,o._)("td",null,(0,a.zw)(e.title),1),(0,o._)("td",d,(0,a.zw)(t.$filter.currency(e.origin_price)),1),(0,o._)("td",r,(0,a.zw)(t.$filter.currency(e.price)),1),(0,o._)("td",null,[e.is_enabled?((0,o.wg)(),(0,o.iD)("span",n,"啟用")):((0,o.wg)(),(0,o.iD)("span",p,"啟用"))]),(0,o._)("td",null,[(0,o._)("div",u,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)}," 編輯 ",8,m),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.openDeleteModal(e)}," 刪除 ",8,h)])])])))),128))])]),(0,o.Wm)(P,{ref:"productModal",product:_.tempProduct,onUpdateProduct:b.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(v,{ref:"delModal",item:_.tempProduct,onDelItem:b.deleteProduct},null,8,["item","onDelItem"]),(0,o.Wm)(w,{pages:_.pagination,onEmitPages:b.getProducts},null,8,["pages","onEmitPages"])],64)}l(7658);var _=l(9242);const b={class:"modal",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},v=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},y={class:"row"},k={class:"col-sm-4"},x={class:"mb-3"},M=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),C={class:"mb-3"},D=(0,o._)("label",{for:"customFile",class:"form-label"},[(0,o.Uk)("或 上傳圖片 "),(0,o._)("i",{class:"fas fa-spinner fa-spin"})],-1),U=["src"],$={key:0,class:"mt-5"},V=["onUpdate:modelValue"],L=["onClick"],F={key:0},z={class:"col-sm-8"},I={class:"mb-3"},Z=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),j={class:"row gx-2"},H={class:"mb-3 col-md-6"},N=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),W={class:"mb-3 col-md-6"},Y=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},q={class:"mb-3 col-md-6"},E=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),O={class:"mb-3 col-md-6"},S=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),A=(0,o._)("hr",null,null,-1),B={class:"mb-3"},G=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),J={class:"mb-3"},Q=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},T={class:"form-check"},X=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function lt(t,e,l,a,s,i){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",f,[(0,o._)("div",P,[v,(0,o._)("div",w,[(0,o._)("div",y,[(0,o._)("div",k,[(0,o._)("div",x,[M,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[_.nr,s.tempProduct.imageUrl]])]),(0,o._)("div",C,[D,(0,o._)("input",{type:"file",id:"customFile",class:"form-control",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t)),ref:"fileInput"},null,544)]),(0,o._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,U),s.tempProduct.images?((0,o.wg)(),(0,o.iD)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.images,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-3 input-group",key:e},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>s.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,V),[[_.nr,s.tempProduct.images[e]]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,L)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,o.wg)(),(0,o.iD)("div",F,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",z,[(0,o._)("div",I,[Z,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[_.nr,s.tempProduct.title]])]),(0,o._)("div",j,[(0,o._)("div",H,[N,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[_.nr,s.tempProduct.category]])]),(0,o._)("div",W,[Y,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[_.nr,s.tempProduct.unit]])])]),(0,o._)("div",K,[(0,o._)("div",q,[E,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[_.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",O,[S,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[_.nr,s.tempProduct.price,void 0,{number:!0}]])])]),A,(0,o._)("div",B,[G,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[_.nr,s.tempProduct.description]])]),(0,o._)("div",J,[Q,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[_.nr,s.tempProduct.content]])]),(0,o._)("div",R,[(0,o._)("div",T,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[_.e8,s.tempProduct.is_enabled]]),X])])])])]),(0,o._)("div",tt,[et,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var ot=l(1339),at={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){console.dir(this.$refs.fileInput);const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/product-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[ot.Z]},st=l(89);const it=(0,st.Z)(at,[["render",lt]]);var ct=it,dt=l(4420);const rt={"aria-label":"Page navigation example"},nt={class:"pagination justify-content-center"},pt={class:"page-item"},ut=(0,o._)("span",{"aria-hidden":"true"},"«",-1),mt=[ut],ht=["onClick"],gt={class:"page-item"},_t=(0,o._)("span",{"aria-hidden":"true"},"»",-1),bt=[_t];function ft(t,e,l,s,i,c){return(0,o.wg)(),(0,o.iD)("nav",rt,[(0,o._)("ul",nt,[(0,o._)("li",pt,[(0,o._)("a",{class:(0,a.C_)(["page-link",{disabled:!l.pages.has_pre}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=e=>t.emit("emit-pages",l.pages.current_page+1))},mt,2)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages.total_pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["page-item",{active:e===l.pages.current_page}]),key:e},[(0,o._)("a",{class:"page-link",href:"#",onClick:l=>t.$emit("emit-pages",e)},(0,a.zw)(e),9,ht)],2)))),128)),(0,o._)("li",gt,[(0,o._)("a",{class:(0,a.C_)(["page-link",{disabled:!l.pages.has_next}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=e=>t.emit("emit-pages",l.pages.current_page+1))},bt,2)])])])}var Pt={props:["pages"]};const vt=(0,st.Z)(Pt,[["render",ft]]);var wt=vt,yt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ct,DelModal:dt.Z,PaginationView:wt},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/product-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination,console.log(t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},openDeleteModal(t){const e=this.$refs.delModal;this.tempProduct={...t},e.showModal()},updateProduct(t){this.isLoading=!0,this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/product-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/product-api/admin/product/${t.id}`,l="put");const o=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,console.log(t),o.hideModal(),t.data.success&&this.getProducts(),this.$httpMessageState(t,"更新商品")}))},deleteProduct(t){this.tempProduct=t,this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/product-api/admin/product/${t.id}`;this.$http.delete(e,{data:this.tempProduct}).then((t=>{this.isLoading=!1;const e=this.$refs.delModal;e.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const kt=(0,st.Z)(yt,[["render",g]]);var xt=kt}}]);
//# sourceMappingURL=909.a23a43e8.js.map