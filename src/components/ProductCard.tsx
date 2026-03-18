import { Link } from "react-router";
import type { Product } from "../pages/Store";
import ItemAdder from "./ItemAdder";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {

  return (
    <article className="max-w-75 flex flex-col items-center border border-electronix-grey bg-electronix-white rounded-xl grow h-full md:hover:-translate-y-1 hover:shadow-xl  transition-all duration-200 ease-out">
      <Link
        to={`:${product.id}`}
        onClick={() => window.scrollTo(0, 0)}
        className="p-4 flex"
      >
        <img
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          className="product-thumbnail"
        />
      </Link>
      <div className="product-details p-4 grow w-full">
        <h2 className="font-medium">{product.title}</h2>
        <span className="text-accent font-bold text-xl">{`£${product.price}`}</span>
      </div>

      <footer className="flex p-4 border-t border-electronix-grey gap-4">
        <ItemAdder product={product}/>
      </footer>
    </article>
  );
}

export default ProductCard;
