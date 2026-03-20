import Button from "./Button";
import type { Product } from "../pages/Store";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

type ItemAdderProps = {
    product: Product
}

function ItemAdder({product}: ItemAdderProps ) {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const {addItems} = useCart();

  function increaseQuantity() {
    if (currentQuantity < 10) setCurrentQuantity(currentQuantity + 1);
  }

  function decreaseQuantity() {
    if (currentQuantity === 1) return;
    setCurrentQuantity(currentQuantity - 1);
  }

  return (
    <div className="flex p-4 gap-4">
      <div className="quantity-wrapper grid grid-cols-3 flex-1">
        <label className="sr-only" htmlFor={`quantity-${product.id}`}>
          {`Quantity for: ${product.title}`}
        </label>

        <Button
          title="-"
          onPress={decreaseQuantity}
          defaultStyle={false}
          accessibilityLabel="Decrease quantity"
          className="bg-electronix-light-grey border border-electronix-grey hover:text-accent"
        />

        <input
          type="number"
          min={1}
          value={currentQuantity}
          id={`quantity-${product.id}`}
          onChange={(e) => {
            const value = Math.max(1, Math.min(10, Number(e.target.value)));
            setCurrentQuantity(value);
          }}
          className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:!appearance-none [&::-webkit-inner-spin-button]:!appearance-none [&::-webkit-outer-spin-button]:!m-0 [&::-webkit-inner-spin-button]:!m-0"
        />

        <Button
          title="+"
          onPress={increaseQuantity}
          defaultStyle={false}
          accessibilityLabel="Increase quantity"
          className="bg-electronix-light-grey border border-electronix-grey hover:text-accent"
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
