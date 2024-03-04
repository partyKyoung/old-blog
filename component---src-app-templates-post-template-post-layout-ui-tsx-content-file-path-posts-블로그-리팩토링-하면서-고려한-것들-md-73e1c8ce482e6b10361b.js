"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[175],{9188:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var l=n(6540);const a={},r=l.createContext(a);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:t},e.children)}function c(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",h4:"h4",a:"a",ul:"ul",li:"li"},s(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"블로그 리팩토링을 시작한 후, 마침내 어느 정도 리팩토링을 마무리 했다.\n결과물은 간단해 보이지만 리팩토링을 진행하면서 나름 이리저리 고민을 많이 했던지라 어떤 부분들을 고민했고 어떻게 새로운 결과물에 반영했는지에 대해 정리해보고자 한다."),"\n",l.createElement(t.h2,null,"개발 환경"),"\n",l.createElement(t.h3,null,"JAM Stack"),"\n",l.createElement(t.p,null,"JAM Stack 및 정적 호스팅을 알고 난 이후로 개발 블로그는 쭈욱 JAM Stack을 고집하고 있다."),"\n",l.createElement(t.p,null,"JAM에서 JAM이란 Javascript, Api, Markup의 약자이다. HTML 파일로 이루어진 Markup을 사용하여 웹 페이지의 기본 구조를 정의하고 CSS를 통해 스타일링한다. 그런 다음 JavaScript를 사용하여 클라이언트 측에서 동적 기능을 처리하고, 필요한 데이터를 외부 API에서 가져와 렌더링한다."),"\n",l.createElement(t.p,null,"JAM Stack을 지원하는 프레임워크를 사용하면 내 입맛대로 커스터마이징은 물론 프론트 지식만으로도 간단하게 개발 블로그를 구축할 수 있다. Github Page에 정적 호스팅으로 배포해버리면 서버 비용 한 푼 들지않고도 블로그를 운영할 수 있다."),"\n",l.createElement(t.p,null,"직접 데이터베이스 및 인프라를 구축하여 기술 블로그를 운영해보는게 더 낫지 않겠냐는 의견도 들었었는데 언제 또 방치될지 모르는 개발 블로그에 많은 비용을 투자하는게 옳은 선택은 아닌 것 같다. 기술 블로그를 꾸준히 운영하고 해당 블로그가 커져서 좀 더 복잡한 기능들이 추가된다면 모르겠는데 지금 당장은 JAM Stack 및 정적 호스팅 만으로도 충분하다고 생각한다."),"\n",l.createElement(t.h4,null,"Gatsby"),"\n",l.createElement(t.p,null,"JAM Stack 프레임워크로는 Gatsby를 선택했다. 2버전대부터 잘 쓰고 있었는데 어느덧 5버전대까지 나왔길래 이번에 리팩토링을 진행하면서 Gatsby 5버전대로 마이그레이션도 같이 진행했다."),"\n",l.createElement(t.p,null,"사실 리팩토링을 한창 진행하던 도중에 왜 낡은 기술(?)인 Gatsby를 선택했냐는 얘기도 들었고 ",l.createElement(t.a,{href:"https://astro.build/"},"Astro"),"도 흥미롭게 다가와서 지금이라도 Astro로 마이그레이션 할까? 하고 고민을 하긴 했는데 이미 얼추 만들어진 블로그에 FSD 아키텍처를 도입해보고자 한번 다시 뒤엎은 상태였던지라 Astro로 또 마이그레이션을 진행하다간 영원히 블로그 리팩토링을 완료하지 못할 것 같았다. 게다가 Gatsby 역시 여전히 꾸준한 업데이트가 이루어지고 있고, 다양한 플러그인과 레퍼런스 등을 통해 풍부한 개발 생태계를 갖추고 있어 2024년 기준으로도 충분히 매력적인 선택지라 생각한다."),"\n",l.createElement(t.p,null,"추후에 Gatsby가 deprecated되거나 더 이상 업데이트가 이루어지지 않을 때 Astro나 다른 라이브러리로 갈아타도 좋을것 같다."),"\n",l.createElement(t.h3,null,"CSS"),"\n",l.createElement(t.h4,null,"PostCSS"),"\n",l.createElement(t.p,null,"컴포넌트 스타일링은 css-in-js에서 벗어나 css 후처리기인 PostCSS를 선택했다."),"\n",l.createElement(t.p,null,"Styled Components, Emotion 등 css-in-js 라이브러리에 너무 익숙해져 있어서 오랜만에 순수하게 css 작업을 해보고 싶기도 했고 리액트 서버 컴포넌트와 Next.js App Router가 등장하면서 css-in-js의 매력이 많이 떨어질 것이라고 판단되었기 때문이다."),"\n",l.createElement(t.p,null,"그리고 css-in-js는 JavaScript에서 스타일을 생성하고 삽입하는 방식으로 동작하기 때문에 CSS 파일을 생성하는 과정이 추가되어 빌드 시간이 증가할 수 있다. SSG 특성상 포스트 목록이 늘어가면 분명 빌드 시간이 늘어날텐데 css-in-js까지 빌드 시간에 영향을 줄 것 같았다."),"\n",l.createElement(t.p,null,"Sass 대신 PostCSS를 선택한 이유는 Sass에 안쓰는 기능들까지 안고 가고 싶진 않았기 때문에 Sass에서 자주 쓰는 기능들만 뽑은 뒤에 PostCss로 얼추 흉내낼 수 있게끔 커스터마이징 했다."),"\n",l.createElement(t.p,null,"사실 개인적으로 테일윈드를 좋아하는 편이 아니라서 PostCSS를 선택한 이유도 있긴한데 블로그 리팩토링이 얼추 완료된 지금 다시 생각해보니 테일윈드를 선택했어도 좋았을것 같다. 테일윈드를 써 본 경험이 없음에도 불구하고 클래스명이 지저분해진다는 이유 하나 때문에 안쓰고 있었는데 이번 기회에 한번 써보면서 테일윈드의 장단점을 직접 판단하는게 더 좋았을 것 같다.\n다음에 또 다른 사이드 프로젝트를 진행할 일이 있을 땐 꼭 테일윈드를 써봐야겠다."),"\n",l.createElement(t.h4,null,"변수합성"),"\n",l.createElement(t.p,null,"예전에 primary 컬러를 정의하고 이 primary 컬러를 rgba로 바꿔 투명도를 조정하는 방법을 찾다가 ",l.createElement(t.a,{href:"https://ui.toast.com/posts/ko_20210402"},"CSS 변수 합성의 강력함"),"이라는 포스팅을 찾고 정말 흥미롭게 읽었던 경험이 있어서 이번 color token을 정의할 때 css 변수 합성을 도입해보았다."),"\n",l.createElement(t.h2,null,"UI / UX"),"\n",l.createElement(t.p,null,"가독성이 중요하다 생각해서 이리저리 복잡한 UI는 최대한 다 뺐고 심플하게 만들었다."),"\n",l.createElement(t.p,null,"개인적으로 모바일이나 데스크톱으로 글을 읽을 땐 이상하게 글이 잘 안읽히는 편이다. 그나마 폰트 사이즈가 크면 좀 잘 읽혔던 경험이 있어서 일부러 포스트 상세 페이지의 폰트 크기를 크게 잡았다."),"\n",l.createElement(t.h2,null,"남은 작업들"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"태그 페이지"),"\n",l.createElement(t.li,null,"댓글 기능"),"\n",l.createElement(t.li,null,"dark mode 적용"),"\n",l.createElement(t.li,null,"CI / CD 설정"),"\n"),"\n",l.createElement(t.h2,null,"마무리"),"\n",l.createElement(t.p,null,"오랜만에 쓰는 글인데 역시 개발보다 글 쓰는게 더 어렵다.\n다시 시작한 블로그 활동이니 만큼 포스팅 및 블로그 업데이트 둘 다 꾸준히 해야겠다."),"\n",l.createElement(t.h2,null,"Reference"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://emewjin.github.io/feature-sliced-design/"},"(번역) 기능 분할 설계 - 최고의 프런트엔드 아키텍처")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/sldk-yuri/realworld-react-fsd/tree/master/src/app"},"realworld-react-fsd")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://ui.toast.com/posts/ko_20210402"},"CSS 변수 합성의 강력함")),"\n"))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},s(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},i=n(2877),m=n(7736),d=n(4164),h="post-layout-content-module--post-layout-content-root--01754",p=n(4848);function f(e){let{children:t,className:n,...l}=e;return console.log(t),(0,p.jsxs)("div",{className:(0,d.$)(h,n),...l,children:[t,"123465"]})}var g="post-layout-date-module--post-layout-date-root--f34d1";function E(e){let{className:t,date:n,...l}=e;return(0,p.jsx)("span",{className:(0,d.$)(g,t),...l,children:n})}var j=n(9143),x=n(4194),b="post-layout-module--post-layout-tags--837df";function y(e){let{tags:t}=e;return(0,p.jsx)(j.Y,{className:b,children:t.map((e=>(0,p.jsx)(x.Link,{to:"/tags/"+e,children:(0,p.jsx)(j.Y.Tag,{tag:e})},e)))})}var v="post-layout-title-module--post-layout-title-root--88374";function S(e){let{className:t,title:n,...l}=e;return(0,p.jsx)("h1",{className:(0,d.$)(v,t),...l,children:n})}var k="post-layout-module--post-layout-container--f40b5",N="post-layout-module--post-layout-title--1c575";function A(e){var t,n;let{data:l,children:a}=e;const{date:r,tags:s,title:c}=null!==(t=null==l||null===(n=l.mdx)||void 0===n?void 0:n.frontmatter)&&void 0!==t?t:{};return(0,p.jsx)(m.i,{children:(0,p.jsxs)(i.m,{className:k,children:[(0,p.jsx)(S,{className:N,title:c}),(0,p.jsx)(E,{date:r}),(0,p.jsx)(y,{tags:s}),(0,p.jsx)(f,{children:(0,p.jsx)(o,{children:a})})]})})}function C(e){return l.createElement(A,e,l.createElement(u,e))}},9143:function(e,t,n){n.d(t,{Y:function(){return r}});var l=n(4164),a=n(4848);const r=Object.assign((function(e){let{children:t,className:n,...r}=e;return(0,a.jsx)("div",{className:(0,l.$)("tags-module--tags-root--e3461",n),...r,children:t})}),{Tag:function(e){let{className:t,tag:n,...r}=e;return(0,a.jsx)("span",{className:(0,l.$)("tag-module--tag-root--aae01",t),...r,children:n})}})},2877:function(e,t,n){n.d(t,{m:function(){return s}});var l=n(4164),a="container-module--container-root--3b208",r=n(4848);function s(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:(0,l.$)(a,n),...s,children:t})}},2629:function(e,t,n){n.d(t,{$:function(){return s}});var l=n(4164),a="basic-layout-module--basic-layout-root--a11e0",r=n(4848);function s(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:(0,l.$)(a,n),...s,children:t})}},7736:function(e,t,n){n.d(t,{i:function(){return j}});var l=n(4194),a=n(4164),r="header-module--about--32ac9",s="header-module--header-logo--5bbdc",o="header-module--header-navigation--24bcb",c="header-module--header-navigation-item--ba248",u="header-module--header-navigation-item-link--d6da9",i="header-module--header-navigation-list--3815c",m="header-module--header-root--01ceb",d="header-module--tags--eb332",h=n(4848);function p(){return(0,h.jsxs)("header",{className:m,children:[(0,h.jsx)(l.Link,{to:"/",children:(0,h.jsx)("img",{src:"/images/logo.png",srcSet:"/images/logo-small.png 200w, /images/logo.png 300w",sizes:"(max-width: 360px) 200px, 300px",alt:"dev.kyoungah.me",className:s})}),(0,h.jsx)("nav",{className:o,children:(0,h.jsxs)("ul",{className:i,children:[(0,h.jsx)("li",{className:c,children:(0,h.jsx)(l.Link,{to:"/tags",children:(0,h.jsx)("span",{"aria-label":"tags",className:(0,a.$)(u,d)})})}),(0,h.jsx)("li",{className:c,children:(0,h.jsx)("a",{href:"/about",rel:"noopener",target:"_blank",children:(0,h.jsx)("span",{"aria-label":"about",className:(0,a.$)(u,r)})})})]})})]})}var f="footer-module--footer-root--795ff";function g(){return(0,h.jsxs)("footer",{className:f,children:[(0,h.jsx)("span",{children:"Powered by Gatsby, Hosted by GitHub Pages."}),(0,h.jsxs)("span",{children:["©",(0,h.jsx)("a",{href:"https://github.com/partykyoung",rel:"noreferrer",target:"_blank",children:"KyoungAh"}),", All rights reserved."]})]})}var E=n(2629);function j(e){let{children:t}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{}),(0,h.jsx)(E.$,{children:t}),(0,h.jsx)(g,{})]})}},4164:function(e,t,n){function l(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=l(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{$:function(){return a}})}}]);
//# sourceMappingURL=component---src-app-templates-post-template-post-layout-ui-tsx-content-file-path-posts-블로그-리팩토링-하면서-고려한-것들-md-73e1c8ce482e6b10361b.js.map