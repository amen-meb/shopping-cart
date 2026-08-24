import { useMemo, useState } from "react";

import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";

import ProductGrid from "../product/ProductGrid";
import CategoryFilter from "../shop/CategoryFilter";

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

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  const loading =
    productsLoading || categoriesLoading;

  const error =
    productsError || categoriesError;

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold" >
          Shop
        </h1>

        <p className="mt-4 text-gray-500">
          Loading...
        </p>
      </main>
    );
  }

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

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-gray-500">
          OUR STORE
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Shop All Products
        </h1>

        <p className="mt-3 text-gray-500">
          {filteredProducts.length} products
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} />
    </main>
  );
}

