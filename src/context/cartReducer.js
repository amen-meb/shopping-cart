export const initialCartState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD_ITEM": {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        return {
          ...state,

          items: state.items.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    newItem.quantity,
                }
              : item
          ),
        };
      }

      return {
        ...state,

        items: [
          ...state.items,
          newItem,
        ],
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,

        items: state.items.filter(
          (item) =>
            item.id !== action.payload
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const {
        id,
        quantity,
      } = action.payload;

      return {
        ...state,

        items: state.items.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity,
              }
            : item
        ),
      };
    }

    case "CLEAR_CART": {
      return initialCartState;
    }

    default:
      return state;
  }
}

export default cartReducer;