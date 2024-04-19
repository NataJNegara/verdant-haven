import { useCart } from "../context/CartContext";
import getStripe from "../lib/getStripe";
import { formatCurrency } from "../utils/helpers";

export default function Checkout({ carts }) {
  const { totalCartItem, getPriceAfterDiscount } = useCart();

  console.log(carts);

  let lineItems = [];
  carts.forEach((carts) =>
    lineItems.push({
      price: carts.priceKey, //TODO NEED TO ADD THIS SHIT ON EVERY PRODUCT
      quantity: carts.quantity,
    })
  );

  const totalDiscountPrice = getPriceAfterDiscount();

  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: `http://localhost:5173/shop`,
      cancelUrl: `http://localhost:5173/shop`,
      billingAddressCollection: "required",
    });
    console.warn(error.message);
  }

  return (
    <>
      {carts.length > 0 && (
        <div className="self-end w-full p-4 border lg:max-w-screen-sm">
          <h3 className="mb-8 text-xl font-semibold">Cart summary</h3>
          <div className="flex justify-between">
            <p>Total item</p>
            <p className="font-semibold">{totalCartItem}&times;</p>
          </div>
          <div className="divider before:h-[1px] after:h-[1px]"></div>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p className="font-semibold">
              {formatCurrency(totalDiscountPrice)}
            </p>
          </div>
          <button
            className="w-full mt-4 btn btn-neutral"
            onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </>
  );
}
