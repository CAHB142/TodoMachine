import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import {TodosLoading} from '../TodosLoading/index.js';
import {TodosError} from '../TodosError/index.js';
import {EmptyTodos} from '../EmptyTodos/index.js';
import { TodoContext } from '../TodoContext/index.js';
import React from 'react';
  function AppUI(){
    const {   
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,    
    }= React.useContext(TodoContext);
    return (
        <>
      <TodoCounter />
        <TodoSearch  />
            <TodoContext.Consumer>
              {() => (
                <TodoList >
                {loading && (<><TodosLoading/>,<TodosLoading/>,<TodosLoading/></>)}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos/>}
                {searchedTodos.map(todo => (
                  <TodoItem key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
              )}
            </TodoContext.Consumer>
    
          <CreateTodoButton />
    
        </>
      );
  }

  export{AppUI};