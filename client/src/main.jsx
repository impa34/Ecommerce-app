import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";


ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
      <App />
    </CartProvider>
);
