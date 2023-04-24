(function(){"use strict";var t={1973:function(t,e,a){var o=a(9242),s=a(3396),n=a(7139);const i={id:"app"},l={class:"navbar navbar-light bg-light"},r=(0,s._)("i",{class:"fa fa-heart text-info","aria-hidden":"true"},null,-1),c={class:"dropdown ml-auto"},d={class:"btn btn-sm btn-cart","data-toggle":"dropdown","data-flip":"false"},u=(0,s._)("i",{class:"fa fa-shopping-cart text-dark fa-2x","aria-hidden":"true"},null,-1),p={class:"badge badge-pill badge-danger"},m=(0,s._)("span",{class:"sr-only"},"unread messages",-1),h={class:"dropdown-menu dropdown-menu-right p-3",style:{"min-width":"300px"},"data-offset":"400"},f=(0,s._)("h6",null,"已選擇商品",-1),b={class:"table table-sm"},g={key:0},v={class:"align-middle text-center"},_=["onClick"],y=(0,s._)("i",{class:"fa fa-trash-o","aria-hidden":"true"},null,-1),w=[y],x={class:"align-middle"},k={class:"align-middle"},P={class:"align-middle text-right"},C=(0,s._)("button",{class:"btn btn-primary btn-block"},[(0,s._)("i",{class:"fa fa-cart-plus","aria-hidden":"true"}),(0,s.Uk)(" 結帳去 ")],-1),A=(0,s.uE)('<div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end"><div class="container"><div class="p-3 bg-lighter"><h1 class="display-3 font-weight-bold">買到剁手手！最後出清</h1><p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p></div></div></div>',1),E={class:"bg-light text-muted py-5"},T={class:"container"},S={class:"list-inline text-center"},L=(0,s.uE)('<li class="list-inline-item">© Copright 2023 寫來玩玩的</li><li class="list-inline-item"><a class="text-info" href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Instagrame</a></li><li class="list-inline-item"><a class="text-info" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a></li><li class="list-inline-item"><a class="text-info" href="#">About</a></li>',4),U={class:"list-inline-item"},D={class:"text-info",href:"#"},M=(0,s._)("i",{class:"fa fa-facebook-square","aria-hidden":"true"},null,-1),j={class:"list-inline-item"},O={class:"text-info",href:"#"},H=(0,s._)("i",{class:"fa fa-facebook-square","aria-hidden":"true"},null,-1),q={class:"list-inline-item"},z=(0,s._)("i",{class:"fa fa-facebook-square","aria-hidden":"true"},null,-1),N={class:"list-inline-item"},R={class:"text-info",href:"#"},V=(0,s._)("i",{class:"fa fa-facebook-square","aria-hidden":"true"},null,-1),$=(0,s._)("p",{class:"text-center"},"Made with Bootstrap4",-1);function Z(t,e,a,y,Z,W){const B=(0,s.up)("router-link"),F=(0,s.up)("Loading"),I=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("nav",l,[(0,s.Wm)(B,{class:"navbar-brand",to:"/"},{default:(0,s.w5)((()=>[r,(0,s.Uk)(" 寫來玩玩的 ")])),_:1}),(0,s._)("div",c,[(0,s._)("button",d,[u,(0,s._)("span",p,(0,n.zw)(Z.cart.carts.length),1),m]),(0,s._)("div",h,[f,(0,s._)("table",b,[Z.cart.carts.length?((0,s.wg)(),(0,s.iD)("tbody",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Z.cart.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",v,[(0,s._)("a",{href:"#",class:"text-muted",onClick:(0,o.iM)((e=>W.removeCart(t.id)),["prevent"])},w,8,_)]),(0,s._)("td",x,(0,n.zw)(t.product.title),1),(0,s._)("td",k,(0,n.zw)(t.qty)+(0,n.zw)(t.product.unit),1),(0,s._)("td",P,(0,n.zw)(t.total),1)])))),128))])):(0,s.kq)("",!0)]),C])])]),A,(0,s.Wm)(F,{active:Z.isLoading},null,8,["active"]),(0,s.Wm)(I),(0,s._)("footer",E,[(0,s._)("div",T,[(0,s._)("ul",S,[L,(0,s._)("li",U,[(0,s._)("a",D,[(0,s.Wm)(B,{to:"/about"},{default:(0,s.w5)((()=>[M,(0,s.Uk)(" ToAbout")])),_:1})])]),(0,s._)("li",j,[(0,s._)("a",O,[(0,s.Wm)(B,{to:"/login"},{default:(0,s.w5)((()=>[H,(0,s.Uk)(" Login")])),_:1})])]),(0,s._)("li",q,[(0,s._)("a",{class:"text-info",href:"#",onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>W.signout&&W.signout(...t)),["prevent"]))},[z,(0,s.Uk)(" Logout")])]),(0,s._)("li",N,[(0,s._)("a",R,[(0,s.Wm)(B,{to:"/dashboard/products"},{default:(0,s.w5)((()=>[V,(0,s.Uk)(" dashboard")])),_:1})])])]),$])])])}a(7658);var W={name:"App",data(){return{cart:{carts:[]},isLoading:!1}},methods:{getCart(){const t=this;t.isLoading=!0;const e="https://vue-course-api.hexschool.io/api/CASPERPATH/cart";this.$http.get(e).then((e=>{e.data.data.carts&&(t.cart=e.data.data),t.isLoading=!1,console.log("取得購物車",e.data.data)}))},removeCart(t){const e=this,a=`https://vue-course-api.hexschool.io/api/CASPERPATH/cart/${t}`;e.isLoading=!0,this.$http.delete(a).then((t=>{e.isLoading=!1,e.getCart(),console.log("刪除購物車項目",t)}))},signout(){const t="https://vue-course-api.hexschool.io/logout",e=this;console.log("https://vue-course-api.hexschool.io","CASPERPATH"),this.$http.post(t).then((t=>{console.log(t.data),t.data.success&&e.$router.push("/login")}))}},created(){this.getCart()}},B=a(89);const F=(0,B.Z)(W,[["render",Z]]);var I=F,K=a(2483);const Y={class:"container main-content mb-3"},J={class:"row"},Q={class:"col-md-3"},G={class:"list-group sticky-top"},X=["onClick"],tt=(0,s._)("i",{class:"fa fa-street-view","aria-hidden":"true"},null,-1),et={class:"col-md-9"},at={class:"d-flex mb-4"},ot={class:"form-inline my-3 my-lg-0"},st={class:"input-group"},nt={class:"input-group-append"},it=(0,s._)("i",{class:"fa fa-times"},null,-1),lt=[it],rt={class:"tab-pane",id:"list-gift"},ct={class:"row align-items-stretch"},dt={class:"card border-0 box-shadow text-center h-100"},ut=["src"],pt={class:"card-body"},mt={class:"card-title"},ht={class:"card-text text-left"},ft={class:"card-footer border-top-0 bg-white"},bt=["onClick"],gt=(0,s._)("i",{class:"fa fa-cart-plus","aria-hidden":"true"},null,-1);function vt(t,e,a,i,l,r){const c=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",Y,[(0,s.Wm)(c,{active:l.isLoading},null,8,["active"]),(0,s._)("div",J,[(0,s._)("div",Q,[(0,s._)("div",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.categories,(t=>((0,s.wg)(),(0,s.iD)("a",{class:(0,n.C_)(["list-group-item list-group-item-action",{active:t===l.searchText}]),href:"#",onClick:(0,o.iM)((e=>l.searchText=t),["prevent"]),key:t},[tt,(0,s.Uk)(" "+(0,n.zw)(t),1)],10,X)))),128)),(0,s._)("a",{href:"#",class:(0,n.C_)(["list-group-item list-group-item-action",{active:""===l.searchText}]),onClick:e[0]||(e[0]=(0,o.iM)((t=>l.searchText=""),["prevent"]))}," 全部顯示 ",2)])]),(0,s._)("div",et,[(0,s._)("div",at,[(0,s._)("form",ot,[(0,s._)("div",st,[(0,s.wy)((0,s._)("input",{class:"form-control",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>l.searchText=t),placeholder:"Search","aria-label":"Search"},null,512),[[o.nr,l.searchText]]),(0,s._)("div",nt,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[2]||(e[2]=t=>l.searchText="")},lt)])])]),(0,s._)("button",{class:"btn btn-outline-primary ml-auto",type:"button",onClick:e[3]||(e[3]=(...t)=>r.getProducts&&r.getProducts(...t))}," 重新取得資料 ")]),(0,s._)("div",rt,[(0,s._)("div",ct,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.filterData,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-4 mb-4",key:t.id},[(0,s._)("div",dt,[(0,s._)("img",{class:"card-img-top",src:t.image,alt:"Card image cap"},null,8,ut),(0,s._)("div",pt,[(0,s._)("h4",mt,(0,n.zw)(t.title),1),(0,s._)("p",ht,(0,n.zw)(t.content),1)]),(0,s._)("div",ft,[(0,s._)("button",{class:"btn btn-outline-secondary btn-block btn-sm",onClick:e=>r.addtoCart(t.id)},[gt,(0,s.Uk)(" 加到購物車 ")],8,bt)])])])))),128))])])])])])])}var _t={name:"HomeView",data(){return{products:[],searchText:"",categories:[],isLoading:!1}},computed:{filterData(){const t=this;return t.searchText?t.products.filter((e=>{const a=e.title.toLowerCase().includes(t.searchText.toLowerCase());return a})):this.products}},methods:{getProducts(){const t=this,e="https://vue-course-api.hexschool.io/api/CASPERPATH/products/all";t.isLoading=!0,this.$http.get(e).then((e=>{t.products=e.data.products,console.log("取得產品列表:",e),t.getUnique(),t.isLoading=!1}))},addtoCart(t,e=1){const a=this,o="https://vue-course-api.hexschool.io/api/CASPERPATH/cart";a.isLoading=!0;const s={product_id:t,qty:e};a.isLoading=!0,this.$http.post(o,{data:s}).then((t=>{a.isLoading=!1,console.log("加入購物車:",t)}))},getUnique(){const t=this,e=new Set;t.products.forEach((t=>{e.add(t.category)})),t.categories=Array.from(e)}},created(){this.getProducts()}};const yt=(0,B.Z)(_t,[["render",vt]]);var wt=yt;const xt=(0,s.uE)('<div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"><button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)"><svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg><span class="visually-hidden" id="bd-theme-text">Toggle theme</span></button><ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text"><li><button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false"><svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg> Light <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg></button></li><li><button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false"><svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg> Dark <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg></button></li><li><button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true"><svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg> Auto <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg></button></li></ul></div>',1),kt={class:"container-fluid"},Pt={class:"row"},Ct={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},At=(0,s.uE)('<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"><h1 class="h2">寫來玩玩的</h1><div class="btn-toolbar mb-2 mb-md-0"><div class="btn-group me-2"><button type="button" class="btn btn-sm btn-outline-secondary">Share</button><button type="button" class="btn btn-sm btn-outline-secondary">Export</button></div><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle"><span data-feather="calendar" class="align-text-bottom"></span> This week </button></div></div>',1);function Et(t,e,a,o,n,i){const l=(0,s.up)("Navbar"),r=(0,s.up)("Sidebar"),c=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",null,[xt,(0,s.Wm)(l),(0,s._)("div",kt,[(0,s._)("div",Pt,[(0,s.Wm)(r),(0,s._)("main",Ct,[At,(0,s.Wm)(c)])])])])}const Tt=(0,s.uE)('<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse"><div class="position-sticky pt-3 sidebar-sticky"><ul class="nav flex-column"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#"><span data-feather="home" class="align-text-bottom"></span> Dashboard </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file" class="align-text-bottom"></span> Orders </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="shopping-cart" class="align-text-bottom"></span> Products </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="users" class="align-text-bottom"></span> Customers </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="bar-chart-2" class="align-text-bottom"></span> Reports </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers" class="align-text-bottom"></span> Integrations </a></li></ul><h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase"><span>Saved reports</span><a class="link-secondary" href="#" aria-label="Add a new report"><span data-feather="plus-circle" class="align-text-bottom"></span></a></h6><ul class="nav flex-column mb-2"><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text" class="align-text-bottom"></span> Current month </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text" class="align-text-bottom"></span> Last quarter </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text" class="align-text-bottom"></span> Social engagement </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text" class="align-text-bottom"></span> Year-end sale </a></li></ul></div></nav>',1),St=[Tt];function Lt(t,e){return(0,s.wg)(),(0,s.iD)("div",null,St)}const Ut={},Dt=(0,B.Z)(Ut,[["render",Lt]]);var Mt=Dt;const jt=(0,s.uE)('<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"><a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">寫來玩玩的</a><button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"><div class="navbar-nav"><div class="nav-item text-nowrap"><a class="nav-link px-3" href="#">Sign out</a></div></div></header>',1),Ot=[jt];function Ht(t,e){return(0,s.wg)(),(0,s.iD)("div",null,Ot)}const qt={},zt=(0,B.Z)(qt,[["render",Ht]]);var Nt=zt,Rt={components:{Sidebar:Mt,Navbar:Nt}};const Vt=(0,B.Z)(Rt,[["render",Et]]);var $t=Vt;const Zt={class:"text-right mt-4"},Wt={class:"table mt-4"},Bt=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"分類"),(0,s._)("th",null,"產品名稱"),(0,s._)("th",{width:"120"},"原價"),(0,s._)("th",{width:"120"},"售價"),(0,s._)("th",{width:"80"},"是否啟用"),(0,s._)("th",{width:"80"},"編輯")])],-1),Ft={class:"text-right"},It={class:"text-right"},Kt={key:0,class:"text-success"},Yt={key:1},Jt=(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm"},"編輯")],-1),Qt={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Gt={class:"modal-dialog modal-lg",role:"document"},Xt={class:"modal-content border-0"},te=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"新增產品")]),(0,s._)("button",{type:"button",class:"close","data-bs-dismiss":"modal","aria-label":"Close"},[(0,s._)("span",{"aria-hidden":"true"},"×")])],-1),ee={class:"row"},ae={class:"col-sm-4"},oe={class:"form-group"},se=(0,s._)("label",{for:"image"},"輸入圖片網址",-1),ne={class:"form-group"},ie=(0,s._)("label",{for:"customFile"},[(0,s.Uk)("或 上傳圖片 "),(0,s._)("i",{class:"fas fa-spinner fa-spin"})],-1),le={type:"file",id:"customFile",class:"form-control",ref:"files"},re=["src"],ce={class:"col-sm-8"},de={class:"form-group"},ue=(0,s._)("label",{for:"title"},"標題",-1),pe={class:"form-row"},me={class:"form-group col-md-6"},he=(0,s._)("label",{for:"category"},"分類",-1),fe={class:"form-group col-md-6"},be=(0,s._)("label",{for:"price"},"單位",-1),ge={class:"form-row"},ve={class:"form-group col-md-6"},_e=(0,s._)("label",{for:"origin_price"},"原價",-1),ye={class:"form-group col-md-6"},we=(0,s._)("label",{for:"price"},"售價",-1),xe=(0,s._)("hr",null,null,-1),ke={class:"form-group"},Pe=(0,s._)("label",{for:"description"},"產品描述",-1),Ce={class:"form-group"},Ae=(0,s._)("label",{for:"content"},"說明內容",-1),Ee={class:"form-group"},Te={class:"form-check"},Se=(0,s._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Le={class:"modal-footer"},Ue=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function De(t,e,a,i,l,r){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",Zt,[(0,s._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>r.openModal&&r.openModal(...t))},"建立新的產品")]),(0,s._)("table",Wt,[Bt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.category),1),(0,s._)("td",null,(0,n.zw)(t.title),1),(0,s._)("td",Ft,(0,n.zw)(t.origin_price),1),(0,s._)("td",It,(0,n.zw)(t.price),1),(0,s._)("td",null,[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",Kt,"啟用")):((0,s.wg)(),(0,s.iD)("span",Yt,"未啟用"))]),Jt])))),128))])]),(0,s._)("div",Qt,[(0,s._)("div",Gt,[(0,s._)("div",Xt,[te,(0,s._)("div",ee,[(0,s._)("div",ae,[(0,s._)("div",oe,[se,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[1]||(e[1]=t=>l.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[o.nr,l.tempProduct.imageUrl]])]),(0,s._)("div",ne,[ie,(0,s._)("input",le,null,512)]),(0,s._)("img",{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",class:"img-fluid",src:l.tempProduct.imageUrl,alt:""},null,8,re)]),(0,s._)("div",ce,[(0,s._)("div",de,[ue,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>l.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[o.nr,l.tempProduct.title]])]),(0,s._)("div",pe,[(0,s._)("div",me,[he,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[3]||(e[3]=t=>l.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[o.nr,l.tempProduct.category]])]),(0,s._)("div",fe,[be,(0,s.wy)((0,s._)("input",{type:"unit",class:"form-control",id:"unit","onUpdate:modelValue":e[4]||(e[4]=t=>l.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[o.nr,l.tempProduct.unit]])])]),(0,s._)("div",ge,[(0,s._)("div",ve,[_e,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[5]||(e[5]=t=>l.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[o.nr,l.tempProduct.origin_price]])]),(0,s._)("div",ye,[we,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[6]||(e[6]=t=>l.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[o.nr,l.tempProduct.price]])])]),xe,(0,s._)("div",ke,[Pe,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>l.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[o.nr,l.tempProduct.description]])]),(0,s._)("div",Ce,[Ae,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>l.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[o.nr,l.tempProduct.content]])]),(0,s._)("div",Ee,[(0,s._)("div",Te,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>l.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o.e8,l.tempProduct.is_enabled]]),Se])])]),(0,s._)("div",Le,[Ue,(0,s._)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:e[10]||(e[10]=(...t)=>r.updateProduct&&r.updateProduct(...t))},"確認")])])])])])])}var Me=a(7972),je=a.n(Me),Oe={data(){return{products:[],tempProduct:{},isNew:!1}},methods:{getProducts(){const t="https://vue-course-api.hexschool.io/api/CASPERPATH/products",e=this;console.log("https://vue-course-api.hexschool.io","CASPERPATH"),this.$http.get(t).then((t=>{console.log(t.data),e.products=t.data.products}))},openModal(){const t=new(je())(document.getElementById("productModal"),{keyboard:!1});t.show()},updateProduct(){const t="https://vue-course-api.hexschool.io/api/CASPERPATH/admin/product",e=this;console.log("https://vue-course-api.hexschool.io","CASPERPATH"),this.$http.post(t,{data:e.tempProduct}).then((t=>{console.log(t.data)}))}},created(){this.getProducts()}};const He=(0,B.Z)(Oe,[["render",De]]);var qe=He;const ze=t=>((0,s.dD)("data-v-5d9da1a8"),t=t(),(0,s.Cn)(),t),Ne=ze((()=>(0,s._)("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1))),Re={class:"form-floating"},Ve=ze((()=>(0,s._)("label",{for:"floatingInput"},"Email address",-1))),$e={class:"form-floating"},Ze=ze((()=>(0,s._)("label",{for:"floatingPassword"},"Password",-1))),We=ze((()=>(0,s._)("div",{class:"checkbox mb-3"},[(0,s._)("label",null,[(0,s._)("input",{type:"checkbox",value:"remember-me"}),(0,s.Uk)(" Remember me ")])],-1))),Be=ze((()=>(0,s._)("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign in",-1))),Fe=ze((()=>(0,s._)("p",{class:"mt-5 mb-3 text-body-secondary"},"© 2023",-1)));function Ie(t,e,a,n,i,l){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("main",{class:"form-signin w-100 m-auto",onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>l.signin&&l.signin(...t)),["prevent"]))},[(0,s._)("form",null,[Ne,(0,s._)("div",Re,[(0,s.wy)((0,s._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=t=>i.user.username=t)},null,512),[[o.nr,i.user.username]]),Ve]),(0,s._)("div",$e,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=t=>i.user.password=t)},null,512),[[o.nr,i.user.password]]),Ze]),We,Be,Fe])],32)])}var Ke={name:"LoginLogin",data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signin(){const t="https://vue-course-api.hexschool.io/admin/signin",e=this;console.log("https://vue-course-api.hexschool.io","CASPERPATH"),this.$http.post(t,e.user).then((t=>{if(console.log(t.data),t.data.success){const a=t.data.token,o=t.data.expired;console.log(a,o),document.cookie=`\n          someCookieName=${a}; expires=${new Date(o)};\n          `,e.$router.push("/dashboard/products")}}))}}};const Ye=(0,B.Z)(Ke,[["render",Ie],["__scopeId","data-v-5d9da1a8"]]);var Je=Ye;const Qe=[{path:"/*",redirect:"/about"},{path:"/",name:"home",component:wt},{path:"/login",name:"Login",component:Je},{path:"/dashboard",name:"dashboard",component:$t,meta:{requiresAuth:!0},children:[{path:"products",name:"Products",component:qe,meta:{requiresAuth:!0}}]},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,8809))}],Ge=(0,K.p7)({history:(0,K.r5)(),routes:Qe});var Xe=Ge,ta=(a(1237),a(4161)),ea=a(6423),aa=a(5513),oa=a.n(aa),sa=a(65),na=(0,sa.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});ta.Z.defaults.withCredentials=!0,(0,o.ri)(I).use(na).use(Xe).use(na).use(sa.ZP).component("Loading",oa()).use(ea.Z,ta.Z).mount("#app"),Xe.beforeEach(((t,e,a)=>{if(console.log("to",t,"from",e,"next",a),t.meta.requiresAuth){const t="https://vue-course-api.hexschool.io/api/user/check";console.log("https://vue-course-api.hexschool.io","CASPERPATH"),ta.Z.post(t).then((t=>{console.log(t.data),t.data.success?a():a({path:"/login"})}))}else a()}))}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,o,s,n){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],n=t[d][2];for(var l=!0,r=0;r<o.length;r++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(l=!1,n<i&&(i=n));if(l){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.1ad56e57.js"}}(),function(){a.miniCssF=function(t){return"css/about.6c7dc260.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue_practice2:";a.l=function(o,s,n,i){if(t[o])t[o].push(s);else{var l,r;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+n){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",e+n),l.src=o),t[o]=[s];var p=function(e,a){l.onerror=l.onload=null,clearTimeout(m);var s=t[o];if(delete t[o],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,o,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(a){if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||e,r=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=l,n.parentNode&&n.parentNode.removeChild(n),s(r)}};return n.onerror=n.onload=i,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===t||n===e))return s}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){s=i[o],n=s.getAttribute("data-href");if(n===t||n===e)return s}},o=function(o){return new Promise((function(s,n){var i=a.miniCssF(o),l=a.p+i;if(e(i,l))return s();t(o,l,null,s,n)}))},s={143:0};a.f.miniCss=function(t,e){var a={443:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=o(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,o){var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise((function(a,o){s=t[e]=[a,o]}));o.push(s[2]=n);var i=a.p+a.u(e),l=new Error,r=function(o){if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,s[1](l)}};a.l(i,r,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,n,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var d=r(a)}for(e&&e(o);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},o=self["webpackChunkvue_practice2"]=self["webpackChunkvue_practice2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1973)}));o=a.O(o)})();
//# sourceMappingURL=app.4ba72181.js.map