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

    case 'CART_SAVE_SHIPPING':
      return { ...state, shipping: action.payload };

    case 'CART_SAVE_PAYMENT':
      return { ...state, payment: action.payload };

    default:
      return state;
  }
};
