import { useMemo, useState } from "react";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../components/product/ProductGrid";
import CategoryFilter from "../components/shop/CategoryFilter";
import SearchBar from "../components/shop/SearchBar";
import SortSelect from "../components/shop/SortSelect";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Shop() {
  // -----------------------------
  // Fetch Products
  // -----------------------------
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useProducts();

  // -----------------------------
  // Fetch Categories
  // -----------------------------
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  // -----------------------------
  // State
  // -----------------------------
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortOption, setSortOption] =
    useState("default");

  // -----------------------------
  // Search + Filter + Sort
  // -----------------------------
  const displayProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchTerm.trim() !== "") {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Category Filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    // Sort
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name-az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "name-za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "rating-high":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      default:
        break;
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption,
  ]);

  // -----------------------------
  // Loading State
  // -----------------------------
  const loading =
    productsLoading || categoriesLoading;

  // -----------------------------
  // Error State
  // -----------------------------
  const error =
    productsError || categoriesError;

  // -----------------------------
  // Loading UI
  // -----------------------------
  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Shop
        </h1>

        <LoadingSpinner />
      </main>
    );
  }

  // -----------------------------
  // Error UI
  // -----------------------------
  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Shop
        </h1>

        <div className="mt-10 rounded-lg border border-red-200 bg-red-50 p-6">
          <p className="font-semibold text-red-700">
            Something went wrong
          </p>

          <p className="mt-2 text-red-600">
            {error}
          </p>
        </div>
      </main>
    );
  }

  // -----------------------------
  // Main Shop UI
  // -----------------------------
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
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

      <div className="mb-10 grid gap-6 rounded-lg border bg-white p-6 md:grid-cols-3">
        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Category */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Sort */}
        <SortSelect
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>

      {/* Products */}
      {displayProducts.length > 0 ? (
        <ProductGrid products={displayProducts} />
      ) : (
        <div className="rounded-lg border bg-gray-50 py-16 text-center">
          <h2 className="text-xl font-semibold">
            No products found
          </h2>

          <p className="mt-2 text-gray-500">
            Try changing your search or category.
          </p>
        </div>
      )}
    </main>
  );
}