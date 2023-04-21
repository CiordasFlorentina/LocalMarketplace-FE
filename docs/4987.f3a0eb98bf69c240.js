"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(P,l,c)=>{c.r(l),c.d(l,{LoginPageModule:()=>x});var m=c(6895),t=c(433),r=c(603),g=c(8029),u=c(590),e=c(1571),d=c(7556);function _(o,s){1&o&&(e.TgZ(0,"ion-note",15),e._uU(1,"Invalid email"),e.qZA())}function h(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-card",4)(2,"ion-card-content",5)(3,"h1",6),e._uU(4,"Login to your Account"),e.qZA(),e.TgZ(5,"ion-label"),e._uU(6,"Email Address*"),e.qZA(),e.TgZ(7,"ion-item",7),e._UZ(8,"ion-input",8),e.YNc(9,_,2,0,"ion-note",9),e.qZA(),e.TgZ(10,"ion-label"),e._uU(11,"Password*"),e.qZA(),e.TgZ(12,"ion-item",10),e._UZ(13,"ion-input",11),e.qZA(),e.TgZ(14,"ion-button",12),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.login())}),e._uU(15," Login "),e.qZA()()(),e.TgZ(16,"div",13),e._uU(17,"Don't have an account? "),e.TgZ(18,"strong",14),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.switchMode("Register"))}),e._uU(19,"Register"),e.qZA()(),e.BQk()}if(2&o){const n=e.oxw();e.xp6(2),e.Q6J("formGroup",n.loginForm),e.xp6(7),e.Q6J("ngIf",n.hasError()),e.xp6(5),e.Q6J("disabled",n.loginForm.invalid)}}function p(o,s){1&o&&(e.TgZ(0,"ion-note",15),e._uU(1,"Invalid email"),e.qZA())}function f(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-card",4)(2,"ion-card-content",5)(3,"h1",6),e._uU(4,"Register Account"),e.qZA(),e.TgZ(5,"ion-label"),e._uU(6,"Name*"),e.qZA(),e.TgZ(7,"ion-item",7),e._UZ(8,"ion-input",16),e.qZA(),e.TgZ(9,"ion-label"),e._uU(10,"Email Address*"),e.qZA(),e.TgZ(11,"ion-item",7),e._UZ(12,"ion-input",8),e.YNc(13,p,2,0,"ion-note",9),e.qZA(),e.TgZ(14,"ion-label"),e._uU(15,"Password*"),e.qZA(),e.TgZ(16,"ion-item",7),e._UZ(17,"ion-input",11),e.qZA(),e.TgZ(18,"ion-label"),e._uU(19,"Register as*"),e.qZA(),e.TgZ(20,"div",17)(21,"ion-item",18)(22,"ion-checkbox",19),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.check("customer"))}),e.qZA(),e.TgZ(23,"ion-label"),e._uU(24,"Customer"),e.qZA()(),e.TgZ(25,"ion-item",18)(26,"ion-checkbox",19),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.check("farmer"))}),e.qZA(),e.TgZ(27,"ion-label"),e._uU(28,"Farmer"),e.qZA()()(),e.TgZ(29,"ion-button",12),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.register())}),e._uU(30," Register "),e.qZA()()(),e.TgZ(31,"div",20),e._uU(32,"Have an account? "),e.TgZ(33,"strong",14),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.switchMode("Login"))}),e._uU(34,"Login"),e.qZA()(),e.BQk()}if(2&o){const n=e.oxw();e.xp6(2),e.Q6J("formGroup",n.registerForm),e.xp6(11),e.Q6J("ngIf",n.hasError()),e.xp6(9),e.Q6J("formControl",n.customerCheck),e.xp6(4),e.Q6J("formControl",n.farmerCheck),e.xp6(3),e.Q6J("disabled",n.registerForm.invalid)}}const Z=[{path:"",component:(()=>{class o{constructor(n,a,i){this.fb=n,this.authService=a,this.router=i,this.mode="Login",this.customerCheck=new t.NI(!1),this.farmerCheck=new t.NI(!1),this.registerForm=this.fb.group({name:["",[t.kI.required]],email:["",[t.kI.required,t.kI.email]],password:["",t.kI.required],farmer:[null,t.kI.required]}),this.loginForm=this.fb.group({email:["",[t.kI.required,t.kI.email]],password:["",t.kI.required]})}ngOnInit(){}switchMode(n){this.mode=n,this.registerForm.reset(),this.loginForm.reset()}hasError(){var n;return((null===(n=this.registerForm.get("email"))||void 0===n?void 0:n.errors)||{}).email}check(n){var a,i;"customer"===n?(null===(a=this.registerForm.get("farmer"))||void 0===a||a.setValue(!!this.customerCheck.value&&null),this.farmerCheck.setValue(!1)):(null===(i=this.registerForm.get("farmer"))||void 0===i||i.setValue(!this.farmerCheck.value||null),this.customerCheck.setValue(!1))}login(){this.authService.login(this.loginForm.value.email,this.loginForm.value.password).pipe((0,u.P)()).subscribe(n=>{this.authService.setUser(n),this.navigate(n.farmer),this.registerForm.reset(),this.loginForm.reset()})}register(){this.authService.register({name:this.registerForm.value.name,email:this.registerForm.value.email,password:this.registerForm.value.password,farmer:this.registerForm.value.farmer}).pipe((0,u.P)()).subscribe(n=>{this.authService.setUser(n),this.navigate(n.farmer),this.registerForm.reset(),this.loginForm.reset()})}navigate(n){this.router.navigate(n?["/farmer-products"]:["/products"])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(t.qu),e.Y36(d.e),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:6,vars:2,consts:[["color","primary"],[1,"ion-justify-content-center"],["size","3",1,"ion-align-self-center","ion-justify-content-center"],[4,"ngIf"],["color","light"],[1,"ion-padding",3,"formGroup"],[1,"margin-bottom-double"],["fill","outline",1,"margin-bottom"],["type","email","formControlName","email"],["slot","error",4,"ngIf"],["fill","outline",1,"margin-bottom-double"],["type","password","formControlName","password"],["color","primary","expand","block",3,"disabled","click"],[1,"message"],[3,"click"],["slot","error"],["formControlName","name"],[1,"register-container","margin-bottom"],["lines","none","color","light",1,"ion-no-padding"],["slot","start",1,"ion-no-margin",3,"formControl","click"],[1,"message","register"]],template:function(n,a){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row",1)(3,"ion-col",2),e.YNc(4,h,20,3,"ng-container",3),e.YNc(5,f,35,5,"ng-container",3),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("ngIf","Login"===a.mode),e.xp6(1),e.Q6J("ngIf","Register"===a.mode))},dependencies:[m.O5,t.JJ,t.JL,r.YG,r.PM,r.FN,r.nz,r.wI,r.W2,r.jY,r.pK,r.Ie,r.Q$,r.uN,r.Nd,r.w,r.j9,t.oH,t.sg,t.u],styles:["ion-row[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%]{height:100%}ion-col[_ngcontent-%COMP%]{max-width:450px!important}ion-card-content[_ngcontent-%COMP%]{padding:40px;margin:auto}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:20px}.margin-bottom-double[_ngcontent-%COMP%]{margin-bottom:40px}.message[_ngcontent-%COMP%]{margin:0 auto;padding:15px 0;width:60%}.message.register[_ngcontent-%COMP%]{width:43%}.message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{cursor:pointer}.register-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:35%;display:inline-block;font-size:15px;padding-right:5px}.register-container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin-right:5px}"]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,t.u5,r.Pc,v,t.UX]}),o})()}}]);