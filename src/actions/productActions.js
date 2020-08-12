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
