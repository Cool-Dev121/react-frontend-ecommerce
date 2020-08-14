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

export const listMyOrders = () => dispatch => {
  fetch(`/orders`)
    .then(res => res.json())
    .then(orders => dispatch({ type: 'FETCH_MY_ORDERS', payload: orders, success: true }));
};

export const fetchOrders = () => dispatch => {
  fetch(`/orders`)
    .then(res => res.json())
    .then(orders => dispatch({ type: 'FETCH_ORDERS', payload: orders, success: true }));
};

export const payOrder = order => dispatch => {
  fetch(`/orders/${order.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order }),
  })
    .then(res => res.json())
    .then(order => dispatch({ type: 'PAY_ORDER', payload: order, success: true }));
};

export const deleteOrder = order => dispatch => {
  fetch(`/orders/${order.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(order => dispatch({ type: 'DELETE_ORDER', payload: order, success: true }));
};
