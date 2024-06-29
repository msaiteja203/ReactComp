function Table(props) {
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
}

export default Table;
