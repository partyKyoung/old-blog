"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[86],{3081:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(6540),l=n(8453);function r(e){const t=Object.assign({p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote"},(0,l.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"저번에 ",a.createElement(t.a,{href:"/2020-07-19-etc-aws-iam/"},"IAM이 뭔지 알아보면서")," IAM 사용자 추가 작업까지 한 후 IAM 보안 상태가 있다는걸 확인했다. 필수로 설정하지 않아도 되는 항목이라 이것까지 알아야될 필요가 있을까 싶었는데 좀 더 AWS를 안전하고 제대로 사용하려면 알고 있는게 나을거 같아서 항목 하나 하나씩 제대로 알아보기로 했다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-16.png",alt:"IAM 보안 상태"}),"\n",a.createElement(t.p,null,"IAM 대시보드 창에 접속하면 IAM 보안 상태를 확인할 수 있다. 좀 더 안전한 AWS 사용을 위해 각각 보안 항목들을 설정해보자."),"\n",a.createElement(t.h2,null,"루트 액세스 키 삭제"),"\n",a.createElement(t.p,null,"AWS CLI, PowerShell용 도구, AWS SDK 또는 직접 AWS API 호출을 할 때 액세스 키를 사용한다. Root 사용자의 액세스 키는 모든 리소스에 무제한적으로 접근할 수 있기 때문에 사용하지 않는것이 안전하다."),"\n",a.createElement(t.p,null,"루트 액세스 키는 AWS 계정을 생성할 때 자동으로 생성되지 않기 때문에 이 항목에서 해줘야 할 작업은 없다. Root 액세스 키를 생성하는 것은 가능하나 이 액세스 키를 탈취 당하면 AWS의 모든 권한을 탈취당하는 것이나 마찬가지므로 왠만하면 생성 하지말자."),"\n",a.createElement(t.h2,null,"루트 계정에서 MFA 활성화"),"\n",a.createElement(t.p,null,"루트 계정에서 MFA(Multi-factor authentication, 다중 요소 인증)활성화는 Root 사용자 로그인에 OTP(One-Time Password, 일회용 비밀번호) 인증을 더하는 것 이다. Root 사용자 로그인 시도 시 일회용 비밀번호를 입력해야 로그인이 가능하다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-1.png",alt:"보안 상태 항목"}),"\n",a.createElement(t.p,null,"MFA를 활성화 하려면 보안 상태 항목에서 MFA 활성화 항목을 선택한 후 MFA 관리 버튼을 클릭하여 보안 자격 증명 화면으로 이동한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-2.png",alt:"멀티 팩터 인증"}),"\n",a.createElement(t.p,null,"멀티 팩터 인증(MFA) 항목을 선택하여 MFA 활성화 버튼을 클릭한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-3.png",alt:"MFA 디바이스 관리"}),"\n",a.createElement(t.p,null,"MFA 디바이스 관리 항목에서 원하는 MFA 디바이스 유형을 선택한다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"가상 MFA 디바이스 유형은 가상 디바이스로 OTP를 발급받아 인증하는 방식이다. 가상 디바이스를 스마트폰으로 사용하는 경우 AWS에서 공식 지원하는 OTP 생성어플을 사용하면 된다. 대표적인 예로 Google Authenticator가 있다."),"\n",a.createElement(t.li,null,"U2F(Universal 2nd Factor)는 FIDO Alliance에서 호스팅하는 공개 인증 표준이다. ",a.createElement(t.a,{href:"https://www.amazon.com/stores/page/8E6D7A52-6F69-4A70-A07B-4168A9FD33B0?ingress=0&visitId=4e887182-a088-465f-a4b3-b9f1b06da6a1&channel=SLP_FW_21D9BC02-6DFF-4BD7-A77F-4AE207A2AEFD&liveVideoDataUrl=https://amazonlive-portal.amazon.com/v2"},"U2F 보안 키"),"는 USB 형식으로 되어 있는데 이걸 컴퓨터 USB 포트에 연결하여 이중 인증을 할 수 있다."),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.amazon.com/SafeNet-IDProve-Time-based-6-Digit-Services/dp/B002CRN5X8?ie=UTF8&keywords=gemalto%20aws&qid=1462806259&ref_=sr_1_1&sr=8-1"},"하드웨어 MFA 디바이스"),"는 은행애서 사용하는 OTP 발생기 같은 하드웨어를 사용하여 인증을 하는 것이다. 역시 AWS에서 공식지원하는 하드웨어를 사용해야 한다. 대표적인 예로 Gemalto에서 만든 OTP 생성기가 있다."),"\n"),"\n",a.createElement(t.p,null,"위의 세 유형 중 원하는 유형을 선택하고 계속 버튼을 누르면 된다. U2F 보안 키, 하드웨어 MFA 디바이스 유형은 추가 장비를 구매해야 하기 때문에 스마트폰만 있으면 쉽게 인증할 수 있는 가상 MFA 디바이스 유형이 제일 무난하다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-4.png",alt:"가상 MFA 디바이스 설정"}),"\n",a.createElement(t.p,null,"QR 코드 보기를 눌러 QR 코드를 화면에 띄웠다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-5.png",alt:"Google Authenticator"}),"\n",a.createElement(t.p,null,"몇번 사용해본 적이 있어서 익숙한 Google Authenticator 어플로 OTP 인증을 받기로 했다. Google Authenticator 뿐만 아니라 ",a.createElement(t.a,{href:"https://aws.amazon.com/ko/iam/features/mfa/?audit=2019q1"},"다른 앱들도 AWS에서 공식 지원"),"한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-6.png",alt:"Google Authenticator 항목 추가"}),"\n",a.createElement(t.p,null,"+ 버튼을 누른후 출력된 다이얼로그에서 바코드 스캔을 선택하여 QR 코드를 찍어주면 AWS OTP가 OTP 목록에 추가된다.\n생성된 6자리 숫자를 MFA 코드 1 항목에 입력한 후 30초가 지난 후 바로 생성된 6자리 숫자를 MFA 코드 2 항목에 넣어준다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-7.png",alt:"가상 MFA 할당 완료"}),"\n",a.createElement(t.p,null,"MFA 코드 1, MFA 코드 2 항목을 다 넣고 MFA 활성화 버튼을 클릭하면 MFA 활성화가 완료된다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-8.png",alt:"Root 사용자로 로그인 시도 시 뜨는 멀티 펙터 인증"}),"\n",a.createElement(t.p,null,"이제 Root 사용자로 로그인을 시도하면 MFA 코드 입력창이 추가로 뜬다. 이 코드 역시 Google Authenticator에서 생성된 6자리 숫자를 입력하면 된다."),"\n",a.createElement(t.h2,null,"개별 IAM 사용자 생성"),"\n",a.createElement(t.p,null,"WS에서는 Root 사용자는 무제한적인 액세스 권한이 있으니 ",a.createElement(t.a,{href:"https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws_tasks-that-require-root.html"},"Root 사용자로만 가능한 작업"),"을 할 때를 제외하고는 Root 사용자 보다는 IAM 사용자를 사용하기를 권장하고 있다."),"\n",a.createElement(t.p,null,"이 항목은 저번 시간에 다뤄봤으므로 패스하겠다. 자세한 설명이 필요하면 ",a.createElement(t.a,{href:"/2020-07-19-etc-aws-iam/"},"AWS IAM 및 IAM 사용자 추가하기")," 를 참고하기를 바란다."),"\n",a.createElement(t.h2,null,"그룹을 사용하여 권한 할당"),"\n",a.createElement(t.p,null,"IAM 그룹은 IAM 사용자들의 집합이다. 그룹에 정책을 연결할 수 있기 때문에 그룹을 활용하면 다수의 사용자들에 대한 권한을 지정함으로써 해당 사용자들에 대한 권한을 더 쉽게 관리할 수 있다. 여기서 정책이란 자격 증명(사용자, 사용자 그룹 또는 역할) 또는 리소스와 연결될 때 해당 권한을 정의하는 개체이다. 권한을 미리 정책으로 정의해두고 이 정책들을 부여하여 권한을 준다고 생각하면 될 것 같다. 대부분의 정책은 AWS에 JSON 문서로 저장된다."),"\n",a.createElement(t.p,null,"특정 권한을 가진 그룹을 생성한 후 IAM 사용자들을 그룹에 포함시키면 그 그룹에 속하는 모든 사용자들에게 권한이 자동으로 부여된다."),"\n",a.createElement(t.p,null,"그룹은 IAM 사용자를 생성하면서 같이 생성할 수도 있고 IAM 메뉴에서 그룹 생성을 선택하여 그룹을 생성할 수도 있다. IAM 사용자를 생성하면서 그룹 생성하는 것은 해봤으니 이번에는 그룹 메뉴에서 그룹 생성을 해보자."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-9.png",alt:"보안 상태 항목"}),"\n",a.createElement(t.p,null,"보안상태 항목에서 그룹을 사용하여 권한 할당을 선택한 뒤 그룹 관리 버튼을 클릭하여 그룹 메뉴로 이동한다. IAM 대시보드 창에서 그룹을 선택하여 그룹 메뉴로 아동할 수도 있다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-10.png",alt:"그룹 목록"}),"\n",a.createElement(t.p,null,"새로운 그룹 생성 버튼을 클릭하여 그룹 생성화면으로 이동한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-11.png",alt:"그룹 이름 설정"}),"\n",a.createElement(t.p,null,"그룹 이름을 입력한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-12.png",alt:"그룹 정책 연결"}),"\n",a.createElement(t.p,null,"그룹 정책을 선택한다. 예시를 들려고 AdministratorAccess 정책을 선택했는데 요 정책은 AWS의 모든 서비스 및 리소스에 대한 엑세스 및 권한을 허용하기 때문에 왠만하면 요 정책보다는 최소한의 정책을 설정하자."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-13.png",alt:"생성할 그룹 검토"}),"\n",a.createElement(t.p,null,"검토화면에서 그룹 이름이랑 정책을 한번 더 확인하고 그룹 생성 버튼을 누르면 새로운 그룹이 생성된다."),"\n",a.createElement(t.h2,null,"IAM 비밀번호 정책 적용"),"\n",a.createElement(t.p,null,"IAM 비밀번호 정책은 IAM 사용자들이 비밀번호를 설정할 때 비밀번호 규칙을 정하는 것이다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-14.png",alt:"보안 상태 항목"}),"\n",a.createElement(t.p,null,"보안 상태 항목에서 IAM 비밀번호 정책 적용을 선택한 후 비밀번호 정책 관리 버튼을 클릭하여 비밀번호 정책 화면으로 이동한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-15.png",alt:"비밀번호 정책"}),"\n",a.createElement(t.p,null,"암호 정책 설정 버튼을 클릭하여 암호 정책 설정 화면으로 이동한다."),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-16.png",alt:"암호 정책 설정"}),"\n",a.createElement(t.p,null,"암호 정책 요구사항 항목에서 원하는 항목들을 선택한다. 추후에 IAM 사용자들이 암호를 설정하거나 변경할 때 여기에서 선택한 항목들이 규칙이 된다."),"\n",a.createElement(t.h2,null,"마무리"),"\n",a.createElement(t.img,{src:"/images/posts/aws-iam-security-17.png",alt:"AWS IAM 보안 설정 완료"}),"\n",a.createElement(t.p,null,"이렇게 위의 항목들을 다 설정하고 난 후 다시 보안 상태를 보면 모든 항목에 체크가 되어 있는 것을 확인할 수 있다. 프로덕션 배포 목적이 아니라 테스트나 공부 목적으로 AWS를 사용한다고 해도 계정이 해킹당해 요금 폭탄을 맞았다는 사례가 많으니 AWS가 권장하는 대로 보안을 튼튼히 하여 안전하게 AWS를 사용하자."),"\n",a.createElement(t.h2,null,"Reference"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html"},"AWS 액세스 키 관리를 위한 모범 사례")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_mfa.html"},"AWS에서 멀티 팩터 인증(MFA) 사용하기")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/access_policies_create.html"},"IAM 정책 만들기")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.44bits.io/ko/post/first_actions_for_setting_secure_account#%EB%A3%A8%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EC%95%A1%EC%84%B8%EC%8A%A4-%ED%82%A4-%EC%82%AD%EC%A0%9C"},"아마존 웹 서비스 계정 생성 후 해야하는 IAM 보안 조치")),"\n"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.R)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(2877),o=n(7736),i=n(407),m=n(7735),u=n(685),d=n(2248),p=n(8066),g=n(4848);function h(e){var t,n;let{data:a,children:r}=e;const{date:s,tags:h,title:A}=null!==(t=null==a||null===(n=a.mdx)||void 0===n?void 0:n.frontmatter)&&void 0!==t?t:{};return(0,g.jsx)(o.i,{children:(0,g.jsxs)(c.m,{className:p.q,children:[(0,g.jsx)(d.l,{className:p.V,title:A}),(0,g.jsx)(m.l,{date:s}),(0,g.jsx)(u.I,{tags:h}),(0,g.jsx)(i.E,{children:(0,g.jsx)(l.x,{children:r})})]})})}function A(e){return a.createElement(h,e,a.createElement(s,e))}},407:function(e,t,n){n.d(t,{E:function(){return s}});var a=n(4164),l="post-layout-content-module--post-layout-content-root--01754",r=n(4848);function s(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:(0,a.$)(l,n),...s,children:t})}},7735:function(e,t,n){n.d(t,{l:function(){return s}});var a=n(4164),l="post-layout-date-module--post-layout-date-root--f34d1",r=n(4848);function s(e){let{className:t,date:n,...s}=e;return(0,r.jsx)("span",{className:(0,a.$)(l,t),...s,children:n})}},685:function(e,t,n){n.d(t,{I:function(){return c}});var a=n(9143),l=n(4194),r="post-layout-module--post-layout-tags--837df",s=n(4848);function c(e){let{tags:t}=e;return(0,s.jsx)(a.Y,{className:r,children:t.map((e=>(0,s.jsx)(l.Link,{to:"/tags/"+e,children:(0,s.jsx)(a.Y.Tag,{tag:e})},e)))})}},2248:function(e,t,n){n.d(t,{l:function(){return s}});var a=n(4164),l="post-layout-title-module--post-layout-title-root--88374",r=n(4848);function s(e){let{className:t,title:n,...s}=e;return(0,r.jsx)("h1",{className:(0,a.$)(l,t),...s,children:n})}},9143:function(e,t,n){n.d(t,{Y:function(){return r}});var a=n(4164),l=n(4848);const r=Object.assign((function(e){let{children:t,className:n,...r}=e;return(0,l.jsx)("div",{className:(0,a.$)("tags-module--tags-root--e3461",n),...r,children:t})}),{Tag:function(e){let{className:t,tag:n,...r}=e;return(0,l.jsx)("span",{className:(0,a.$)("tag-module--tag-root--aae01",t),...r,children:n})}})},2877:function(e,t,n){n.d(t,{m:function(){return s}});var a=n(4164),l="container-module--container-root--3b208",r=n(4848);function s(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:(0,a.$)(l,n),...s,children:t})}},2629:function(e,t,n){n.d(t,{$:function(){return s}});var a=n(4164),l="basic-layout-module--basic-layout-root--a11e0",r=n(4848);function s(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:(0,a.$)(l,n),...s,children:t})}},7736:function(e,t,n){n.d(t,{i:function(){return f}});var a=n(4194),l=n(4164),r="header-module--about--32ac9",s="header-module--header-logo--5bbdc",c="header-module--header-navigation--24bcb",o="header-module--header-navigation-item--ba248",i="header-module--header-navigation-item-link--d6da9",m="header-module--header-navigation-list--3815c",u="header-module--header-root--01ceb",d="header-module--tags--eb332",p=n(4848);function g(){return(0,p.jsxs)("header",{className:u,children:[(0,p.jsx)(a.Link,{to:"/",children:(0,p.jsx)("img",{src:"/images/logo.png",srcSet:"/images/logo-small.png 200w, /images/logo.png 300w",sizes:"(max-width: 360px) 200px, 300px",alt:"dev.kyoungah.me",className:s})}),(0,p.jsx)("nav",{className:c,children:(0,p.jsxs)("ul",{className:m,children:[(0,p.jsx)("li",{className:o,children:(0,p.jsx)(a.Link,{to:"/tags",children:(0,p.jsx)("span",{"aria-label":"tags",className:(0,l.$)(i,d)})})}),(0,p.jsx)("li",{className:o,children:(0,p.jsx)("a",{href:"/about",rel:"noopener",target:"_blank",children:(0,p.jsx)("span",{"aria-label":"about",className:(0,l.$)(i,r)})})})]})})]})}var h="footer-module--footer-root--795ff";function A(){return(0,p.jsxs)("footer",{className:h,children:[(0,p.jsx)("span",{children:"Powered by Gatsby, Hosted by GitHub Pages."}),(0,p.jsxs)("span",{children:["©",(0,p.jsx)("a",{href:"https://github.com/partykyoung",rel:"noreferrer",target:"_blank",children:"KyoungAh"}),", All rights reserved."]})]})}var E=n(2629);function f(e){let{children:t}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{}),(0,p.jsx)(E.$,{children:t}),(0,p.jsx)(A,{})]})}},8066:function(e,t,n){n.d(t,{V:function(){return l},q:function(){return a}});var a="post-layout-module--post-layout-container--f40b5",l="post-layout-module--post-layout-title--1c575"},8453:function(e,t,n){n.d(t,{R:function(){return s},x:function(){return c}});var a=n(6540);const l={},r=a.createContext(l);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},4164:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n)}else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function l(){for(var e,t,n=0,l="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{$:function(){return l}})}}]);
//# sourceMappingURL=component---src-app-templates-post-template-post-layout-ui-tsx-content-file-path-posts-2020-07-25-etc-aws-iam-security-md-8b71f14351f616025a0b.js.map