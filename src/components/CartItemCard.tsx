import { FaTrash } from "react-icons/fa";
import type { Product } from "../pages/Store";
import Button from "./Button";

type CartItemCardProps = {
  product: Product;
  quantity: number;
};

function CartItemCard({ product, quantity }: CartItemCardProps) {
  return (
    <article>
      <div className="thumbnail-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="thumbnail"
        />
      </div>
      <span>{product.title}</span>
      <Button
        title="-"
        defaultStyle={false}
        onPress={() => console.log("button pressed")}
      ></Button>
      <Button
        title="+"
        defaultStyle={false}
        onPress={() => console.log("button pressed")}
      ></Button>
      <Button
        title="Remove"
        defaultStyle={false}
        onPress={() => console.log("button pressed")}
      ></Button>
    </article>
  );
}

export default CartItemCard;
