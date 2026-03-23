import type { Product } from "../pages/Store";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

type CartItemCardProps = {
  product: Product;
  quantity: number;
};

function CartItemCard({ product, quantity }: CartItemCardProps) {
  const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } =
    useCart();

  return (
    <article className="grid grid-cols-[1fr_2fr] gap-x-4">
      <div className="thumbnail-wrapper h-full w-full max-h-32 row-span-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="thumbnail w-full h-full object-contain"
        />
      </div>

      <header className="flex flex-col">
        <span className="text-md">{product.title}</span>
        <span className="font-medium">£{product.price}</span>
      </header>

      <div className="flex gap-4">
        <span className="">Quantity:</span>
        <Button
          title={quantity > 1 ? "-" : FaTrash}
          defaultStyle={false}
          onPress={
            quantity > 1
              ? () => decreaseItemQuantity(product.id)
              : () => removeFromCart(product.id)
          }
          className="reduce-quantity-btn bg-electronix-light-grey border border-electronix-black w-8 h-8 hover:text-accent"
        ></Button>
        <span className="quantity-display border border-electronix-grey bg-electronix-white min-w-8 w-8 h-8 flex justify-center items-center rounded-xl">
          {quantity}
        </span>
        <Button
          title="+"
          defaultStyle={false}
          onPress={() => increaseItemQuantity(product.id)}
          className="increase-quantity-btn bg-electronix-light-grey border border-electronix-black w-8 h-8 hover:text-accent"
        ></Button>
      </div>
    </article>
  );
}

export default CartItemCard;
