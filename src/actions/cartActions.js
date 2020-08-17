export const addToCart = (product, qty) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;

  cartItems.forEach(item => {
    if (item.id === product.id) {
      alreadyExists = true;
      item.qty += qty;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, qty });
  }

  dispatch({
    type: 'CART_ADD_ITEM',
    payload: { cartItems },
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = product => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter(item => item.id !== product.id);

  dispatch({ type: 'CART_REMOVE_ITEM', payload: { cartItems } });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const editCartItem = (product, qty) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();

  cartItems.forEach(item => {
    if (item.id === product.id) {
      item.qty = qty;
    }
  });

  dispatch({ type: 'CART_EDIT_ITEM', payload: { cartItems } });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const saveShipping = data => dispatch => {
  dispatch({ type: 'CART_SAVE_SHIPPING', payload: data });
};

export const savePayment = data => dispatch => {
  dispatch({ type: 'CART_SAVE_PAYMENT', payload: data });
};
