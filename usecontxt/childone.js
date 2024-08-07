import contextt from "./contxxt";

function Childone(props){
    const person = {
        name: 'Divya Venkata Sai Teja M',
        company: 'HCl',
        age: 23,
    }
    return(
        
           
            <contextt.Provider value={person}>
            {props.children}
            </contextt.Provider>
   
    )
}

export default Childone;