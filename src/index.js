import './styles.css';
import {Todo,TodoList} from './classes/index.js';
import { crearTodoHtml } from './js/componentes';



const tarea = new Todo('aprender javascript');
export const todoList = new TodoList();



//todoList.nuevoTodo(tarea);
//crearTodoHtml(tarea);

todoList.todos.forEach( todo =>crearTodoHtml(todo));




// localStorage.setItem('mi-key','ABC123');

//  setTimeout(()=>{
//      localStorage.removeItem('mi-key');
//  },1500);