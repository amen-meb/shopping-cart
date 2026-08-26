import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import cartReducer, {
  initialCartState,
} from "./cartReducer";

const CartContext = createContext(null);

function CartProvider({ children }) {
  // --------------------------------
  // Load cart from localStorage
  // --------------------------------
  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const savedCart =
          localStorage.getItem("cart");

        if (savedCart) {
          return JSON.parse(savedCart);
        }

        return initialState;
      } catch (error) {
        console.error(
          "Failed to load cart:",
          error
        );

        return initialState;
      }
    }
  );

  // --------------------------------
  // Save cart to localStorage
  // --------------------------------
  useEffect(() => {
    try {
      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    } catch (error) {
      console.error(
        "Failed to save cart:",
        error
      );
    }
  }, [state]);

  // --------------------------------
  // Cart Actions
  // --------------------------------
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity,
      },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: productId,
    });
  };

  const updateQuantity = (
    productId,
    quantity
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: productId,
        quantity,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  // --------------------------------
  // Derived Cart Values
  // --------------------------------
  const itemCount = state.items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const subtotal = state.items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.15;

  const total = subtotal + tax;

  // --------------------------------
  // Context Value
  // --------------------------------
  const value = {
    items: state.items,
    itemCount,
    subtotal,
    tax,
    total,

    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// --------------------------------
// Custom useCart Hook
// --------------------------------
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}

export default CartContext;

export { CartProvider };