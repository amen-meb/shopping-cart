export default function SearchBar({ searchTerm, onSearchChange }) {
    return(
        <div>
            <label htmlFor="search" className="mb-2 block text-sm font-semibold">
                Search
            </label>

            <input type="search" id="search" value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search products..." 
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-950 md:w-72"
                />
        </div>
    )
}