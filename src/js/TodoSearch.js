import React, { useState } from 'react';
import '../css/TodoSearch.css'
function TodoSearch(){
    //estado del input para poder guardar el valor en el onchange(Listener)
    const[searchValue, setSearchValue] = React.useState('');
    console.log('Los usuarios  buscan todos:' + searchValue);

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