export const orderCreateReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case 'CREATE_ORDER':
      return {
        order: action.payload,
        success: true,
      };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {},
    },
    success: false,
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_ORDER':
      return {
        order: action.payload,
        success: true,
      };
    default:
      return state;
  }
};

export const myOrderListReducer = (state = { orders: [], success: false }, action) => {
  switch (action.type) {
    case 'FETCH_MY_ORDERS':
      return {
        orders: action.payload,
        success: true,
      };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [], success: false }, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      return {
        orders: action.payload,
        success: true,
      };
    default:
      return state;
  }
};

export const orderDeleteReducer = (state = { order: {}, success: false }, action) => {
  switch (action.type) {
    case 'DELETE_ORDER':
      return {
        success: true,
        order: action.payload,
      };

    default:
      return state;
  }
};
