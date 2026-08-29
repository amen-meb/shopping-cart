import { Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex-1 pt-20 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

