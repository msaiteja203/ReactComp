function Table(props) {
  return (
    <div>
      <table>
        {props.products.map((data, id) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.mobile}</td>
            <td>{data.type}</td>
            <td>{data.price}</td>

            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => props.delete(data.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
