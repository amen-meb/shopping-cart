import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-10 py-5 max-[600px]:px-5">
        <Link to="/" className="text-neutral-900 no-underline"><h2>ShopCart</h2></Link>

        <div className="flex gap-5 max-[600px]:gap-2.5">
            <NavLink className="text-neutral-900 no-underline" to="/">Home</NavLink>
            <NavLink className="text-neutral-900 no-underline" to="/shop">Shop</NavLink>
            <NavLink className="text-neutral-900 no-underline" to="/cart">Cart 🛒</NavLink>
        </div>
    </nav> 
    );
}