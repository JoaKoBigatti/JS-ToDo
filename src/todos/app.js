import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoImput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters:'.filtro',
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
    const todoListUL= document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton=document.querySelector(ElementIDs.ClearCompleted);
    const filtersLIs=document.querySelectorAll(ElementIDs.TodoFilters);

    //listeners
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode!==13) return;
        if(event.target.value.trim().lenght === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value='';
    });

    todoListUL.addEventListener('click', (event)=>{
        const element= event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });
    
    todoListUL.addEventListener('click', (event)=>{
        // console.log(event.target)
        if(event.target.closest('.destroy')){
            const element= event.target.closest('[data-id]');
            todoStore.deleteTodo(element.getAttribute('data-id'));
            displayTodos();
        } return;
    });
    
    clearCompletedButton.addEventListener('click', ()=>{
            todoStore.deleteCompleted();
            displayTodos();

    });

    filtersLIs.forEach(element=>{
        element.addEventListener('click',(element)=>{
            filtersLIs.forEach(el=>el.classList.remove('selected'));
            element.target.classList.add('selected');
            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                break;
            }
            displayTodos();
        })



    })


};