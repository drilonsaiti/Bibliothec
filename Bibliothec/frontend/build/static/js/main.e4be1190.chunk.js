(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(23),i=c.n(r),o=(c(35),c(36),c(24)),a=c(25),j=c(30),l=c(29),d=(c.p,c(37),c(0)),b=function(e){return Object(d.jsx)("div",{className:"container mm-4 mt-5",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{scope:"col",children:"Name"})})}),Object(d.jsx)("tbody",{children:e.categories.map((function(e){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:e})})}))})]})})})})},h=function(e){return Object(d.jsx)("div",{className:"container mm-4 mt-5",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Continent"})]})}),Object(d.jsx)("tbody",{children:e.countries.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.continent})]})}))})]})})})})},u=function(e){return Object(d.jsx)("div",{className:"container mm-4 mt-5",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"table-responsive",children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Name"}),Object(d.jsx)("th",{scope:"col",children:"Category"}),Object(d.jsx)("th",{scope:"col",children:"Author"}),Object(d.jsx)("th",{scope:"col",children:"AvbCopies"})]})}),Object(d.jsx)("tbody",{children:e.books.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.category}),Object(d.jsx)("td",{children:e.author.name+" "+e.author.surname}),Object(d.jsx)("td",{children:e.availableCopies})]})}))})]})})})})},O=c(26),x=c.n(O).a.create({baseURL:"http://localhost:8081/api",headers:{"Access-Control-Allow-Origin":"*"}}),m={fetchBooks:function(){return x.get("/books")},fetchCategories:function(){return x.get("/categories")},fetchCountries:function(){return x.get("/countries")}},f=c(27),p=c(2),g=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).loadCategories=function(){m.fetchCategories().then((function(e){n.setState({categories:e.data})}))},n.loadBooks=function(){m.fetchBooks().then((function(e){n.setState({books:e.data})}))},n.loadCountries=function(){m.fetchCountries().then((function(e){n.setState({countries:e.data})}))},n.state={categories:[],countries:[],books:[]},n}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return Object(d.jsx)(f.a,{children:Object(d.jsx)("main",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(p.a,{path:"/categories",exact:!0,render:function(){return Object(d.jsx)(b,{categories:e.state.categories})}}),Object(d.jsx)(p.a,{path:"/countries",exact:!0,render:function(){return Object(d.jsx)(h,{countries:e.state.countries})}}),Object(d.jsx)(p.a,{path:"/books",exact:!0,render:function(){return Object(d.jsx)(u,{books:e.state.books})}})]})})})}},{key:"componentDidMount",value:function(){this.loadBooks(),this.loadCategories(),this.loadCountries()}}]),c}(n.Component),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.e4be1190.chunk.js.map