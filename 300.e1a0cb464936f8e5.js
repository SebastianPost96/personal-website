"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[300],{838:(A,l,c)=>{c.r(l),c.d(l,{ResumeComponent:()=>S});var s=c(4755),m=c(430),r=c(9624),g=c(1728),u=c(668),d=c(4326),p=c(3630),n=c(2223);let _=(()=>{class t{constructor(){this.margin=1,this.hide=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-spacer"]],inputs:{margin:"margin",hide:"hide"},standalone:!0,features:[n.jDz],decls:1,vars:4,template:function(e,o){1&e&&n._UZ(0,"mat-divider"),2&e&&n.Udp("opacity",o.hide?0:1)("margin",8*o.margin,"px")},dependencies:[s.ez,p.t,p.d],styles:["[_nghost-%COMP%]{display:contents}"],changeDetection:0}),t})();var f=c(946);function h(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"button",9),n.NdJ("click",function(){n.CHM(e);const a=n.oxw(3);return n.KtG(a.downloadCV())}),n._uU(1," Download "),n.TgZ(2,"mat-icon"),n._uU(3,"download"),n.qZA()()}}function x(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"mat-icon",10),n.NdJ("click",function(){n.CHM(e);const a=n.oxw(3);return n.KtG(a.downloadCV())}),n._uU(1,"download"),n.qZA()}}function C(t,i){if(1&t&&(n.TgZ(0,"div",6)(1,"h2"),n._uU(2),n.qZA(),n.YNc(3,h,4,0,"button",7),n.YNc(4,x,2,0,"ng-template",null,8,n.W1O),n.qZA()),2&t){const e=n.MAs(5),o=n.oxw().$implicit,a=n.oxw();n.xp6(2),n.Oqu(o.content),n.xp6(1),n.Q6J("ngIf",!a.config.isMobile())("ngIfElse",e)}}function y(t,i){if(1&t&&(n.TgZ(0,"p",11),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Oqu(n.lcZ(2,1,e.content))}}function v(t,i){if(1&t&&(n.TgZ(0,"div")(1,"a",12),n._UZ(2,"mat-icon",13),n.TgZ(3,"span"),n._uU(4),n.qZA()()()),2&t){const e=n.oxw().$implicit;let o,a;n.xp6(1),n.Q6J("href",e.link,n.LSH),n.xp6(1),n.Q6J("svgIcon",null!==(o=e.svgIcon)&&void 0!==o?o:"")("fontIcon",null!==(a=e.fontIcon)&&void 0!==a?a:""),n.xp6(2),n.hij(" ",e.content,"")}}function O(t,i){if(1&t&&(n.TgZ(0,"h3"),n._uU(1),n.ALo(2,"titlecase"),n.ALo(3,"translate"),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Oqu(n.lcZ(2,1,n.lcZ(3,3,e.content)))}}function Z(t,i){if(1&t&&(n.TgZ(0,"small"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.Oqu(n.lcZ(2,1,e))}}function w(t,i){if(1&t&&(n.TgZ(0,"div",14)(1,"div",15),n._UZ(2,"img",16),n.qZA(),n.TgZ(3,"div",17)(4,"h4"),n._uU(5),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.TgZ(10,"small"),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.YNc(13,Z,3,3,"small",0),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(2),n.Q6J("height",24)("width",24)("ngSrc",e.icon),n.xp6(3),n.Oqu(n.lcZ(6,7,e.title)),n.xp6(3),n.Oqu(n.lcZ(9,9,e.subtitle)),n.xp6(3),n.Oqu(n.lcZ(12,11,e.timeLine)),n.xp6(2),n.Q6J("ngForOf",e.description)}}function b(t,i){if(1&t&&n._UZ(0,"app-spacer",18),2&t){const e=n.oxw().$implicit;n.Q6J("margin",e.size)("hide",!!e.hide)}}function I(t,i){if(1&t&&(n.ynx(0),n.YNc(1,C,6,3,"div",1),n.YNc(2,y,3,3,"p",2),n.YNc(3,v,5,4,"div",3),n.YNc(4,O,4,5,"h3",3),n.YNc(5,w,14,13,"div",4),n.YNc(6,b,1,2,"app-spacer",5),n.BQk()),2&t){const e=i.$implicit;n.xp6(1),n.Q6J("ngIf","title"===e.type),n.xp6(1),n.Q6J("ngIf","paragraph"===e.type),n.xp6(1),n.Q6J("ngIf","imageIcon"===e.type),n.xp6(1),n.Q6J("ngIf","section"===e.type),n.xp6(1),n.Q6J("ngIf","occupation"===e.type),n.xp6(1),n.Q6J("ngIf","spacer"===e.type)}}let S=(()=>{class t{constructor(e){this.config=e,this.resumeContent=[{type:"title",content:"Sebastian Post"},{type:"paragraph",content:{en:"Schweinfurt, Bavaria, Germany",de:"Schweinfurt, Bayern, Deutschland"}},{type:"imageIcon",content:r.w.email,link:"mailto:"+r.w.email,fontIcon:"mail"},{type:"imageIcon",content:r.w.linkedin,link:"https://"+r.w.linkedin,svgIcon:"linkedin"},{type:"spacer",size:2},{type:"section",content:u.I.experience},{type:"occupation",icon:"assets/nerdware.jfif",title:{en:"Frontend Developer",de:"Frontend-Entwickler"},subtitle:"nerdware GmbH",timeLine:{en:"Oct 2022 - Present",de:"Okt 2022 - Heute"},description:[{de:"Arbeit an einem multinationalen HR-Support System.",en:"Working on multinational HR support system."}]},{type:"spacer",size:1,hide:!0},{type:"occupation",icon:"assets/aracom.jpg",title:{en:"Frontend Developer",de:"Frontend-Entwickler"},subtitle:"AraCom IT Services AG",timeLine:{en:"Apr 2021 - Sep 2022 (1 year 6 months)",de:"Apr 2021 - Sep 2022 (1 Jahr 6 Monate)"},description:[{en:"Projects on Enterprise Resource Planning and Internationalization.",de:"Projekte zu Enterprise Resource Planning und Internationalisierung."}]},{type:"spacer",size:1,hide:!0},{type:"occupation",icon:"assets/ronny.png",title:"IT Administrator (Minijob)",subtitle:"Ronny T-Shirt Druck",timeLine:{en:"2015 - 2021 (6 years)",de:"2015 - 2021 (6 Jahre)"},description:[{en:"\u25cf Onlineshop web development",de:"\u25cf Onlineshop Webentwicklung"},{en:"\u25cf SEO",de:"\u25cf SEO"},{en:"\u25cf Maintenance of soft- and hardware",de:"\u25cf Wartung von Soft- und Hardware"}]},{type:"spacer",size:2},{type:"section",content:{de:"Ausbildung",en:"Education"}},{type:"occupation",icon:"assets/uni_bamberg.jfif",title:{de:"Otto-Friedrich-Universit\xe4t Bamberg",en:"University of Bamberg"},subtitle:"Bachelor of Science - BS, Software Systems Science",timeLine:{en:"Oct 2017 - Mar 2021",de:"Okt 2017 - M\xe4r 2021"},description:[{en:"\u25cf Bachelor's thesis on a business search engine frontend written in Kotlin-React",de:"\u25cf Bachelorarbeit \xfcber ein Firmensuchmaschinen-Frontend, geschrieben in Kotlin-React"},{en:"\u25cf Software projects using mainly Angular and Spring Boot.",de:"\u25cf Softwareprojekte mit gr\xf6\xdftenteils Angular and Spring Boot."}]}]}downloadCV(){const e=document.createElement("a");e.download="Resume-Sebastian-Post.pdf",e.href="assets/Resume-Sebastian-Post.pdf",e.click()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.E))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-resume"]],standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","title",4,"ngIf"],["class","paragraph",4,"ngIf"],[4,"ngIf"],["class","occupation",4,"ngIf"],[3,"margin","hide",4,"ngIf"],[1,"title"],["mat-flat-button","","color","accent",3,"click",4,"ngIf","ngIfElse"],["justIcon",""],["mat-flat-button","","color","accent",3,"click"],[3,"click"],[1,"paragraph"],[1,"image-icon",3,"href"],[3,"svgIcon","fontIcon"],[1,"occupation"],[1,"icon"],[3,"height","width","ngSrc"],[1,"info"],[3,"margin","hide"]],template:function(e,o){1&e&&n.YNc(0,I,7,6,"ng-container",0),2&e&&n.Q6J("ngForOf",o.resumeContent)},dependencies:[s.ez,s.sg,s.O5,s.rS,m.Ps,m.Hw,s.Zd,g.ot,g.lW,d.k,p.t,_],styles:[".image-icon[_ngcontent-%COMP%]{display:inline-flex;gap:10px;align-items:center;margin:8px 0;color:inherit}.occupation[_ngcontent-%COMP%]{display:flex;margin-bottom:20px;gap:10px}.occupation[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:24px}.occupation[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.occupation[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.paragraph[_ngcontent-%COMP%]{white-space:break-spaces}.title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-sizing:border-box}.title[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),t})()}}]);