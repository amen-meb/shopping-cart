import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../context/CartContext";

function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-semibold text-gray-950"
        : "text-gray-600 hover:text-gray-950"
    }`;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-[1400px] px-6">

        <div className="hidden h-20 grid-cols-3 items-center md:grid">

          <div className="justify-self-start">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight"
            >
              ShopCart
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8">
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

          <NavLink
            to="/cart"
            className={`${navLinkClass} justify-self-end`}
          >
            <span className="flex items-center gap-2">
              Cart 🛒

              {itemCount > 0 && (
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-950 px-2 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </span>
          </NavLink>
        </div>

        <div className="flex h-24 items-center justify-between md:hidden">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
          >
            ShopCart
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-light text-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>


        {/*  MOBILE MENU  */}
        {menuOpen && (
          <div className="border-t border-gray-200 py-6 md:hidden">

            <div className="flex flex-col gap-7">

              <NavLink
                to="/"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Shop
              </NavLink>

              <NavLink
                to="/cart"
                onClick={closeMenu}
                className={navLinkClass}
              >
                <span className="flex items-center gap-3">
                  Cart 🛒

                  <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-gray-950 px-2 text-sm font-bold text-white">
                    {itemCount}
                  </span>
                </span>
              </NavLink>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;