function Table(props) {
  return (
    <div>
      <table>
        {props.product.map((data, id) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.rating}</td>
            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
            <td>
              <button className="btn btn-primary" onClick={() => props.delete(data.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
