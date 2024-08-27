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
  { text:'Dormir', completed:  false},
  
];
function App() {
  //estado del input para poder guardar el valor en el onchange o OnClick(Listener)
  const[todos,setTodos]= React.useState(defauldTodos);
  const[searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios  buscan todos:' + searchValue);

  //contador de todos haciendo uso de estados

  const completedTodos = todos.filter(
  todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total= {todos.length}/>
      <TodoSearch searchValue={searchValue} 
                  setSearchValue={setSearchValue}/>

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
