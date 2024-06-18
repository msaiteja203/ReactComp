function Listtodo(props){
    return(
        <div>
            <li>{props.item}</li>
            <button onClick={props.delete}>Delete</button>

        </div>
    )
}

export default Listtodo;