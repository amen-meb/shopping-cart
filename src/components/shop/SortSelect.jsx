const sortOptions = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "name-az",
    label: "Name: A to Z",
  },
  {
    value: "name-za",
    label: "Name: Z to A",
  },
  {
    value: "rating-high",
    label: "Rating: High to Low",
  },
];

export default function SortSelector({sortOption, onSortChange }) {
    return(
        <div>
            <label htmlFor="sort" className="mb-2 block text-sm font-semibold">
                Sort by
            </label>

            <select
                id="sort"
                value={sortOption}
                onChange={(event) =>
                onSortChange(event.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gray-950 md:w-72">
                    
                {sortOptions.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                    ))}
            </select>

        </div>
    )
}