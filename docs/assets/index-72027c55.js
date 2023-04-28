(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();let m;const w=new Uint8Array(16);function b(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(w)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function T(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:v};function S(e,t,i){if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};const l=e.random||(e.rng||b)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=l[o];return t}return T(l)}class a{constructor(t){this.id=S(),this.description=t,this.done=!1,this.createdAt=new Date}}const d={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[new a("Pieda del alma"),new a("Pieda del infinito"),new a("Pieda del tiempo"),new a("Pieda del poder"),new a("Pieda del realidad")],filter:d.All},L=()=>{y(),console.log("InitStore🥑")},p=()=>{localStorage.setItem("state",JSON.stringify(s))};function y(){if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=d.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t}const C=(e=d.All)=>{switch(e){case d.All:return[...s.todos];case d.Completed:return s.todos.filter(t=>t.done);case d.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},E=e=>{if(!e)throw new Error("Description is required");s.todos.push(new a(e)),p()},P=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),p()},A=e=>{s.todos=s.todos.filter(t=>t.id!==e),p()},I=()=>{s.todos=s.todos.filter(e=>e.done),p()},U=(e=d.All)=>{s.filter=e,p()},O=()=>s.filter,c={addTodo:E,deleteCompleted:I,deleteTodo:A,getCurrentFilter:O,getTodos:C,initStore:L,loadStore:y,setFilter:U,toggleTodo:P},x=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,D=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:i,id:l}=e,o=`    
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${i}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",l),e.done&&n.classList.add("completed"),n};let u;const M=(e,t=[])=>{if(u||(u=document.querySelector(e)),!u)throw new Error(`Element ${e} not found`);u.innerHTML="",t.forEach(i=>{u.append(D(i))})},g={TodoList:".todo-list",NewTodoImput:"#new-todo-input"},k=e=>{const t=()=>{const o=c.getTodos(c.getCurrentFilter());M(g.TodoList,o)};(()=>{const o=document.createElement("div");o.innerHTML=x,document.querySelector(e).append(o),t()})();const i=document.querySelector(g.NewTodoImput),l=document.querySelector(g.TodoList);i.addEventListener("keyup",o=>{o.keyCode===13&&o.target.value.trim().lenght!==0&&(c.addTodo(o.target.value),t(),o.target.value="")}),l.addEventListener("click",o=>{const n=o.target.closest("[data-id]");c.toggleTodo(n.getAttribute("data-id")),t()}),l.addEventListener("click",o=>{if(o.target.closest(".destroy")){const n=o.target.closest("[data-id]");c.deleteTodo(n.getAttribute("data-id")),t()}})};c.initStore();k("#app");
