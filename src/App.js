import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem  } from './TodoItem';
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
    <React.Fragment>
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
      
    </React.Fragment>
  );
}











export default App;
