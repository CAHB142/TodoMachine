import '../css/TodoItem.css'
function TodoItem(props){
    return(
      <li className="Todoitem">
         <span className="Icon Icon-check Icon-check--active">
          V {props.completed}</span>
         <p className="TodoItem-p TodoItem-p--complete">{props.text}</p>
         <span className="Icon Icon-delete">X</span>
      </li>
      
  
    );
  }

  export {TodoItem};