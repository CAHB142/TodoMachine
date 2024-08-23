import { TodoCounter } from './js/TodoCounter.js';
import { TodoSearch } from './js/TodoSearch.js';
import { TodoList } from './js/TodoList.js';
import { CreateTodoButton } from './js/CreateTodoButton';
import { TodoItem  } from './js/TodoItem.js';
import './App.css';
import React from 'react';

const defauldTodos = [
  { text:'Cortar cebolla', completed:  true},
  { text:'Llorar con la llorona', completed:  false},
  { text:'Hacer aseo', completed:  false},
  { text:'Dormir', completed:  false}
];
function App() {
  return (
    <>
      <TodoCounter 
        completed={8}
        total= {10}
      />
      <TodoSearch/>

      <TodoList>
        {defauldTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed ={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}

export default App;
