export const cartReducer = (state = { cartItems: [], shipping: {}, payment: {} }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    case 'CART_REMOVE_ITEM':
      return { cartItems: action.payload.cartItems };

    case 'CART_EDIT_ITEM':
      return { cartItems: action.payload.cartItems };

    default:
      return state;
  }
};
