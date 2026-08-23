const categories = [
  {
    name: "Electronics",
    description: "Latest electronic products",
  },
  {
    name: "Jewelry",
    description: "Beautiful pieces for every occasion",
  },
  {
    name: "Men's Clothing",
    description: "Modern styles for men",
  },
  {
    name: "Women's Clothing",
    description: "Explore the latest fashion",
  },
];

export default function CategoryGrid() {
  return (
    <section className="px-10 py-[70px] max-[600px]:px-5 max-[600px]:py-[50px]">
        <div className="mb-[35px]">
            <p className="mb-2 text-[13px] tracking-[2px]">EXPLORE</p>
            <h2 className="text-[32px]">Shop by Category</h2>
        </div>

      <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {categories.map((category) => (
          <div key={category.name} className="border border-neutral-300 bg-white p-[30px]">
            <h3 className="mb-3">{category.name}</h3>
            <p className="mb-5 leading-[1.5] text-neutral-500">{category.description}</p>

            <a className="font-bold text-neutral-900 no-underline" href="/shop">Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
}