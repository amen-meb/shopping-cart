import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const savedOrder =
    localStorage.getItem("lastOrder");

  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-6 py-20">

      <div className="mx-auto max-w-xl text-center">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-600">
          ✓
        </div>

        {/* Heading */}
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-600">
          Order Successful
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Thank You!
        </h1>

        <p className="mt-4 leading-7 text-gray-500">
          Your order has been successfully
          placed. We have received your order
          and will process it shortly.
        </p>

        {/* Order Number */}
        {order && (
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Order Number
            </p>

            <p className="mt-1 font-bold">
              {order.id}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/orders"
            className="rounded-md border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-50"
          >
            View Orders
          </Link>

          <Link
            to="/shop"
            className="rounded-md bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}