import React, { useState } from 'react';

const DynamicTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', age: 35, city: 'Chicago' },
  ]);

  const [newRow, setNewRow] = useState({
    id: '',
    name: '',
    age: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleAddRow = () => {
    if (!newRow.name || !newRow.age || !newRow.city) {
      alert('Please fill in all fields');
      return;
    }

    const id = tableData.length + 1;
    setTableData([...tableData, { ...newRow, id }]);
    setNewRow({ id: '', name: '', age: '', city: '' });
  };

  return (
    <div>
      <h2>Dynamic Table Example</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="name"
                value={newRow.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                type="text"
                name="age"
                value={newRow.age}
                onChange={handleChange}
                placeholder="Age"
              />
            </td>
            <td>
              <input
                type="text"
                name="city"
                value={newRow.city}
                onChange={handleChange}
                placeholder="City"
              />
            </td>
            <td>
              <button onClick={handleAddRow}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
