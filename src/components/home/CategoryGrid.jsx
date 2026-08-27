import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    value: "electronics",
    description: "Latest electronic products",
  },
  {
    name: "Jewelry",
    value: "jewelery",
    description: "Beautiful pieces for every occasion",
  },
  {
    name: "Men's Clothing",
    value: "men's clothing",
    description: "Modern styles for men",
  },
  {
    name: "Women's Clothing",
    value: "women's clothing",
    description: "Explore the latest fashion",
  },
];

export default function CategoryGrid() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-[70px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9">
          <p className="mb-2 text-xs font-semibold tracking-[2px] text-neutral-500">
            EXPLORE
          </p>

          <h2 className="text-3xl font-bold text-neutral-950 md:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.value}
              className="border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-neutral-950">
                {category.name}
              </h3>

              <p className="mb-6 min-h-[48px] leading-6 text-neutral-500">
                {category.description}
              </p>

              <Link
                to={`/shop?category=${encodeURIComponent(
                  category.value
                )}`}
                className="font-semibold text-neutral-900 hover:underline"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}