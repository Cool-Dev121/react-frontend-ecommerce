export const productListReducer = (
  state = { products: [], filteredProducts: [], filter: '', category: '', sort: 'latest' },
  action
) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        products: action.payload,
        filteredProducts: action.payload,
      };

    // Filter Products By Category
    case 'FILTER_PRODUCTS_BY_CATEGORY':
      return {
        ...state,
        category: action.payload.category,
        filteredProducts: action.payload.filteredByCategory,
      };

    // Filter Products By Search
    case 'FILTER_PRODUCTS_BY_SEARCH':
      return {
        ...state,
        filter: action.payload.filter,
        filteredProducts: action.payload.filteredProducts,
      };

    // Order The Products By Price
    case 'ORDER_PRODUCTS_BY_PRICE':
      return {
        ...state,
        sort: action.payload.sort,
        filteredProducts: action.payload.sortedProducts,
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

export const productSaveReducer = (state = { product: {}, success: false }, action) => {
  switch (action.type) {
    case 'SAVE_PRODUCT':
      return {
        success: true,
        product: action.payload,
      };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = { product: {}, success: false }, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT':
      return {
        success: true,
        product: action.payload,
      };

    default:
      return state;
  }
};
