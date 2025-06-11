import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (e) {
        console.log("Error fetching products", e);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl font-bold flex justify-center py-5">Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul className="flex justify-center">
          {products.map((product) => (
            <li key={product._id} className="px-5">
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  width="200"
                  
                  className="py-5"
                />
              </Link>
              <Link to={`/products/${product._id}`}>
                <h2 className="text-xl flex justify-center">{product.name}</h2>
              </Link>
              <p className="text-xl flex justify-center font-bold text-blue-700">{product.price}€</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
