(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{2612:function(e,t,r){"use strict";r.r(t),r.d(t,{Cursor:function(){return i}});var n=r(5893),s=r(512),o=r(6038),u=r(7294),c=r(8939),a=r.n(c);let i=()=>{let e=(0,u.useRef)(),[t,r]=(0,u.useState)(!1),[c,i]=(0,u.useState)(!1),[l,m]=(0,u.useState)(!1),d=(0,u.useCallback)(t=>{let{clientX:r,clientY:n}=t;o.ZP.to(e.current,{x:r,y:n,duration:l?.6:0,ease:"expo.out"}),m(!0)},[l]);return(0,u.useEffect)(()=>(window.addEventListener("mousemove",d,!1),()=>{window.removeEventListener("mousemove",d,!1)}),[l]),(0,u.useEffect)(()=>(document.documentElement.classList.add("has-custom-cursor"),()=>{document.documentElement.classList.remove("has-custom-cursor")}),[]),(0,u.useEffect)(()=>{let e=[],t=()=>{i(!0)},r=()=>{i(!1)};return(e=[...document.querySelectorAll("button,a,input,label,[data-cursor='pointer']")]).forEach(e=>{e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",r,!1)}),()=>{e.forEach(e=>{e.removeEventListener("mouseenter",t,!1),e.removeEventListener("mouseleave",r,!1)})}},[]),(0,u.useEffect)(()=>{let e=[],t=()=>{r(!0)},n=()=>{r(!1)};return(e=[...document.querySelectorAll("button,a,input,label,[data-cursor='pointer']")]).forEach(e=>{e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",n,!1)}),()=>{e.forEach(e=>{e.removeEventListener("mouseenter",t,!1),e.removeEventListener("mouseleave",n,!1)})}},[]),(0,n.jsx)("div",{style:{opacity:l?1:0},className:a().container,children:(0,n.jsx)("div",{ref:e,children:(0,n.jsx)("div",{className:(0,s.Z)(a().cursor,t&&a().grab,c&&a().pointer)})})})}},8939:function(e){e.exports={container:"cursor_container__fjuY_",cursor:"cursor_cursor__VAfFJ",pointer:"cursor_pointer__Rz3O4"}}}]);