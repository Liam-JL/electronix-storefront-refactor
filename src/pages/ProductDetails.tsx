import { useLoaderData, useNavigate } from "react-router";
import type { Product } from "./Store";
import Button from "../components/Button";
import { useState } from "react";
import ItemAdder from "../components/ItemAdder";

function ProductDetails() {
  const product: Product = useLoaderData();
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[40%_60%] md:grid-rows-[1fr_auto] gap-4 p-4 h-full">
      {/* Main Image */}
      <div className="current-image-wrapper h-full max-h-100">
        <img
          src={currentImage}
          alt={product.title}
          className="h-full w-full object-contain rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-grid md:row-start-2 grid grid-cols-3 gap-4 p-4">
        {product.images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentImage(image)}
              className="cursor-pointer border border-electronix-grey rounded-lg hover:border-accent overflow-hidden"
            >
              <img
                src={image}
                alt={`${product.title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Details */}
      <article className="details-section md:row-span-2 flex flex-col gap-4 p-8 h-full bg-electronix-white rounded-xl border border-electronix-grey">
        <Button
          title="Back"
          onPress={() => navigate(-1)}
          className="self-end"
        />

        <div>
          <h1>{product.title}</h1>
          <span className="text-accent font-bold text-2xl">
            £{product.price}
          </span>
        </div>

        <p className="grow overflow-y-auto">{product.description}</p>

        <footer className="border-t border-electronix-grey">
          <ItemAdder product={product}/>
        </footer>
      </article>
    </section>
  );
}

export default ProductDetails;
