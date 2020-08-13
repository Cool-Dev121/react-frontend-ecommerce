export const addToCart = (productId, qty) => (dispatch, getState) => {
  fetch(`/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          product: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          countInStock: product.countInStock,
          qty,
        },
      });
    });
  const {
    cart: { cartItems },
  } = getState();
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = productId => (dispatch, getState) => {
  dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });
  const {
    cart: { cartItems },
  } = getState();
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const saveShipping = data => dispatch => {
  dispatch({ type: 'CART_SAVE_SHIPPING', payload: data });
};

export const savePayment = data => dispatch => {
  dispatch({ type: 'CART_SAVE_PAYMENT', payload: data });
};
