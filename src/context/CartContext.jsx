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

  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    (initialState) => {
      try {
        const savedCart =
          localStorage.getItem("cart");

        if (!savedCart) {
          return initialState;
        }

        const parsedCart = JSON.parse(savedCart);

        if (
          !parsedCart ||
          !Array.isArray(parsedCart.items)
        ) {
          return initialState;
        }

        return parsedCart;
      } catch (error) {
        console.error(
          "Failed to load cart:",
          error
        );

        return initialState;
      }
    }
  );

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

  const addToCart = (
    product,
    quantity = 1
  ) => {
    if (!product) {
      return;
    }

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
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

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

  const itemCount = state.items.reduce(
    (total, item) => {
      return total + item.quantity;
    },
    0
  );

  const subtotal = state.items.reduce(
    (total, item) => {
      return (
        total +
        item.price * item.quantity
      );
    },
    0
  );

  const tax = subtotal * 0.15;

  const total = subtotal + tax;

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