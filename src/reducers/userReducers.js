export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
