(this["webpackJsonpgoogle-fonts-clone"]=this["webpackJsonpgoogle-fonts-clone"]||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},26:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),l=(a(26),a(5)),i=a(6),s=a(4),m=a(3),u=(a(31),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"brand"},c.a.createElement("a",{href:"index.html"},"Favourite Google Fonts")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"index.html"},"CATALOG")),c.a.createElement("li",null,c.a.createElement("a",{href:"index.html"},"FEATURED")),c.a.createElement("li",null,c.a.createElement("a",{href:"index.html"},"ARTICLES")),c.a.createElement("li",null,c.a.createElement("a",{href:"index.html"},"ABOUT"))))}),d=function(e){var t=e.textChange,a=e.fontSizeChange,n=e.fontSearchChange,o=e.resetBtnClick,r=function(e){var t="grid-view"===e?"list-view":"grid-view",a=document.querySelector(".cards-container");a.classList.contains(t)&&a.classList.remove(t),a.classList.add(e),document.querySelector(".".concat(e,"-icon")).style.display="none",document.querySelector(".".concat(t,"-icon")).style.display="block"};return c.a.createElement("div",{className:"nav-container"},c.a.createElement("input",{className:"nav-container__input nav-container--search",placeholder:"Search fonts",onChange:n}),c.a.createElement("input",{className:"nav-container__input nav-container--type",placeholder:"Type something",onChange:t}),c.a.createElement("select",{className:"nav-container__select",onChange:a},c.a.createElement("option",{value:"20px"},"20px"),c.a.createElement("option",{value:"24px"},"24px"),c.a.createElement("option",{value:"32px"},"32px"),c.a.createElement("option",{value:"40px"},"40px")),c.a.createElement("div",{className:"nav-container__toggle"},c.a.createElement("div",{className:"nav-container__toggle-mode"},c.a.createElement("div",{className:"nav-container-icon"},c.a.createElement(m.a,{icon:"fill-drip",onClick:function(){return function(e){var t=document.querySelector("body");t.classList.contains("light-mode")?(t.classList.remove("light-mode"),t.classList.add("dark-mode")):(t.classList.remove("dark-mode"),t.classList.add("light-mode"))}()}}),c.a.createElement("span",{className:"tooltip nav-container-icon__info"},"Change background colour"))),c.a.createElement("div",{className:"nav-container__toggle-layout",onClick:function(e){return function(e){e.target.classList.contains("fa-border-all")?r("grid-view"):e.target.classList.contains("fa-list")&&r("list-view")}(e)}},c.a.createElement("div",{className:"list-view-icon nav-container-icon"},c.a.createElement(m.a,{icon:"list"}),c.a.createElement("span",{className:"tooltip nav-container-icon__info"},"View as a list")),c.a.createElement("div",{className:"grid-view-icon nav-container-icon"},c.a.createElement(m.a,{icon:"border-all"}),c.a.createElement("span",{className:"tooltip nav-container-icon__info"},"View as a grid")))),c.a.createElement("div",{className:"nav-container__reset",onClick:o},c.a.createElement("div",{className:"nav-container-icon"},c.a.createElement(m.a,{icon:"redo"}),c.a.createElement("span",{className:"tooltip nav-container-icon__info"},"Reset"))))},v=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"credits"},"coded by ATarsa | December 2019 | Chingu Pre-Work Project"))},f=function(e){var t=e.font,a=e.text;a=a||"Here comes the sun";var n={fontSize:e.fontSize,fontFamily:t};return c.a.createElement("div",{className:"fontCard"},c.a.createElement("div",{className:"fontCard__header"},c.a.createElement("div",{className:"font--name"},t),c.a.createElement(m.a,{icon:"plus-circle"})),c.a.createElement("div",{className:"fontCard__main"},c.a.createElement("div",{className:"fontCard--text",style:n},a)))},p=a(8),E=a.n(p),g=a(20),h=a.n(g),b="https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=".concat("AIzaSyBgtUnQZV7K1ZhgA3l4C9N523JitFrALoM"),y=function(e){for(var t="",a=0;a<e.length;a++){var n=e[a].split(" ").join("+");t+="".concat(n,"|")}_(t)},_=function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.type="text/css",t.href="https://fonts.googleapis.com/css?family="+e,document.head.appendChild(t)},w=function(){var e,t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(h.a.get(b,{}));case 2:return e=a.sent,t=e.data.items.map((function(e){return e.family})),y(t),a.abrupt("return",t);case 6:case"end":return a.stop()}}))};i.b.add(s.c,s.b,s.d,s.f,s.e,s.a);window.addEventListener("scroll",(function(){var e=document.querySelector(".back-to-top-btn");window.pageYOffset>100?(e.style.display="flex",e.addEventListener("click",(function(){window.scrollTo(window.pageYOffset,0)}))):e.style.display="none"}));var N=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),p=s[0],E=s[1],g=Object(n.useState)(!0),h=Object(l.a)(g,2),b=h[0],y=h[1],_=Object(n.useState)(""),N=Object(l.a)(_,2),C=N[0],x=N[1],S=Object(n.useState)("20px"),k=Object(l.a)(S,2),L=k[0],O=k[1];Object(n.useEffect)((function(){w().then((function(e){r(e)}))}),[]);var j=b?o:p;return c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement("main",null,c.a.createElement(d,{textChange:function(e){x(e.target.value)},fontSizeChange:function(e){O(e.target.value)},fontSearchChange:function(e){var t=e.target.value.toLowerCase();t?(E(o.filter((function(e){return(e=e.toLowerCase()).includes(t)}))),y(!1)):y(!0)},resetBtnClick:function(e){y(!0),O("20px"),x(""),document.querySelector(".nav-container--search").value="",document.querySelector(".nav-container--type").value="",document.querySelector(".nav-container__select").value="20px"}}),c.a.createElement("div",{className:"cards-container grid-view"},j.map((function(e,t){return c.a.createElement(f,{font:e,text:C,fontSize:L,key:e})})),c.a.createElement("div",{className:"back-to-top-btn"},c.a.createElement(m.a,{icon:"arrow-circle-up",className:"back-to-top-btn__icon"}),c.a.createElement("span",{className:"tooltip back-to-top-btn__info"},"Return to top")))),c.a.createElement(v,null))};r.a.render(c.a.createElement(N,{fontCards:[]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.50eca229.chunk.js.map