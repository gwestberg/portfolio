(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/realprofilepic.83d49e76.jpg"},27:function(e,a,t){e.exports=t(55)},34:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){var n={"./NuTrello.JPG":50,"./hej-morsan.JPG":51,"./profilepic.jpg":52,"./projectportfolio.JPG":53,"./realprofilepic.jpg":18};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=49},50:function(e,a,t){e.exports=t.p+"static/media/NuTrello.c5be2ab4.JPG"},51:function(e,a,t){e.exports=t.p+"static/media/hej-morsan.9a6186f0.JPG"},52:function(e,a,t){e.exports=t.p+"static/media/profilepic.8e48e5e9.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/projectportfolio.be1a263e.JPG"},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);t(28),t(29);var n=t(1),r=t.n(n),l=t(12),o=t.n(l),i=(t(34),t(3)),c=t(4),s=t(13),m=t(7),p=t(6),d=t(5),u=t.n(d),g=t(19),f=(t(47),t(8)),h=t(20),b=t(26),v=t.n(b),E=(t(48),t(9)),N=function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(u.a,{left:!0,cascade:!0},r.a.createElement("div",{className:"col-sm-10",id:"Projects"},r.a.createElement("h1",null,"Project Gallery"),r.a.createElement("p",null,"These are some of the projects I have worked on "),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex row-wrap"},Object.keys(E).map((function(e){return r.a.createElement("div",{className:"col-lg-6 col-sm-6 mb-4",key:e},r.a.createElement("div",{className:"w-100 h-100"},r.a.createElement(v.a,{triggerStyle:{cursor:"pointer",padding:"1%0%0%0%"},trigger:r.a.createElement("img",{className:"card-img-top",src:t(49)("./"+E[e].image),alt:"project thumbnail"})},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},E[e].projectTitle),r.a.createElement("p",{className:"card-text"},E[e].description),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:E[e].link},r.a.createElement("button",null,"Source Code"))))))}))))))}}]),n}(n.Component),k=(t(54),t(18)),w=t.n(k),j=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"column"},r.a.createElement(u.a,{left:!0,cascade:!0},r.a.createElement("div",{className:"row row-wrap",id:"About"},r.a.createElement("div",{className:"col-lg-5 mb-4 sm-4",id:"profileImage"},r.a.createElement("img",{className:"",src:w.a,alt:"Profile"})),r.a.createElement("div",{id:"profileText",className:" col-lg-6 col-mb-8 col-sm-12"},r.a.createElement("h1",{className:"text-center about-title"},"About Me"),r.a.createElement("p",null,"A tad late in the game, wanted to be a Chef first. The interest began when I got my first computer at 10 years old and I meddled with basic HTML and CSS when the blog-era began, I even managed to earn a few bucks designing a couple of blogs but my love for cooking won the first battle."),r.a.createElement("p",null,"The jump from food to code is not as far as one might think, we still follow recipies and experiment with ingredients and flavours to present a product that brings joy to our clients."),r.a.createElement("p",null,"And that is what I am after, that same creative energy that drives you to create awesome content for people.")),r.a.createElement("div",{className:"tech-list"},r.a.createElement("ul",{className:"horizontal"},r.a.createElement("li",{title:"Beginner/Intermediate"},"C#"),r.a.createElement("li",{title:"Beginner/Intermediate"},"MSSQL"),r.a.createElement("li",{title:"Beginner/Intermediate"},"ASP.Net"),r.a.createElement("li",{title:"Beginner"},"Entity Framework"),r.a.createElement("li",{title:"Beginner/Intermediate"},"VanillaJS"),r.a.createElement("li",{title:"Beginner/Intermediate"},"React"),r.a.createElement("li",{title:"Beginner"},"Express"),r.a.createElement("li",{title:"Beginner/Intermediate"},"Node"),r.a.createElement("li",{title:"Beginner"},"xUnit"),r.a.createElement("li",{title:"Just Started Learning"},"Angular"),r.a.createElement("li",{title:"On my TODO-list"},"( MongoDB ",r.a.createElement("span",null,"*")," )"))),r.a.createElement("hr",{className:"d-sm-none"}))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(s.a)(n)),n.state={collapsed:!0},n}return Object(c.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",t=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"sticky-top headnav"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark transparent-nav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/portfolio"},"Home"),r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(t),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(a),id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.Link,{className:"nav-link",activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.Link,{className:"nav-link",activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects"))))))),r.a.createElement("div",{className:"header"},r.a.createElement(u.a,{left:!0,cascade:!0},r.a.createElement("div",{id:"headerContent"},r.a.createElement("h1",{className:"header-title"},"Hi, my name is Gabriella!"),r.a.createElement("p",null,"I'm a software developer student @",r.a.createElement("a",{className:"header-link",href:"https://www.boras.se/utbildningochforskola/borasyrkeshogskola/utbildningar/systemutvecklarenet.4.3fde8c191684442015123edf.html",target:"_blank",rel:"noopener noreferrer"},"YHBOR\xc5S")),r.a.createElement("ul",{className:"nav nav-pills flex-row"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/gwestberg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{size:50}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/gabriella-w-54975ba7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.b,{size:50}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto:g.westberg@hotmail.se",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{size:50}))))))),r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"about column sm-4"},r.a.createElement(j,null)),r.a.createElement("br",null),r.a.createElement("div",{className:"projects column sm-4"},r.a.createElement(N,null),r.a.createElement("br",null))),r.a.createElement("footer",{className:"page-footer font-small "},r.a.createElement("h3",{className:"footer-title"},"Find Me Here:"),r.a.createElement("ul",{className:"nav nav-pills flex-row justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/gwestberg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{size:40}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/gabriella-w-54975ba7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.b,{size:40}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto:g.westberg@hotmail.se",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{size:40})))),r.a.createElement("div",{className:"footer-copyright text-center text-light py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{className:"footer-link",href:"/portfolio"}," Pistorella"),r.a.createElement("p",{className:"footer-text-small"},"Built with ",r.a.createElement("a",{className:"footer-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"react.js")," "))))}}]),t}(n.Component);var O=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('[{"id":1,"projectTitle":"Portfolio","description":"This is my first live project. A challenge in itself because I\'m building it from scratch with React, and it seems like this will be a neverending one...","link":"https://gwestberg.github.io/portfolio/","image":"projectportfolio.JPG"},{"id":2,"projectTitle":"NuTrello","description":"Group Assignment: The most important project ever made, a mockup of our own version of Trello. The best of them all!","link":"https://github.com/gwestberg/kanban-meta-g2","image":"NuTrello.JPG"},{"id":3,"projectTitle":"Hej Morsan","description":"Group Assignment: Create a mockup for an app to keep in touch with your family","link":"https://github.com/gwestberg/Assignment-Hej-Morsan","image":"hej-morsan.JPG"}]')}},[[27,1,2]]]);
//# sourceMappingURL=main.aab5e99f.chunk.js.map