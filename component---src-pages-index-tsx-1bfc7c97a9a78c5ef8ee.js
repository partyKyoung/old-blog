"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[691],{7200:function(t,e,n){n.r(e),n.d(e,{Head:function(){return c}});var a=n(9394),s=n(2355),o=n(2452),l=n(273),u=n(6298);async function r(t){let{pageParam:e}=t;const n=await fetch("./jsons/page"+e+".json");return await n.json()}const i={root:{name:"bjn8wh",styles:"position:relative"}},c=()=>(0,u.tZ)("title",null,"Home Page");e.default=function(){const{data:t,isFetched:e}=(0,a.N)({queryKey:["posts"],queryFn:r,initialPageParam:1,getNextPageParam:t=>t.nextCursor});return(0,u.tZ)(l.Z,null,(0,u.tZ)(s.Z,{css:i.root},!e&&(0,u.tZ)(o.Z.FetchPostLoader,null),!(null!=t&&t.pages)&&(0,u.tZ)(o.Z.EmptyPost,null),(null==t?void 0:t.pages)&&(0,u.tZ)(o.Z,null,t.pages.map(((t,e)=>t.posts.map((t=>(0,u.tZ)(o.Z.Post,{key:e+"-"+t.id,excerpt:t.excerpt,link:"/posts"+t.slug,title:t.title}))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1bfc7c97a9a78c5ef8ee.js.map