(function(){"use strict";var t={7448:function(t,n,o){var e=o(9242),r=o(3396),i=o(7139);const a={class:"container"},c={class:"card__wrap"},l={class:"stopWatchCard"},u={class:"stopWatchCard__contentWrap"},s={class:"control__panel"},h=(0,r.uE)('<div class="stopWatchCard"><div class="stopWatchCard__contentWrap addStopWatchWrap"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.5" width="3" height="20" fill="#9E9E9E"></rect><rect y="11.5" width="3" height="20" transform="rotate(-90 0 11.5)" fill="#9E9E9E"></rect></svg></div></div>',1),p=[h];function d(t,n,o,e,h,d){const f=(0,r.up)("startButton"),w=(0,r.up)("pauseButton"),v=(0,r.up)("resetButton");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.stopWatchesState,(t=>((0,r.wg)(),(0,r.iD)("article",{key:t.id},[(0,r._)("div",l,[(0,r._)("div",u,[(0,r._)("h1",{style:(0,i.j5)(t.isLaunch?"color: #FFF":"color: #9E9E9E")},(0,i.zw)(t.timeDisplay?t.timeDisplay:0),5),(0,r._)("hr",{style:(0,i.j5)(t.isLaunch?"background-color: #FFF":"background-color: #9E9E9E")},null,4),(0,r._)("div",s,[t.isLaunch?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(f,{key:0,onClick:n=>d.startStopwatch(t)},null,8,["onClick"])),t.isLaunch?((0,r.wg)(),(0,r.j4)(w,{key:1,onClick:n=>d.pauseStopwatch(t)},null,8,["onClick"])):(0,r.kq)("",!0),(0,r.Wm)(v,{svgFill:t.isLaunch?"#FFF":"#9E9E9E",onClick:n=>d.clearStopwatch(t)},null,8,["svgFill","onClick"])])])])])))),128)),(0,r._)("article",{onClick:n[0]||(n[0]=(...t)=>d.addStopwatch&&d.addStopwatch(...t))},p)])])}o(7658);const f={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w=["fill"];function v(t,n,o,e,i,a){return(0,r.wg)(),(0,r.iD)("svg",f,[(0,r._)("rect",{width:"20",height:"20",fill:o.svgFill},null,8,w)])}var g={name:"ResetButton",props:{svgFill:{type:String,required:!1,default:function(){return"9E9E9E"}}}},m=o(89);const S=(0,m.Z)(g,[["render",v]]);var y=S;const E={width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_=(0,r._)("rect",{x:"7",width:"3",height:"20",fill:"#FFF"},null,-1),F=(0,r._)("rect",{width:"3",height:"20",fill:"#FFF"},null,-1),k=[_,F];function B(t,n,o,e,i,a){return(0,r.wg)(),(0,r.iD)("svg",E,k)}var b={name:"PauseButton"};const x=(0,m.Z)(b,[["render",B]]);var C=x;const W={width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=(0,r._)("path",{d:"M0 20V0L17 10L0 20Z",fill:"#9E9E9E"},null,-1),D=[j];function O(t,n,o,e,i,a){return(0,r.wg)(),(0,r.iD)("svg",W,D)}var L={name:"StartButton"};const T=(0,m.Z)(L,[["render",O]]);var Z=T,M={name:"App",components:{resetButton:y,pauseButton:C,startButton:Z},data(){return{stopWatchesState:[]}},computed:{},methods:{startStopwatch(t){t.isLaunch=!0,t.addingTime=setInterval((()=>{t.count++,t.timeDisplay=this.formatStopwatch(t)}),1e3)},pauseStopwatch(t){t.isLaunch=!1,clearInterval(t.addingTime)},clearStopwatch(t){this.pauseStopwatch(t),t.count=0,t.timeDisplay=null},formatStopwatch(t){const n=Math.floor(t.count/60/60),o=Math.floor(t.count/60)-60*n,e=t.count%60,r=[n.toString().padStart(2,"0"),o.toString().padStart(2,"0"),e.toString().padStart(2,"0")];return t.count>=3600?r.join(":"):t.count>=60?[r[1],r[2]].join(":"):t.count<=60?r[2]:void 0},addStopwatch(){const t={id:this.stopWatchesState.length,count:0,isLaunch:!1,addingTime:null,timeDisplay:null};this.stopWatchesState.push(t)}}};const q=(0,m.Z)(M,[["render",d]]);var P=q;(0,e.ri)(P).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var a=1/0;for(s=0;s<t.length;s++){e=t[s][0],r=t[s][1],i=t[s][2];for(var c=!0,l=0;l<e.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[e,r,i]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,a=e[0],c=e[1],l=e[2],u=0;if(a.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var s=l(o)}for(n&&n(e);u<a.length;u++)i=a[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(s)},e=self["webpackChunktestByStudioBelyaev"]=self["webpackChunktestByStudioBelyaev"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(7448)}));e=o.O(e)})();
//# sourceMappingURL=app.712d2e4d.js.map