/**
 * 
 * @param {string} elementID 
 */

export const App = (elementId)=>{
    //cuando la funcion app se llama
    (()=>{
        const app= document.createElement('div');
        app.innerHTML='<h1>Hola Mundo</h1>';
        document.querySelector(elementId).append(app);
        
    })();


};