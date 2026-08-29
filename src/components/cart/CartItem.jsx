import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const {
    updateQuantity,
    removeFromCart,
  } = useCart();

  const handleDecrease = () => {
    if (item.quantity <= 1) {
      removeFromCart(item.id);
      return; }

    updateQuantity( item.id, item.quantity - 1 );
  };

  const handleIncrease = () => {
    updateQuantity( item.id, item.quantity + 1 );
  };

  return (
    <article className="border-b border-gray-200 p-5 last:border-b-0">
      <div className="flex flex-col gap-5 sm:flex-row">

        <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 p-5 sm:h-32 sm:w-32">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {item.category}
          </p>

          <h2 className="mt-1 text-lg font-semibold leading-6 text-gray-950">
            {item.title}
          </h2>

          <p className="mt-3 text-lg font-medium text-gray-950">
            ${item.price.toFixed(2)}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex w-fit items-center rounded-md border border-gray-300">
              <button
                type="button" onClick={handleDecrease}
                className="px-4 py-2 text-lg transition hover:bg-gray-100"
                aria-label="Decrease quantity" >  −
              </button>

              <span className="min-w-10 px-2 text-center font-semibold">
                {item.quantity}
              </span>

              <button
                type="button" onClick={handleIncrease}
                className="px-4 py-2 text-lg transition hover:bg-gray-100"
                aria-label="Increase quantity" > +
              </button>

            </div>
            <p className="text-lg font-bold text-gray-950"> ${(item.price * item.quantity).toFixed(2)}
            </p>

          </div>

          <button
            type="button" onClick={() => removeFromCart(item.id)}
            className="mt-4 w-fit text-sm font-semibold text-red-600 transition hover:text-red-700 hover:underline">
            Remove
          </button>

        </div>
      </div>
    </article>
  );
}

