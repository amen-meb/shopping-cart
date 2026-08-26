import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="flex min-w-0 h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white">      <Link to={`/shop/${product.id}`}>
        <div className="flex h-64 w-full items-center justify-center bg-gray-50 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-60 w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="mb-2 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <Link to={`/shop/${product.id}`}>
          <h2 className="line-clamp-2 min-h-12 font-semibold hover:underline">
              {product.title}
          </h2>
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-gray-600">
            ⭐ {product.rating.rate}
          </span>
        </div>

        <Link
          to={`/shop/${product.id}`}
          className="mt-5 block w-full rounded-md bg-gray-950 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

