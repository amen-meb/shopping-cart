export default function SortSelect({
  sortOption,
  onSortChange,
}) {
  return (
    <div>
      <label
        htmlFor="sort"
        className="mb-2 block text-sm font-semibold"
      >
        Sort By
      </label>

      <select
        id="sort"
        value={sortOption}
        onChange={(event) =>
          onSortChange(event.target.value)
        }
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-950"
      >
        <option value="default">
          Default
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="name-az">
          Name: A to Z
        </option>

        <option value="name-za">
          Name: Z to A
        </option>

        <option value="rating-high">
          Rating: High to Low
        </option>
      </select>
    </div>
  );
}