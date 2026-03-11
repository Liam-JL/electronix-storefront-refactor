import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

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

function Store() {
  const products = useLoaderData() as Product[];

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
        <div className="filter-bar"></div>
        <div className="product-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mt-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Store;
