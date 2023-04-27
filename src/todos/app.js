import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoImput: '#new-todo-input'
}

/**
 * 
 * @param {string} elementId 
 */

export const App = (elementId)=>{

    const displayTodos=()=>{
        const todos=todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos);
    }


    //cuando la funcion app se llama
    (()=>{
        const app= document.createElement('div');
        app.innerHTML=html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
    
    //referencias html
    const newDescriptionInput=document.querySelector(ElementIDs.NewTodoImput);

    //listeners
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode!==13) return;
        if(event.target.value.trim().lenght === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value='';
    })

};