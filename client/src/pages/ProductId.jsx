import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductId() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}`, text);
        }
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="flex border rounded-lg shadow p-4 mb-4 min-h-[140px]">
      <img
        src={product.image}
        alt={product.name}
        className="w-96 h-96 object-cover rounded-md mr-20 "
      />
      <div className="flex flex-col gap-2 flex-1 mt-20 ">
        <h1 className="text-xl font-semibold mb-1 ">{product.name}</h1>
        <p className="text-md text-gray-600 mb-2">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 ">{product.price} €</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        
        <button
          className="font-bold bg-blue-400 hover:bg-blue-700 transition-all rounded px-10 py-3 text-white"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductId;
