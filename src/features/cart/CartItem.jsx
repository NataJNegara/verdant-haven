import { LuMinus, LuPlus } from "react-icons/lu";
import { formatCurrency } from "../../utils/helpers";

export default function CartItem({ cart }) {
  return (
    <div>
      <li className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-[2fr_1fr_1fr_1fr] items-center">
        <div className="flex gap-4">
          <img src={cart.imageUrl} alt={cart.name} className="w-28" />
          <div className="flex flex-col justify-center gap-4">
            <p className="font-semibold">{cart.name}</p>
            <button className="font-semibold text-gray-400 w-fit">
              Remove
            </button>
          </div>
        </div>
        <div className="flex gap-4 px-4 py-2 border md:mx-auto w-fit">
          <button>
            <LuMinus />
          </button>
          <p>{cart.quantity}</p>
          <button>
            <LuPlus />
          </button>
        </div>
        <div className="flex justify-between md:block">
          <p className="md:hidden">Price</p>
          <p className="md:text-center">{formatCurrency(cart.price)}</p>
        </div>
        <div className="flex justify-between md:block">
          <p className="md:hidden">Total price</p>
          <p className="font-semibold md:text-center">
            {formatCurrency(cart.totalPrice)}
          </p>
        </div>
      </li>
      <div className="divider before:h-[1px] after:h-[1px]"></div>
    </div>
  );
}
