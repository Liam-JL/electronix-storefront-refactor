import { Link } from "react-router";
import type { Product } from "../pages/Store";
import ItemAdder from "./ItemAdder";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="grid grid-rows-[4fr_1fr] h-full max-w-75 border border-electronix-grey bg-electronix-white rounded-xl md:hover:-translate-y-1 hover:shadow-xl  transition-all duration-200 ease-out">
      <Link
        to={`:${product.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="self-center"
      >
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          className="product-thumbnail "
        />
      </Link>

        <h2 className="font-medium px-2 text-center">{product.title}</h2>
        <span className="text-accent font-bold text-xl text-end px-4 py-2">{`£${product.price}`}</span>


      <footer className="flex border-t border-electronix-grey w-full p-4">
        <ItemAdder product={product} />
      </footer>
    </article>
  );
}

export default ProductCard;
