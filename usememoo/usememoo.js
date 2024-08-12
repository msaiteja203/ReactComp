import { useEffect, useState, useMemo} from "react";
import "./style.css";

function Usemmo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const [products, setProduct] = useState([
    { id: 1, name: "Nokia 108", price: 2000 },
    { id: 2, name: "Lenove note 3", price: 10000 },
    { id: 3, name: "Oppo F9 Pro", price: 20000 },
  ]);

  const [searchText, updateSearchText] = useState("");

  const filteredProducts = useMemo(() => {
    console.log(products);

    return products.filter((p) => {
      return p.name.toLowerCase().includes(searchText);
    });
  },
  [products, searchText]
);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Usememooo Hook</h1>
      <h3>{time}</h3>
      <input type="text" value={searchText} onChange={(e) => updateSearchText(e.target.value)}/>

      <table>
        <tr>
          <td> S.No</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
        {filteredProducts.map((p) => (
          <tr key={p.id}>
            <td> {p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Usemmo;
