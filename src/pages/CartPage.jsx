import CartItem from "../features/cart/CartItem";
import NotFound from "../components/NotFound";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Checkout from "../components/Checkout";

export default function CartPage() {
  const navigate = useNavigate();
  const { carts, totalCartItem } = useCart();

  return (
    <div className="customContainer">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex items-center gap-4">
          <h1 className="text-5xl font-semibold text-gray-700">Cart</h1>
          {totalCartItem > 0 && (
            <p className="self-end">({totalCartItem} items)</p>
          )}
        </div>
        <div>
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] font-semibold">
            <p>Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Price</p>
            <p className="text-center">Subtotal</p>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <ul className="flex flex-col gap-4">
            {carts.length > 0 ? (
              carts.map((cart) => <CartItem cart={cart} key={cart.id} />)
            ) : (
              <NotFound
                message="Cart is empty"
                btnText="Back to shopping"
                onNavigate={() => navigate("/shop")}
              />
            )}
          </ul>
        </div>
        {/* cart summary */}
        <Checkout carts={carts} />
      </div>
    </div>
  );
}
