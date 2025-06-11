import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductId from "./pages/ProductId";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductId />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
