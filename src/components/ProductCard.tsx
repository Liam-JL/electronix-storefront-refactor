import { Link } from "react-router";
import { useState } from "react";
import type { Product } from "../pages/Store";
import Button from "./Button";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  function increaseQuantity() {
    if (currentQuantity < 10) setCurrentQuantity(currentQuantity + 1);
  }

  function decreaseQuantity() {
    if (currentQuantity === 1) return;
    setCurrentQuantity(currentQuantity - 1);
  }

  return (
    <article className="max-w-75 flex flex-col items-center border border-electronix-grey bg-electronix-white rounded-xl grow h-full md:hover:-translate-y-1 hover:shadow-xl  transition-all duration-200 ease-out">
      <Link
        to={`:${product.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="p-4 flex"
      >
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          className="product-thumbnail"
        />
      </Link>
      <div className="product-details p-4 grow w-full">
        <h2 className="font-medium">{product.title}</h2>
        <span className="text-accent font-bold text-xl">{`£${product.price}`}</span>
      </div>

      <footer className="flex p-4 border-t border-electronix-grey gap-4">
        <div className="quantity-wrapper grid grid-cols-3 flex-1">
          <label
            className="sr-only"
            htmlFor={`quantity-${product.id}`}
          >{`Quantity for: ${product.title}`}</label>
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
            console.log("Add button pressed");
          }}
          className="flex-1"
        />
      </footer>
    </article>
  );
}

export default ProductCard;
