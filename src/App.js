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

  const searchedTodos = todos.filter(
    (todo)=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
        }
  );
  const completeTodo = (text) =>{
     const newTodos=[...todos];
     const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
     );
     newTodos[todoIndex].completed =true;
     setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos=[...todos];
    const todoIndex = newTodos.findIndex(
     (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
 };

  return (
    <>
      <TodoCounter completed={completedTodos} total= {todos.length}/>
      <TodoSearch searchValue={searchValue} 
                  setSearchValue={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed ={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </>
  );
}

export default App;
