import { useLoaderData } from "react-router";
import { products } from "../data/products.json" assert { type: "json" };

function Store() {
  const products = useLoaderData();
  

  return (
    <div className="store">
      <header>
        <h1>Our Collection</h1>
        <p>
          Explore the latest electronics, hand-picked to power your everyday
          life with style and performance.
        </p>
      </header>
      <section>
        <div className="filter-bar"></div>
        <div className="product-grid">
          {products.map(product => <p>{product.title}</p>)}
        </div>
      </section>
    </div>
  );
}

export default Store;

//loader function
export const productsLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800)); //emulate 800ms delay
  return products;
};
