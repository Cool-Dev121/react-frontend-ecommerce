const BASE_URL = 'https://react-widget-store-api.herokuapp.com/api/v1';

export const createOrder = order => dispatch => {
  fetch(`${BASE_URL}/orders`, {
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
  fetch(`${BASE_URL}/orders/${orderId}`)
    .then(res => res.json())
    .then(order => dispatch({ type: 'FETCH_ORDER', payload: order, success: true }));
};

export const listMyOrders = () => dispatch => {
  fetch(`${BASE_URL}/orders`)
    .then(res => res.json())
    .then(orders => dispatch({ type: 'FETCH_MY_ORDERS', payload: orders, success: true }));
};

export const fetchOrders = () => dispatch => {
  fetch(`${BASE_URL}/orders`)
    .then(res => res.json())
    .then(orders => dispatch({ type: 'FETCH_ORDERS', payload: orders, success: true }));
};

export const payOrder = order => dispatch => {
  fetch(`${BASE_URL}/orders/${order.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order }),
  })
    .then(res => res.json())
    .then(order => dispatch({ type: 'PAY_ORDER', payload: order, success: true }));
};

export const deliverOrder = order => dispatch => {
  fetch(`${BASE_URL}/orders/${order.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ order }),
  })
    .then(res => res.json())
    .then(order => dispatch({ type: 'DELIVER_ORDER', payload: order, success: true }));
};

export const deleteOrder = order => dispatch => {
  fetch(`${BASE_URL}/orders/${order.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(order => dispatch({ type: 'DELETE_ORDER', payload: order, success: true }));
};
