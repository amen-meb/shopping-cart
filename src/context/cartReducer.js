export const initialCartState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + product.quantity,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...product,
            quantity: product.quantity,
          },
        ],
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(1, quantity),
              }
            : item
        ),
      };
    }

    case "CLEAR_CART": {
      return initialCartState;
    }

    default:
      throw new Error(
        `Unknown cart action: ${action.type}`
      );
  }
}

export default cartReducer;