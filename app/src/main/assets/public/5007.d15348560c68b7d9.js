"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5007],{7201:(m,v,c)=>{c.d(v,{c:()=>d});var i=c(8274),h=c(6408),f=c(4032),d=function(){function u(g,l){this.message="",l.use(g.getLanguage())}return u.prototype.ngOnInit=function(){},u.\u0275fac=function(l){return new(l||u)(i.Y36(h.T),i.Y36(f.sK))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-progress-indeterminate"]],inputs:{message:"message"},decls:8,vars:1,consts:[[1,"row"],[1,"col-12","item-center",2,"text-align","center"],["src","../../../../assets/loader.gif",1,"loader_img",2,"width","30px","height","30px"],[1,"card-body"],[1,"text-center"]],template:function(l,a){1&l&&(i.TgZ(0,"div",0)(1,"div",1),i._UZ(2,"img",2)(3,"br"),i.TgZ(4,"div",3)(5,"p",4)(6,"strong"),i._uU(7),i.qZA()()()()()),2&l&&(i.xp6(7),i.Oqu(a.message))},styles:[".loader_img[_ngcontent-%COMP%]{align-content:center;height:150px;width:150px}"]}),u}()},2487:(m,v,c)=>{c.d(v,{s:()=>l});var i=c(4006),h=c(2340),f=c(8274),d=c(529),u=c(809),g=c(7185),l=function(){function a(e,r,t,n){this.http=e,this.http2=r,this.fb=t,this.toastr=n,this.url=h.N.url,this.urlProd=h.N.urlProd,this.initImageForm(),this.currency=[]}return a.prototype.initImageForm=function(){this.formImage=this.fb.group({filename:["",i.kI.required],filemime:["",i.kI.required],data:["",i.kI.required],self:["",i.kI.required],type:["",i.kI.required],uuid:["",i.kI.required],lang:[""],alt:[""],title:[""],width:["",i.kI.required],height:["",i.kI.required]})},a.prototype.setAccessToken=function(e){return localStorage.setItem("access-token",e)},a.prototype.getAccessToken=function(){return localStorage.getItem("access-token")},a.prototype.setRefreshToken=function(e){return localStorage.setItem("refresh-token",JSON.stringify(e))},a.prototype.getRefreshToken=function(){return JSON.parse(localStorage.getItem("refresh-token")||"")},a.prototype.constructParam=function(e,r){for(var t=new Object,n=e.length-1;n>=0;n--)Object.defineProperty(t,e[n],{value:r[n]});return t},a.prototype.getAppToken=function(){this.http.get("".concat(this.url,"/rest/session/token")).subscribe(function(e){localStorage.setItem("app-token",JSON.stringify(e))},function(e){localStorage.setItem("app-token",JSON.stringify(e.error.text))})},a.prototype.setHeaders=function(e,r,t,n,s){var o={};return e&&(o={"Content-Type":"application/json"}),r&&(o={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}),n&&(o={"Content-Type":"application/hal+json",Accept:"application/json"}),t&&(o={"Content-Type":"application/hal+json","X-CSRF-Token":JSON.parse(localStorage.getItem("app-token")||""),Accept:"application/json"}),s&&(o={"Content-Type":"application/hal+json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("access-token")||""),Accept:"application/json","X-CSRF-Token":JSON.parse(localStorage.getItem("app-token")||"")||"97dKe-0-qukVOMY1YNBhsZ-POfPUArpL11YLfRJFD94"}),o},a.prototype.setImageEntity=function(e){var r={_links:{self:e.links,type:{href:this.url+"/jsonapi/file/image"}},uuid:[{value:e.attributes.uuid}],lang:e.attributes.langcode||"fr",alt:e.attributes.field_image_alt_text,title:e.attributes.field_image_title_text,url:e.attributes.url,width:"259",height:"195"};return console.log(r),r},a.prototype.postImages=function(e,r){var t=this,n={Authorization:"Bearer "+e,"Content-Type":"application/hal+json",Accept:"application/json","X-CSRF-Token":"Nr9nsDXPcTIk3bqDGb2K93KLaRe_z5kH7htvDy81xSc"};return new Promise(function(s,o){if(r){var _={data:{type:"file--image",attributes:{data:r.data,uri:"public://".concat(r.filename)}}};t.post("jsonapi/file/image?_format=hal_json",_,n).subscribe(function(p){s(p.data)},function(p){o(p)})}else s(null)})},a.prototype.get=function(e,r,t){if(t){var n="";for(var s in t)n+="".concat(s,"=").concat(t[s],"&");e+="?"+n}return console.log("url du get: ",this.url+"/"+e),this.http.get(this.url+"/"+e,{headers:r})},a.prototype.post=function(e,r,t){return console.log("la requette: ",this.url+"/"+e),this.http.post(this.url+"/"+e,r,{headers:t})},a.prototype.put=function(e,r,t){return this.http.put(this.url+"/"+e+"/",r,{headers:t})},a.prototype.delete=function(e,r){return this.http.delete(this.url+"/"+e,{headers:r})},a.prototype.patch=function(e,r,t){return this.http.patch(this.url+"/"+e,JSON.stringify(r),{headers:t})},a.prototype.getaNode=function(e,r){var t=this.setHeaders(!1,!1,!1,!1,!0);return this.get("api/v01/".concat(e,"/").concat(r,"?_format=hal_json"),t)},a.prototype.getNodes=function(e){var r=this.setHeaders(!1,!1,!1,!1,!0);return this.get("api/v01/".concat(e,"?_format=hal_json"),r)},a.prototype.addNode=function(e){var r=this.setHeaders(!1,!1,!1,!1,!0);return this.post("node?_format=hal_json",JSON.stringify(e),r)},a.prototype.updateNode=function(e,r){var t=this.setHeaders(!1,!1,!1,!1,!0);return this.patch("node/".concat(e,"?_format=hal_json"),JSON.stringify(r),t)},a.prototype.deleteNode=function(e){var r=this.setHeaders(!1,!1,!1,!1,!0);return this.delete("node/".concat(e,"?_format=hal_json"),r)},a.prototype.refreshAccesToken=function(){var e=this;return new Promise(function(r,t){var n=new URLSearchParams;n.append("grant_type","refresh_token"),n.append("client_id","8a4f8634-4f16-4b6e-b617-554664897bbe"),n.append("client_secret","sdkgames2015"),n.append("refresh_token",e.getRefreshToken()),e.post("front/token",n.toString(),{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}).subscribe(function(o){r(o),e.setAccessToken(o.access_token),e.setRefreshToken(o.refresh_token)},function(o){t(o)})})},a.prototype.manageServerError=function(e){switch(console.log(e),e.status){case 0:default:break;case 403:this.refreshAccesToken()}},a.prototype.randomString=function(){var r,t,n="ABCDEFGHJKLMPQRSTUVWXYZabcdefghjklmpqrstuvwxyz",s="0123456789",o=new Date;return n.charAt(Math.floor(Math.random()*n.length)),r=s.charAt(Math.floor(Math.random()*s.length)),t=o.getFullYear()+(o.getMonth()+1)+o.getDate()+o.getHours()+o.getMinutes()+o.getSeconds()+r,parseInt(t,10)},a.prototype.getWeek=function(e){var n,r=new Date;e="number"==typeof e?e:0;var s=new Date(r.getFullYear(),0,1),o=s.getDay()-e;o=o>=0?o:o+7;var p,_=Math.floor((r.getTime()-s.getTime()-6e4*(r.getTimezoneOffset()-s.getTimezoneOffset()))/864e5)+1;return o<4?(p=Math.floor((_+o-1)/7)+1)>52&&(p=(n=(n=new Date(r.getFullYear()+1,0,1).getDay()-e)>=0?n:n+7)<4?1:53):p=Math.floor((_+o-1)/7),p},a.prototype.getStringOccurenceMenu=function(e,r){for(var t=0,n=0;n<e.length;n++)e[n].field_nom_repas[0].value===r&&t++;return t},a.prototype.removeStringOccurenceMenu=function(e,r){for(var t=0;t<e.length;t++)e[t].field_nom_repas[0].value===r&&e.splice(t,1);return e},a.prototype.getStringOccurenceExtras=function(e,r){for(var t=0,n=0;n<e.length;n++)e[n].field_nom_repas[0].value===r&&t++;return t},a.prototype.removeStringOccurenceExtras=function(e,r){for(var t=0;t<e.length;t++)e[t].field_nom_repas[0].value===r&&e.splice(t,1);return e},a.prototype.getStringOccurenceUser=function(e,r){for(var t=0,n=0;n<e.length;n++)e[n].name[0].value===r&&t++;return t},a.prototype.removeStringOccurenceUser=function(e,r){for(var t=0;t<e.length;t++)e[t].name[0].value===r&&e.splice(t,1);return e},a.prototype.getfulldatefilter=function(e,r){var n,t=[],s=new Date(r);return e.forEach(function(o){o&&o.created&&o.created[0].value&&(n=new Date(o.created[0].value)).getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()&&n.getDate()===s.getDate()&&t.push(o)}),t},a.prototype.getStringOccurenceDate=function(e,r){for(var n,t=0,s=new Date(r),o=0;o<e.length;o++)(n=new Date(e[o].created[0].value)).getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()&&n.getDate()===s.getDate()&&t++;return t},a.prototype.removeStringOccurenceDate=function(e,r){for(var t,n=new Date(r),s=0;s<e.length;s++)(t=new Date(e[s].created[0].value)).getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()&&e.splice(s,1);return e},a.\u0275fac=function(r){return new(r||a)(f.LFG(d.eN),f.LFG(u.t),f.LFG(i.qu),f.LFG(g._W))},a.\u0275prov=f.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a}()},6408:(m,v,c)=>{c.d(v,{T:()=>d});var i=c(8274),h=c(4032),f=c(4524),d=function(){function u(g,l){this.storage=l,this.keyLanguage="userLanguage",this.userLanguage="fr",this.supportedLanguages=["fr","en"],this.initLanguage()}return u.prototype.initLanguage=function(){var g=this;this.storage.get(this.keyLanguage).then(function(l){g.userLanguage=l,console.log("get storage valeur de la langue: ",l)}),this.userLanguage||(this.userLanguage="fr")},u.prototype.setLanguage=function(g){this.userLanguage=g,console.log(this.userLanguage),this.storage.set(this.keyLanguage,this.userLanguage),this.storage.get(this.keyLanguage).then(function(l){console.log("valeur set de la langue: ",l)}),window.location.reload()},u.prototype.getLanguage=function(){return this.userLanguage},u.prototype.getAvailableLanguage=function(){return this.supportedLanguages},u.\u0275fac=function(l){return new(l||u)(i.LFG(h.sK),i.LFG(f.Ke))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u}()}}]);