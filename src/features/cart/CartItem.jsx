import { LuMinus, LuPlus } from "react-icons/lu";
import { formatCurrency } from "../../utils/helpers";
import { useCart } from "../../context/CartContext";

export default function CartItem({ cart }) {
  const discountPrice = ((100 - 20) / 100) * cart.price;
  const subTotal = discountPrice * cart.quantity;

  const { increaseItemQuantity, decreaseItemQuantity, deleteItem } = useCart();

  return (
    <div>
      <li className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-[2fr_1fr_1fr_1fr] items-center">
        <div className="flex gap-4">
          <img src={cart.imageUrl} alt={cart.name} className="w-28" />
          <div className="flex flex-col justify-center gap-4">
            <p className="font-semibold">{cart.name}</p>
            <button
              className="font-semibold text-gray-400 w-fit"
              onClick={() => deleteItem(cart.id)}>
              Remove
            </button>
          </div>
        </div>
        <div className="flex gap-4 px-4 py-2 border md:mx-auto w-fit">
          <button onClick={() => decreaseItemQuantity(cart)}>
            <LuMinus />
          </button>
          <p>{cart.quantity}</p>
          <button onClick={() => increaseItemQuantity(cart)}>
            <LuPlus />
          </button>
        </div>
        <div className="flex justify-between md:block">
          <p className="md:hidden">Price</p>
          <div>
            <p className="text-gray-400 line-through md:text-center">
              {formatCurrency(cart.price)}
            </p>
            <p className="md:text-center">{formatCurrency(discountPrice)}</p>
          </div>
        </div>
        <div className="flex justify-between md:block">
          <p className="md:hidden">Total price</p>
          <p className="font-semibold md:text-center">
            {formatCurrency(subTotal)}
          </p>
        </div>
      </li>
      <div className="divider before:h-[1px] after:h-[1px]"></div>
    </div>
  );
}
