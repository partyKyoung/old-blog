"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[582],{6003:function(t,e,n){n.r(e),n.d(e,{Head:function(){return i}});var a=n(9394),s=n(2355),u=n(2452),l=n(273),o=n(6298);async function r(t){let{pageParam:e}=t;const n=await fetch("../jsons/page"+e+".json");return await n.json()}const i=()=>(0,o.tZ)("title",null,"Home Page");e.default=function(){const{data:t}=(0,a.N)({queryKey:["posts"],queryFn:r,initialPageParam:1,getNextPageParam:t=>t.nextCursor});return(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,null,(null==t?void 0:t.pages)&&(0,o.tZ)(u.Z,null,t.pages.map(((t,e)=>t.posts.map((t=>(0,o.tZ)(u.Z.Post,{key:e+"-"+t.id,excerpt:t.excerpt,link:"/posts"+t.slug,title:t.title}))))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-tsx-db10aeecae284b9193a0.js.map