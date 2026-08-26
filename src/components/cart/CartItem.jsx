import { useCart } from "../../context/CartContext";

function CartItem({ item }) {
  const {
    updateQuantity,
    removeFromCart,
  } = useCart();

  const decreaseQuantity = () => {
    updateQuantity(
      item.id,
      Math.max(1, item.quantity - 1)
    );
  };

  const increaseQuantity = () => {
    updateQuantity(
      item.id,
      item.quantity + 1
    );
  };

  return (
    <article className="flex flex-col gap-6 border-b border-gray-200 py-6 sm:flex-row sm:items-center">
      {/* Product Image */}
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {item.category}
        </p>

        <h2 className="mt-1 line-clamp-2 font-semibold text-gray-950">
          {item.title}
        </h2>

        <p className="mt-2 font-semibold">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center rounded-md border border-gray-300">
        <button
          type="button"
          onClick={decreaseQuantity}
          className="px-4 py-2 text-lg transition hover:bg-gray-100"
          aria-label={`Decrease quantity of ${item.title}`}
        >
          −
        </button>

        <span className="min-w-12 text-center font-semibold">
          {item.quantity}
        </span>

        <button
          type="button"
          onClick={increaseQuantity}
          className="px-4 py-2 text-lg transition hover:bg-gray-100"
          aria-label={`Increase quantity of ${item.title}`}
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <p className="min-w-24 text-right font-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      {/* Remove */}
      <button
        type="button"
        onClick={() =>
          removeFromCart(item.id)
        }
        className="text-left text-sm font-semibold text-red-600 hover:underline sm:text-right"
      >
        Remove
      </button>
    </article>
  );
}

export default CartItem;