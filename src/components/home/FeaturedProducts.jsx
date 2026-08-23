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
    <section className="px-10 py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
      <div className="mb-[35px]">
        <p className="mb-2 text-[13px] tracking-[2px]">OUR PICKS</p>
        <h2 className="text-[32px]">Featured Products</h2>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {featuredProducts.map((product) => (
          <div className="bg-white p-5" key={product.id}>
            <div className="mb-5 flex h-[280px] items-center justify-center bg-neutral-200">
              Product Image
            </div>

            <h3 className="mb-2.5">{product.name}</h3>

            <p className="mb-[15px] font-bold">${product.price}</p>

            <Link className="text-neutral-900 no-underline" to={`/shop/${product.id}`}>
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}