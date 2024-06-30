import './style.css'

function Form() {
  return (
    <div className="form-overlay">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="product Name"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            className="form-control mt-2"
            type="number"
            name="price"
            placeholder="product price"
          />
        </div>

        <div className="form-group">
        <label>Category:</label>
          <select className="form-control mt-2">
            <option value="-1"></option>
            <option value={'mobiles'}>Mobiles</option>
            <option value={'laptops'}>Laptops</option>
            <option value={'tv'}>Tv's</option>
          </select>
        </div>
        <botton className="btn btn-primary float-end">Send</botton>
        <button className="btn btn-danger float-end">Cancel</button>
      </form>
    </div>
  );
}

export default Form;
