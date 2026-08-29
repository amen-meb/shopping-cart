import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[520px] items-center bg-neutral-900 px-6 py-16 text-white md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-neutral-400">
          Welcome to ShopCart
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Everything you need, all in one place.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
          Discover quality products at great prices and enjoy a simple,
          seamless shopping experience.
        </p>

        <Link to="/shop" className="mt-8 inline-block rounded-md bg-white px-7 py-3.5 font-semibold text-neutral-900 transition hover:bg-neutral-200" >
          Shop Now
        </Link>
      </div>
    </section>
  );
}