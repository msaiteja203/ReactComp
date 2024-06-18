import { useState } from "react";
import Listtodo from "./listtodo";

function Todolist() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    let addList = (input) => {
        setList([...list, input]);
    }

    const clickAdd=()=>{
        addList(input);
        setInput("");
    }

    const handleDelete = (key) => {
        let newList = [...list];
        newList.splice(key,1);
        setList([...newList]);
    }
  return (
    <div>
      <h1>To Do List</h1>
      <div className="container">
        <input type="text" onChange={handleChange} value={input} placeholder="Enter your list"/>
        <button onClick={clickAdd}>ADD</button>
        {
            list.map((listItem, i) => {
                return (
                    <Listtodo key={i} item={listItem} delete={handleDelete} />
                )
            })
        }
   
      </div>
    </div>
  );
}

export default Todolist;
