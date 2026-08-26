import { Link, NavLink } from "react-router-dom";

import { useCart } from "../../context/CartContext";

function Navbar() {
  const { itemCount } = useCart();

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-semibold text-gray-950"
        : "text-gray-600 hover:text-gray-950"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          ShopCart
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={navLinkClass}
          >
            Shop
          </NavLink>
        </div>

          {/* Cart */}
        <NavLink
            to="/cart"
            className={navLinkClass}
          >
            <span className="flex items-center gap-2">
              Cart 🛒

              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-950 px-2 text-xs font-bold text-white">
                {itemCount}
              </span>
            </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;