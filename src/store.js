import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const initalState = {};

const store = createStore(
  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
  }),
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
