import { useCart } from "../contexts/CartContext";

type CartChipProps = {
  className?: string;
};

function CartChip({ className = "" }: CartChipProps) {
  const { cartQuantity } = useCart();
  return (
    <div
      className={`text-electronix-white bg-accent w-6 h-6 text-sm rounded-4xl flex justify-center items-center ${className}`}
    >
      {cartQuantity}
    </div>
  );
}

export default CartChip;
