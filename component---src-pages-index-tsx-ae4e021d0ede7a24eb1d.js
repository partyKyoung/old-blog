"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[691],{7272:function(t,o,e){e.r(o),e.d(o,{Head:function(){return x},default:function(){return k}});var n=e(9394),s=e(2355),a=e(6298);const i=(0,a.F4)({from:{opacity:0},to:{opacity:1}}),r={root:(0,a.iv)({width:"100%",animation:"0.6s "+i},"","","","")};var l=function(t){let{children:o}=t;return(0,a.tZ)("ul",{css:r.root},o)};const c={root:{name:"wr8btd",styles:"position:absolute;width:100%;margin-bottom:16px;text-align:center;font-size:18px;top:50%;left:50%;transform:translate(-50%, -50%)"},commingSoon:{name:"1jjx41q",styles:"font-size:24px;font-weight:600;color:hsla(var(--palette-blue-100), 100%)"},emptyPostText:{name:"135yvj2",styles:"font-size:18px;line-height:1.5;color:hsla(var(--palette-gray-100), 100%)"}};var p=function(){return(0,a.tZ)("div",{css:c.root},(0,a.tZ)("h3",{css:c.commingSoon},"COMING SOON"),(0,a.tZ)("br",null),(0,a.tZ)("span",{css:c.emptyPostText},"아직 등록된 포스트가 없어요",(0,a.tZ)("br",null),"조금만 기다려주세요"))};const u=(0,a.F4)({to:{opacity:"0.3",transform:"translate3d(0, -16px, 0)"}}),m={root:(0,a.iv)({display:"flex",alignItems:"center",justifyContent:"center",gap:6,span:{width:8,height:8,backgroundColor:"var(--primary-color)",borderRadius:"50%",animation:"0.6s "+u+" infinite alternate","&:nth-of-type(2)":{animationDelay:"0.3s"},"&:nth-of-type(3)":{animationDelay:"0.6s"}}},"","","","")};var h=()=>(0,a.tZ)("div",{css:m.root},(0,a.tZ)("span",null),(0,a.tZ)("span",null),(0,a.tZ)("span",null)),g=e(1883);const y={root:(0,a.iv)({width:"100%",listStyle:"none","&:not(:last-of-type)":{marginBottom:60}},"","","",""),postLink:{name:"4ky2pj",styles:"color:#000000"},postTitle:(0,a.iv)({marginBottom:8,fontSize:20,fontWeight:600,"a:hover &":{color:"hsla(var(--base-blue), 29%)",transition:"color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s"}},"","","",""),postExcerpt:(0,a.iv)({lineHeight:1.5,fontSize:15,fontWeight:400,"a:hover &":{color:"hsla(var(--base-blue), 39%)",transition:"color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s"}},"","","","")};var f=function(t){let{link:o,title:e,excerpt:n}=t;return(0,a.tZ)("li",{css:y.root},(0,a.tZ)(g.Link,{to:o,css:y.postLink},(0,a.tZ)("h3",{css:y.postTitle},e),(0,a.tZ)("p",{css:y.postExcerpt},n)))};var v=Object.assign(l,{EmptyPost:p,FetchPostLoader:h,Post:f}),d=e(273);async function Z(t){let{pageParam:o}=t;const e=await fetch("./jsons/page"+o+".json");return await e.json()}const b={root:{name:"bjn8wh",styles:"position:relative"}},x=()=>(0,a.tZ)("title",null,"Home Page");var k=function(){const{data:t,isFetched:o}=(0,n.N)({queryKey:["posts"],queryFn:Z,initialPageParam:1,getNextPageParam:t=>t.nextCursor});return(0,a.tZ)(d.Z,null,(0,a.tZ)(s.Z,{css:b.root},!o&&(0,a.tZ)(v.FetchPostLoader,null),!(null!=t&&t.pages)&&(0,a.tZ)(v.EmptyPost,null),(null==t?void 0:t.pages)&&(0,a.tZ)(v,null,t.pages.map(((t,o)=>t.posts.map((t=>(0,a.tZ)(v.Post,{key:o+"-"+t.id,excerpt:t.excerpt,link:"/posts"+t.slug,title:t.title}))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ae4e021d0ede7a24eb1d.js.map