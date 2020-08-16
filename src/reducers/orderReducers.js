export const ordersReducer = (
  state = { orders: [], myOrders: [], order: { cartItems: [], shipping: {}, payment: {} }, success: false },
  action
) => {
  switch (action.type) {
    // Fetch All Orders
    case 'FETCH_ORDERS':
      return {
        ...state,
        orders: action.payload,
      };

    // Fetch My Orders
    case 'FETCH_MY_ORDERS':
      return {
        ...state,
        myOrders: action.payload,
        success: true,
      };

    // Fetch An Order
    case 'FETCH_ORDER':
      return {
        ...state,
        order: action.payload,
      };

    // Create Order
    case 'CREATE_ORDER':
      return {
        ...state,
        order: action.payload,
        success: true,
      };

    // Delete Order
    case 'DELETE_ORDER':
      return {
        ...state,
        success: true,
        order: action.payload,
      };

    // Pay Order
    case 'PAY_ORDER':
      return {
        ...state,
        order: action.payload,
        success: true,
      };

    // Deliver Order
    case 'DELIVER_ORDER':
      return {
        ...state,
        order: action.payload,
        success: true,
      };

    default:
      return state;
  }
};
