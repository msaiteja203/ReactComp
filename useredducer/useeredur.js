import { useReducer } from "react";

function counterReducer(state, input){
    console.log(state, input);
    return state+input;
}

function Useeredue(){
   const[counter, dispatch] = useReducer(counterReducer, 0)
    return(
        <div>
            <h1>UseReducer</h1>
            <button onClick={() => dispatch(-1)}>-</button>
            <div>Counter: {counter}</div>
            <button onClick={() => dispatch(1)}>+</button>
        </div>
    )
}

export default Useeredue;