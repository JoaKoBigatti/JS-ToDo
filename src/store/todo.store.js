import { Todo } from "../todos/models/todo.model";

const Filters={
    All: 'all',
    Completed:'Completed',
    Pending: 'Pending'
}


const state={
    todos:[
        new Todo('Pieda del alma'),
        new Todo('Pieda del infinito'),
        new Todo('Pieda del tiempo'),
        new Todo('Pieda del poder'),
        new Todo('Pieda del realidad'),
    ],
    filter: Filters.All,
}


const initStore=()=>{
    loadStore();
    console.log('InitStore🥑');
}

const saveStateToLocalStorage =()=>{

    localStorage.setItem('state',JSON.stringify(state));
}

function loadStore() {
    if(!localStorage.getItem('state')) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos=todos;
    state.filter=filter;
}   

const getTodos=(filter=Filters.All)=>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo=>todo.done);
        case Filters.Pending:
            return state.todos.filter(todo=>!todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {string} description 
 */
const addTodo=(description)=>{
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * 
 * @param {string} todoId 
*/
const toggleTodo=(todoId)=>{
    state.todos=state.todos.map(todo=>{
        if(todo.id === todoId){
            todo.done=!todo.done;
        }
        return todo;
    })
    saveStateToLocalStorage();
}

/**
 * regresa todos los todos menos el todo que recibe la funcion para eliminarlo
 * @param {string} todoId 
*/
const deleteTodo=(todoId)=>{
    state.todos = state.todos.filter(todo=>todo.id !== todoId);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {string}  
*/
const deleteCompleted=()=>{
    state.todos = state.todos.filter(todo=>todo.done);
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filters} newFilter 
*/
const setFilter=(newFilter=Filters.All)=>{
    state.filter=newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter=()=>{
    return state.filter;
}


export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}