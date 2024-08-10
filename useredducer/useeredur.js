import { useReducer } from "react";

function counterReducer(state, action){
    console.log(state, action);
/*     if(action.type === "INC")
    return state+1;
else if(action.type === "DEC")
    return state -1;
else if(action.type === "RESET")
return 0
else return state; */
switch(action.type){
    case "INC": return state + 1;
    case "DEC": return state -1;
    case "RESET": return 0;
    default: return state;
}
}

function Useeredue(){
   const[counter, dispatch] = useReducer(counterReducer, 0)
    return(
        <div>
            <h1>UseReducer</h1>
            <button onClick={() => dispatch({type: "DEC"})}>-</button>
            <div>Counter: {counter}</div>
            <button onClick={() => dispatch({type: "INC"})}>+</button>
            <button onClick={() => dispatch({type: "RESET"})}>RESET</button>
        </div>
    )
}

export default Useeredue;