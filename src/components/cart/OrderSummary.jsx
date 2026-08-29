import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function OrderSummary() {
  const {
    itemCount,
    subtotal,
    tax,
    total,
    clearCart,
  } = useCart();

  return (
    <aside className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-xl font-bold">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>
            Subtotal ({itemCount} items)
          </span>

          <span>
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>

          <span>
            ${tax.toFixed(2)}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <Link to="/checkout"
        className="mt-8 block w-full rounded-md bg-gray-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-gray-800" >
        Proceed to Checkout
        </Link>

      <button type="button" onClick={clearCart}
        className="mt-3 w-full rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100" >
        Clear Cart
      </button>
    </aside>
  );
}