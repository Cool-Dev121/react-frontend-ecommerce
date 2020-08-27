const BASE_URL = 'https://react-widget-store-api.herokuapp.com/api/v1';

export const fetchProducts = () => dispatch => {
  fetch(`${BASE_URL}/products`)
    .then(res => res.json())
    .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
};

// Filter Product By Search
export const filterProducts = (products, filter) => dispatch => {
  const filteredProducts = products.filter(product => product.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);

  dispatch({
    type: 'FILTER_PRODUCTS_BY_SEARCH',
    payload: {
      filter: filter,
      filteredProducts: filteredProducts,
    },
  });
};

// Sort Products By Latest, Lowest, Highest
export const sortProducts = (products, sort) => dispatch => {
  const sortedProducts = products.slice();
  if (sort === 'latest') {
    sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) => (sort === 'lowest' ? (a.price > b.price ? 1 : -1) : a.price > b.price ? -1 : 1));
  }

  dispatch({
    type: 'ORDER_PRODUCTS_BY_PRICE',
    payload: {
      sort: sort,
      sortedProducts: sortedProducts,
    },
  });
};

// Filter Products By Category
export const filterProductsByCategory = (products, category) => dispatch => {
  let filteredByCategory = products;
  if (category !== 'All') {
    filteredByCategory = products.filter(product => product.category.toUpperCase() === category.toUpperCase());
  }
  dispatch({
    type: 'FILTER_PRODUCTS_BY_CATEGORY',
    payload: {
      category: category,
      filteredByCategory: filteredByCategory,
    },
  });
};

export const detailsProduct = productId => dispatch => {
  fetch(`/products/${productId}`)
    .then(res => res.json())
    .then(product => dispatch({ type: 'GET_PRODUCT', payload: product }));
};

export const saveProduct = product => dispatch => {
  if (product.id) {
    fetch(`/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    })
      .then(res => res.json())
      .then(product => dispatch({ type: 'SAVE_PRODUCT', payload: product, success: true }));
  } else {
    fetch(`/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    })
      .then(res => res.json())
      .then(product => dispatch({ type: 'SAVE_PRODUCT', payload: product, success: true }));
  }
};

export const deleteProduct = product => dispatch => {
  fetch(`/products/${product.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(product => dispatch({ type: 'DELETE_PRODUCT', payload: product, success: true }));
};

export const saveProductReview = (productId, review) => dispatch => {
  fetch(`/products/${productId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ review }),
  })
    .then(res => res.json())
    .then(review => dispatch({ type: 'SAVE_PRODUCT_REVIEW', payload: review, success: true }));
};
