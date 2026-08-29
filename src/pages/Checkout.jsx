import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    items,
    itemCount,
    subtotal,
    tax,
    total,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    paymentMethod: "cash",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      id: `ORD-${Date.now()}`,
      customer: formData,
      paymentMethod: formData.paymentMethod,
      items,
      itemCount,
      subtotal,
      tax,
      total,
      orderDate: new Date().toISOString(),
    };

    const savedOrders = localStorage.getItem("orders");
    const orders = savedOrders
      ? JSON.parse(savedOrders)
      : [];

    localStorage.setItem("orders", JSON.stringify([...orders, order]));
    localStorage.setItem("lastOrder", JSON.stringify(order));

    clearCart();

    navigate("/order-success");
  };

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
            Add some products before proceeding
            to checkout.
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

        <Link
          to="/cart"
          className="text-sm font-semibold text-gray-600 hover:text-gray-950 hover:underline"
        >
          ← Back to Cart
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
          Secure Checkout
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Checkout
        </h1>

        <p className="mt-3 text-gray-500">
          Complete your information to place your
          order.
        </p>

      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <section className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold">
              Customer Information
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Amanuel"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Mebratu"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+251 9..."
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

            </div>

          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6">

            <h2 className="text-xl font-bold">
              Shipping Address
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold"
                >
                  Address
                </label>

                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street address"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold"
                  >
                    City
                  </label>

                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Addis Ababa"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Country
                  </label>

                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Ethiopia"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                  />
                </div>

              </div>

              <div className="sm:max-w-xs">
                <label
                  htmlFor="postalCode"
                  className="mb-2 block text-sm font-semibold"
                >
                  Postal Code
                </label>

                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="1000"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950"
                />
              </div>

            </div>

          </section>
        
          <section className="rounded-xl border border-gray-200 bg-white p-6">

            <h2 className="text-xl font-bold">
              Payment Method
            </h2>

            <div className="mt-6 space-y-3">

              <label className="flex cursor-pointer items-center gap-3 rounded-md border border-gray-300 p-4 transition hover:bg-gray-50">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={
                    formData.paymentMethod ===
                    "cash"
                  }
                  onChange={handleChange}
                />

                <div>
                  <p className="font-semibold">
                    Cash on Delivery
                  </p>

                  <p className="text-sm text-gray-500">
                    Pay when your order arrives.
                  </p>
                </div>

              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-md border border-gray-300 p-4 transition hover:bg-gray-50">

                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={
                    formData.paymentMethod ===
                    "card"
                  }
                  onChange={handleChange}
                />

                <div>
                  <p className="font-semibold">
                    Credit / Debit Card
                  </p>

                  <p className="text-sm text-gray-500">
                    Card payment will be added later.
                  </p>
                </div>

              </label>

            </div>

          </section>

          <button
            type="submit"
            className="w-full rounded-md bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Place Order
          </button>

        </form>

        <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-28">

          <h2 className="text-xl font-bold">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4"
              >

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-white p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="line-clamp-2 text-sm font-semibold">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>

                </div>

                <p className="text-sm font-semibold">
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </p>

              </div>
            ))}

          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex justify-between text-gray-600">
            <span>
              Items
            </span>

            <span>
              {itemCount}
            </span>
          </div>

          <div className="mt-4 flex justify-between text-gray-600">
            <span>
              Subtotal
            </span>

            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          {/* Tax */}
          <div className="mt-4 flex justify-between text-gray-600">
            <span>
              Tax (15%)
            </span>

            <span>
              ${tax.toFixed(2)}
            </span>
          </div>

          {/* Shipping */}
          <div className="mt-4 flex justify-between text-gray-600">
            <span>
              Shipping
            </span>

            <span>
              Free
            </span>
          </div>

          <div className="my-6 border-t border-gray-200" />

          <div className="flex justify-between text-xl font-bold">
            <span>
              Total
            </span>

            <span>
              ${total.toFixed(2)}
            </span>
          </div>

        </aside>

      </div>

    </main>
  );
}

