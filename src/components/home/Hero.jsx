import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[500px] flex-col items-start justify-center bg-neutral-900 px-10 py-[60px] text-white max-[600px]:px-5 max-[600px]:py-10">
      <h1 className="mb-5 text-sm tracking-[2px]">Welcome to ShopCart</h1>

      <h1 className="mb-6 text-[56px] leading-[1.1] max-[900px]:text-[44px] max-[600px]:text-4xl">
            Everything you need, <span>all in one place.</span>
        </h1>

      <p className="mb-[30px] max-w-[550px] text-lg leading-[1.6]">
            Discover the best products at unbeatable prices.
            Find something you love and enjoy a seamless shopping experience with us.
        </p>

        <Link to="/shop" className="inline-block bg-white px-7 py-3.5 font-bold text-neutral-900 no-underline">
            Shop Now
        </Link>
    </section>
  );
}