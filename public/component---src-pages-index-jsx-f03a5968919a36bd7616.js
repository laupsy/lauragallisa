(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),o=(a(34),r.default.p(function(e){var t=e.theme;return{color:e.isCurrentColor?"currentColor":t.body,fontFamily:"'Inter', sans-serif",fontSize:"0.72em",fontWeight:"700",letterSpacing:"0.05em",lineHeight:"1.6",margin:"0",padding:"0",textTransform:"uppercase"}})),l=r.default.button(function(e){var t=e.isActive,a=e.theme;return Object.assign({background:"transparent",border:"0",borderBottom:t?"1px solid "+a.title:"1px solid transparent",color:t?a.title:a.body,marginRight:"1.5em",outline:"0",padding:"0",whiteSpace:"nowrap"},!t&&{":hover, :focus":{borderBottomColor:a.highlight,cursor:"pointer"}})}),c=r.default.div(function(e){return{background:e.theme.background,display:"flex",margin:"-1em -3em",padding:"3em",position:"sticky",top:"0",zIndex:"1"}}),s=function(e){var t=e.onClick,a=e.isActive,n=e.children;return i.a.createElement(l,{onClick:t,isActive:a},i.a.createElement(o,{isCurrentColor:!0},n))},d=function(e){var t=e.className,a=e.children;return i.a.createElement("div",null,i.a.createElement("section",{className:t},a))},m=(a(148),a(149)),u=a.n(m),h=a(150),f=a.n(h),p=(a(151),a(152)),g=a.n(p),w=a(153),b=a.n(w),E=a(154),v=a.n(E),y=a(155),x=a.n(y),T=(a(156),a(157)),k=a.n(T),C=a(158),I=a.n(C),j=a(159),B=a.n(j),S=a(160),A=a.n(S),D=a(161),O=a.n(D),H=a(162),R=a.n(H),W=(a(163),a(164),a(165)),L=a.n(W),z=a(166),N=a.n(z),F=a(167),P=a.n(F),q=(a(168),a(169)),G=a.n(q),M=a(170),J=a.n(M),U=a(171),Y=a.n(U),_=a(172),Q=a.n(_),V=a(173),Z=a.n(V),K=r.default.div(function(e){var t=e.width,a=e.isCentered,n=e.offset;return Object.assign({maxWidth:t/2+"px",width:"100%"},a?{margin:n?n+" auto":"0 auto"}:{margin:n})}),X=r.default.div(function(e){var t=e.width,a=e.height;return{background:"transparent",borderRadius:"0.5em",boxShadow:"0px 4px 10px -2px rgba(0,0,0,0.1)",height:"0px",overflow:"hidden",paddingBottom:t/a!=.75?a/t*100+"%":t/a*100+"%",position:"relative","svg, img, figure":{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:"0",position:"absolute",top:"0",width:"100%"}}}),$=function(e){var t=e.children,a=e.width,n=e.height,r=e.isCentered,o=e.offset;return i.a.createElement(K,{isCentered:r,offset:o,width:a},i.a.createElement(X,{width:a,height:n},t))},ee=r.default.h2(function(e){return{color:e.theme.title,fontFamily:"'Bitter', serif",fontSize:"1.5em",fontWeight:"600",marginBottom:"0.6em"}}),te=r.default.p(function(e){return{color:e.theme.body,fontFamily:"'Inter', sans-serif",fontSize:"0.9em",fontWeight:"400",letterSpacing:"-0.009em",lineHeight:"1.85",margin:"0",padding:"0"}}),ae=Object(r.default)(te)({maxWidth:"35em",width:"100%"}),ne=r.default.div({display:"grid",gridGap:"1.5em",gridTemplateColumns:"1fr"}),ie=r.default.div({display:"grid",gridGap:"3em",gridTemplateColumns:"1fr"}),re=r.default.div(function(e){return{alignItems:"center",background:e.theme.foreground,borderRadius:"0.5em",display:"flex",justifyContent:"center",overflow:"hidden",padding:"1em"}}),oe=r.default.video({height:"auto",width:"100%"}),le=function(e){var t=e.src;return i.a.createElement(re,null,i.a.createElement(oe,{controls:!0,autoPlay:!0,loop:!0},i.a.createElement("source",{src:t,type:"video/mp4"})))},ce=a(63),se=a.n(ce);function de(){var e=se()(["\n  opacity: 0;\n  animation: ",";\n"]);return de=function(){return e},e}function me(){var e=se()(["\n    "," 0.3s ease forwards;\n  "]);return me=function(){return e},e}function ue(){var e=se()(["\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n"]);return ue=function(){return e},e}var he=Object(r.keyframes)(ue()),fe=r.default.div(de(),function(){return Object(r.css)(me(),he)}),pe=r.default.div({cursor:"zoom-in",position:"relative"}),ge=Object(r.default)(fe)(function(e){return{alignItems:"center",background:e.theme.fog,bottom:"0",display:"flex",justifyContent:"center",left:"0",position:"fixed",right:"0",top:"0",zIndex:"2"}}),we=r.default.div({alignItems:"start",cursor:"zoom-out",display:"flex",height:"100%",justifyContent:"center",overflow:"auto",padding:"5em",width:"100%","> *":{maxWidth:"80vw"}}),be=function(e){var t=e.children,a=e.className,r=Object(n.useState)(!1),o=r[0],l=r[1];return i.a.createElement("div",{className:a},i.a.createElement(pe,{onClick:function(){return l(!0)}},t),o&&i.a.createElement(ge,{onClick:function(){return l(!1)}},i.a.createElement(we,null,t)))},Ee=function(){return i.a.createElement(ie,null,i.a.createElement("div",null,i.a.createElement(ee,null,"Dropbox"),i.a.createElement(ne,null,i.a.createElement(ae,null,"At Dropbox I primarily worked on a new desktop experience"," ",i.a.createElement("span",{role:"img","aria-label":"Lock emoji"},"🔒")," ","where I owned the end-to-end user funnel, product positioning, drove key activation & retention metrics, and owned the web & Android apps. I also helped to run the new grad designer program."),i.a.createElement(ae,null,"I also designed onboarding for Dropbox Home to introduce useful new ways to retrieve files."))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"Modal overlaying the Dropbo Home interface. It says 'Welcome to your new Dropbox home!' and it has a button that says 'Show me around'.",src:I.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A magnifying glass-like circle is hovered over a Paper doc in the Dropbox Home interface. There's a blue box explaining that because that Paper doc was recently viewed, you can get back to it quickly with the Recently Viewed section.",src:B.a}))),i.a.createElement(ae,null,"I also explored ways to incorporate our new brand into the product, ranging from iconography sets to an internal particles library in native Swift, which was quickly adopted in various onboarding screens and tooltips."),i.a.createElement(be,null,i.a.createElement(le,{src:k.a})),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A document with usage guidelines for a Particles library created in native swift.",src:R.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A set of artboards with a broad exploration of iconography treatments ranging from inverted color to texture.",src:A.a}))),i.a.createElement(ae,null,"I also launched multiple landing pages for various projects"," ",i.a.createElement("span",{role:"img","aria-label":"Lock emoji"},"🔒"),". One featured stars and constellations, built by dynamically generating objects on an HTML5 canvas and using a shortest path formula create the effect of constellations."),i.a.createElement(be,null,i.a.createElement(le,{src:G.a})))},ve=r.default.h1(function(e){return{color:e.theme.title,fontFamily:"'Bitter', serif",fontSize:"2.125em",fontWeight:"600",margin:"0",padding:"0"}}),ye=r.default.a(function(e){var t=e.theme;return{borderBottom:"1px solid "+t.line,color:t.body,textDecoration:"none",":hover":{borderBottomColor:t.body,color:t.body}}}),xe=function(e){var t=e.href,a=e.children,n=e.newTab;return i.a.createElement(ye,{href:t,target:n&&"_blank",rel:"noopener noreferrer"},a)},Te=function(){return i.a.createElement(ne,null,i.a.createElement(ae,null,"I run Design at"," ",i.a.createElement(xe,{href:"https://www.fleetsmith.com",newTab:!0},"Fleetsmith")," ","where our mission is to democratize IT and Security by making it transparent and automated."),i.a.createElement(ae,null,"I'm a technical designer with extensive experience designing and developing for web. I've also designed and developed for Android and native macOS."," "),i.a.createElement(ae,null,"I’ve shipped things at awesome places -"," ",i.a.createElement(xe,{href:"https://www.dropbox.com",newTab:!0},"Dropbox"),","," ",i.a.createElement(xe,{href:"https://www.twitch.tv",newTab:!0},"Twitch"),","," ",i.a.createElement(xe,{href:"https://www.tendigi.com",newTab:!0},"Tendigi")," ","- and I received my B.S. in Computer Science from NYU."))},ke=a(174),Ce=a.n(ke),Ie=r.default.img({borderRadius:"100%",margin:"6em 0 3em",width:"10em"}),je=function(e){var t=e.className;return i.a.createElement(Ie,{className:t,src:Ce.a,alt:"Laura standing inside of an arboretum, where she is smiling with her head slightly tilted"})},Be=a(175),Se=a.n(Be),Ae=a(176),De=a.n(Ae),Oe=function(){return i.a.createElement(ie,null,i.a.createElement(ee,null,"About Me"),i.a.createElement($,{width:1280,height:1598},i.a.createElement("img",{alt:"Laura smiling while wearing a winter coast",src:De.a})),i.a.createElement(ne,null,i.a.createElement(ae,null,"I care about low-pressure transparency, involving all functions in the design process, and designing experiences that are self-aware. Design doesn't exist in a vacuum, it exists alongside all of the emotions, environments, and scenarios that are going on a person's life."),i.a.createElement(ae,null,"During my time at Dropbox, I wrote this checklist to remind myself of my good and bad habits:")),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A handwritten piece of paper with a list of habits to follow, like communicating frequently and solving the right problem.",src:O.a}))),i.a.createElement(ae,null,"In my spare time I'm"," ",i.a.createElement(xe,{href:"https://www.instagram.com/p/BscjNeQHb10/",newTab:!0},"exploring tropical places"),","," ",i.a.createElement(xe,{href:"https://www.instagram.com/p/BkLLWgrglH6/?taken-by=laupsy",newTab:!0},"decorating my home"),", or"," ",i.a.createElement(xe,{href:"https://www.instagram.com/p/BZuHeZVn0QJ/?taken-by=laupsy",newTab:!0},"eating pancakes"),"."),i.a.createElement($,{width:1280,height:1598},i.a.createElement("img",{alt:"Laura smiling while eating French toast outside in Aruba",src:Se.a})))},He=r.default.div({display:"grid",gridRowGap:"3em",gridTemplateColumns:"1fr"}),Re=function(){return i.a.createElement(ie,null,i.a.createElement("div",null,i.a.createElement(ee,null,"Tendigi"),i.a.createElement(ae,null,"My design career began at"," ",i.a.createElement(xe,{href:"https://www.tendigi.com",newTab:!0},"Tendigi"),", a design and development agency where I lead their identity overhaul, resulting in a redesigned website, case study templates, and social media templates.")),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A landing page for Tendigi feature bold text and a pink neon photographic background of a person using a switch board.",src:Z.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A website footer featuring the quote: 'Clean code, thoughtful design, beautiful products.'",src:Q.a}))))},We=function(){return i.a.createElement(ie,null,i.a.createElement("div",null,i.a.createElement(ee,null,"Twitch"),i.a.createElement(ae,null,"At Twitch I co-founded their design system and styles framework where I contributed core components and ramped up new designers. The accessible, modular system now fuels all of"," ",i.a.createElement(xe,{href:"https://www.twitch.tv",newTab:!0},"twitch.tv"),".")),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"The Bricks component in the Twitch design system, showing version updates and BEM building blocks.",src:g.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"The Colors page in the Twitch design system, showing off accessibility contrast ratios of the Twitch color scheme.",src:J.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A quick-start landing page in the Twitch design system, showing off a npm and grunt commands to get started.",src:Y.a}))),i.a.createElement(ae,null,"I also designed and built the Twitch 2015 Retrospective, a performant single-page scroller with"," ",i.a.createElement(xe,{href:"https://www.turnislefthome.com",newTab:!0},"illustrations")," ","animated with CSS and JS. This was a particularly challenging project that required strategic art direction in order to meet a tight deadline. The page is no longer live, but you can read about it"," ",i.a.createElement(xe,{href:"https://thenextweb.com/insider/2016/02/11/twitch-users-watched-459366-years-worth-of-content-in-2015/",newTab:!0},"here"),"."),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"The first screen of the Twitch 2015 Retrospective says 'Welcome Home' and shows a house in the sky.",src:L.a}))),i.a.createElement(be,null,i.a.createElement(le,{src:N.a})),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"The final screen of the Twich 2015 Retrospective says 'Thank You' and shows Glitch made out of clouds.",src:P.a}))),i.a.createElement(ne,null,i.a.createElement(ae,null,"I also worked as the sole designer on the Twitch Creative team, most well known for airing the"," ",i.a.createElement(xe,{href:"https://techcrunch.com/2015/11/09/after-pulling-in-5-6m-viewers-twitch-is-keeping-bob-ross-on-the-air/",newTab:!0},"Bob Ross")," ","and"," ",i.a.createElement(xe,{href:"https://www.theverge.com/2016/3/15/11232744/twitch-food-channel-launch-julia-child",newTab:!0},"Julia Child")," ","marathons that pulled in millions of concurrent viewers."),i.a.createElement(ae,null,"On Twitch Creative, I worked on a wide range of things to carve out a space for artists on Twitch, including a Creative landing page and designing Community pages. I also created the"," ",i.a.createElement(xe,{href:"https://twitchemotes.com/emotes/92904",newTab:!0},"foodBacon"),","," ",i.a.createElement(xe,{href:"https://twitchemotes.com/emotes/90240",newTab:!0},"foodKappa"),","," ",i.a.createElement(xe,{href:"https://twitchemotes.com/emotes/89411",newTab:!0},"foodWaffle"),", and"," ",i.a.createElement(xe,{href:"https://twitchemotes.com/emotes/90755",newTab:!0},"foodButter")," ","emotes.")),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"The user interface for Communities on Twitch, featuring a large customizable banner and different live streams to choose from.",src:v.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"A landing page for Twitch Creative featuring a large, magical floating pencil.",src:x.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"Twitch's BibleThump emoji wearing too-big and too-small chef hats.",src:f.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"Twitch's Bacon emoji, smiling and with jagged comic book-style lines around it.",src:u.a}))),i.a.createElement(be,null,i.a.createElement($,{width:3120,height:2304},i.a.createElement("img",{alt:"Twitch's Butter emoji, making a face as if it thinks its really cool.",src:b.a}))))},Le=function(e){var t=e.className;return i.a.createElement("svg",{className:t,viewBox:"0 0 83 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M0 1.9682C0 .881986.868946.0022724 1.95515.0057065 8.16526.02534 27.8151.0991887 41.1261.28125 57.9387.511203 75.2511.177121 81.007.0476045 82.103.0229446 83 .904303 83 2.00051c0 1.07161-.8516 1.94182-1.9232 1.947-6.0989.02948-25.6688.10685-43.6894-.01001-9.9544-.06455-29.24824-.02162-35.43078-.00543C.869986 3.93491 0 3.05484 0 1.9682z",fill:"url(#paint0_linear)"}),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"paint0_linear",x1:"-.000048",y1:"4.03124",x2:"4.12181",y2:"-12.6229",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"#FE8181"}),i.a.createElement("stop",{offset:"1",stopColor:"#F896E9"}))))},ze=r.default.div(function(e){return{alignItems:"center",background:e.theme.foreground,display:"flex",height:"80vh",justifyContent:"center",marginTop:"5em",padding:"4em",textAlign:"center",width:"100%"}}),Ne=Object(r.default)(te)({margin:"1.5em auto 0",width:"23em"}),Fe=function(){return i.a.createElement(ze,null,i.a.createElement("div",null,i.a.createElement(ve,null,"Yay! Thanks for reading."),i.a.createElement(Ne,null,"Want to chat? Send an email over to"," ",i.a.createElement(xe,{href:"mailto:laura@lauragallisa.com"},"laura@lauragallisa.com")," ","or contact me on"," ",i.a.createElement(xe,{href:"https://www.twitter.com/Laupsy",newTab:!0},"Twitter"),".")))},Pe=r.default.div({maxWidth:"40em",width:"100%",margin:"0 auto",padding:"0 2em"}),qe=r.default.div({position:"relative",display:"inline-block",marginBottom:"1.3em"}),Ge=Object(r.default)(Le)({position:"absolute",bottom:"0",right:"0.8em",width:"5.4em"});t.default=function(){var e=Object(n.useState)("dropbox"),t=e[0],a=e[1],r="dropbox"===t,o="twitch"===t,l="tendigi"===t,m="checklist"===t;return i.a.createElement(d,null,i.a.createElement(Pe,null,i.a.createElement(qe,null,i.a.createElement(je,null),i.a.createElement(ve,null,"Hi—I'm Laura!"),i.a.createElement(Ge,null)),i.a.createElement(He,null,i.a.createElement(Te,null),i.a.createElement(c,null,i.a.createElement(s,{isActive:r,tabIndex:r?"-1":"1",onClick:function(){return a("dropbox")}},"Dropbox"),i.a.createElement(s,{isActive:o,tabIndex:o?"-1":"1",onClick:function(){return a("twitch")}},"Twitch"),i.a.createElement(s,{isActive:l,tabIndex:l?"-1":"1",onClick:function(){return a("tendigi")}},"Tendigi"),i.a.createElement(s,{isActive:m,tabIndex:m?"-1":"1",onClick:function(){return a("checklist")}},"About")),r&&i.a.createElement(Ee,null),o&&i.a.createElement(We,null),l&&i.a.createElement(Re,null),m&&i.a.createElement(Oe,null))),i.a.createElement(Fe,null))}},148:function(e,t,a){e.exports=a.p+"static/AndroidDoc-dadac5c3ba98aa45f5858ef12ac5e306.png"},149:function(e,t,a){e.exports=a.p+"static/Bacon-3808bd1b18f7bb7305308b0f03e3e348.png"},150:function(e,t,a){e.exports=a.p+"static/BibleThump-2de536758861abf82871bfdd6c3d1a8a.png"},151:function(e,t,a){e.exports=a.p+"static/Breadcrumbs-52307c0df389fde25d470b4c36cf80ba.jpg"},152:function(e,t,a){e.exports=a.p+"static/Bricks-50e59fa450c288107bcde6bff46fef10.png"},153:function(e,t,a){e.exports=a.p+"static/Butter-8bc8067e9f1c4d7f6d7a108c279f41fd.png"},154:function(e,t,a){e.exports=a.p+"static/Communities-94bac9cb0d9c8f256001e4fbaa4a3c58.png"},155:function(e,t,a){e.exports=a.p+"static/CreativeLanding-0eba0b0ceb0399610f5bae55390ce8b0.png"},156:function(e,t,a){e.exports=a.p+"static/CreativeLanding2-caed0aa9cee3b5d638171e16ab03106f.jpg"},157:function(e,t,a){e.exports=a.p+"static/Glitter3-3ad282cf6297530652b344a7502900d7.mp4"},158:function(e,t,a){e.exports=a.p+"static/HomeIntro-7c7774b0931a69dfbeb509dd236e66a5.png"},159:function(e,t,a){e.exports=a.p+"static/HomeSpotlight-b2d7598a818739124086a74ec66176ca.png"},160:function(e,t,a){e.exports=a.p+"static/Iconography-acddc0dfe1a87647cb2b349e439c374d.png"},161:function(e,t,a){e.exports=a.p+"static/Notes-1e9ecedf699abc1de391e40669bd4aae.png"},162:function(e,t,a){e.exports=a.p+"static/Particles-d7078cd4c68a476303dbafa414d6d7fc.png"},163:function(e,t,a){e.exports=a.p+"static/Particles-925d95d60cdd49a4c9cd7e4ad1389d9c.mp4"},164:function(e,t,a){e.exports=a.p+"static/Pencil-0d23113f2c10b8475765402829fae77d.mp4"},165:function(e,t,a){e.exports=a.p+"static/Retro2015-d1f2f7108c3720054ae2797de473cb27.png"},166:function(e,t,a){e.exports=a.p+"static/RetroAnimations-4c1ee237d850d6d3cb807579720b5a70.mp4"},167:function(e,t,a){e.exports=a.p+"static/RetroEnding-e761c79bc791697426a21c6418f16a79.png"},168:function(e,t,a){e.exports=a.p+"static/Smoke-e66d478b1473d72ebd270df513e72c3b.mp4"},169:function(e,t,a){e.exports=a.p+"static/Stars-bd4d010fa3e2df87697e9773263eda25.mp4"},170:function(e,t,a){e.exports=a.p+"static/Styles-1ee0f7c098828756985bf333bbd71f8f.png"},171:function(e,t,a){e.exports=a.p+"static/Styles2-9dac3255b29e2990028c12c9b6764c4c.png"},172:function(e,t,a){e.exports=a.p+"static/TendigiEnd-26671eae4f8c2af41f400473eefa5c53.png"},173:function(e,t,a){e.exports=a.p+"static/TendigiStart-36b59bc989aa1b3e43afa0067af40363.png"},174:function(e,t,a){e.exports=a.p+"static/me-94b6b3985d146112d29728e336c95d3f.jpg"},175:function(e,t,a){e.exports=a.p+"static/me3-1807cae843e44967213838efea6c9849.jpg"},176:function(e,t,a){e.exports=a.p+"static/me2-153a2a8288376694653066a944d686ea.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-f03a5968919a36bd7616.js.map