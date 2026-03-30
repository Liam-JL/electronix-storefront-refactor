import { useCart } from "../contexts/CartContext";

type CartChipProps = {
  className?: string;
};

function CartChip({ className = "" }: CartChipProps) {
  const { cartQuantity } = useCart();
  return (
    cartQuantity > 0 && (
      <div
        className={`text-electronix-white bg-accent w-4 h-4 text-[0.6rem] lg:w-5 lg:h-5 lg:text-[0.8rem] rounded-4xl flex justify-center items-center ${className}`}
      >
        {cartQuantity}
      </div>
    )
  );
}

export default CartChip;
