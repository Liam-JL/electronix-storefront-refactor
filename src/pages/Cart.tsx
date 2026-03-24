import { useCart } from "../contexts/CartContext";
import { useLoaderData } from "react-router";
import type { Product } from "./Store";
import CartItemCard from "../components/CartItemCard";
import { CiDeliveryTruck } from "react-icons/ci";
import Button from "../components/Button";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const products = useLoaderData() as Product[];

  const cartSubtotal = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return total;
    return total + product.price * item.quantity;
  }, 0);
  const deliveryCost = cartSubtotal < 50 ? 5 : 0;

  return (
    <div className="grid gap-8">
      <header className="flex flex-col items-center md:col-span-2">
        <h1>Cart</h1>
        <p className="flex justify-center items-center gap-4 text-center md:mb-8">
          <CiDeliveryTruck className="hidden md:inline" />
          You can choose your payment and delivery preferences at checkout.
        </p>
        <CiDeliveryTruck className="md:hidden mb-4" />
      </header>

      <section className="">
        <ul className="flex flex-col gap-4">
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return null;
            return (
              <li key={item.id}>
                <CartItemCard product={product} quantity={item.quantity} />
              </li>
            );
          })}
        </ul>
      </section>

      <aside
        className={`bg-electronix-white border border-electronix-grey rounded-xl p-4 flex flex-col h-fit ${cartItems.length < 1 && "hidden"}`}
      >
        <h2 className="text-center p-4">Order Summary</h2>
        <div className="border-t border-b p-4">
          <span className="flex justify-between">
            <span>Subtotal:</span>
            <span>{`£${cartSubtotal.toFixed(2)}`}</span>
          </span>

          <span className="flex justify-between">
            <span>Delivery:</span>
            <span>{`£${deliveryCost.toFixed(2)}`}</span>
          </span>
        </div>
        <span className="flex justify-between p-4 text-2xl">
          <span>Total:</span>
          <span className="font-bold">{`£${(cartSubtotal + deliveryCost).toFixed(2)}`}</span>
        </span>
        <Button
          title="Checkout"
          onPress={() => console.log("checkout button pressed")}
        />
      </aside>

      <div className={`empty-cart-message flex flex-col items-center gap-4 col-span-2 ${cartItems.length > 0 && "hidden"}`}>
        <span>Your cart is currently empty.</span>
        <Button
          title="Continue Shopping"
          onPress={() => {
            navigate("/store");
          }}
          accessibilityLabel="Go to Store"
        />
      </div>
    </div>
  );
}

export default Cart;
