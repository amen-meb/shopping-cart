import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
        <h1 className="hero-subtitle">Welcome to ShopCart</h1>

        <h1>
            Everything you need, <span>all in one place.</span>
        </h1>

        <p className="hero-description">
            Discover the best products at unbeatable prices.
            Find something you love and enjoy a seamless shopping experience with us.
        </p>

        <Link to="/shop" className="hero-button">
            Shop Now
        </Link>
    </section>
  );
}