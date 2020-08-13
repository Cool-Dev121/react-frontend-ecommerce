export const fetchProducts = () => dispatch => {
  fetch('/products')
    .then(res => res.json())
    .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }));
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
