(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),u=(n(12),n(5)),l=n(6),i=(n(13),n(14),function(e){var t=e.items,n=e.onDelete;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e.id,className:"todo_item"},o.a.createElement("span",null,e.todo),o.a.createElement("button",{className:"btn btn--delete",onClick:function(){return n(e.id)}},"x"))})))}),m=n(18),d=(n(15),function(e){var t=Object(a.useRef)(null);return o.a.createElement("form",{onSubmit:function(n){n.preventDefault();var a=t.current.value;e.onAddTodo(a,Object(m.a)()),t.current.value=""}},o.a.createElement("div",{className:"input_container"},o.a.createElement("label",{htmlFor:"todoInput"},"Type your todo"),o.a.createElement("input",{type:"text",name:"todoInput",ref:t,placeholder:"Type here...",maxLength:25,required:!0})),o.a.createElement("button",{className:"btn btn--submit",type:"submit"},"Add Todo"))}),s=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement("main",{className:"main"},o.a.createElement(d,{onAddTodo:function(e,t){var n={id:t,todo:e};r((function(e){return[].concat(Object(u.a)(e),[n])}))}}),o.a.createElement(i,{items:n,onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}}))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.f101a065.chunk.js.map