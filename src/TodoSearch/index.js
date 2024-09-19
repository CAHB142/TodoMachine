import React, { useState } from 'react';
import './TodoSearch.css'
function TodoSearch({
    searchValue,
    setSearchValue,
}){
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