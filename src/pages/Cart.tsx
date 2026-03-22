import { useCart } from "../contexts/CartContext";
import { useLoaderData } from "react-router";
import type { Product } from "./Store";
import CartItemCard from "../components/CartItemCard";
import { CiDeliveryTruck } from "react-icons/ci";

function Cart() {
  const { cartItems } = useCart();
  const products = useLoaderData() as Product[];

  return (
    <div className="">
      <h1>Cart</h1>
      <p>
        <CiDeliveryTruck /> You can choose your payment and delivery preferences
        at checkout.
      </p>
      <ul>
        {cartItems.map((item) => {
          const product = products.find((p) => p.id === item.id);
          if (!product) return null;

          return (
            <li>
              <CartItemCard product={product} quantity={item.quantity} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
