export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return {
        product: action.payload,
      };

    default:
      return state;
  }
};
