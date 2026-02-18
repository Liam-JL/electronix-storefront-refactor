import { Link } from "react-router-dom";
import {
  IoCartOutline as CartIcon,
  IoStorefrontOutline as ShopIcon,
} from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex items-center justify-between pl-8 pr-8 p-6 shadow-lg">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="logoipsum-light.svg" alt="Electronix Logo" />
        <span className="hidden md:block text-4xl audiowide-regular">
          Electronix
        </span>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link to={"/store"} className="flex flex-col items-center">
            <ShopIcon className="h-6 w-6" />
            <span>SHOP</span>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="flex flex-col items-center">
            <CartIcon className="h-6 w-6" />
            <span>CART</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
