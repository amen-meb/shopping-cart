import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="flex min-w-0 h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      
      <Link
        to={`/shop/${product.id}`}
        className="flex h-64 w-full items-center justify-center bg-gray-50 p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <Link
          to={`/shop/${product.id}`}
          className="mt-2 line-clamp-2 text-lg font-semibold text-gray-900 hover:text-gray-600"
        >
          {product.title}
        </Link>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-sm text-gray-600">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-auto pt-5">

          <p className="text-xl font-bold text-gray-950">
            ${product.price.toFixed(2)}
          </p>

          <Link
            to={`/shop/${product.id}`}
            className="mt-4 block w-full rounded-md bg-gray-950 px-4 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
          >
            View Details
          </Link>

        </div>
      </div>
    </article>
  );
}