function Table(props) {
  return (
    <div className="text-primary">
      <h1>API call by axios</h1>
      <div className="wrapper m-5 w-50">
        <table className="table m-3">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </thead>
          <tbody>
            {props.product.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.rating}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
