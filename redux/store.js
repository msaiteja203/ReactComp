import { createStore } from "redux"

const initialState = {
    balance: 0,
    fullName:"",
    mobile: null,
}

function accountReducer(state=initialState, action){
    if(action.type==="deposit"){
       return {...state, balance: state.balance+action.payload}
    }
    else if(action.type==="withdraw"){
        return {...state, balance: state.balance-action.payload}
    }else if(action.type ===  "mobileupdate"){
      return  {...state, mobile: action.payload}
    }else if(action.type === "nameUpdate"){
        return {...state, fullName: action.payload}
    }
}

/* dispatch({type: "deposit", payload: 1000});
dispatch({type: "withdraw", payload: 1000});
dispatch({type: "nameUpdate", payload: "MDVST"});
dispatch({type: "mobileupdate", payload: 9945676345})  */

const store = createStore(accountReducer);
console.log(store.getState());


store.dispatch({type: "deposit", payload: 1000});
store.dispatch({type: "withdraw", payload: 105});
store.dispatch({type: "mobileupdate", payload: "9945345545"});
store.dispatch({type: "nameUpdate", payload: "MDVST"})
console.log(store.getState());