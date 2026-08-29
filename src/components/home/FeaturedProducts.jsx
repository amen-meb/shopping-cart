import { Link } from "react-router-dom";

import useProducts from "../../hooks/useProducts";
import LoadingSpinner from "../common/LoadingSpinner";

export default function FeaturedProducts() {
  const {
    products,
    loading,
    error,
  } = useProducts();

  const featuredProducts = products.slice(0, 3);

  if (loading) {
    return (
      <section className="px-6 py-16 md:px-10 md:py-[70px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="mb-2 text-xs font-semibold tracking-[2px] text-neutral-500">
              OUR PICKS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>
          </div>

          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-16 md:px-10 md:py-[70px]">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-700">
              Something went wrong
            </h2>

            <p className="mt-2 text-red-600">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-neutral-50 px-6 py-16 md:px-10 md:py-[70px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9">
          <p className="mb-2 text-xs font-semibold tracking-[2px] text-neutral-500">
            OUR PICKS
          </p>

          <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
            Featured Products
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
              <div className="flex h-72 items-center justify-center bg-neutral-100 p-8">
                <img src={product.image} alt={product.title}
                  className="h-full w-full object-contain transition duration-300 hover:scale-105"/>
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {product.category}
                </p>

                <h3 className="min-h-[56px] text-lg font-semibold text-neutral-950">
                  {product.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-neutral-950">
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="text-sm text-neutral-500">
                    ⭐ {product.rating.rate}
                  </span>
                </div>

                <Link to={`/shop/${product.id}`}
                  className="mt-5 block rounded-md bg-neutral-950 px-5 py-3 text-center font-semibold text-white transition hover:bg-neutral-800">
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/shop" className="font-semibold text-neutral-900 hover:underline">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}