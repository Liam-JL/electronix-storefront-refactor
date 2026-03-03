import { useLoaderData } from "react-router";
import type { Product } from "./Store";

function Product() {
  const product: Product = useLoaderData();

  return (
    <div>
      <h2>{product.title}</h2>
    </div>
  );
}

export default Product;
