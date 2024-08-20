(function(){"use strict";var t={404:function(t,e,a){var n=a(5130),r=a(6768);const o={class:"navbar"},i={class:"navbar-container"},s={class:"navbar-menu"};function c(t,e){const a=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",o,[(0,r.Lk)("div",i,[(0,r.Lk)("ul",s,[(0,r.Lk)("li",null,[(0,r.bF)(a,{to:"/","exact-active-class":"active",class:"menu-item"},{default:(0,r.k6)((()=>[(0,r.eW)(" Home ")])),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(a,{to:"/projects","exact-active-class":"active",class:"menu-item"},{default:(0,r.k6)((()=>[(0,r.eW)(" Projects ")])),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(a,{to:"/throwing","exact-active-class":"active",class:"menu-item"},{default:(0,r.k6)((()=>[(0,r.eW)(" Throwing ")])),_:1})])])])])}var l=a(1241);const d={},u=(0,l.A)(d,[["render",c],["__scopeId","data-v-42fa6666"]]);var p=u;const f={class:"circle-bar"};function m(t,e){return(0,r.uX)(),(0,r.CE)("div",f,[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)(7,(t=>(0,r.Lk)("div",{class:"circle",key:t}))),64))])}const h={},v=(0,l.A)(h,[["render",m],["__scopeId","data-v-0502b621"]]);var g=v,b={__name:"App",setup(t){const e=t=>{t.style.opacity=0},a=(t,e)=>{t.offsetHeight,t.style.transition="opacity 1s ease",t.style.opacity=1,e()},o=(t,e)=>{t.style.transition="opacity 1s ease",t.style.opacity=0,e()};return(t,i)=>{const s=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(p),(0,r.bF)(n.eB,{name:"page",onBeforeEnter:e,onEnter:a,onLeave:o},{default:(0,r.k6)((()=>[(0,r.bF)(s)])),_:1}),(0,r.bF)(g)],64)}}};const k=b;var _=k,w=a(1387),y=a(4232);const C={class:"fancy-text"};var L={__name:"AnimatedText",props:{text:String},setup(t){return(e,a)=>((0,r.uX)(),(0,r.CE)("div",C,[(0,r.Lk)("h1",{class:"animated-text",ref:"textElement"},(0,y.v_)(t.text),513)]))}};const F=(0,l.A)(L,[["__scopeId","data-v-fdb8299e"]]);var A=F;const E={class:"container"},x=(0,r.Fv)('<div class="contact-bar" id="contact" data-v-312ed6ff><div class="contact-logos" data-v-312ed6ff><a href="https://www.linkedin.com/in/adria-retter" target="_blank" aria-label="LinkedIn" data-v-312ed6ff><i class="fa fa-linkedin" data-v-312ed6ff></i></a><a href="https://github.com/aretter329" target="_blank" aria-label="GitHub" data-v-312ed6ff><i class="fa fa-github" data-v-312ed6ff></i></a><a href="https://www.instagram.com/aretter29/" target="_blank" aria-label="Instagram" data-v-312ed6ff><i class="fa fa-instagram" data-v-312ed6ff></i></a><a href="mailto:aretter329@gmail.com?subject=Me&amp;body=Hello!" aria-label="Email" data-v-312ed6ff><i class="fa fa-envelope" data-v-312ed6ff></i></a></div></div>',1),I=[x];function P(t,e){return(0,r.uX)(),(0,r.CE)("div",E,I)}const j={},X=(0,l.A)(j,[["render",P],["__scopeId","data-v-312ed6ff"]]);var T=X;const R=t=>((0,r.Qi)("data-v-396525a9"),t=t(),(0,r.jt)(),t),O={class:"container"},S={id:"main",class:"fade-in-content"},H=R((()=>(0,r.Lk)("div",{class:"about",id:"about"},[(0,r.Lk)("div",{id:"bio"},[(0,r.Lk)("p",null,"I'm a Masters student studying software engineering at Villanova University. In May 2023, I graduated from Swarthmore College with Bachelors degrees in mathematics and computer science. "),(0,r.Lk)("p",null,"In addition to my studies, I throw discus, shot put, and hammer for Villanova. During my time at Swarthmore, I was a 2x All-American and the 2023 NCAA National Champion in the discus.")])],-1)));var N={__name:"HomePage",setup(t){return(t,e)=>((0,r.uX)(),(0,r.CE)("div",O,[(0,r.bF)(A,{text:"Hi, I'm Adria.",onAnimationComplete:t.onAnimationComplete},null,8,["onAnimationComplete"]),(0,r.Lk)("div",S,[H,(0,r.bF)(T)])]))}};const M=(0,l.A)(N,[["__scopeId","data-v-396525a9"]]);var B=M,D=(a(4603),a(7566),a(8721),a(144));const q={class:"image-card"},K=["src","alt"],U={class:"caption"};var W={__name:"PictureFrame",props:{href:{type:String},caption:{type:String}},setup(t){return(e,a)=>((0,r.uX)(),(0,r.CE)("div",q,[(0,r.Lk)("img",{src:t.href,alt:t.caption,class:"image"},null,8,K),(0,r.Lk)("p",U,(0,y.v_)(t.caption),1)]))}};const G=(0,l.A)(W,[["__scopeId","data-v-e47d649c"]]);var Q=G;const V={class:"gallery-container"},Y={class:"gallery"},z={href:"https://codepen.io/aretter29/pens/public",target:"_blank"},$=["href"],J=["innerHTML"];var Z={__name:"ProjectPage",setup(t){const e=new URL(a(3699),a.b).href,o=(0,D.KR)(""),i=(0,D.KR)(!1);async function s(){try{const t=new URL(a(8009),a.b).href,e=await fetch(t);o.value=await e.text(),i.value=!0}catch(t){console.error("Error loading HTML file:",t)}}return(t,c)=>((0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("div",Y,[(0,r.Lk)("a",z,[(0,r.bF)(Q,{href:a(4690),caption:"CodePen Portfolio"},null,8,["href"])]),(0,r.Lk)("a",{href:(0,D.R1)(e),target:"_blank"},[(0,r.bF)(Q,{href:a(7760),caption:"GoL Simulator"},null,8,["href"])],8,$),(0,r.Lk)("a",{onClick:(0,n.D$)(s,["prevent"])},[(0,r.bF)(Q,{href:a(6467),caption:"Simple RPG"},null,8,["href"])]),i.value?((0,r.uX)(),(0,r.CE)("div",{key:0,innerHTML:o.value,class:"html-content"},null,8,J)):(0,r.Q3)("",!0)])]))}};const tt=(0,l.A)(Z,[["__scopeId","data-v-f418e37c"]]);var et=tt;const at={class:"articles-mentioned"},nt=["href"];var rt={__name:"TrackArticles",setup(t){const e=(0,D.KR)([{id:1,quote:"ROCHESTER, NY - Swarthmore College women's track & field senior Adria Retter captured the National Championship in the discus throw to open the NCAA National Championships...",link:"https://swarthmoreathletics.com/news/2023/5/25/womens-track-field-retter-crowned-national-champion-in-discus-throw.aspx"},{id:2,quote:"Retter Named PhillySIDA Co-Performer of the Year, Teszler Earns All-Area Nod",link:"https://swarthmoreathletics.com/news/2023/6/16/womens-track-field-retter-named-phillysida-co-performer-of-the-year-teszler-earns-all-area-nod.aspx"}]);return(t,a)=>((0,r.uX)(),(0,r.CE)("div",at,[(0,r.Lk)("main",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.value,(t=>((0,r.uX)(),(0,r.CE)("section",{key:t.id,class:"article"},[(0,r.Lk)("a",{href:t.link,target:"_blank"},[(0,r.Lk)("blockquote",null,' "'+(0,y.v_)(t.quote)+'" ',1)],8,nt)])))),128))])]))}};const ot=(0,l.A)(rt,[["__scopeId","data-v-3e082e08"]]);var it=ot;const st=t=>((0,r.Qi)("data-v-83cd21a2"),t=t(),(0,r.jt)(),t),ct={class:"gallery-container"},lt=st((()=>(0,r.Lk)("div",{class:"full-page"},[(0,r.Lk)("a",{id:"swat-page",href:"https://swarthmoreathletics.com/sports/womens-track-and-field/roster/adria-retter/11142",target:"_blank"}," Swarthmore Bio "),(0,r.Lk)("a",{id:"nova-page",href:"https://villanova.com/sports/womens-track-and-field/roster/adria-retter/14142",target:"_blank"}," Villanova Bio "),(0,r.Lk)("a",{id:"nova-page",href:"https://villanova.com/sports/womens-track-and-field/roster/adria-retter/14142",target:"_blank"}," Results ")],-1))),dt={class:"gallery"};var ut={__name:"ThrowingPage",setup(t){return(t,e)=>((0,r.uX)(),(0,r.CE)("div",ct,[lt,(0,r.Lk)("div",dt,[(0,r.bF)(Q,{href:"https://pbs.twimg.com/media/FMpAb2UXIAENYm_?format=jpg&name=4096x4096",caption:"Centennial Conference Shot Put & Weight Throw Champion",class:"photo"}),(0,r.bF)(Q,{href:"https://swarthmoreathletics.com/images/2023/5/25/adria_championship.png?width=1534&quality=80&format=jpg",caption:"NCAA DIII Discus Champion",class:"photo"}),(0,r.bF)(Q,{href:"https://images.sidearmdev.com/convert?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fvillanova.com%2Fimages%2F2024%2F5%2F21%2F2024-05-11BigEastT_FDay3_2299.jpg&type=webp",caption:"Big East Discus Champion",class:"photo"})]),(0,r.bF)(it)]))}};const pt=(0,l.A)(ut,[["__scopeId","data-v-83cd21a2"]]);var ft=pt;const mt=[{path:"/",name:"HomePage",component:B},{path:"/projects",name:"ProjectPage",component:et},{path:"/throwing",name:"ThrowingPage",component:ft}],ht=(0,w.aE)({history:(0,w.LA)(),routes:mt});var vt=ht;const gt=(0,n.Ef)(_);gt.use(vt),gt.mount("#app")},3699:function(t,e,a){t.exports=a.p+"d8d5a83bd7419ffc.pdf"},8009:function(t,e,a){t.exports=a.p+"5e07d9dbd5b044bd.html"},4690:function(t,e,a){t.exports=a.p+"img/codepen.7ab117de.png"},6467:function(t,e,a){t.exports=a.p+"img/dragongame.60f02213.png"},7760:function(t,e,a){t.exports=a.p+"img/gol.46e03cde.png"}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],o=t[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/portfolio-page/"}(),function(){a.b=document.baseURI||self.location.href;var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var d=c(a)}for(e&&e(n);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkportfolio_page"]=self["webpackChunkportfolio_page"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(404)}));n=a.O(n)})();
//# sourceMappingURL=app.c943fb37.js.map