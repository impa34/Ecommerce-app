import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-1 text-black text-2xl font-semibold">
      <ul className="flex gap-3 p-2 justify-center ">
        <li className="hover:bg-gray-200 transition-all duration-200 rounded px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-200 transition-all duration-200 rounded px-4">
          <Link to="/products">Products</Link>
        </li>
        <li className="hover:bg-gray-200 transition-all duration-200 rounded px-4">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
