import { useCart } from "../contexts/CartContext";
import { useLoaderData } from "react-router";
import type { Product } from "./Store";
import CartItemCard from "../components/CartItemCard";
import { CiDeliveryTruck } from "react-icons/ci";

function Cart() {
  const { cartItems } = useCart();
  const products = useLoaderData() as Product[];

  return (
    <div className="flex flex-col items-center">
      <h1>Cart</h1>
      <p className="flex justify-center items-center gap-4 text-center md:mb-8">
        <CiDeliveryTruck className="hidden md:inline" />
        You can choose your payment and delivery preferences at checkout.
      </p>
      <CiDeliveryTruck className="md:hidden mb-4" />
      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => {
          const product = products.find((p) => p.id === item.id);
          if (!product) return null;

          return (
            <li>
              <CartItemCard key={item.id} product={product} quantity={item.quantity} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
