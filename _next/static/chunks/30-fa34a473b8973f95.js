(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{8086:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var s=i(7294),o=function(t){(0,s.useEffect)(t,[])},n=function(t){var e=(0,s.useRef)(t);e.current=t,o(function(){return function(){return e.current()}})},r=function(t){var e=(0,s.useRef)(0),i=(0,s.useState)(t),o=i[0],r=i[1],l=(0,s.useCallback)(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){r(t)})},[]);return n(function(){cancelAnimationFrame(e.current)}),[o,l]},l=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var i=r({width:window.innerWidth,height:window.innerHeight}),o=i[0],n=i[1];return(0,s.useEffect)(function(){var t=function(){n({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];t&&t.addEventListener&&t.addEventListener.apply(t,e)}(window,"resize",t),function(){!function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}(window,"resize",t)}},[]),o}},6030:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return j},default:function(){return O}});var s=i(5893),o=i(8353),n=i(512),r=i(8615),l=i.n(r);let h=t=>{let{number:e,text:i,className:o,inverted:r,background:h="rgba(14, 14, 14, 0.15)"}=t;return(0,s.jsxs)("div",{className:(0,n.Z)(o,l().wrapper,r&&l().inverted),style:{"--background":h},children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:""})})]})};i(8659);var a=i(4147),c=i(5152),u=i.n(c),d=i(1163),m=i(7294);function p(t,e,i){return Math.max(t,Math.min(e,i))}class v{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e,i,s,o;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=t;let e=p(0,this.currentTime/this.duration,1),i=(n=e>=1)?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=(i=this.value,s=this.to,(1-(o=1-Math.exp(-(60*this.lerp)*t)))*i+o*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),null===(e=this.onUpdate)||void 0===e||e.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:o,onStart:n,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=r}}class _{constructor(t,e,{autoResize:i=!0,debounce:s=250}={}){var o;let n;this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},i&&(this.debouncedResize=(o=this.resize,function(...t){let e=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,o.apply(e,t)},s)}),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class f{constructor(){this.events={}}emit(t,...e){var i;let s=this.events[t]||[];for(let t=0,o=s.length;t<o;t++)null===(i=s[t])||void 0===i||i.call(s,...e)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter(t=>e!==t)}destroy(){this.events={}}}let g=100/6,w={passive:!1};class S{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new f,this.onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.options.touchMultiplier,o=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=1===s?g:2===s?this.window.width:1,i*=1===s?g:2===s?this.window.height:1,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,w),this.element.addEventListener("touchstart",this.onTouchStart,w),this.element.addEventListener("touchmove",this.onTouchMove,w),this.element.addEventListener("touchend",this.onTouchEnd,w)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,w),this.element.removeEventListener("touchstart",this.onTouchStart,w),this.element.removeEventListener("touchmove",this.onTouchMove,w),this.element.removeEventListener("touchend",this.onTouchEnd,w)}}class y{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:n=.075,touchInertiaMultiplier:r=35,duration:l,easing:h=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:a=.1,infinite:c=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:m=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:w,virtualScroll:y,__experimental__naiveDimensions:b=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new v,this.emitter=new f,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;let{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey)return;let o=s.type.includes("touch"),n=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();let r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));let a=this.options.prevent;if(h.find(t=>{var e,i,s,r,l;return t instanceof HTMLElement&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||o&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e);let u=o&&this.options.syncTouch,d=o&&"touchend"===s.type&&Math.abs(c)>5;d&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:n,touchInertiaMultiplier:r,duration:l,easing:h,lerp:a,infinite:c,gestureOrientation:d,orientation:u,touchMultiplier:m,wheelMultiplier:p,autoResize:g,prevent:w,virtualScroll:y,__experimental__naiveDimensions:b},this.dimensions=new _(t,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new S(i,{touchMultiplier:m,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:r=this.options.lerp,onStart:l,onComplete:h,force:a=!1,programmatic:c=!0,userData:u}={}){if(!this.isStopped&&!this.isLocked||a){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){let t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=p(0,t,this.limit),t===this.targetScroll)return null==l||l(this),void(null==h||h(this));if(this.userData=null!=u?u:{},i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:r,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==l||l(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}var b=i(8342),x=i.n(b);let E=t=>Symbol.iterator in t,z=(t,e)=>{let i=t instanceof Map?t:new Map(t),s=e instanceof Map?e:new Map(e);if(i.size!==s.size)return!1;for(let[t,e]of i)if(!Object.is(e,s.get(t)))return!1;return!0},T=u()(()=>Promise.all([i.e(927),i.e(612)]).then(i.bind(i,2612)).then(t=>t.Cursor),{loadableGenerated:{webpack:()=>[2612]},ssr:!1});function N(t){let{seo:e={title:"",description:"",image:"",keywords:""},children:i,className:r}=t,[l,h]=(0,a.o)(function(t){let e=m.useRef();return i=>{let s=t(i);return!function(t,e){if(Object.is(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;if(E(t)&&E(e)){let i=t[Symbol.iterator](),s=e[Symbol.iterator](),o=i.next(),n=s.next();if(Array.isArray(o.value)&&Array.isArray(n.value)&&2===o.value.length&&2===n.value.length)return z(t,e);for(;!o.done&&!n.done;){if(!Object.is(o.value,n.value))return!1;o=i.next(),n=s.next()}return!!o.done&&!!n.done}let i=Object.keys(t);if(i.length!==Object.keys(e).length)return!1;for(let s of i)if(!Object.hasOwn(e,s)||!Object.is(t[s],e[s]))return!1;return!0}(e.current,s)?e.current=s:e.current}}(t=>[t.lenis,t.setLenis])),c=(0,d.useRouter)();(0,m.useEffect)(()=>{window.scrollTo(0,0);let t=new y({smoothWheel:!0,syncTouch:!0});return window.lenis=t,h(t),()=>{t.destroy(),h(null)}},[]);let[u,p]=(0,m.useState)();return(0,m.useEffect)(()=>{if(l&&u){let t=document.querySelector(u);l.scrollTo(t,{offset:0})}},[l,u]),(0,m.useEffect)(()=>{c.asPath.includes("#")&&p("#"+c.asPath.split("#").pop())},[c]),(0,m.useEffect)(()=>{function t(t){t.preventDefault();let e=t.currentTarget.href.split("#").pop();p("#"+e),setTimeout(()=>{window.location.hash=e},0)}let e=[...document.querySelectorAll("[href]")].filter(t=>t.href.includes(c.pathname+"#"));return e.forEach(e=>{e.addEventListener("click",t,!1)}),()=>{e.forEach(e=>{e.removeEventListener("click",t,!1)})}},[]),(0,o.xQ)(t=>{null==l||l.raf(t)},0),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:(0,n.Z)(x().layout,r),children:[(0,s.jsx)(T,{}),(0,s.jsx)("main",{className:x().main,children:i})]})})}var L=i(5621),k=i(8086),R=i(7025),M=i.n(R);let W=u()(()=>Promise.all([i.e(145),i.e(708)]).then(i.bind(i,3708)).then(t=>t.HorizontalSlides),{loadableGenerated:{webpack:()=>[3708]},ssr:!1});var j=!0;function O(){let[t,e]=(0,m.useState)();(0,m.useRef)(null);let[i,n]=(0,o.EL)(),{height:r}=(0,k.Z)();(0,a.o)(t=>{let{introOut:e}=t;return e});let l=(0,a.o)(t=>{let{lenis:e}=t;return e});(0,L.useControls)("lenis",()=>({stop:(0,L.button)(()=>{l.stop()}),start:(0,L.button)(()=>{l.start()})}),[l]),(0,L.useControls)("scrollTo",()=>({immediate:(0,L.button)(()=>{l.scrollTo(3e4,{immediate:!0})}),smoothDuration:(0,L.button)(()=>{l.scrollTo(3e4,{lock:!0,duration:10})}),smooth:(0,L.button)(()=>{l.scrollTo(3e4)}),forceScrollTo:(0,L.button)(()=>{l.scrollTo(3e4,{force:!0})})}),[l]),(0,m.useEffect)(()=>{if(l)return l.on("className change",t),()=>{l.off("className change",t)};function t(t){console.log(t.className)}},[l]);let[c,u]=(0,o.EL)(),[d,p]=(0,o.EL)();return(0,s.jsxs)(N,{seo:{title:"OLO Production",description:""},className:M().home,children:[(0,s.jsx)("section",{className:M().brand}),(0,s.jsx)("section",{className:M().rethink,children:(0,s.jsx)("div",{className:M().cards,ref:d,children:(0,s.jsxs)(W,{children:[(0,s.jsx)(h,{className:M().card,number:"01",text:"Loss of performance budget due to using CSS transforms"}),(0,s.jsx)(h,{className:M().card,number:"02",text:"Inaccessibility from no page search support and native scrollbar"}),(0,s.jsx)(h,{className:M().card,number:"03",text:"Non-negligible import costs (12.1kb - 24.34kb gzipped)"}),(0,s.jsx)(h,{className:M().card,number:"04",text:"Limited animation systems for complex, scroll-based animations"}),(0,s.jsx)(h,{className:M().card,number:"05",text:"Erasing native APIs like Intersection-Observer, CSS Sticky, etc."})]})})})]})}},8615:function(t){t.exports={wrapper:"card_wrapper__80Ntc",inverted:"card_inverted__qE_BX",number:"card_number____g_e",text:"card_text__hXVyg"}},8342:function(t){t.exports={layout:"layout_layout__yd6mS",main:"layout_main__k8zJI"}},7025:function(t){t.exports={home:"home_home__3Her2",canvas:"home_canvas__mWQfy","hide-text":"home_hide-text__jGIyi","show-text":"home_show-text__z9ExL",hero:"home_hero__TJz4n",title:"home_title__Ddv9x",icon:"home_icon__9Rs9V",show:"home_show__DvFwz",sub:"home_sub__hHQk9",subtitle:"home_subtitle__XS_o_",tm:"home_tm__GvqZn",bottom:"home_bottom__QGy5P","scroll-hint":"home_scroll-hint__kGdBt",text:"home_text__Jgdht",scale:"home_scale__vGr4e",hide:"home_hide__p8w4f",description:"home_description__2LOMV",cta:"home_cta__5_2Q_",in:"home_in__L4rK9",why:"home_why__WN_ax",sticky:"home_sticky__s8_O2",features:"home_features__8F37d",feature:"home_feature__sub9k",rethink:"home_rethink__a3Ua4",pre:"home_pre__JyWxG",highlight:"home_highlight___Cmfv",comparison:"home_comparison__ZIj8c",cards:"home_cards__AiTYB",card:"home_card__BOiml",solution:"home_solution__zwG4j",inner:"home_inner__7UbYH",zoom:"home_zoom__grwXa",first:"home_first__AsskJ",second:"home_second__xDR5W",enter:"home_enter__AOz9m",featuring:"home_featuring__9tgu5",intro:"home_intro__R9l5q","in-use":"home_in-use__fdhU2",list:"home_list__k7zA3",temp:"home_temp__VysBX"}},1163:function(t,e,i){t.exports=i(9090)},512:function(t,e,i){"use strict";e.Z=function(){for(var t,e,i=0,s="",o=arguments.length;i<o;i++)(t=arguments[i])&&(e=function t(e){var i,s,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var n=e.length;for(i=0;i<n;i++)e[i]&&(s=t(e[i]))&&(o&&(o+=" "),o+=s)}else for(s in e)e[s]&&(o&&(o+=" "),o+=s)}return o}(t))&&(s&&(s+=" "),s+=e);return s}}}]);