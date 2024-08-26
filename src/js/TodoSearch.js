import '../css/TodoSearch.css'
function TodoSearch(){
    return(
       <input placeholder="Ingresa una tarea pendiente" 
       className="TodoSearch"
       onChange={(event) =>{
        console.log("Escribiste en el Todo search")
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
       }}/>
    );
}

export {TodoSearch};