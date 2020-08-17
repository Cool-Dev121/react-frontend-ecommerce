export const signin = (email, password) => dispatch => {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'LOGIN_USER', payload: user }));
};

export const register = (first_name, last_name, email, password, password_confirmation) => dispatch => {
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password: password,
      password_confirmation: password_confirmation,
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'REGISTER_USER', payload: user }));
};

export const update = (userId, first_name, last_name, email, password, password_confirmation) => dispatch => {
  fetch(`/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'UPDATE_USER', payload: { user } }));
};

export const saveShipping = (userId, address, city, postalCode, country) => dispatch => {
  fetch(`/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shipping: {
        address,
        city,
        postalCode,
        country,
      },
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'UPDATE_USER', payload: { user } }));
};

export const savePayment = (userId, paymentMethod) => dispatch => {
  fetch(`/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      payment: {
        paymentMethod,
      },
    }),
  })
    .then(res => res.json())
    .then(user => dispatch({ type: 'UPDATE_USER', payload: { user } }));
};

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT_USER' });
};
