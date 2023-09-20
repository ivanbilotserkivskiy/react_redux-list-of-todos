(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(6),r=c(15),l=c(5),i=c(13),o=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4),b=function(e){return{type:"filter/Query",payload:e}},m=function(e){return{type:"filter/Status",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/Query":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/Status":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},O=function(e){return{type:"todos/Load",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/Load"===t.type?t.payload:e},p=Object(l.combineReducers)({currentTodo:j,filter:f,todos:x}),v=Object(l.createStore)(p,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),y=c(0),N=(c(23),c(24),c(11)),g=c.n(N),T=s.b,k=s.c;function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var S=c(1),E=function(){var e=T(),t=k((function(e){return e.todos})),c=k((function(e){return e.filter})),n=c.query,a=c.status,s=k((function(e){return e.currentTodo}));Object(y.useEffect)((function(){w("/todos").then((function(t){return e(O(t))}))}),[]);var r=Object(y.useMemo)((function(){return function(e,t,c){return e.filter((function(e){return"completed"===c?e.completed:"active"===c?!e.completed:e})).filter((function(e){var c=e.title.toLowerCase(),n=t.toLowerCase().trim();return c.includes(n)}))}(t,n,a)}),[n,a,t]);return Object(S.jsxs)(S.Fragment,{children:[0===r.length&&0!==t.length&&Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:r.map((function(t){return Object(S.jsxs)("tr",{"data-cy":"todo",children:[Object(S.jsx)("td",{className:"is-vcentered",children:t.id}),Object(S.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:g()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(t)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:g()({"far fa-eye":s!==t,"far fa-eye-slash":s===t})})})})})]},t.id)}))})]})]})},C=function(){var e=T(),t=k((function(e){return e.filter})),c=t.query,n=t.status;return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){return c=t.target.value,void e(m(c));var c},value:n,children:[Object(S.jsx)("option",{value:"all",children:"All"}),Object(S.jsx)("option",{value:"active",children:"Active"}),Object(S.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){return c=t.target.value,void e(b(c));var c}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==c&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(b(""))}})})]})]})},L=c(3),_=(c(26),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})}),q=function(){var e=T(),t=k((function(e){return e.currentTodo})),c=Object(y.useState)(null),n=Object(L.a)(c,2),a=n[0],s=n[1];return Object(y.useEffect)((function(){var e;null!==t&&(e=t.userId,w("/users/".concat(e))).then((function(e){return s(e)}))}),[t]),Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),!a&&Object(S.jsx)(_,{}),a&&Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===a||void 0===a?void 0:a.name})]})]})]})]})},M=function(){var e=k((function(e){return e.currentTodo})),t=k((function(e){return e.todos}));return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(C,{})}),Object(S.jsxs)("div",{className:"block",children:[Object(S.jsx)(E,{}),0===t.length&&Object(S.jsx)(_,{})]})]})})}),null!==e&&Object(S.jsx)(q,{})]})},B=function(){return Object(S.jsx)(s.a,{store:v,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(M,{})})})};a.a.render(Object(S.jsx)(B,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ee03ae98.chunk.js.map