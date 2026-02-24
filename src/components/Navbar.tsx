import { Link } from "react-router-dom";
import {
  IoCartOutline as CartIcon,
  IoStorefrontOutline as ShopIcon,
} from "react-icons/io5";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <nav className="flex items-center justify-between pl-8 pr-8 p-6 shadow-lg">
      <Link to={"/"}>
        <Logo size="large" variant="light" />
      </Link>
      <div className="hidden md:block">
        <Searchbar />
      </div>
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
