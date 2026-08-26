import { Link } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";

function Checkout() {

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
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  // Empty cart
  if (items.length === 0 && !orderPlaced) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some products before checking out.
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Order Confirmed!
          </h1>

          <p className="mt-3 text-gray-500">
            Thank you for your purchase.
            Your order has been successfully placed.
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
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Checkout
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Complete Your Order
        </h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 p-6 md:p-8"
        >
          {/* Customer Information */}
          <section>
            <h2 className="text-xl font-bold">
              Customer Information
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                />
              </div>
            </div>
          </section>

          {/* Shipping Information */}
          <section className="mt-10 border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold">
              Shipping Information
            </h2>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold"
                >
                  Address
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                />
              </div>

              {/* City + Country */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
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
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                  />
                </div>
              </div>

              {/* Postal Code */}
              <div>
                <label
                  htmlFor="postalCode"
                  className="mb-2 block text-sm font-semibold"
                >
                  Postal Code
                </label>

                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-950"
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="mt-10 w-full rounded-md bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <aside className="h-fit rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-bold">
            Your Order
          </h2>

          <div className="mt-6 space-y-5">
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
                    {item.quantity} × $
                    {item.price.toFixed(2)}
                  </p>
                </div>

                <p className="text-sm font-semibold">
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between text-gray-600">
              <span>
                Subtotal ({itemCount} items)
              </span>

              <span>
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-3 flex justify-between text-gray-600">
              <span>Tax</span>

              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;