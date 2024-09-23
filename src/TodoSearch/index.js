import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
      }= React.useContext(TodoContext)
    return(
       <input placeholder="Ingresa una tarea pendiente" 
       className="TodoSearch"
       value={searchValue}
       //Listener para el input
       onChange={(event) =>{
        setSearchValue(event.target.value);
       }}/>
    );
}

export {TodoSearch};