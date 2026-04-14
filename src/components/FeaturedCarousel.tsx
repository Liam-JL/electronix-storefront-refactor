import Button from "./Button";
import type { Product } from "../pages/Store";
import { useState } from "react";

type FeaturedCarouselProps = {
  featuredProducts: Product[];
};

function FeaturedCarousel({ featuredProducts }: FeaturedCarouselProps) {
  const [currentProduct, setCurrentProduct] = useState(0);

  function handleNextBtn() {
    const card = document.getElementById(`product-card-${currentProduct}`);
    if (currentProduct < featuredProducts.length - 1) {
      setCurrentProduct(currentProduct + 1)
    } else {
      setCurrentProduct(0)
    }
  }

  function handlePrevBtn() {
    const card = document.getElementById(`product-card-${currentProduct}`);
    if (currentProduct > 0) {
      setCurrentProduct(currentProduct - 1)
    } else {
      setCurrentProduct(featuredProducts.length - 1)
    }
  }

  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Button title={"<"} onPress={handlePrevBtn} className="h-10" />
      <div>
        {featuredProducts.map((product, i) => (
          <article
            key={i}
            id={`product-card-${i}`}
            className={i === currentProduct ? "block" : "hidden"}
          >
            <img
              src={product.thumbnail}
              alt={`Image of ${product.title}`}
              className="w-60 h-60"
            />
            <h2 className="text-electronix-black">{product.title}</h2>
            <span>{`£${product.price}`}</span>
          </article>
        ))}
      </div>
      <Button title={">"} onPress={handleNextBtn} className="h-10" />
    </div>
  );
}

export default FeaturedCarousel;
