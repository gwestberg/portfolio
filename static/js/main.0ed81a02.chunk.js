(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"projectTitle":"Portfolio","date":"august 2020","description":"This is my first live project. A challenge in itself because I built it with React.","link":"https://gwestberg.github.io/portfolio/","image":"projectportfolio.JPG"},{"id":2,"projectTitle":"NuTrello","date":"june 2020","description":"Group Assignment: The most important project ever made, a mockup of our own version of Trello. The best of them all!","link":"https://github.com/gwestberg/kanban-meta-g2","image":"NuTrello.JPG"},{"id":3,"projectTitle":"Hej Morsan","date":"december 2019","description":"Group Assignment: Create a mockup for an app to keep in touch with your family","link":"https://github.com/gwestberg/Assignment-Hej-Morsan","image":"hej-morsan.JPG"}]')},,,,,,,function(e,a,t){e.exports=t.p+"static/media/realprofilepic.83d49e76.jpg"},,,,,function(e,a,t){e.exports=t(33)},,,,,,,function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){var n={"./NuTrello.JPG":28,"./hej-morsan.JPG":29,"./profilepic.jpg":30,"./projectportfolio.JPG":31,"./realprofilepic.jpg":9};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=27},function(e,a,t){e.exports=t.p+"static/media/NuTrello.c5be2ab4.JPG"},function(e,a,t){e.exports=t.p+"static/media/hej-morsan.9a6186f0.JPG"},function(e,a,t){e.exports=t.p+"static/media/profilepic.8e48e5e9.jpg"},function(e,a,t){e.exports=t.p+"static/media/projectportfolio.be1a263e.JPG"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(15),t(16);var n=t(1),r=t.n(n),l=t(12),o=t.n(l),c=(t(21),t(3)),i=t(4),s=t(8),m=t(6),p=t(5),u=(t(22),t(7)),d=t(10),g=t(13),h=t.n(g),f=(t(26),t(2)),b=function(e){Object(m.a)(n,e);var a=Object(p.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).state={},t}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex row-wrap"},Object.keys(f).map((function(e){return r.a.createElement("div",{className:"col-lg-6 col-sm-6 mb-4",key:e},r.a.createElement("div",{className:"w-100 h-100"},r.a.createElement(h.a,{triggerStyle:{cursor:"pointer",padding:"1%0%0%0%"},trigger:r.a.createElement("img",{className:"card-img-top",src:t(27)("./"+f[e].image),alt:"project thumbnail"})},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},f[e].projectTitle),r.a.createElement("h6",null,"- ",f[e].date),r.a.createElement("p",{className:"card-text"},f[e].description),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:f[e].link},r.a.createElement("button",null,"Source Code"))))))})))))}}]),n}(n.Component),v=(t(32),t(9)),E=t.n(v),N=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"row row-wrap justify-content-evenly",id:"About"},r.a.createElement("div",{className:"col-lg-5 mb-8",id:"profileImage"},r.a.createElement("img",{src:E.a,alt:"Profile"})),r.a.createElement("div",{id:"profileText",className:" col-lg-6 mb-2"},r.a.createElement("h2",{className:"text-center about-title"},"About Me"),r.a.createElement("p",null,"A tad late in the game, wanted to be a Chef first. The interest began when I got my first computer at 10 years old and I meddled with basic HTML and CSS when the blog-era began, I even managed to earn a few bucks designing a couple of blogs but my love for cooking won the first battle."),r.a.createElement("p",null,"The jump from food to code is not as far as one might think, we still follow recipies and experiment with ingredients and flavours to present a product that brings joy to our clients."),r.a.createElement("p",null,"And that is what I am after, that same creative energy that drives you to create awesome content for people.")),r.a.createElement("div",{className:"tech-list"},r.a.createElement("h4",{className:"list-header"},"Techskills"),r.a.createElement("ul",{className:"horizontal"},r.a.createElement("li",null,"C#"),r.a.createElement("li",null,"SQL"),r.a.createElement("li",null,"ASP.NET"),r.a.createElement("li",null,"Entity FrameWork"),r.a.createElement("li",null,"Javascript"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"Node"))),r.a.createElement("section",null),r.a.createElement("hr",{className:"d-sm-none"})))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(s.a)(n)),n.state={collapsed:!0},n}return Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){var e=this.state.collapsed,a=e?"collapse navbar-collapse":"collapse navbar-collapse show",t=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return r.a.createElement("div",{className:"Wrapper"},r.a.createElement("div",{className:"sticky-top headnav"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark transparent-nav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/portfolio"},"Home"),r.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(t),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(a),id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#About"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#Projects"},"Projects"))))))),r.a.createElement("section",{id:"Header"},r.a.createElement("div",{id:"headerContent"},r.a.createElement("h1",null,"Hi, my name is Gabriella!"),r.a.createElement("p",null,"I'm a software developer student @",r.a.createElement("a",{className:"link",href:"https://www.boras.se/utbildningochforskola/borasyrkeshogskola/utbildningar/systemutvecklarenet.4.3fde8c191684442015123edf.html",target:"_blank",rel:"noopener noreferrer"},"YHBOR\xc5S")),r.a.createElement("ul",{className:"nav nav-pills flex-row"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/gwestberg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{size:50}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/gabriella-w-54975ba7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,{size:50}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto:g.westberg@hotmail.se",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{size:50})))))),r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"column"},r.a.createElement("section",null,r.a.createElement(N,null)),r.a.createElement("section",null,r.a.createElement("div",{className:"col-sm-10",id:"Projects"},r.a.createElement("h2",null,"Project Gallery"),r.a.createElement("p",null,"These are some of the projects I have worked on "),r.a.createElement(b,null),r.a.createElement("br",null))))),r.a.createElement("footer",{className:"page-footer font-small "},r.a.createElement("ul",{className:"nav nav-pills flex-row justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/gwestberg",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{size:40}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://www.linkedin.com/in/gabriella-w-54975ba7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,{size:40}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"mailto:g.westberg@hotmail.se",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{size:40})))),r.a.createElement("div",{className:"footer-copyright text-center text-light py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"http://localhost:3000/#"}," Pistorella"))))}}]),t}(n.Component);var k=function(){return r.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.0ed81a02.chunk.js.map