import Button from "./Button";
import type { Product } from "../pages/Store";
import { useState, useEffect } from "react";
import { Link } from "react-router";

type FeaturedCarouselProps = {
  featuredProducts: Product[];
};

function FeaturedCarousel({ featuredProducts }: FeaturedCarouselProps) {
  const [currentProduct, setCurrentProduct] = useState(0);

  function handleNextBtn() {
    setCurrentProduct((prev) =>
      prev < featuredProducts.length - 1 ? prev + 1 : 0,
    );
  }

  function handlePrevBtn() {
    if (currentProduct > 0) {
      setCurrentProduct(currentProduct - 1);
    } else {
      setCurrentProduct(featuredProducts.length - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(handleNextBtn, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative">

      <Button title={"<"} onPress={handlePrevBtn} className="" />

      <div className="rounded bg-black text-white text-sm font-light absolute top-0 p-1">
        Featured
      </div>

      <div className="bg-gray-300 p-4 rounded">

        {featuredProducts.map((product, i) => (
          <article
              key={i}
              id={`product-card-${i}`}
              className={`flex flex-col min-h-80 ${i === currentProduct ? "block" : "hidden"} bg-white p-2`} 
            >
              
          <Link to={`/store/:${product.id}`} className="flex-1 basis-0">
                <img
                  src={product.thumbnail}
                  alt={`Image of ${product.title}`}
                  className="w-full h-full object-cover"
                />
          </Link>
              

              <section className="flex-1 basis-0 flex flex-col justify-end gap-4">
                <h3 className="text-gray-600 font-light">
                  {product.title}
                </h3>
                <span className="text-accent font-light text-sm border border-accent rounded-2xl p-0.5">{`£${product.price}`}</span>
              </section>
            </article>
        ))}
      </div>
      <Button title={">"} onPress={handleNextBtn} className="" />
    </div>
  );
}

export default FeaturedCarousel;
