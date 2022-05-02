(this["webpackJsonpreact-redux-fake-store"]=this["webpackJsonpreact-redux-fake-store"]||[]).push([[9],{64:function(e,n,r){"use strict";r.r(n);var t,c,a,s=r(3),o=r(2),i=r(5),d=r(7),l=r(4),p=r(8),j=r(6),u=r(29),b=r.n(u),f=r(32),g=r(26),m=r(18),x=r(1),O=l.a.section(t||(t=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  article {\n    padding: 1.5rem 1rem;\n    background: #fff;\n    display: grid;\n    justify-items: center;\n    gap: 2rem;\n    ","\n    .product__img {\n      img {\n        max-width: 20rem;\n      }\n    }\n    .product__info {\n      display: grid;\n      gap: 1rem;\n      ","\n      a {\n        height: max-content;\n        width: max-content;\n        padding: 0.2rem 1.5rem;\n        letter-spacing: 1px;\n        color: var(--gray-color-1);\n        transition: var(--transition);\n        border: 0.2rem solid var(--red-color-1);\n        &:hover {\n          background: var(--red-color-1);\n          color: var(--white-color);\n        }\n      }\n      .info__price {\n        color: var(--green-color-1);\n        span {\n          color: var(--red-color-1);\n        }\n      }\n      .info__category {\n        color: var(--green-color-1);\n        span {\n          color: var(--gray-color-1);\n        }\n      }\n    }\n  }\n"])),p.a.md(c||(c=Object(s.a)(["\n    grid-template-columns: 1fr 1fr 1fr;\n    "]))),p.a.md(a||(a=Object(s.a)(["\n    grid-column: 2/4;\n    "]))));n.default=function(){var e=Object(i.f)(),n=Object(i.g)().id,r=Object(j.b)(),t=Object(j.c)((function(e){return e.singleProductState})),c=t.single_product,a=t.single_product_loading,s=t.single_product_error,l=c.title,p=c.price,u=c.image,h=c.category,v=c.description,_=c.rating;return Object(o.useEffect)((function(){var e;r((e=n,function(){var n=Object(f.a)(b.a.mark((function n(r){var t,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:g.a}),n.prev=1,n.next=4,fetch("https://fakestoreapi.com/products/".concat(e));case 4:return t=n.sent,n.next=7,t.json();case 7:c=n.sent,r((a=c,{type:g.c,payload:a})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),r({type:g.b});case 14:case"end":return n.stop()}var a}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()))}),[n]),Object(o.useEffect)((function(){s&&setTimeout((function(){e("/")}),3e3)}),[s]),a?Object(x.jsx)("div",{className:"page-w-b",children:Object(x.jsx)(m.o,{})}):s?Object(x.jsx)("div",{className:"page-w-b",children:Object(x.jsx)(m.i,{})}):Object(x.jsxs)("main",{children:[Object(x.jsx)(m.c,{title:l,products:!0}),Object(x.jsx)(O,{className:"page",children:Object(x.jsxs)("article",{children:[Object(x.jsx)("div",{className:"product__img",children:Object(x.jsx)("img",{src:u,alt:l})}),Object(x.jsxs)("div",{className:"product__info",children:[Object(x.jsx)(d.b,{to:"/products",children:"back to products"}),Object(x.jsx)("h2",{children:l}),Object(x.jsx)(m.v,{stars:_}),Object(x.jsxs)("p",{className:"info__price",children:["Price : ",Object(x.jsxs)("span",{children:["$",p]})]}),Object(x.jsxs)("p",{className:"info__category",children:["Category : ",Object(x.jsx)("span",{children:h})]}),Object(x.jsx)("p",{children:v}),Object(x.jsx)(m.a,{product:c})]})]})})]})}}}]);
//# sourceMappingURL=9.8f181438.chunk.js.map