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
    <div className="w-full flex justify-center items-center gap-4 relative">
      <Button title={"<"} onPress={handlePrevBtn} className="h-10" />
      <div className="p-1.5 rounded bg-black  text-white text-sm font-light absolute top-7 z-2 -translateX-[50%]">
        Featured
      </div>
      <div className="bg-gray-300 p-4 rounded relative">
        {featuredProducts.map((product, i) => (
          <Link to={`/store/:${product.id}`}>
            <article
              key={i}
              id={`product-card-${i}`}
              className={`${i === currentProduct ? "block" : "hidden"} bg-electronix-white p-4 flex flex-col justify-between gap-2 min-h-[400px]`}
            >
              <div className="">
                <img
                  src={product.thumbnail}
                  alt={`Image of ${product.title}`}
                  className="object-cover h-fit w-fit"
                />
              </div>
              <section className="flex flex-col gap-4">
                <h3 className="text-electronix-black text-xl text-gray-600 font-extralight">
                  {product.title}
                </h3>
                <span className="text-accent font-extralight border border-accent rounded-2xl p-1.5 text-sm">{`£${product.price}`}</span>
              </section>
            </article>
          </Link>
        ))}
      </div>
      <Button title={">"} onPress={handleNextBtn} className="h-10" />
    </div>
  );
}

export default FeaturedCarousel;
