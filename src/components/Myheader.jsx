import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Myheader() {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);

  return (
    <header className="bg-blue-500 text-white flex justify-between items-center  px-10 py-5">
      <Link to={"/"} className="text-3xl uppercase opacity-60">
        Logo
      </Link>
      <nav className="flex gap-5 uppercase">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/post"}>Posts</Link>
        <Link to={"/todolist"}>ToDo List</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <div className="buttons flex gap-5 items-center">
        <Link to={"/cart"} className="relative">
          <AiOutlineShoppingCart className="text-3xl" />
          <span className="absolute -top-4 shadow-md  -right-3 bg-white text-red-500 rounded-full text-sm px-2 py-1">
            {cartItemsCount}
          </span>
        </Link>
        <Link to={"/login"}>
          <button className="bg-white text-blue-500 px-5 py-2 rounded-full">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Myheader;
