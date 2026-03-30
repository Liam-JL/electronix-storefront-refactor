import Button from "./Button";
import type { Product } from "../pages/Store";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

type ItemAdderProps = {
  product: Product;
};

function ItemAdder({ product }: ItemAdderProps) {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { addItems } = useCart();

  function increaseQuantity() {
    if (currentQuantity < 10) setCurrentQuantity(currentQuantity + 1);
  }

  function decreaseQuantity() {
    if (currentQuantity === 1) return;
    setCurrentQuantity(currentQuantity - 1);
  }

  return (
    <div className="w-full grid grid-cols-2 gap-2">
      <div className="quantity-wrapper grid grid-cols-3">
        <Button
          title="-"
          onPress={decreaseQuantity}
          defaultStyle={false}
          accessibilityLabel="Decrease quantity"
          className="w-full h-full bg-electronix-light-grey border border-electronix-grey hover:text-accent"
        />

        <span
          className="flex justify-center items-center w-full h-full"
          aria-label={`${product.title} quantity`}
        >
          {currentQuantity}
        </span>

        <Button
          title="+"
          onPress={increaseQuantity}
          defaultStyle={false}
          accessibilityLabel="Increase quantity"
          className="w-full h-full bg-electronix-light-grey border border-electronix-grey hover:text-accent"
        />
      </div>

      <Button
        title="Add"
        onPress={() => {
          addItems(product.id, currentQuantity);
        }}
        className="flex-1"
      />
    </div>
  );
}

export default ItemAdder;
