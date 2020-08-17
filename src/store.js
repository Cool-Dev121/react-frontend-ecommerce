import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userReducer } from './reducers/userReducers';
import { ordersReducer } from './reducers/orderReducers';

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || { shipping: {}, payment: {} };

const initalState = {
  cart: { cartItems },
  user: { userInfo, orders: [] },
};

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  }),
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
