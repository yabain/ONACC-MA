"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3338],{3338:(J,h,a)=>{a.r(h),a.d(h,{NewsModule:()=>L,createTranslateLoader:()=>v});var g=a(6895),P=a(4006),r=a(2723),m=a(4032),w=a(9832),x=a(529),M=a(2858),l=a(6014),f=a(953),b=a(655),t=a(8274),C=a(8195),O=a(7185);function N(n,i){1&n&&(t.TgZ(0,"div",11)(1,"div",11)(2,"div",12),t._UZ(3,"div",13)(4,"div",14)(5,"div",14),t.qZA(),t.TgZ(6,"div",12),t._UZ(7,"div",13)(8,"div",14)(9,"div",14),t.qZA(),t.TgZ(10,"div",12),t._UZ(11,"div",13)(12,"div",14)(13,"div",14),t.qZA(),t.TgZ(14,"div",12),t._UZ(15,"div",13)(16,"div",14)(17,"div",14),t.qZA(),t.TgZ(18,"div",12),t._UZ(19,"div",13)(20,"div",14)(21,"div",14),t.qZA()(),t._UZ(22,"br"),t.qZA())}function Z(n,i){if(1&n){var e=t.EpF();t.TgZ(0,"div",24),t.NdJ("click",function(){var s=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.openModal(s.newsTitle,s.photo,s.newsDate,s.newsContent,s.newsAutor,s.newsContentShort))}),t.TgZ(1,"div",25)(2,"div",26),t._UZ(3,"img",27),t.TgZ(4,"p",28)(5,"span",29),t._uU(6),t.qZA(),t.TgZ(7,"span",30),t._UZ(8,"ion-icon",31),t._uU(9),t.ALo(10,"date"),t._UZ(11,"br")(12,"ion-icon",31),t._uU(13),t.ALo(14,"date"),t.qZA()()()()()}if(2&n){var o=i.$implicit;t.xp6(3),t.MGl("src","http://dev.tilakat.com:8091",o.photo,"",t.LSH),t.xp6(3),t.hij("",o.newsTitle," "),t.xp6(3),t.hij(" ",t.xi3(10,4,o.newsDate,"dd/MM/yyyy")," "),t.xp6(4),t.hij(" ",t.xi3(14,7,o.newsDate,"shortTime"),"")}}function T(n,i){if(1&n){var e=t.EpF();t.TgZ(0,"td",32)(1,"ion-card-subtitle",33),t.NdJ("click",function(){t.CHM(e);var c=t.oxw(2);return t.KtG(c.prevPage())}),t._UZ(2,"ion-icon",34),t._uU(3,"Pr\xe9c\xe9dent"),t.qZA()()}}function k(n,i){1&n&&(t.TgZ(0,"td",35),t._uU(1," 000000000 "),t.qZA())}function y(n,i){if(1&n){var e=t.EpF();t.TgZ(0,"div",15),t.YNc(1,Z,15,10,"div",16),t.TgZ(2,"table",17)(3,"tr"),t.YNc(4,T,4,0,"td",18),t.YNc(5,k,2,0,"td",19),t.TgZ(6,"td")(7,"ion-card-subtitle",20),t._uU(8),t.qZA()(),t.TgZ(9,"td",21),t.NdJ("click",function(){t.CHM(e);var d=t.oxw();return t.KtG(d.nextPage())}),t.TgZ(10,"ion-card-subtitle",22),t._uU(11,"Suivant "),t._UZ(12,"ion-icon",23),t.qZA()()()()()}if(2&n){var o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.newsTab),t.xp6(3),t.Q6J("ngIf",!o.prevDisabeled),t.xp6(1),t.Q6J("ngIf",o.prevDisabeled),t.xp6(3),t.Oqu(o.pageNumber)}}var A=[{path:"",redirectTo:"news-list",pathMatch:"full"},{path:"news-list",pathMatch:"full",component:function(){function n(i,e,o,c,d){this.router=i,this.newsService=e,this.location=o,this.toaster=c,this.modalController=d,this.title="Actualit\xe9",this.waitingData=!0,this.pageNumber=1,this.prevDisabeled=!0,this.pageNumber>1?this.prevDisabeled=!1:this.pageNumber<=1?(this.pageNumber=1,this.prevDisabeled=!0):this.prevDisabeled=!0}return n.prototype.ngOnInit=function(){var i=this;this.pageNumber>1?this.prevDisabeled=!1:this.pageNumber<=1?(this.pageNumber=1,this.prevDisabeled=!0):this.prevDisabeled=!0,this.waitingData=!0,this.newsService.getNews(1,10).then(function(e){i.newsTab=e,i.waitingData=!1}).catch(function(e){console.error("Erreur: ",e.message)})},n.prototype.navigateToHomePage=function(){this.router.navigate(["folder/home"])},n.prototype.prviousPage=function(){this.location.back()},n.prototype.navigateToNotificationsPage=function(){this.router.navigate(["folder/notifications"])},n.prototype.refreshNews=function(){this.newsService.getNews()},n.prototype.openModal=function(i,e,o,c,d,s){return(0,b.mG)(this,void 0,void 0,function(){var p,F=this;return(0,b.Jh)(this,function(u){switch(u.label){case 0:return[4,this.modalController.create({component:f.J,componentProps:{newsTitle:i,newsPhotoUrl:e,newsDate:o,newsContent:c,newsAutor:d,newsContentShort:s}})];case 1:return(p=u.sent()).onDidDismiss().then(function(_){null!==_&&(F.dataReturned=_.data)}),[4,p.present()];case 2:return[2,u.sent()]}})})},n.prototype.nextPage=function(){var i=this;console.log("nextPage: "),this.waitingData=!0,this.pageNumber+=1,this.newsService.getNews(this.pageNumber,15).then(function(e){i.prevDisabeled=!1,i.newsTab=e,i.waitingData=!1}).catch(function(e){console.error("Erreur: ",e.message)})},n.prototype.prevPage=function(){var i=this;if(this.pageNumber-=1,1==this.pageNumber&&(this.prevDisabeled=!0),this.pageNumber<1)return this.pageNumber=1,this.prevDisabeled=!0,0;this.waitingData=!0,this.newsService.getNews(this.pageNumber,15).then(function(e){i.newsTab=e,i.waitingData=!1}).catch(function(e){console.error("Erreur: ",e.message)})},n.\u0275fac=function(e){return new(e||n)(t.Y36(l.F0),t.Y36(C.Y),t.Y36(g.Ye),t.Y36(O._W),t.Y36(r.IN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-news-list"]],decls:16,vars:4,consts:[[1,"ion-no-border",2,"padding-top","0px","padding-bottom","0px","margin-bottom","0"],[2,"padding-left","0px","padding-top","10px"],["slot","start"],["name","chevron-back",2,"color","#27448c","height","35px !important","width","30px",3,"click"],[1,"center","col","col-center","text-center",2,"color","#000"],["slot","primary",3,"click"],["fill","solid","color","#27448c",1,"bordered",2,"color","#27448c"],["color","custom","name","notifications",2,"color","aliceblue"],[3,"fullscreen"],["class","container",4,"ngIf"],["class","container","style","margin: 0px; padding: 0px;",4,"ngIf"],[1,"container"],[1,"post"],[1,"avatar"],[1,"line"],[1,"container",2,"margin","0px","padding","0px"],["class","row",3,"click",4,"ngFor","ngForOf"],[2,"border","none","text-align","center !important","color","#27448c","width","100%","margin-top","10px"],["style","padding-right: 0px;",4,"ngIf"],["style","padding-right: 0px; color: #fff;",4,"ngIf"],[1,"ion-text-center",2,"font-size","1em","color","#27448c"],[3,"click"],[1,"ion-text-right",2,"font-size","1em","color","#27448c"],["name","chevron-forward"],[1,"row",3,"click"],[1,"column"],[1,"card",2,"display","flex","align-items","center"],["alt","img",2,"height","100px !important","width","100px !important","vertical-align","middle",3,"src"],[1,"wrapper"],[1,"demo-1",2,"font-size","1em !important","color","rgb(37, 36, 36)","margin-left","3px"],[2,"font-size","0.7em !important","color","rgb(64, 63, 63)"],["name","calendar"],[2,"padding-right","0px"],[1,"ion-text-left",2,"font-size","1em","color","#27448c",3,"click"],["name","chevron-back"],[2,"padding-right","0px","color","#fff"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2)(3,"ion-icon",3),t.NdJ("click",function(){return o.prviousPage()}),t.qZA()(),t.TgZ(4,"ion-title",4),t._uU(5),t.qZA(),t.TgZ(6,"ion-buttons",5),t.NdJ("click",function(){return o.navigateToNotificationsPage()}),t.TgZ(7,"ion-button",6),t._UZ(8,"ion-icon",7),t.qZA()()()(),t.TgZ(9,"ion-content",8),t.YNc(10,N,23,0,"div",9),t.YNc(11,y,13,4,"div",10),t._UZ(12,"br")(13,"br")(14,"br")(15,"br"),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",o.title,""),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",o.waitingData),t.xp6(1),t.Q6J("ngIf",!o.waitingData))},dependencies:[g.sg,g.O5,r.YG,r.Sm,r.tO,r.W2,r.Gu,r.gu,r.wd,r.sr,g.uU],styles:['ion-content[_ngcontent-%COMP%]{--background: linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)}ion-content[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]{background:#f2f9fc;padding:2px 3px 5px;border-radius:0 0 10px 10px}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{border-radius:5px!important;border-style:solid;border-left:none;border-right:none;border-color:rgba(235,246,246,.886)!important;--background: linear-gradient(90deg, #ffffff 0%, #fff 50%, #f9fcfbf3 100%);padding:0;margin:2px 0;color:#1f1f1f;font-weight:600}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:3px 0}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:rgba(6,6,6,.89)}ion-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:rgba(6,6,6,.89)}ion-item[_ngcontent-%COMP%]{border-radius:15px!important;border-style:solid;border-color:rgba(206,233,205,.467)!important;--background: linear-gradient(90deg, #ffffff 0%, #fff 50%, #ebefe598 100%);padding:0;margin:2px 0;color:#1f1f1f;font-weight:600}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding:3px 0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:rgba(6,6,6,.89)}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:rgba(6,6,6,.89)}ion-grid[_ngcontent-%COMP%]{background-color:inherit;color:#000;margin:0;padding:0}#container[_ngcontent-%COMP%]{display:absolute;left:0;right:0;text-align:center;transform:translateY(-50%)}.searchbar[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:20%;margin-top:20px;padding:0 20px}ion-searchbar[_ngcontent-%COMP%]{--box-shadow: none;--border-radius: 15px;color:#c0bfbf;--background: #f7f7f7}.searchbar-input.sc-ion-searchbar-ios[_ngcontent-%COMP%]{--background: rgb(190, 190, 190) !important}.addit[_ngcontent-%COMP%]{width:100%;border-radius:10px;height:150px;padding:0!important}.center[_ngcontent-%COMP%]{font-size:1.3em!important;height:100%;width:100%;display:flex;justify-content:center;align-items:center}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: #f2f9fc;background:#f2f9fc;padding:0 10px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .bordered[_ngcontent-%COMP%]{--border-radius: 10px;--box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700;font-size:14px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:14px}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{--border-radius: 40%}.post[_ngcontent-%COMP%]{width:220px;height:80px}.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{float:left;width:52px;height:52px;background-color:#ccc;border-radius:25%;margin:8px;background-image:linear-gradient(90deg,#ddd 0px,#e8e8e8 40px,#ddd 80px);background-size:600px;animation:_ngcontent-%COMP%_shine-avatar 1.6s infinite linear}.post[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{float:left;width:140px;height:16px;margin-top:12px;border-radius:7px;background-image:linear-gradient(90deg,#ddd 0px,#e8e8e8 40px,#ddd 80px);background-size:600px;animation:_ngcontent-%COMP%_shine-lines 1.6s infinite linear}.post[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] + .line[_ngcontent-%COMP%]{margin-top:11px;width:100px}.post[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] ~ .line[_ngcontent-%COMP%]{background-color:#ddd}@keyframes _ngcontent-%COMP%_shine-lines{0%{background-position:-100px}40%,to{background-position:140px}}@keyframes _ngcontent-%COMP%_shine-avatar{0%{background-position:-32px}40%,to{background-position:208px}}.row[_ngcontent-%COMP%]{margin:0 -5px}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.column[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:5px;padding:0 5px}}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px rgba(0,0,0,.2);padding:5px 3px 0;text-align:left;font-size:1em}.wrapper[_ngcontent-%COMP%]{padding:5px;max-width:400px}.demo-1[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.demo-2[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:150px}']}),n}()},{path:"news-details",pathMatch:"full",component:f.J},{path:"**",pathMatch:"full",component:f.J}],U=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]}),n}();function v(n){return new w.w(n,"./assets/i18n/",".json")}var L=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,P.u5,r.Pc,x.JF,U,M.H,m.aw.forRoot({loader:{provide:m.Zw,useFactory:v,deps:[x.eN]}})]}),n}()}}]);