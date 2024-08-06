import Form from "./form";
import Table from "./table";
import { Getdata } from "./apifl";
import { useEffect, useState } from "react";
import { Deldata, postData } from "./apifl";

function Crudel() {
  const [product, setProducts] = useState([]);
  const [openForm, setopenForm] = useState(false);
  const [initialForm, setForm] = useState({
    mobile: "",
    price: "",
    type: "",
  });
  useEffect(() => {
    getProduct();
  }, []);

  let getProduct = async () => {
    let res = await Getdata();

    //instead converting data to json by writing without .json we can write async n await function in axios
    console.log(res);
    setProducts(res.data);
  };

  let delProduct = async (id) => {
    await Deldata(id);
    getProduct();
  };

  let addProduct = async (data) => {
    await postData(data);
    getProduct();
  }

    let showForm = () => {
      setopenForm(true);
    };

    let closeForm = () => {
      setopenForm(false);
    };
    return (
      <div>
        <h1>CRUD Operations</h1>
        <Table products={product} delete={delProduct} add={addProduct} />
        <button
          className="btn btn-primary"
          onClick={() => {
            showForm();
          }}
        >
          Get Productss
        </button>
        {openForm && <Form closeForm={closeForm} data={initialForm} />}
      </div>
    );
  };

export default Crudel;
