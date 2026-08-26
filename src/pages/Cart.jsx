import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";

function Cart() {
  const {
    items,
    itemCount,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            You haven't added any products to
            your cart yet.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-md bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">

      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Your Shopping Cart
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Cart
        </h1>

        <p className="mt-3 text-gray-500">
          {itemCount}{" "}
          {itemCount === 1
            ? "item"
            : "items"}{" "}
          in your cart
        </p>

      </div>

      <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">

        <section className="min-w-0">

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-gray-950 hover:underline"
          >
            ← Continue Shopping
          </Link>

        </section>

        <OrderSummary />

      </div>
    </main>
  );
}

export default Cart;