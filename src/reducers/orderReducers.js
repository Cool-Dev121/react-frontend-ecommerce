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
