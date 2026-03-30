import { Link } from "react-router-dom";
import {
  IoCartOutline as CartIcon,
  IoStorefrontOutline as ShopIcon,
} from "react-icons/io5";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import CartChip from "./CartChip";

function Navbar() {
  return (
    <nav className="grid grid-cols-2 lg:grid-cols-3 px-6 py-3 shadow-lg gap-x-8 gap-y-4 items-center">
      <Link to={"/"}>
        <Logo size="large" variant="light" />
      </Link>
      <ul className="flex gap-4 justify-self-end">
        <li>
          <Link to={"/store"} className="flex flex-col items-center">
            <ShopIcon className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
            <span>SHOP</span>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="flex flex-col items-center">
            <CartIcon className="h-6 w-6 transform transition-transform duration-300 hover:-rotate-25 hover:scale-110" />
            <span>CART</span>
            <CartChip className="absolute top-2 right-2" />
          </Link>
        </li>
      </ul>
      <div className="lg:translate-x-[7%] justify-self-center w-full max-w-[400px] col-span-2 lg:col-span-1 lg:col-start-2 lg:row-end-1">
        <Searchbar />
      </div>
    </nav>
  );
}

export default Navbar;
