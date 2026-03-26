import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import FilterBar from "../components/FilterBar";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  availabilityStatus: string;
  images: string[];
  thumbnail: string;
};

export type Category =
  | "laptops"
  | "mobile-accessories"
  | "smartphones"
  | "tablets"
  | "all";

function Store() {
  const products = useLoaderData() as Product[];
  const [category, setCategory] = useState<Category>("all");

  return (
    <div className="store">
      <header className="text-center">
        <h1>Our Collection</h1>
        <p>
          Explore the latest electronics, hand-picked to power your everyday
          life with style and performance.
        </p>
      </header>
      <section>
        <FilterBar
          categories={[
            "all",
            "laptops",
            "mobile-accessories",
            "smartphones",
            "tablets",
          ]}
          onPress={setCategory}
          activeCategory={category}
        />
        <div className="product-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mt-4">
          {products.map((product) => {
            if (category === "all")
              return <ProductCard key={product.id} product={product} />;

            return product.category === category ? (
              <ProductCard key={product.id} product={product} />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default Store;
