export const createOrder = order => dispatch => {
  fetch('/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order }),
  })
    .then(res => res.json())
    .then(order => dispatch({ type: 'CREATE_ORDER', payload: order, success: true }));
};

export const fetchOrder = orderId => dispatch => {
  fetch(`/orders/${orderId}`)
    .then(res => res.json())
    .then(order => dispatch({ type: 'FETCH_ORDER', payload: order, success: true }));
};
