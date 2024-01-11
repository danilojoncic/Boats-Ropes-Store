(function(){"use strict";var t={6846:function(t,e,r){var o=r(6369),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"background-container",attrs:{id:"app"}},[e("Header"),e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[t._v("Cart")]),t.token?e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")]):t._e()],1),e("router-view")],1)},a=[],n=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("h1",[t._v("Boats & Knots")])])}],c={name:"Header"},d=c,u=r(1001),l=(0,u.Z)(d,n,i,!1,null,"47f4598c",null),p=l.exports,m=r(3822),h={name:"App",components:{Header:p},computed:{...(0,m.rn)(["token"])},methods:{...(0,m.OI)(["REMOVE_TOKEN","SET_TOKEN"]),logout(){console.log("splish splash I've made a dash"),this.REMOVE_TOKEN(),this.REMOVE_KORISNIK_ID()}},mounted(){localStorage.token&&this.SET_TOKEN(localStorage.token)}},v=h,f=(0,u.Z)(v,s,a,!1,null,"d384cc06",null),g=f.exports,_=r(2631),P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"products-view"},[e("ProductList",{attrs:{products:t.displayedProducts}}),e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:0===t.current},on:{click:t.prevPage}},[t._v("Previous")]),e("span",[t._v(t._s(t.current+1)+" / "+t._s(t.totalPages))]),e("button",{attrs:{disabled:t.current===t.totalPages-1},on:{click:t.nextPage}},[t._v("Next")])])],1)},C=[],y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-list"},t._l(t.displayedProducts,(function(t){return e("Product",{key:t.id,attrs:{product:t}})})),1)},b=[],O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card"},[e("input",{attrs:{type:"hidden"},domProps:{value:t.product.id}}),e("div",{staticClass:"product-info"},[e("h2",[t._v(t._s(t.product.naziv))]),e("p",{staticClass:"description"},[t._v(t._s(t.product.opis))]),e("p",{staticClass:"category"},[t._v("Kategorija: "+t._s(t.product.kategorija.naziv))]),e("p",{staticClass:"price"},[t._v("Cena: "+t._s(t.product.cena)+" EUR")])]),e("router-link",{attrs:{to:{name:"product-details",params:{id:t.product.id}}}},[e("button",{staticClass:"details-btn",on:{click:function(e){return t.setCurrentProduct(t.product.id)}}},[t._v(" Details ")])]),e("button",{staticClass:"add-to-cart-btn",attrs:{disabled:t.isProductInCart},on:{click:t.addToCart}},[t._v(" Add to Cart ")])],1)},T=[],I={name:"PloviloKartica",props:{product:Object},methods:{setCurrentProduct(t){this.$store.dispatch("setCurrentProductId",t)},addToCart(){const t=this.product.id;this.$store.dispatch("addToCart",t),this.notifyUser("Product added to cart!")},notifyUser(t){alert(t)}}},w=I,S=(0,u.Z)(w,O,T,!1,null,"b443946a",null),k=S.exports,E={name:"ProductList",components:{Product:k},props:{products:{type:Array,required:!0}},watch:{products:{handler(t){console.log("Products changed:",t)},deep:!0}},computed:{displayedProducts(){return console.log("Displayed Products in PloviloLista:",this.products),this.products}}},D=E,x=(0,u.Z)(D,y,b,!1,null,"631a9c34",null),R=x.exports,N={name:"ProductsView",components:{ProductList:R},data(){return{current:0,productsPerPage:3}},computed:{products(){return console.log("Products:",this.$store.state.products),this.$store.state.products},totalPages(){return Math.ceil(this.products.length/this.productsPerPage)},displayedProducts(){const t=this.current*this.productsPerPage,e=t+this.productsPerPage;return console.log("Displayed Products:",this.products.slice(t,e)),this.products.slice(t,e)}},created(){this.$store.dispatch("fetchProducts")},methods:{nextPage(){this.current<this.totalPages-1&&this.current++},prevPage(){this.current>0&&this.current--}}},j=N,K=(0,u.Z)(j,P,C,!1,null,"65dee002",null),$=K.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"details-view"},[e("ProductDetails",{key:t.localId,attrs:{id:t.localId}}),e("div",{staticClass:"navigation-buttons"},[e("button",{attrs:{disabled:t.isFirstItem},on:{click:t.showPrevious}},[t._v("Previous")]),e("button",{attrs:{disabled:t.isLastItem},on:{click:t.showNext}},[t._v("Next")])])],1)},A=[],Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-container"},[e("div",{staticClass:"product-details"},[t.currentProduct&&0!==Object.keys(t.currentProduct).length?e("div",[e("h2",[t._v(t._s(t.currentProduct.naziv))]),e("p",{staticClass:"wrap-text"},[t._v(" "+t._s(t.currentProduct.opis))]),e("p",[t._v("Cena: "+t._s(t.currentProduct.cena)+" RSD")]),e("p",[t._v("Kategorija: "+t._s(t.currentProduct.kategorija.naziv))])]):e("div",[t._v(" Loading... ")])])])},z=[],L={name:"ProductDetails",props:{id:{type:Number,required:!0}},computed:{...(0,m.rn)(["currentProduct"])},methods:{...(0,m.nv)(["fetchProduct"])},async mounted(){await this.fetchProduct(this.id)}},q=L,M=(0,u.Z)(q,Z,z,!1,null,"1d342615",null),V=M.exports,F={name:"DetailsView",components:{ProductDetails:V},computed:{...(0,m.rn)(["productIds","currentProductId"]),localId(){return this.currentProductId},currentIndex(){return this.productIds.indexOf(this.localId)},isFirstItem(){return 0===this.currentIndex},isLastItem(){return this.currentIndex===this.productIds.length-1}},methods:{...(0,m.nv)(["setCurrentProductId"]),showPrevious(){if(this.currentIndex>0){const t=this.productIds[this.currentIndex-1];this.setCurrentProductId(t)}},showNext(){if(this.currentIndex<this.productIds.length-1){const t=this.productIds[this.currentIndex+1];this.setCurrentProductId(t)}}}},J=F,G=(0,u.Z)(J,U,A,!1,null,"2435496f",null),B=G.exports,H=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("Username:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{id:"username",required:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])])},X=[],Y=(r(560),{name:"Login",data(){return{form:{username:"",password:""}}},methods:{...(0,m.nv)(["login"]),async onSubmit(){try{await this.login(this.form),this.$router.push({name:"home"})}catch(t){console.error("Login failed:",t)}}}}),Q=Y,W=(0,u.Z)(Q,H,X,!1,null,"04595a10",null),tt=W.exports,et=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email address:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Username:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{id:"name",required:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])])},rt=[],ot={name:"Register",data(){return{form:{email:"",username:"",password:""}}},methods:{async onSubmit(){try{const t=await fetch("http://localhost:9001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.form)});if(!t.ok)return void console.error("Registration failed:",t.statusText);const e=await t.json();console.log("Registration successful:",e),this.$router.push({name:"home"})}catch(t){console.error("Registration failed:",t)}}}},st=ot,at=(0,u.Z)(st,et,rt,!1,null,"6305828a",null),nt=at.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-page"},[e("h1",[t._v("Shopping Cart")]),0===t.cartItems.length?e("div",{staticClass:"empty-cart-message"},[e("p",[t._v("Your cart is empty.")])]):e("div",[e("div",{staticClass:"cart-container"},[e("div",{staticClass:"order-details"},[e("h2",[t._v("Order Details")]),e("h2",[t._v("Contents:")]),e("ul",t._l(t.groupedCartItems,(function(r){return e("li",{key:r.product.id},[t._v(" "+t._s(r.product.naziv)+" ("+t._s(r.quantity)+"x) ")])})),0),e("form",{on:{submit:function(e){return e.preventDefault(),t.makeOrder.apply(null,arguments)}}},[e("label",{attrs:{for:"name"}},[t._v("Name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.orderDetails.name,expression:"orderDetails.name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:t.orderDetails.name},on:{input:function(e){e.target.composing||t.$set(t.orderDetails,"name",e.target.value)}}}),e("label",{attrs:{for:"phone"}},[t._v("Phone Number:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.orderDetails.phone,expression:"orderDetails.phone"}],attrs:{type:"tel",id:"phone",required:""},domProps:{value:t.orderDetails.phone},on:{input:function(e){e.target.composing||t.$set(t.orderDetails,"phone",e.target.value)}}}),e("label",{attrs:{for:"address"}},[t._v("Address:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.orderDetails.address,expression:"orderDetails.address"}],attrs:{id:"address",required:""},domProps:{value:t.orderDetails.address},on:{input:function(e){e.target.composing||t.$set(t.orderDetails,"address",e.target.value)}}}),e("div",{staticClass:"cart-summary"},[e("div",{staticClass:"total-cost"},[t._v("Total Cost: "+t._s(t.totalCost)+" EUR")])]),e("button",{staticClass:"order-button",attrs:{type:"submit",disabled:0===t.cartItems.length}},[t._v("Make Order")])])])])])])},ct=[],dt={name:"Cart",data(){return{orderDetails:{name:"",phone:"",address:""}}},computed:{cartItems(){return this.$store.getters.cartItems},groupedCartItems(){const t=[],e=new Map;return this.cartItems.forEach((t=>{const r=t.id;e.has(r)?e.get(r).quantity++:e.set(r,{product:t,quantity:1})})),e.forEach((e=>{t.push(e)})),t},totalCost(){return this.cartItems.reduce(((t,e)=>t+e.cena),0)}},methods:{transformDataForOrder(){const t=new Date;return t.setMonth(t.getMonth()+3),{narudzbina:{status:"Pending",vreme_narucivanja:(new Date).toISOString(),zakazno_vreme:t.toISOString(),adresa:this.orderDetails.address,telefon:this.orderDetails.phone,ime_prezime:this.orderDetails.name},stavke:this.groupedCartItems.map((t=>({plovilo_id:t.product.id,komada:t.quantity})))}},async makeOrder(){try{const t=this.transformDataForOrder();await this.$store.dispatch("sendOrder",t),console.log("Order created successfully")}catch(t){console.error(t)}}}},ut=dt,lt=(0,u.Z)(ut,it,ct,!1,null,"f1f880d8",null),pt=lt.exports;o["default"].use(_.ZP);const mt=[{path:"/cart",name:"Cart",component:pt},{path:"/",name:"home",component:$},{path:"/login",name:"login",component:tt},{path:"/register",name:"register",component:nt},{path:"/product/:id",name:"product-details",component:B,props:!0}],ht=new _.ZP({mode:"history",base:"/user/",routes:mt});var vt=ht,ft=r(6681),gt=r(9425);r(7024);o["default"].use(m.ZP);var _t=new m.ZP.Store({state:{products:[],productIds:[],cart:[],currentProduct:{},currentProductId:null,orderStatus:null,token:"",korisnik_id:null,currentPage:1,itemsPerPage:3},mutations:{SET_PRODUCTS(t,e){t.products=e,t.productIds=e.map((t=>t.id))},SET_CURRENT_PRODUCT_ID(t,e){t.currentProductId=e},SET_CURRENT_PRODUCT(t,e){t.currentProduct=e},SET_ORDER_STATUS(t,e){t.orderStatus=e},SET_TOKEN(t,e){t.token=e,localStorage.token=e},REMOVE_TOKEN(t){t.token="",localStorage.token=""},SET_KORISNIK_ID(t,e){t.korisnik_id=e},REMOVE_KORISNIK_ID(t){t.korisnik_id=null},setCurrentPage(t,e){t.currentPage=e},ADD_TO_CART(t,e){t.cart.push(e)}},actions:{addToCart({commit:t},e){t("ADD_TO_CART",e)},async fetchProducts({commit:t}){try{console.log("GET ZA SVE");const e=await fetch("http://localhost:9000/plovilo/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`}}),r=await e.json();t("SET_PRODUCTS",r)}catch(e){console.error("Error fetching products:",e)}},async fetchProduct({commit:t},e){try{console.log("GET ZA POJEDINACNO PLOVILO");const r=await fetch(`http://localhost:9000/plovilo/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`}}),o=await r.json();t("SET_CURRENT_PRODUCT",o),console.log("Fetching product with ID:",e),console.log("Fetched product:",o)}catch(r){console.error("Error fetching product:",r)}},async sendOrder({commit:t},e){console.log("ovo ispod je order"),console.log(e);try{const r=await fetch("http://localhost:9000/narudzbina",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`},body:JSON.stringify(e)});console.log(r),r.ok?t("SET_ORDER_STATUS","success"):t("SET_ORDER_STATUS","error")}catch(r){console.error("Error submitting order:",r)}},setCurrentProductId({commit:t},e){t("SET_CURRENT_PRODUCT_ID",e)},async register({commit:t},e){console.log(JSON.stringify(e));const r=await fetch("http://127.0.0.1:9001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await r.json();t("SET_TOKEN",o.token),t("SET_KORISNIK_ID",o.id)},async login({commit:t},e){const r=await fetch("http://127.0.0.1:9001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await r.json();o.token?(t("SET_TOKEN",o.token),t("SET_KORISNIK_ID",o.id)):alert("Login failed")}},getters:{totalPages(t){return Math.ceil(t.products.length/t.itemsPerPage)},displayedProducts(t){const e=(t.currentPage-1)*t.itemsPerPage,r=e+t.itemsPerPage;return t.products.slice(e,r)},cartItems(t){return t.cart.map((e=>t.products.find((t=>t.id===e))))}},modules:{}});o["default"].use(ft.XG7),o["default"].use(gt.A7),o["default"].config.productionTip=!1,new o["default"]({router:vt,store:_t,render:t=>t(g)}).$mount("#app")}},e={};function r(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,o,s,a){if(!o){var n=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||n>=a)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(i=!1,a<n&&(n=a));if(i){t.splice(u--,1);var d=s();void 0!==d&&(e=d)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,s,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,a,n=o[0],i=o[1],c=o[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(c)var u=c(r)}for(e&&e(o);d<n.length;d++)a=n[d],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},o=self["webpackChunkvezba4vue2"]=self["webpackChunkvezba4vue2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(6846)}));o=r.O(o)})();
//# sourceMappingURL=app.af752f4a.js.map