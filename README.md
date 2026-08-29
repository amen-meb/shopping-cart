# Shopping Cart Application

> **React Capstone Project** — Multi-Page E-Commerce with Context, useReducer & React Router

A production-ready e-commerce shopping cart application built with React, Vite, and the Fake Store API. This project demonstrates advanced React patterns including Context API for global state management, useReducer for complex state logic, React Router for multi-page navigation, custom hooks, and persistent storage with localStorage.

## Project Overview

This capstone project represents the culmination of the Nexus Front-End Boot Camp React phase. It implements core React concepts through a complete e-commerce application, including component architecture, global state management, reducer patterns, API data fetching, form handling, and multi-page routing.

**Live Demo:** https://shopping-cart-zeta-beige-11.vercel.app/ (deployment pending)


---

## Features

### Pages & Navigation

- **Home** — Landing page with hero section, featured categories, and product highlights
- **Shop** — Complete product catalog from Fake Store API with responsive grid layout
- **Product Detail** — Individual product view with full information and add-to-cart functionality
- **Cart** — Shopping cart management with quantity controls and order summary
- **Checkout** — Order form and payment information collection
- **Order Success** — Post-purchase confirmation page with order details
- **Orders** — User's complete order history
- **404 Error** — Custom error page for undefined routes

### Shopping Features

| Feature                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| **Category Filtering** | Dynamic product filtering by category from API               |
| **Product Search**     | Real-time client-side search by product title                |
| **Sorting Options**    | Sort by price (ascending/descending), name (A-Z), and rating |
| **Loading States**     | Skeleton loading cards during data fetch                     |
| **Error Handling**     | Error state with retry functionality for failed API calls    |
| **Product Count**      | Display total product count per category                     |

### Cart Management

| Feature              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| **Add to Cart**      | Available from product cards and product detail pages   |
| **Quantity Control** | Increment/decrement buttons with minimum quantity of 1  |
| **Item Removal**     | Remove individual items or clear entire cart            |
| **Clear Cart**       | Bulk clear action with confirmation dialog              |
| **Cart Badge**       | Real-time item count indicator in navigation bar        |
| **Order Summary**    | Automatic calculation of subtotal, tax (15%), and total |
| **Empty State**      | Friendly message with navigation back to shop           |
| **Persistence**      | Cart data automatically saved to localStorage           |

## Application Routes

| Path             | Component     | Description                                          |
| ---------------- | ------------- | ---------------------------------------------------- |
| `/`              | Home          | Landing page with hero section and featured products |
| `/shop`          | Shop          | Complete product catalog with filters and search     |
| `/shop/:id`      | ProductDetail | Individual product view with detailed information    |
| `/cart`          | Cart          | Shopping cart with quantity management and checkout  |
| `/checkout`      | Checkout      | Order form and payment information collection        |
| `/order-success` | OrderSuccess  | Post-purchase confirmation and order summary         |
| `/orders`        | Orders        | User's order history and past purchases              |
| `*`              | NotFound      | 404 error page for undefined routes                  |

---


## Technology Stack

| Technology      | Version     | Purpose                                |
| --------------- | ----------- | -------------------------------------- |
| React           | 19          | Component-based UI framework           |
| Vite            | 8           | Fast build tool and development server |
| React Router    | 7           | Client-side routing and navigation     |
| Tailwind CSS    | 4           | Utility-first CSS framework            |

---
