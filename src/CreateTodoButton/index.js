import React from 'react';
import './CreateTodoButton.css';
import { setOpenModal } from '../TodoContext';

function CreateTodoButton({setOpenModal}){
  return(
    <button class="CreateTodoButton" 
    onClick={() => {
      setOpenModal(state => !state);
    }
     }>+</button>
  )
}

export{CreateTodoButton};