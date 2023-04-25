"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[725],{725:(j,g,a)=>{a.r(g),a.d(g,{ProductsPageModule:()=>$});var d=a(6895),u=a(433),n=a(603),m=a(8029),x=a(5861),h=a(7579),p=a(2722),_=a(8372),C=a(590),Z=a(5698),t=a(1571),f=a(1135),b=a(9646),P=a(7556);let y=(()=>{class i{constructor(e){this.authService=e,this.cartItemsNr$=new f.X(0),this.cartItems={items:{},totalPrice:0},this.cartItems$=new f.X(this.cartItems),this.cartItemsNr=0}addOneItem(e){e.id&&(this.cartItems.items[e.id]?(this.cartItems.items[e.id].quantity++,this.cartItems.items[e.id].price+=e.price,this.cartItems.totalPrice+=e.price,this.increaseNr()):(this.cartItems.items[e.id]={product:e,quantity:1,price:e.price},this.cartItems.totalPrice+=e.price,this.increaseNr()),this.cartItems$.next(this.cartItems))}removeOneItem(e){e.id&&this.cartItems.items[e.id]&&(this.cartItems.items[e.id].quantity--,this.cartItems.items[e.id].price-=e.price,this.cartItems.totalPrice-=e.price,this.decrease(),this.cartItems$.next(this.cartItems))}removeAll(e){if(e.id&&this.cartItems.items[e.id]){const o=this.cartItems.items[e.id].quantity,s=this.cartItems.items[e.id].price;delete this.cartItems.items[e.id],this.cartItems.totalPrice-=s,this.cartItemsNr-=o,this.cartItemsNr$.next(this.cartItemsNr),this.cartItems$.next(this.cartItems)}}placeOrder(){const e={consumer_id:this.authService.getUser().id,product_ids:[],product_qty:[]};return Object.values(this.cartItems.items).forEach(o=>{e.product_ids.push(o.product.id),e.product_qty.push(o.quantity)}),(0,b.of)(!0)}increaseNr(){this.cartItemsNr++,this.cartItemsNr$.next(this.cartItemsNr)}decrease(){this.cartItemsNr--,this.cartItemsNr$.next(this.cartItemsNr)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(P.e))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function v(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item")(1,"div",9),t._UZ(2,"ion-img",10),t.TgZ(3,"ion-label"),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",11)(7,"ion-label"),t._uU(8),t.qZA()(),t.TgZ(9,"div",12)(10,"ion-icon",13),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.removeItem(c.product))}),t.qZA(),t.TgZ(11,"ion-label"),t._uU(12),t.qZA(),t.TgZ(13,"ion-icon",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.addItem(c.product))}),t.qZA(),t.TgZ(14,"ion-icon",15),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.removeAll(c.product))}),t.qZA()()()}if(2&i){const e=r.$implicit,o=t.oxw();t.xp6(2),t.Q6J("src","data:image/jpeg;base64,"+e.product.image),t.xp6(2),t.Oqu(t.lcZ(5,5,e.product.name)),t.xp6(4),t.AsE("",e.price,"",o.currencySymbol,""),t.xp6(4),t.Oqu(e.quantity)}}let O=(()=>{class i{constructor(e,o){this.modalCtrl=e,this.cartService=o,this.currencySymbol=" Lei",this.items=[],this.totalPrice=null,this.cartService.cartItems$.subscribe(s=>{this.items=Object.values(s.items),this.totalPrice=s.totalPrice})}ngOnInit(){}close(){return this.modalCtrl.dismiss({user:null})}addItem(e){this.cartService.addOneItem(e)}removeItem(e){this.cartService.removeOneItem(e)}removeAll(e){this.cartService.removeAll(e)}placeOrder(){this.cartService.placeOrder().pipe((0,Z.q)(1)).subscribe(()=>{this.close()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.IN),t.Y36(y))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart"]],inputs:{currencySymbol:"currencySymbol"},decls:21,vars:4,consts:[["color","primary"],["slot","end"],["name","close-outline","size","large",1,"ion-margin",3,"click"],[1,"content-container"],[4,"ngFor","ngForOf"],[1,"sum-details"],[1,"buttons-container"],["color","light","fill","solid","size","default",3,"click"],["color","primary","fill","solid",3,"disabled","click"],[1,"product-details"],[3,"src"],[1,"price-details"],[1,"quantity-details"],["name","remove-circle-outline",3,"click"],["name","add-circle-outline",3,"click"],["name","trash","color","danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t._uU(3,"Cart"),t.qZA(),t.TgZ(4,"ion-buttons",1)(5,"ion-icon",2),t.NdJ("click",function(){return o.close()}),t.qZA()()()(),t.TgZ(6,"ion-content")(7,"div",3)(8,"ion-list"),t.YNc(9,v,15,7,"ion-item",4),t.qZA(),t.TgZ(10,"div",5)(11,"ion-item")(12,"ion-label"),t._uU(13,"Total price: "),t.TgZ(14,"span"),t._uU(15),t.qZA()()()(),t.TgZ(16,"div",6)(17,"ion-button",7),t.NdJ("click",function(){return o.close()}),t._uU(18," Cancel "),t.qZA(),t.TgZ(19,"ion-button",8),t.NdJ("click",function(){return o.placeOrder()}),t._uU(20," Place Order "),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("ngForOf",o.items),t.xp6(6),t.AsE("",o.totalPrice,"",o.currencySymbol,""),t.xp6(4),t.Q6J("disabled",!o.items.length))},dependencies:[d.sg,n.YG,n.Sm,n.W2,n.Gu,n.gu,n.Xz,n.Ie,n.Q$,n.q_,n.wd,n.sr,d.rS],styles:["ion-img[_ngcontent-%COMP%]{height:50px;width:50px}.product-details[_ngcontent-%COMP%]{align-items:center;display:flex;width:50%;font-size:23px}.product-details[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0 19px}.price-details[_ngcontent-%COMP%]{width:23%;text-align:right;font-size:17px}.quantity-details[_ngcontent-%COMP%]{width:27%;display:flex;justify-content:flex-end;font-size:21px;align-items:center}.quantity-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding:0 10px;cursor:pointer}.sum-details[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-right:20px}.sum-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:80%;text-align:right;font-size:20px}.sum-details[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}ion-list[_ngcontent-%COMP%]{min-height:380px}.content-container[_ngcontent-%COMP%]{padding:15px}.buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:15px;margin-right:20px}.buttons-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child{margin-right:10px}"]}),i})();var T=a(2824);function A(i,r){if(1&i&&(t.TgZ(0,"ion-badge",26),t._uU(1),t.qZA()),2&i){const e=r.ngIf;t.xp6(1),t.Oqu(e)}}function I(i,r){if(1&i&&(t.TgZ(0,"ion-item",22)(1,"ion-label"),t._uU(2),t.qZA(),t._UZ(3,"ion-radio",30),t.qZA()),2&i){const e=r.$implicit;t.xp6(2),t.Oqu(e.label),t.xp6(1),t.Q6J("value",e.value)}}function q(i,r){if(1&i&&(t.TgZ(0,"ion-content",27)(1,"ion-item",22)(2,"ion-label",28),t._uU(3,"Select currency:"),t.qZA()(),t.TgZ(4,"ion-list",27)(5,"ion-radio-group",29),t.YNc(6,I,4,2,"ion-item",16),t.qZA()()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("formControl",e.currencyControl),t.xp6(1),t.Q6J("ngForOf",e.currencyOpts)}}function S(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",22)(1,"ion-checkbox",31),t.NdJ("ionChange",function(){const c=t.CHM(e).index,l=t.oxw();return t.KtG(l.checkCategory(c))}),t.qZA(),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()()}if(2&i){const e=r.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,e.value))}}function M(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",22)(1,"ion-checkbox",32),t.NdJ("ionChange",function(){const c=t.CHM(e).index,l=t.oxw();return t.KtG(l.checkAvailability(c))}),t.qZA(),t.TgZ(2,"ion-label"),t._uU(3),t.ALo(4,"titlecase"),t.qZA()()}if(2&i){const e=r.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,1,e.label))}}function U(i,r){if(1&i&&(t.TgZ(0,"ion-content",27)(1,"ion-item",22)(2,"ion-label",28),t._uU(3,"Sort By:"),t.qZA()(),t.TgZ(4,"ion-list",27)(5,"ion-radio-group",29)(6,"ion-item",22)(7,"ion-label"),t._uU(8,"Name"),t.qZA(),t._UZ(9,"ion-radio",33),t.qZA(),t.TgZ(10,"ion-item",22)(11,"ion-label"),t._uU(12,"Price"),t.qZA(),t._UZ(13,"ion-radio",34),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("formControl",e.sortByControl)}}function N(i,r){if(1&i&&(t.TgZ(0,"ion-button",50),t._uU(1," In Stock: "),t.TgZ(2,"span",51),t._uU(3),t.qZA()()),2&i){const e=t.oxw().$implicit;t.Q6J("disabled",!0),t.xp6(3),t.Oqu(e.availability)}}function k(i,r){1&i&&(t.TgZ(0,"ion-button",52),t._uU(1," Out Of Stock "),t.qZA()),2&i&&t.Q6J("disabled",!0)}function z(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"ion-col",35)(1,"ion-card",36)(2,"ion-card-header",37),t._UZ(3,"ion-img",38),t.TgZ(4,"ion-card-title",39),t._uU(5),t.ALo(6,"titlecase"),t.qZA()(),t.TgZ(7,"ion-card-content")(8,"div",40)(9,"ion-button",41)(10,"span",42),t._uU(11),t.qZA()(),t.YNc(12,N,4,2,"ion-button",43),t.YNc(13,k,2,1,"ion-button",44),t.qZA(),t.TgZ(14,"ion-item",45)(15,"ion-label",46)(16,"span",47),t._uU(17),t.qZA(),t._uU(18),t.qZA()(),t.TgZ(19,"ion-button",48),t.NdJ("click",function(){const c=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.addToCart(c))}),t._UZ(20,"ion-icon",49),t._uU(21," Add To Cart "),t.qZA()()()()}if(2&i){const e=r.$implicit,o=t.oxw();t.xp6(3),t.Q6J("src","data:image/jpeg;base64,"+e.image),t.xp6(2),t.Oqu(t.lcZ(6,9,e.name)),t.xp6(4),t.Q6J("disabled",!0),t.xp6(2),t.Oqu(e.category),t.xp6(1),t.Q6J("ngIf",e.availability),t.xp6(1),t.Q6J("ngIf",!e.availability),t.xp6(4),t.Oqu(e.price),t.xp6(1),t.hij("",o.currencySymbol," "),t.xp6(1),t.Q6J("disabled",!e.availability)}}const J=[{path:"",component:(()=>{class i{constructor(e,o,s){this.productsService=e,this.cartService=o,this.modalCtrl=s,this.products=[],this.sortByControl=new u.NI("name"),this.searchControl=new u.NI(""),this.currencyControl=new u.NI("ron"),this.currencySymbol=" Lei",this.cartItemsNr=this.cartService.cartItemsNr$,this.categoryOpts=this.productsService.getCategories().map(c=>({value:c,checked:!1})),this.availabilityOpts=this.productsService.getAvailabilityOpts().map(c=>({...c,checked:!1})),this.currencyOpts=this.productsService.getCurrencies(),this.refreshProductsSubj=new h.x,this.onDestroy$=new h.x}ngOnInit(){this.sortByControl.valueChanges.pipe((0,p.R)(this.onDestroy$)).subscribe(()=>this.refreshProductsSubj.next()),this.searchControl.valueChanges.pipe((0,_.b)(300),(0,p.R)(this.onDestroy$)).subscribe(()=>this.refreshProductsSubj.next()),this.currencyControl.valueChanges.pipe((0,p.R)(this.onDestroy$)).subscribe(e=>{this.currencySymbol=this.productsService.getCurrencySymbol(e),this.refreshProductsSubj.next()}),this.refreshProductsSubj.pipe((0,_.b)(400),(0,p.R)(this.onDestroy$)).subscribe(()=>this.getProducts()),this.refreshProductsSubj.next()}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}checkCategory(e){this.categoryOpts[e].checked=!this.categoryOpts[e].checked,this.refreshProductsSubj.next()}checkAvailability(e){this.availabilityOpts[e].checked=!this.availabilityOpts[e].checked,this.refreshProductsSubj.next()}addToCart(e){this.cartService.addOneItem(e)}openCart(){var e=this;return(0,x.Z)(function*(){yield(yield e.modalCtrl.create({component:O,componentProps:{currencySymbol:e.currencySymbol}})).present()})()}getProducts(){const e=this.sortByControl.value,o=this.categoryOpts.filter(c=>c.checked).map(c=>c.value),s=this.availabilityOpts.filter(c=>c.checked).map(c=>c.value);this.productsService.getProducts(this.searchControl.value,e,o,s,this.currencyControl.value).pipe((0,C.P)()).subscribe(c=>this.products=c.items)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.s),t.Y36(y),t.Y36(n.IN))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],decls:58,vars:15,consts:[[3,"translucent"],["color","primary"],["slot","start"],["slot","end",1,"cart-header-button",3,"click"],["color","danger","slot","start","mode","ios",4,"ngIf"],["slot","icon-only","name","cart"],["id","currency-trigger","fill","outline","size","default","slot","end","color","light",1,"ion-margin-horizontal"],["name","chevron-down-outline","slot","end"],["trigger","currency-trigger","triggerAction","click",3,"dismissOnSelect"],[1,"content-container"],[1,"ion-margin-start"],[1,"outer-grid"],["size","2",1,"filter-column"],["value","first"],["slot","header",1,"accordion-item"],["slot","content",1,"ion-no-padding"],["lines","none",4,"ngFor","ngForOf"],["size","10"],["fixed","true",1,"ion-padding","inner-grid"],[1,"sort-row"],["slot","icon-only","name","search"],["placeholder","Search products",3,"clearInput","formControl"],["lines","none"],["id","click-trigger","fill","clear","size","default"],["trigger","click-trigger","triggerAction","click",3,"dismissOnSelect"],["size-xs","12","size-sm","6","size-md","4","size-lg","6","size-xl","2","class","ion-text-center",4,"ngFor","ngForOf"],["color","danger","slot","start","mode","ios"],[1,"ion-no-padding"],[1,"ion-no-margin"],["value","name",3,"formControl"],["slot","end",3,"value"],["slot","start",1,"category-checkbox",3,"ionChange"],["slot","start",3,"ionChange"],["slot","end","value","name"],["slot","end","value","price"],["size-xs","12","size-sm","6","size-md","4","size-lg","6","size-xl","2",1,"ion-text-center"],[1,"product-card"],[1,"ion-no-padding","ion-padding"],[3,"src"],[1,"ion-text-left","product-name"],[1,"tags"],["size","small","shape","round",3,"disabled"],[1,"product-category"],["size","small","shape","round","color","secondary",3,"disabled",4,"ngIf"],["size","small","shape","round","color","danger",3,"disabled",4,"ngIf"],["lines","none",1,"ion-text-right"],["color","primary",1,"price"],[1,"product-price"],["color","primary","expand","block",3,"disabled","click"],["name","cart","slot","start"],["size","small","shape","round","color","secondary",3,"disabled"],[1,"product-availability"],["size","small","shape","round","color","danger",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Local Marketplace"),t.qZA(),t.TgZ(6,"ion-button",3),t.NdJ("click",function(){return o.openCart()}),t.YNc(7,A,2,1,"ion-badge",4),t.ALo(8,"async"),t._UZ(9,"ion-icon",5),t.qZA(),t.TgZ(10,"ion-button",6),t._uU(11),t.ALo(12,"uppercase"),t._UZ(13,"ion-icon",7),t.qZA(),t.TgZ(14,"ion-popover",8),t.YNc(15,q,7,2,"ng-template"),t.qZA()()(),t.TgZ(16,"ion-content")(17,"div",9)(18,"div",10)(19,"h1"),t._uU(20,"Discover our list of products"),t.qZA(),t.TgZ(21,"h2"),t._uU(22,"Everything we sell is organic and locally produced by farmers in your area"),t.qZA()(),t.TgZ(23,"ion-grid",11)(24,"ion-row")(25,"ion-col",12)(26,"ion-accordion-group")(27,"ion-accordion",13)(28,"ion-item",14)(29,"ion-label"),t._uU(30,"Category"),t.qZA()(),t.TgZ(31,"div",15),t.YNc(32,S,5,3,"ion-item",16),t.qZA()()(),t.TgZ(33,"ion-accordion-group")(34,"ion-accordion")(35,"ion-item",14)(36,"ion-label"),t._uU(37,"Availability"),t.qZA()(),t.TgZ(38,"div",15),t.YNc(39,M,5,3,"ion-item",16),t.qZA()()()(),t.TgZ(40,"ion-col",17)(41,"ion-grid",18)(42,"ion-row",19)(43,"ion-col")(44,"ion-item")(45,"ion-label"),t._UZ(46,"ion-icon",20),t.qZA(),t._UZ(47,"ion-input",21),t.qZA(),t.TgZ(48,"ion-item",22)(49,"ion-label"),t._uU(50,"Sort by:"),t.qZA(),t.TgZ(51,"ion-button",23),t._uU(52),t._UZ(53,"ion-icon",7),t.qZA(),t.TgZ(54,"ion-popover",24),t.YNc(55,U,14,1,"ng-template"),t.qZA()()()(),t.TgZ(56,"ion-row"),t.YNc(57,z,22,11,"ion-col",25),t.qZA()()()()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(7),t.Q6J("ngIf",t.lcZ(8,11,o.cartItemsNr)),t.xp6(4),t.hij(" ",t.lcZ(12,13,o.currencyControl.value)," "),t.xp6(3),t.Q6J("dismissOnSelect",!0),t.xp6(18),t.Q6J("ngForOf",o.categoryOpts),t.xp6(7),t.Q6J("ngForOf",o.availabilityOpts),t.xp6(8),t.Q6J("clearInput",!0)("formControl",o.searchControl),t.xp6(5),t.hij(" ",o.sortByControl.value," "),t.xp6(2),t.Q6J("dismissOnSelect",!0),t.xp6(3),t.Q6J("ngForOf",o.products))},dependencies:[d.sg,d.O5,u.JJ,u.oH,n.We,n.eh,n.yp,n.YG,n.Sm,n.PM,n.FN,n.Zi,n.Dq,n.nz,n.wI,n.W2,n.jY,n.Gu,n.gu,n.Xz,n.pK,n.Ie,n.Q$,n.q_,n.fG,n.B7,n.se,n.Nd,n.wd,n.sr,n.d8,n.w,n.U5,n.QI,n.j9,d.Ov,d.gd,d.rS],styles:[".tags[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.tags[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:11px;opacity:.7}.price[_ngcontent-%COMP%]{font-weight:700;font-size:18px}ion-card-title[_ngcontent-%COMP%]{font-size:28px}ion-grid[_ngcontent-%COMP%]{width:100%}.sort-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}ion-chip[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: #adefd1}ion-accordion-group[_ngcontent-%COMP%]{margin:20px 0}.filter-column[_ngcontent-%COMP%]{padding-top:70px}.accordion-item[_ngcontent-%COMP%]{border:1px solid lightgrey}.content-container[_ngcontent-%COMP%]{padding:10px 50px}ion-card-content[_ngcontent-%COMP%]{padding-bottom:20px}ion-card[_ngcontent-%COMP%]{max-width:400px}.cart-header-button[_ngcontent-%COMP%]{font-size:15px}.cart-header-button[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;left:16px;top:0;font-size:12px}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(J),m.Bz]}),i})(),$=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,u.u5,u.UX,n.Pc,w]}),i})()}}]);