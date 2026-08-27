import { Link } from "react-router-dom";

export default function Orders() {
  const savedOrders =
    localStorage.getItem("orders");

  const orders = savedOrders
    ? JSON.parse(savedOrders)
    : [];

  // Newest orders first
  const sortedOrders = [...orders].reverse();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">

      {/* Header */}
      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Your Account
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Order History
        </h1>

        <p className="mt-3 text-gray-500">
          View your previous orders and
          order details.
        </p>

      </div>

      {/* No Orders */}
      {sortedOrders.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-16 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl">
            📦
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            No Orders Yet
          </h2>

          <p className="mt-2 text-gray-500">
            You haven't placed any orders yet.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-block rounded-md bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Start Shopping
          </Link>

        </div>
      ) : (
        <div className="space-y-6">

          {sortedOrders.map((order) => (
            <article
              key={order.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >

              {/* Order Header */}
              <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center">

                <div>

                  <p className="text-sm text-gray-500">
                    Order Number
                  </p>

                  <h2 className="mt-1 font-bold">
                    {order.id}
                  </h2>

                </div>

                <div className="sm:text-right">

                  <p className="text-sm text-gray-500">
                    Order Date
                  </p>

                  <p className="mt-1 font-semibold">
                    {new Date(
                      order.orderDate
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>

              {/* Order Items */}
              <div className="mt-6 space-y-4">

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >

                    {/* Image */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gray-50 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Product */}
                    <div className="min-w-0 flex-1">

                      <p className="line-clamp-2 text-sm font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>

                    </div>

                    {/* Price */}
                    <p className="text-sm font-semibold">
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </p>

                  </div>
                ))}

              </div>

              {/* Order Footer */}
              <div className="mt-6 border-t border-gray-200 pt-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-500">
                      Payment
                    </p>

                    <p className="mt-1 font-semibold">
                      {order.paymentMethod ===
                      "cash"
                        ? "Cash on Delivery"
                        : "Credit / Debit Card"}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-gray-500">
                      Total
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      $
                      {order.total.toFixed(2)}
                    </p>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>
      )}

    </main>
  );
}