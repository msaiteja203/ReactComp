import { useState } from 'react';
import './style.css'

function Form(props) {
  const [product, setProduct] = useState(props.data);

  let changeFormdata = (e) => {
  const {name, value} =  e.target;
  setProduct({...product, [name]:value});
  }
  return (
    <div className="form-overlay">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control mt-2"
            type="text"
            name="mobile"
            placeholder="product Name" value={product.mobile}
            onChange={changeFormdata}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control mt-2"
            type="number"
            name="price"
            placeholder="product price"
            value={product.price}
            onChange={changeFormdata}
          />
        </div>

        <div className="form-group">
        <label>Category:</label>
          <select className="form-control mt-2" name="type" value={product.type} onChange={changeFormdata}>
            <option value="-1"></option>
            <option value={'mobiles'}>Mobiles</option>
            <option value={'laptops'}>Laptops</option>
            <option value={'tv'}>Tv's</option>
          </select>
        </div>
        <button className="btn btn-primary float-end" onClick={(e) => {
           e.preventDefault();
           props.add(product);
        }}
        >
        Send</button>
        <button className="btn btn-danger float-end" onClick={(e) => { e.preventDefault();
        props.closeForm();
        }}>Cancel</button>
      </form>
    </div>
  );
}

export default Form;
