import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){
    //estado del input para poder guardar el valor en el onchange o OnClick(Listener)
   const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
   const [searchValue, setSearchValue] = React.useState('');
 
 
   //contador de todos haciendo uso de estados
 
   const completedTodos = todos.filter(
     todo => !!todo.completed).length;
   const totalTodos = todos.length;
   
 
   const searchedTodos = todos.filter(
     (todo) => {
       const todoText = todo.text.toLowerCase();
       const searchText = searchValue.toLocaleLowerCase();
       return todoText.includes(searchText);
     }
   );
 
   const completeTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos);
   };
 
   const deleteTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
       (todo) => todo.text === text
     );
     newTodos.splice(todoIndex, 1);
     saveTodos(newTodos);
   };
 return(
    <TodoContext.Provider value={{ 
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error, 
        }}>
      {children}
    </TodoContext.Provider>
 )
}



export {TodoContext,TodoProvider}