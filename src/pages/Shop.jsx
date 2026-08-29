import { useMemo, useState } from "react";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/product/ProductGrid";
import CategoryFilter from "../components/shop/CategoryFilter";
import SearchBar from "../components/shop/SearchBar";
import SortSelect from "../components/shop/SortSelect";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Shop() {
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useProducts();

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const displayProducts = useMemo(() => {
    let result = [...products];

    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    if (normalizedSearch !== "") {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(normalizedSearch)
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name-az":
        result.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "name-za":
        result.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      case "rating-high":
        result.sort(
          (a, b) =>
            b.rating.rate - a.rating.rate
        );
        break;
      default:
        break;
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption,]);

  const loading =
    productsLoading || categoriesLoading;

  const error =
    productsError || categoriesError;

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Shop
          </h1>

          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Shop
          </h1>

          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-red-200 bg-red-50 p-6 text-left">
            <p className="font-semibold text-red-700">
              Something went wrong
            </p>

            <p className="mt-2 break-words text-red-600">
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16">

      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-gray-500">
          OUR STORE
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Shop All Products
        </h1>

        <p className="mt-3 text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {displayProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {products.length}
          </span>{" "}
          products
        </p>
      </div>

      <div className="mb-10 grid min-w-0 gap-6 rounded-lg border border-gray-200 bg-white p-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="min-w-0">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <div className="min-w-0">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="min-w-0">
          <SortSelect
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>
      </div>


      {displayProducts.length > 0 ? (
        <ProductGrid products={displayProducts} />
      ) : (
        <div className="rounded-lg border border-gray-200 bg-gray-50 py-16 text-center">
          <h2 className="text-xl font-semibold">
            No products found
          </h2>

          <p className="mt-2 text-gray-500">
            Try changing your search or category.
          </p>
        </div>
      )}
    </div>
  );
}