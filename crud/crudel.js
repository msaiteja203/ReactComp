import Form from "./form";
import Table from "./table";
import { Getdata } from "./apifl";
import { useEffect, useState } from "react";
import { Deldata } from "./apifl";



function Crudel(){
const [product, setProducts] = useState([]);
const [openForm, setopenForm] = useState();
    useEffect(
        () => {
     getProduct();
        }, [])

    let getProduct = async () => {
        let res = await Getdata();
        console.log(res);
        setProducts(res.data);
    }

    let delProduct = async (id) => {
         await Deldata(id);
         getProduct()
    }

    let showForm = () => {
        setopenForm(true);
    }
    return(
        <div>
            <Table product = {product} delete={delProduct}/>
            <Form />
            <button className="btn btn-primary" onClick={() => {showForm()}}>Get Productss</button>
            {
                openForm && <Form />
            }
        </div>
    );
}

export default Crudel;