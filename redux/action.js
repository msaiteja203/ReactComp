export function deposit(amount){
    return{type: "deposit", payload: amount};
}

/* export function withdraw(amount){
    return { type: "withdraw", payload: amount },
} */

    export function withdraw(amount){
        return {type:"withdraw", payload: amount};
    }