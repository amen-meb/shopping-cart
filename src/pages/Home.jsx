import Hero from "../components/home/Hero";
import CategoryGrid from "../components/home/CategoryGrid";
import FeaturedProduct from "../components/home/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProduct />
    </div>
  );
}