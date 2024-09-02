import {ReactComponent as CheckSVG}  from './check.svg'
import {ReactComponent as DeleteSVG}  from './delete.svg'

const IconTypes={
    "check":<CheckSVG/>,
    "delete":<DeleteSVG/>
}
function TodoIcon({type}){
    return (
        <span class={`Icon Icon-svg Icon-${type}`}>
         {IconTypes[type]}
        </span>
    );
}

export {TodoIcon};