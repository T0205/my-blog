import{d as G,o as J,a as A,c as D,p as se,b as ne,e as c,_ as X,u as Le,f as ke,r as Me,g as He,h as de,w as W,t as H,F as _e,v as fe,i as z,j as Re,k as q,l as Be,m as Fe,n as Ve}from"./index-794347ec.js";import{_ as Qe}from"./article-little-icon-97b95826.js";import{a as We,B as qe}from"./BackgroundImgCom-b190aa16.js";import{W as Ue}from"./wow-43bd02d9.js";const ge=e=>Array.isArray(e),ve=e=>ge(e)?e:[e];let ze=function(e){let t=function(m){return ve(m).forEach(C=>{var $;return b.set(Symbol(($=C.char)==null?void 0:$.innerText),r({...C}))}),this},n=()=>f().filter(m=>m.typeable),a=function(m,C){let $=[...b.keys()];b.set($[m],r(C))},r=m=>(m.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},m),o=function(){b.forEach(m=>delete m.done)},_=function(){b=new Map,t(e)},l=()=>b,f=()=>Array.from(b.values()),p=m=>b.delete(m),w=(m=!1)=>m?f():f().filter(C=>!C.done),S=(m,C=!1)=>C?b.delete(m):b.get(m).done=!0,b=new Map;return t(e),{add:t,set:a,wipe:_,reset:o,destroy:p,done:S,getItems:w,getQueue:l,getTypeable:n}};const we=e=>Array.from(e),ae=e=>document.createTextNode(e);let ie=e=>([...e.childNodes].forEach(t=>{if(t.nodeValue){[...t.nodeValue].forEach(n=>{t.parentNode.insertBefore(ae(n),t)}),t.remove();return}ie(t)}),e);const Se=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,ie(t.body)},Ce="data-typeit-id",N="ti-cursor",Ke="END",je={started:!1,completed:!1,frozen:!1,destroyed:!1},M={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(e=>({opacity:e})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},Ge=`[${Ce}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function Ie(e,t=!1,n=!1){let a=e.querySelector(`.${N}`),r=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:l=>{var f,p;if(a&&n){if((f=l.classList)!=null&&f.contains(N))return NodeFilter.FILTER_ACCEPT;if(a.contains(l))return NodeFilter.FILTER_REJECT}return(p=l.classList)!=null&&p.contains(N)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),o,_=[];for(;o=r.nextNode();)o.originalParent||(o.originalParent=o.parentNode),_.push(o);return t?_.reverse():_}function Je(e){return Ie(Se(e))}function Xe(e,t=!0){return t?Je(e):we(e).map(ae)}const K=e=>document.createElement(e),Te=(e,t="")=>{let n=K("style");n.id=t,n.appendChild(ae(e)),document.head.appendChild(n)},pe=e=>(ge(e)||(e=[e/2,e/2]),e),me=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let he=e=>e/2;function Oe(e){let{speed:t,deleteSpeed:n,lifeLike:a}=e;return n=n!==null?n:t/3,a?[me(t,he(t)),me(n,he(n))]:[t,n]}const Ye=e=>(e.forEach(clearTimeout),[]),Ze=()=>Math.random().toString().substring(2,9),re=e=>"value"in e;let et=e=>re(e)?we(e.value):Ie(e,!0).filter(t=>!(t.childNodes.length>0));const tt=(e,t)=>{new IntersectionObserver((a,r)=>{a.forEach(o=>{o.isIntersecting&&(t(),r.unobserve(e))})},{threshold:1}).observe(e)};let k=e=>typeof e=="function"?e():e;const Pe=e=>Number.isInteger(e);let oe=(e,t=document,n=!1)=>t[`querySelector${n?"All":""}`](e),st=e=>/body/i.test(e==null?void 0:e.tagName),nt=(e,t)=>{if(re(e)){e.value=`${e.value}${t.textContent}`;return}t.innerHTML="";let n=st(t.originalParent)?e:t.originalParent||e;n.insertBefore(t,oe("."+N,n)||null)},at=(e,t,n)=>Math.min(Math.max(t+e,0),n.length);const R=(e,t)=>Object.assign({},e,t),it=(e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()},rt=(e,t,n)=>{let a=t[n-1],r=oe(`.${N}`,e);e=(a==null?void 0:a.parentNode)||e,e.insertBefore(r,a||null)};function ot(e){return typeof e=="string"?oe(e):e}const lt=e=>/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML);let ut=(e,t,n)=>new Promise(a=>{let r=async()=>{await e(),a()};n.push(setTimeout(r,t||0))}),ct={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},dt=(e,t)=>{let a=`${`[${Ce}='${e}']`} .${N}`,r=getComputedStyle(t),o=Object.entries(ct).reduce((_,[l,f])=>`${_} ${l}: var(--ti-cursor-${l}, ${f||r[l]});`,"");Te(`${a} { display: inline-block; width: 0; ${o} }`,e)};const U=(e,t)=>new Array(t).fill(e),ye=({queueItems:e,selector:t,cursorPosition:n,to:a})=>{if(Pe(t))return t*-1;let r=new RegExp(Ke,"i").test(a),o=t?[...e].reverse().findIndex(({char:l})=>{let f=l.parentElement,p=f.matches(t);return r&&p?!0:p&&f.firstChild.isSameNode(l)}):-1;o<0&&(o=r?0:e.length-1);let _=r?0:1;return o-n+_};let j=e=>new Promise(t=>{requestAnimationFrame(async()=>{t(await e())})}),Ee=e=>e==null?void 0:e.getAnimations().find(t=>t.id===e.dataset.tiAnimationId),xe=({cursor:e,frames:t,options:n})=>{let a=e.animate(t,n);return a.pause(),a.id=e.dataset.tiAnimationId,j(()=>{j(()=>{a.play()})}),a},_t=({cursor:e,options:t,cursorOptions:n})=>{if(!e||!n)return;let a=Ee(e),r;a&&(t.delay=a.effect.getComputedTiming().delay,r=a.currentTime,a.cancel());let o=xe({cursor:e,frames:n.animation.frames,options:t});return r&&(o.currentTime=r),o},be=e=>{var t;return(t=e.func)==null?void 0:t.call(null)},ft=async({index:e,queueItems:t,wait:n,cursor:a,cursorOptions:r})=>{let o=t[e][1],_=[],l=e,f=o,p=()=>f&&!f.delay,w=o.shouldPauseCursor()&&r.autoPause;for(;p();)_.push(f),p()&&l++,f=t[l]?t[l][1]:null;if(_.length)return await j(async()=>{for(let m of _)await be(m)}),l-1;let S=Ee(a),b;return S&&(b={...S.effect.getComputedTiming(),delay:w?r.autoPauseDelay:0}),await n(async()=>{S&&w&&S.cancel(),await j(()=>{be(o)})},o.delay),await _t({cursor:a,options:b,cursorOptions:r}),e},pt=e=>{var t,n;if(typeof e=="object"){let a={},{frames:r,options:o}=M.cursor.animation;return a.animation=e.animation||{},a.animation.frames=((t=e.animation)==null?void 0:t.frames)||r,a.animation.options=R(o,((n=e.animation)==null?void 0:n.options)||{}),a.autoPause=e.autoPause??M.cursor.autoPause,a.autoPauseDelay=e.autoPauseDelay||M.cursor.autoPauseDelay,a}return e===!0?M.cursor:e};const mt=function(e,t={}){let n=async(s,i,d=!1)=>{I.frozen&&await new Promise(h=>{this.unfreeze=()=>{I.frozen=!1,h()}}),d||await u.beforeStep(this),await ut(s,i,Y),d||await u.afterStep(this)},a=(s,i)=>ft({index:s,queueItems:i,wait:n,cursor:x,cursorOptions:u.cursor}),r=s=>it(s,y),o=()=>re(y),_=(s=0)=>Oe(u)[s],l=()=>et(y),f=(s={})=>{let i=s.delay;i&&g.add({delay:i})},p=(s,i)=>(g.add(s),f(i),this),w=()=>ue??L,S=(s={})=>[{func:()=>V(s)},{func:()=>V(u)}],b=s=>{let i=u.nextStringDelay;g.add([{delay:i[0]},...s,{delay:i[1]}])},m=()=>{if(o())return;let s=K("span");return s.className=N,ce?(s.innerHTML=Se(u.cursorChar).innerHTML,s):(s.style.visibility="hidden",s)},C=async()=>{if(!o()&&x&&y.appendChild(x),ce){dt(Z,y),x.dataset.tiAnimationId=Z;let{animation:s}=u.cursor,{frames:i,options:d}=s;xe({frames:i,cursor:x,options:{duration:u.cursorSpeed,...d}})}},$=()=>{let s=u.strings.filter(i=>!!i);s.forEach((i,d)=>{if(this.type(i),d+1===s.length)return;let h=u.breakLines?[{func:()=>O(K("BR")),typeable:!0}]:U({func:Q,delay:_(1)},g.getTypeable().length);b(h)})},De=async s=>{let i=w();i&&await le({value:i});let d=l().map(h=>[Symbol(),{func:Q,delay:_(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let h=0;h<d.length;h++)await a(h,d);g.reset(),g.set(0,{delay:s})},Ne=s=>{let i=y.innerHTML;return i?(y.innerHTML="",u.startDelete?(y.innerHTML=i,ie(y),b(U({func:Q,delay:_(1),deletable:!0},l().length)),s):i.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(s)):s},F=async(s=!0)=>{I.started=!0;let i=d=>{g.done(d,!s)};try{let d=[...g.getQueue()];for(let v=0;v<d.length;v++){let[P,T]=d[v];if(!T.done){if(!T.deletable||T.deletable&&l().length){let E=await a(v,d);Array(E-v).fill(v+1).map((ee,te)=>ee+te).forEach(ee=>{let[te]=d[ee];i(te)}),v=E}i(P)}}if(!s)return this;if(I.completed=!0,await u.afterComplete(this),!u.loop)throw"";let h=u.loopDelay;n(async()=>{await De(h[0]),F()},h[1])}catch{}return this},le=async s=>{L=at(s,L,l()),rt(y,l(),L)},O=s=>nt(y,s),V=async s=>u=R(u,s),$e=async()=>{if(o()){y.value="";return}l().forEach(r)},Q=()=>{let s=l();s.length&&(o()?y.value=y.value.slice(0,-1):r(s[L]))};this.break=function(s){return p({func:()=>O(K("BR")),typeable:!0},s)},this.delete=function(s=null,i={}){s=k(s);let d=S(i),h=s,{instant:v,to:P}=i,T=g.getTypeable(),E=(()=>h===null?T.length:Pe(h)?h:ye({queueItems:T,selector:h,cursorPosition:w(),to:P}))();return p([d[0],...U({func:Q,delay:v?0:_(1),deletable:!0},E),d[1]],i)},this.empty=function(s={}){return p({func:$e},s)},this.exec=function(s,i={}){let d=S(i);return p([d[0],{func:()=>s(this)},d[1]],i)},this.move=function(s,i={}){s=k(s);let d=S(i),{instant:h,to:v}=i,P=ye({queueItems:g.getTypeable(),selector:s===null?"":s,to:v,cursorPosition:w()}),T=P<0?-1:1;return ue=w()+P,p([d[0],...U({func:()=>le(T),delay:h?0:_(),cursorable:!0},Math.abs(P)),d[1]],i)},this.options=function(s,i={}){return s=k(s),V(s),p({},i)},this.pause=function(s,i={}){return p({delay:k(s)},i)},this.type=function(s,i={}){s=k(s);let{instant:d}=i,h=S(i),P=Xe(s,u.html).map(E=>({func:()=>O(E),char:E,delay:d||lt(E)?0:_(),typeable:E.nodeType===Node.TEXT_NODE})),T=[h[0],{func:async()=>await u.beforeString(s,this)},...P,{func:async()=>await u.afterString(s,this)},h[1]];return p(T,i)},this.is=function(s){return I[s]},this.destroy=function(s=!0){Y=Ye(Y),k(s)&&x&&r(x),I.destroyed=!0},this.freeze=function(){I.frozen=!0},this.unfreeze=()=>{},this.reset=function(s){!this.is("destroyed")&&this.destroy(),s?(g.wipe(),s(this)):g.reset(),L=0;for(let i in I)I[i]=!1;return y[o()?"value":"innerHTML"]="",this},this.go=function(){return I.started?this:(C(),u.waitUntilVisible?(tt(y,F.bind(this)),this):(F(),this))},this.flush=function(s=()=>{}){return C(),F(!1).then(s),this},this.getQueue=()=>g,this.getOptions=()=>u,this.updateOptions=s=>V(s),this.getElement=()=>y;let y=ot(e),Y=[],L=0,ue=null,I=R({},je);t.cursor=pt(t.cursor??M.cursor);let u=R(M,t);u=R(u,{html:!o()&&u.html,nextStringDelay:pe(u.nextStringDelay),loopDelay:pe(u.loopDelay)});let Z=Ze(),g=ze([{delay:u.startDelay}]);y.dataset.typeitId=Z,Te(Ge);let ce=!!u.cursor&&!o(),x=m();u.strings=Ne(ve(u.strings)),u.strings.length&&$()},ht=e=>(se("data-v-dad71da8"),e=e(),ne(),e),yt={class:"KeyAnimationPage"},bt=ht(()=>c("div",{id:"element"},null,-1)),gt=[bt],vt=G({__name:"KeyAnimation",setup(e){function t(n,a,r){return We({method:n,url:a,params:r})}return J(()=>{console.log("onMounted");async function n(){const o=await t("GET","https://api.wrdan.com/hitokoto");localStorage.setItem("aWord",o.data.text),console.log(localStorage.getItem("aWord")),new mt("#element",{strings:localStorage.getItem("aWord"),speed:100,deleteSpeed:100,startDelay:1800,cursorSpeed:800,cursorColor:"color",waitUntilVisible:!0}).go()}n()}),(n,a)=>(A(),D("div",yt,gt))}});const wt=X(vt,[["__scopeId","data-v-dad71da8"]]);const St=[{id:4,time:"2023-10-7",title:"微信小程序登录",simpleDesc:"微信小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。.",tagList:["前端","uni","地图SDK"],imgSrc:"https://pic.imgdb.cn/item/65202bf6c458853aefe44c41.jpg",link:""},{id:2,time:"2023-9-28",title:"Nginx简要介绍",simpleDesc:"一个 http服务器,同时具备优秀的高性能的并发处理能力以及反向代理、负载均衡.",tagList:["服务器","Linux","运维"],imgSrc:"https://pic.imgdb.cn/item/65202ae1c458853aefe3e682.png",link:""},{id:3,time:"2023-10-2",title:"SendBeacon",simpleDesc:"navigator.sendBeacon ：实现可靠的数据上报.它可以在页面卸载时安全、可靠地发送数据。",tagList:["网络请求","API","请求优化"],imgSrc:"https://pic.imgdb.cn/item/65202b3ec458853aefe43868.png",link:""},{id:1,time:"2023-9-23",title:"测试演示文章",simpleDesc:"在小程序开发过程中经常使用到的获取定位功能,获取用户当前位置.",tagList:["前端","uniapp","地图SDK"],imgSrc:"src/assets/img/avatar.png",link:""}],Ct=["onClick"],It={class:"img"},Tt={alt:""},Pt={class:"content"},Et={class:"time"},xt={class:"title"},At={class:"desc"},Dt={class:"tag-list"},Nt={class:"img"},$t={alt:""},Lt=G({__name:"ArticlePreviewComp",setup(e){Le();const t=ke();J(()=>{new Ue({boxClass:"wow",animateClass:"animate__animated"}).init()});const n=Me([]);n.push(...St);const a=(r,o,_)=>{t.push({name:"ArticlePage",query:{id:r,title:o,time:_}})};return(r,o)=>{const _=He("lazy");return A(!0),D(_e,null,de(n,(l,f)=>(A(),D("main",{class:"articleComp wow animate__fadeInUp",onClick:p=>a(l.id,l.title,l.time),key:f},[W(c("div",It,[W(c("img",Tt,null,512),[[_,l.imgSrc]])],512),[[fe,f%2!==0]]),c("div",Pt,[c("p",Et,"发布时间:"+H(l.time),1),c("h2",xt,H(l.title),1),c("div",At,H(l.simpleDesc),1),c("div",Dt,[(A(!0),D(_e,null,de(l.tagList,(p,w)=>(A(),D("span",{class:"tag-item",key:w},H(p),1))),128))])]),W(c("div",Nt,[W(c("img",$t,null,512),[[_,l.imgSrc]])],512),[[fe,f%2===0]])],8,Ct))),128)}}});const kt=X(Lt,[["__scopeId","data-v-fd8695f4"]]),Ae=e=>(se("data-v-eefa92d5"),e=e(),ne(),e),Mt={class:"informComp"},Ht=Ae(()=>c("i",{class:"bell fa fa-bell-o","aria-hidden":"true"},null,-1)),Rt=Ae(()=>c("p",{class:"info-content"},[z(" 项目源码: https://gitee.com/tang-0205/website-new "),c("br"),z(" 上线地址: www.tang0205.top "),c("br"),z(" 演示地址: https://tang-0205.gitee.io/website-new (速度快) "),c("p",{class:"inform-desc"},"个人租赁的阿里云ECS访问较慢,建议使用演示地址进行访问")],-1)),Bt=[Ht,Rt],Ft=G({__name:"InformComp",setup(e){return J(()=>{}),(t,n)=>(A(),D("main",Mt,Bt))}});const Vt=X(Ft,[["__scopeId","data-v-eefa92d5"]]),B=e=>(se("data-v-be6314b5"),e=e(),ne(),e),Qt={id:"WebHomeView"},Wt=B(()=>c("div",{class:"night-switch"},[c("input",{type:"checkbox",id:"night-switch"}),c("label",{class:"switch",for:"night-switch"},[c("span")])],-1)),qt={class:"theme-words"},Ut={class:"poem"},zt={class:"sea-side"},Kt=B(()=>c("div",{class:"wave"},null,-1)),jt=B(()=>c("div",{class:"wave"},null,-1)),Gt=B(()=>c("div",{class:"threeD-box"},null,-1)),Jt={class:"main"},Xt={class:"main-c"},Ot=Fe('<aside class="aside" data-v-be6314b5><div class="my-info" data-v-be6314b5><div class="avater" data-v-be6314b5><img src="'+Ve+'" alt="" data-v-be6314b5></div><p class="username" data-v-be6314b5>唐0205</p><div class="data-panel" data-v-be6314b5><div class="title" data-v-be6314b5><span data-v-be6314b5>文章</span><span data-v-be6314b5>分类</span><span data-v-be6314b5>访问量</span></div><div class="data" data-v-be6314b5><span data-v-be6314b5>12</span><span data-v-be6314b5>4</span><span data-v-be6314b5>null</span></div></div><div class="article-address" data-v-be6314b5><button class="go-address" data-v-be6314b5>源地址</button></div></div><div class="article-list" data-v-be6314b5></div><div class="nav" data-v-be6314b5></div></aside>',1),Yt={class:"content"},Zt=B(()=>c("div",{class:"dashed"},[c("div",{class:"svg"},[c("img",{src:Qe,alt:""})]),z("  文章 ")],-1)),es=G({__name:"HomeView",setup(e){let t=Re("每日一言");const n=a=>{let r=document.querySelector(a).offsetTop;window.scroll({top:r+80,behavior:"smooth"})};return J(()=>{}),(a,r)=>(A(),D("div",Qt,[Wt,q(qe),c("div",qt,[c("div",Ut,H(Be(t)),1),q(wt)]),c("div",zt,[Kt,jt,c("i",{class:"fa fa-angle-down arrow-down",onClick:r[0]||(r[0]=o=>n(".content"))})]),Gt,c("main",Jt,[c("div",Xt,[Ot,c("div",Yt,[q(Vt),Zt,q(kt)])])])]))}});const is=X(es,[["__scopeId","data-v-be6314b5"]]);export{is as default};
