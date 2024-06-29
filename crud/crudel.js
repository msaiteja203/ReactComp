import Form from "./form";
import Table from "./table";
import { Getdata } from "./apifl";
import { useEffect, useState } from "react";



function Crudel(){
const [product, setProducts] = useState([]);
    useEffect(
        () => {
     getProduct();
        }, [])

    let getProduct = async () => {
        let res = await Getdata();
        console.log(res);
        setProducts(res.data);
    }
    return(
        <div>
            <Table product = {product}/>
            <Form />
            <button className="btn btn-primary">Get Productss</button>
        </div>
    );
}

export default Crudel;