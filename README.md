# 🛒 Shopping Cart App

> **React Capstone Project** — Multi-Page E-Commerce with Context, useReducer & React Router

A complete, production-ready e-commerce shopping cart application built with **React**, **Vite**, and **Fake Store API**. This is a comprehensive demonstration of modern React patterns including Context API, useReducer for state management, React Router for multi-page navigation, custom hooks, and persistent state management.

## 🎯 Overview

This project showcases the culmination of the Nexus Front-End Boot Camp React phase. It implements every core React concept: component architecture, global state management, reducer patterns, effect-driven data fetching, controlled forms, and multi-page routing—all in a single coherent codebase.

**Live Demo:** https://shopping-cart-app.vercel.app/ _(deploy after building)_

**API Source:** [Fake Store API](https://fakestoreapi.com/) — free, no authentication required

---

## ✨ Features

### 📄 Pages & Navigation

- **Home / Landing Page** — hero banner, featured categories, and highlighted products
- **Shop Page** — all products from Fake Store API in a responsive grid
- **Product Detail Page** — full product info via dynamic route (`/shop/:id`)
- **Cart Page** — view and manage all added items with quantity controls
- **Checkout Page** — order form and summary before purchase
- **Order Success Page** — confirmation after completing checkout
- **Orders Page** — view user's past orders
- **404 Not Found Page** — custom error page for unknown routes

### 🛍️ Shop Features

- ✅ **Dynamic Category Filtering** — filter products by category (fetched from API)
- ✅ **Multi-Sort Options** — sort by price (low/high), name (A–Z), and rating
- ✅ **Instant Search** — client-side search by product title
- ✅ **Skeleton Loading** — animated loading cards while products are fetching
- ✅ **Error Handling** — error state with retry button if API call fails
- ✅ **Product Count** — total count per category displayed

### 🛒 Cart Features

- ✅ **Add to Cart** — from product cards and product detail pages
- ✅ **Quantity Stepper** — increase/decrease quantity (minimum 1)
- ✅ **Remove Items** — individually remove products from cart
- ✅ **Clear Cart** — clear entire cart with confirmation dialog
- ✅ **Cart Badge** — live item count in Navbar
- ✅ **Order Summary** — item count, subtotal, tax (15%), total
- ✅ **Empty State** — friendly message with link back to shop when cart is empty
- ✅ **Persistent Cart** — cart data saved to localStorage and survives page refresh

---

## 🗺️ Routes

| Route            | Component       | Description                                  |
| ---------------- | --------------- | -------------------------------------------- |
| `/`              | `Home`          | Landing page with hero and featured products |
| `/shop`          | `Shop`          | All products with filters, search, and sort  |
| `/shop/:id`      | `ProductDetail` | Individual product page with full details    |
| `/cart`          | `Cart`          | Shopping cart with quantity controls         |
| `/checkout`      | `Checkout`      | Order form and payment details               |
| `/order-success` | `OrderSuccess`  | Confirmation page after purchase             |
| `/orders`        | `Orders`        | User's order history                         |
| `*`              | `NotFound`      | 404 page                                     |

---

## 🧠 State Architecture

### Global State (CartContext)

Only cart data lives in the global context. This follows the principle of **separation of concerns**:

- **What's global:** Cart items, quantities, cart operations
- **What's local:** Product data (fetched per page), filter/sort state (Shop page only)

**Rationale:** The cart is the only data that multiple unrelated components need (Navbar badge + Cart page + Checkout). Everything else is scoped locally for performance and simplicity.

### Cart Reducer

All cart logic centralized in `cartReducer.js`:

- `ADD_ITEM` — add product to cart
- `REMOVE_ITEM` — remove product by ID
- `UPDATE_QUANTITY` — update item quantity
- `CLEAR_CART` — empty entire cart

### CartContext Provider

Wraps the entire app and provides:

- `cart` — current cart state
- `addToCart()` — add/update items
- `removeFromCart()` — remove by product ID
- `updateQuantity()` — update item quantity
- `clearCart()` — clear all items
- `cartItemCount` — computed total item count

---

## 🪝 Custom Hooks

### `useProducts()`

Fetches and caches products with AbortController cleanup:

```javascript
const { products, loading, error, refetch } = useProducts();
```

### `useCategories()`

Fetches all available categories from Fake Store API:

```javascript
const { categories, loading, error } = useCategories();
```

### `useCart()`

Error-guarded hook to access cart context:

```javascript
const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
  useCart();
```

---

## 🛒 Fake Store API — Endpoints Used

| Endpoint                        | Description              |
| ------------------------------- | ------------------------ |
| `GET /products`                 | All products (paginated) |
| `GET /products/{id}`            | Single product by ID     |
| `GET /products/categories`      | All available categories |
| `GET /products/category/{name}` | Products by category     |
| `GET /products?limit=5`         | Limit results            |
| `GET /products?sort=desc`       | Sort direction           |

---

## 📁 Project Structure

```
shopping-cart/
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Header with cart badge
│   │   │   └── Footer.jsx          # App footer
│   │   ├── product/
│   │   │   ├── ProductCard.jsx     # Reusable product card
│   │   │   ├── ProductGrid.jsx     # Grid layout for products
│   │   │   └── LoadingSpinner.jsx  # Skeleton loading cards
│   │   ├── shop/
│   │   │   ├── CategoryFilter.jsx  # Category filter dropdown
│   │   │   ├── SearchBar.jsx       # Search input
│   │   │   └── SortSelect.jsx      # Sort options
│   │   ├── cart/
│   │   │   ├── CartItem.jsx        # Cart item component
│   │   │   └── OrderSummary.jsx    # Subtotal, tax, total
│   │   └── common/
│   │       └── LoadingSpinner.jsx  # Reusable loading spinner
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Shop.jsx                # Shop with filters & search
│   │   ├── ProductDetail.jsx       # Product detail page
│   │   ├── Cart.jsx                # Cart page
│   │   ├── Checkout.jsx            # Checkout form
│   │   ├── OrderSuccess.jsx        # Order confirmation
│   │   ├── Orders.jsx              # Order history
│   │   └── NotFound.jsx            # 404 page
│   ├── context/
│   │   ├── CartContext.jsx         # Cart context provider
│   │   └── cartReducer.js          # Cart reducer logic
│   ├── hooks/
│   │   ├── useProducts.js          # Fetch & cache products
│   │   ├── useCategories.js        # Fetch categories
│   │   └── useCart.js              # Cart context hook
│   ├── config/
│   │   └── api.js                  # API base configuration
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── vite.config.js                  # Vite configuration
├── package.json
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/shopping-cart.git
   cd shopping-cart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server (Vite HMR enabled)
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run Oxlint code quality checks
```

---

## 📚 Tech Stack

| Technology         | Purpose                             |
| ------------------ | ----------------------------------- |
| **React 19**       | UI library & component architecture |
| **Vite 8**         | Fast build tool & dev server        |
| **React Router 7** | Multi-page routing & navigation     |
| **Tailwind CSS 4** | Utility-first styling framework     |
| **Fake Store API** | Mock e-commerce backend             |
| **Context API**    | Global state management             |
| **useReducer**     | Complex state logic in cart         |
| **localStorage**   | Persistent cart storage             |

---

## 🏗️ Component Architecture

```
App
├── CartProvider
│   ├── Navbar (← cart badge, nav links)
│   ├── Routes
│   │   ├── Home
│   │   │   ├── Hero
│   │   │   ├── CategoryGrid
│   │   │   └── FeaturedProducts
│   │   ├── Shop
│   │   │   ├── SearchBar
│   │   │   ├── CategoryFilter
│   │   │   ├── SortSelect
│   │   │   ├── ProductGrid
│   │   │   │   └── ProductCard (reusable)
│   │   │   └── LoadingSpinner
│   │   ├── ProductDetail
│   │   │   ├── Product Images
│   │   │   ├── Product Info
│   │   │   └── Add to Cart Button
│   │   ├── Cart
│   │   │   ├── CartItem (reusable)
│   │   │   ├── OrderSummary
│   │   │   ├── Checkout Button
│   │   │   └── Empty Cart State
│   │   ├── Checkout
│   │   │   ├── Order Summary
│   │   │   └── Checkout Form
│   │   ├── OrderSuccess
│   │   │   └── Confirmation Details
│   │   ├── Orders
│   │   │   └── Order History List
│   │   └── NotFound
│   │       └── 404 Error Page
│   └── Footer
```

---

## 💾 State Management Flow

### Adding a Product to Cart

1. User clicks "Add to Cart" on product card or detail page
2. `ProductCard` or `ProductDetail` calls `addToCart(product, quantity)`
3. `CartContext.addToCart()` dispatches `ADD_ITEM` action
4. `cartReducer` adds or updates item in state
5. `useEffect` saves new cart to localStorage
6. Navbar badge updates automatically

### Updating Cart Item Quantity

1. User clicks + or – button on cart item
2. `CartItem` calls `updateQuantity(productId, newQuantity)`
3. Reducer updates quantity or removes if < 1
4. localStorage syncs automatically

---

## 🔑 Key Implementation Details

### Cart Persistence

The cart is automatically saved to localStorage after every state change:

```javascript
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(state));
}, [state]);
```

On app load, the cart is restored from localStorage via useReducer's initializer function.

### API Error Handling

- Custom hooks include error states
- Skeleton loading cards shown during fetch
- Retry button available if API fails
- AbortController prevents memory leaks on unmount

### Search & Filter Performance

- Category filter uses client-side API query
- Product search is instant (debounced filter)
- Sort applied locally to avoid re-fetching

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Navbar collapses on mobile
- Product grid adapts: 1 column (mobile) → 2 (tablet) → 3+ (desktop)
- Touch-friendly buttons and inputs

---

## ✅ Features Checklist

- ✅ Vite + React project with React Router
- ✅ CartContext with useReducer (ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART)
- ✅ useCart custom hook with error guard
- ✅ Cart persisted to localStorage via useEffect
- ✅ React Router with 7+ pages and dynamic routes
- ✅ Navbar on all pages with live cart badge
- ✅ Home page with hero and featured products
- ✅ Shop page with products from Fake Store API
- ✅ Skeleton loading during fetch
- ✅ Error state with retry button
- ✅ Dynamic category filter
- ✅ Client-side search by title
- ✅ Multi-option sort (price, name, rating)
- ✅ Product Detail page with full info
- ✅ Add to cart from card and detail page
- ✅ Cart with quantity stepper and remove button
- ✅ Order summary with tax calculation (15%)
- ✅ Clear cart with confirmation
- ✅ Empty cart state
- ✅ useProducts & useCategories hooks with AbortController
- ✅ Ready for deployment to Vercel/Netlify

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Deploy shopping cart app"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add any API keys to Vercel project settings

### Deploy to Netlify

1. **Build locally**

   ```bash
   npm run build
   ```

2. **Deploy via Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `dist` folder
   - Or connect GitHub and enable auto-deploy

---

## 🐛 Troubleshooting

### Cart Not Persisting

- Check browser localStorage (DevTools → Application → LocalStorage)
- Ensure `CartProvider` wraps entire app in `main.jsx`
- Clear cache and refresh page

### Products Not Loading

- Check browser console for API errors
- Verify internet connection
- Fake Store API may have rate limits (add exponential backoff if needed)

### Styling Issues

- Verify Tailwind CSS is included in `vite.config.js`
- Clear browser cache and rebuild: `npm run build`
- Check for conflicting global CSS

---

## 📖 Learning Resources

- **React Router v7:** [react-router.com](https://react-router.com)
- **Fake Store API:** [fakestoreapi.com](https://fakestoreapi.com)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Vite:** [vitejs.dev](https://vitejs.dev)
- **React Context & useReducer:** [react.dev/learn/scaling-up-with-reducer-and-context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

## 📝 License

This project is part of the Nexus Front-End Boot Camp and is open source under the MIT license.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📧 Contact

For questions or feedback, reach out to the project maintainers.

---

**Built with ❤️ as a React capstone project**
