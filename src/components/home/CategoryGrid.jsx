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
    <section className="category">
        <div className="section-headeer">
            <p>EXPLORE</p>
            <h2>Shop by Category</h2>
        </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>

            <a href="/shop">Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
}