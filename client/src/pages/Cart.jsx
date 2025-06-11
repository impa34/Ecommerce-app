import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const { updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity || 1);
    return sum + price * quantity;
  }, 0);

  const handleCheckout = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cart }),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${errorText}`);
      }
      const data = await res.json();
      window.location = data.url;
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex text-lg mb-4">
        {cart.length === 0 ? (
          <p className="mt-8">The cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                <h4 className="py-2">{item.name}</h4>
                <p>{item.price} €</p>
                <img
                  className="w-32 h-32"
                  src={item.image}
                  alt={item.name}
                ></img>
                <label>Quantity: </label>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, Number(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button
                  className="font-bold bg-blue-400 hover:bg-blue-700 transition-all rounded px-2 py-1 text-white ml-2 text-sm"
                  onClick={() => removeFromCart(item._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="font-bold text-xl mt-8 px-4">Total: {total.toFixed(2)}€</h3>
      </div>

      <div>
        <button
          className="font-bold bg-blue-400 hover:bg-blue-700 transition-all rounded px-10 py-3 text-white mt-6 text-xl"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
