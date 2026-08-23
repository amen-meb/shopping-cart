import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Featured Product One",
    price: 29.99,
  },
  {
    id: 2,
    name: "Featured Product Two",
    price: 49.99,
  },
  {
    id: 3,
    name: "Featured Product Three",
    price: 79.99,
  },
];

export default function FeaturedProduct() {
      return (
    <section className="featured-products">
      <div className="section-header">
        <p>OUR PICKS</p>
        <h2>Featured Products</h2>
      </div>

      <div className="featured-grid">
        {featuredProducts.map((product) => (
          <div className="featured-card" key={product.id}>
            <div className="product-placeholder">
              Product Image
            </div>

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <Link to={`/shop/${product.id}`}>
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}