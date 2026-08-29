import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import useProduct from "../hooks/useProduct";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();

  const {
    product,
    loading,
    error,
  } = useProduct(id);

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(product, quantity);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) =>
      currentQuantity + 1
    );
  };

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6">
          <h1 className="text-xl font-bold text-red-700">
            Unable to Load Product
          </h1>

          <p className="mt-2 text-red-600">
            {error}
          </p>

          <Link
            to="/shop"
            className="mt-5 inline-block font-semibold text-gray-900 underline"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block rounded-md bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12">

      <Link
        to="/shop"
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-gray-950 hover:underline"
      >
        ← Back to Shop
      </Link>

      <section className="grid min-w-0 gap-12 md:grid-cols-2">

        <div className="flex min-h-[350px] items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-8 sm:min-h-[450px]">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[420px] w-full object-contain transition duration-300 hover:scale-105"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-3 break-words text-3xl font-bold leading-tight text-gray-950 md:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4">

            <span className="text-3xl font-bold text-gray-950">
              ${product.price.toFixed(2)}
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              ⭐ {product.rating.rate}
            </span>

          </div>

          <p className="mt-8 leading-7 text-gray-600">
            {product.description}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            {product.rating.count} customer ratings
          </p>

          <div className="my-8 border-t border-gray-200" />

          <div>

            <p className="mb-3 text-sm font-semibold">
              Quantity
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">

              <div className="flex w-fit items-center rounded-md border border-gray-300">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="px-4 py-3 text-lg transition hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-12 px-3 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="px-4 py-3 text-lg transition hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>

              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 rounded-md px-6 py-3 font-semibold text-white transition ${
                  added
                    ? "bg-green-600"
                    : "bg-gray-950 hover:bg-gray-800"
                }`}
              >
                {added
                  ? "Added to Cart ✓"
                  : "Add to Cart"}
              </button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}