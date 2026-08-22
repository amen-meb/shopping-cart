import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to="/"><h2>ShopCart</h2></Link>

        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/cart">Cart 🛒</NavLink>
        </div>
    </nav> 
    );
}