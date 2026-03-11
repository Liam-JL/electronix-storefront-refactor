import { useLoaderData, useNavigate } from "react-router";
import type { Product } from "./Store";
import Button from "../components/Button";
import { useState } from "react";

function Product() {
  const product: Product = useLoaderData();
  const navigate = useNavigate();

  const [currentQuantity, setCurrentQuantity] = useState(1);

  const [currentImage, setCurrentImage] = useState(product.images[0]);

  function increaseQuantity() {
    if (currentQuantity < 10) setCurrentQuantity(currentQuantity + 1);
  }

  function decreaseQuantity() {
    if (currentQuantity === 1) return;
    setCurrentQuantity(currentQuantity - 1);
  }
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <section className="image-section flex border">
        <div className="border">
          <img src={currentImage} alt={product.title} className="" />
        </div>
        <div className="thumbnail-grid grid grid-cols-3 gap-4">
          {product.images.map((image, index) => {
            return (
              <button
                onClick={() => {
                  setCurrentImage(product.images[index]);
                }}
              >
                <img src={image}></img>
              </button>
            );
          })}
        </div>
      </section>

      <article className="flex flex-col flex-1">
        <div className="details relative flex flex-col items-start gap-4 mb-4 border-b pb-4">
          <h1>{product.title}</h1>
          <span className="text-accent font-bold text-2xl">
            £{product.price}
          </span>
          <Button
            title="Back"
            onPress={() => {
              navigate(-1);
            }}
            className="absolute right-0 top-0"
          />
        </div>

        <p className="grow">{product.description}</p>
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
    </div>
  );
}

export default Product;
