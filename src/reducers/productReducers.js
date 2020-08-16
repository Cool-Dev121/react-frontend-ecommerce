export const productsReducer = (
  state = {
    products: [],
    filteredProducts: [],
    product: { reviews: [] },
    filter: '',
    category: '',
    sort: 'latest',
    success: true,
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
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

    // See Details of a Product
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload,
      };

    // Create/Update An Individual Product
    case 'SAVE_PRODUCT':
      return {
        ...state,
        success: true,
        product: action.payload,
      };

    // Delete An Individual Product
    case 'DELETE_PRODUCT':
      return {
        ...state,
        success: true,
        product: action.payload,
      };

    // Create a Product Review and Save It
    case 'SAVE_PRODUCT_REVIEW':
      return {
        ...state,
        success: true,
        review: action.payload,
      };

    default:
      return state;
  }
};
