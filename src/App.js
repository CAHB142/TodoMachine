import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem  } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter 
        completed={8}
        total= {10}
      />
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/>
      
    </div>
  );
}











export default App;
