import { useRef, useState } from "react";

function Usereff(){
    const [count, setCount] = useState(0);

    let aa = useRef();

    const handleIncrement = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>USEREF REACT JS</h1>
            <button ref={aa} onClick={handleIncrement}>Count Increment {count}</button>
        </div>
    )
}

export default Usereff;