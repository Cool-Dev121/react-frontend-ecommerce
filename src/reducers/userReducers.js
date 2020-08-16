export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        userInfo: action.payload,
      };

    case 'LOGIN_USER':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      console.log(action.payload);
      return {
        userInfo: action.payload,
      };

    case 'LOGOUT_USER':
      localStorage.removeItem('userInfo');
      return {
        userInfo: '',
      };

    case 'UPDATE_USER':
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      console.log(action.payload);
      return {
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
