import useProduct from "../hooks/useProducts";

export default function Shop() {
    const {
        products,
        loading,
        error,
    } = useProducts();

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Loading products...
        </h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold text-red-600">
          {error}
        </h1>
      </main>
    );
  }

    return (
        <div className="max-auto max-w-7xl px-6 py-20">
            <h1 className="mb-8 text-4xl font-bold">Shop</h1>

            <p>We received {products.length} products.</p>
        </div>
    );
}