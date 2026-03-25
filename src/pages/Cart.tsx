//Types
import type { Product } from "./Store";

//Contexts
import { useCart } from "../contexts/CartContext";

//Icons
import { CiDeliveryTruck } from "react-icons/ci";

//Modules
import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";

//Components
import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";
import Modal from "../components/Modal";

function Cart() {
  const [openModal, setOpenModal] = useState<boolean>(false);
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
        <Button title="Checkout" onPress={() => setOpenModal(true)} />
      </aside>

      <div
        className={`empty-cart-message flex flex-col items-center gap-4 col-span-2 ${cartItems.length > 0 && "hidden"}`}
      >
        <span>Your cart is currently empty.</span>
        <Button
          title="Continue Shopping"
          onPress={() => {
            navigate("/store");
          }}
          accessibilityLabel="Go to Store"
        />
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="rounded-[50%] h-20 w-20"
            src="https://avatars.githubusercontent.com/u/48105423?s=400&u=4a19feb6b185ec70a730eba94b920e9d634f1f9a&v=4"
            alt="LiamLJ Github profile picture"
          />
          <p>
            Thank you for checking out this demo e-commerce app. You can explore
            more of my projects on my{" "}
            <a className="underline" href="https://github.com/Liam-JL">
              GitHub
            </a>
            .{" "}
            <span role="img" aria-label="smile">
              😊
            </span>
          </p>
          <Button
            title="Continue"
            className=""
            onPress={() => setOpenModal(false)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
