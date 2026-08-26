function formatCategory(category) {
  return category
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="mb-8">
      <label
        htmlFor="category"
        className="mb-2 block text-sm font-semibold"
      >
        Category
      </label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(event) =>
          onCategoryChange(event.target.value)
        }
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-950 sm:w-72">
        <option value="all">
          All Products
        </option>

        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {formatCategory(category)}
          </option>
        ))}
      </select>
    </div>
  );
}

