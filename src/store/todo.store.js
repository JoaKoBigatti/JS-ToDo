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
    ],
    filter: Filters.All,
}


const initStore=()=>{
    console.log(state);
    console.log('InitStore🥑');
}

const loadStore=()=>{
    throw new Error('No esta implementado');
}

/**
 * 
 * @param {string} desciption 
 */
const addTodo=(desciption)=>{
    throw new Error('No esta implementado');
}

/**
 * 
 * @param {string} todoId 
 */
const toggleTodo=(todoId)=>{
    throw new Error('No esta implementado');
}

/**
 * 
 * @param {string} todoId 
 */
const deleteTodo=(todoId)=>{
    throw new Error('No esta implementado');
}

/**
 * 
 * @param {string}  
 */
const deleteCompleted=()=>{
    throw new Error('No esta implementado');
}

/**
 * 
 * @param {*} newFilter 
 */
const setFilter=(newFilter=Filters.All)=>{
    throw new Error('No esta implementado');
}

const getCurrentFilter=()=>{
    throw new Error ('No esta implementado');
}


export default{
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}