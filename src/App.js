import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import SigninContainer from './containers/SigninContainer';
import { connect, useSelector, useDispatch } from 'react-redux';
import RegisterContainer from './containers/RegisterContainer';
import ProductsContainer from './containers/ProductsContainer';
import ShippingContainer from './containers/ShippingContainer';
import PaymentContainer from './containers/PaymentContainer';
import PlaceOrderContainer from './containers/PlaceOrderContainer';
import OrderContainer from './containers/OrderContainer';
import ProfileContainer from './containers/ProfileContainer';
import OrdersContainer from './containers/OrdersContainer';
import { filterProductsByCategory } from './actions/productActions';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { user } = userSignin.userInfo;
  const productList = useSelector(state => state.productList);
  const { products, filteredProducts } = productList;
  const dispatch = useDispatch();

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  const categoryHandler = category => {
    closeMenu();
    dispatch(filterProductsByCategory(products, category));
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>amazona</Link>
          </div>
          <div className='header-links'>
            <Link to='/cart'>Cart</Link>
            {user ? <Link to='/profile'>{user.first_name}</Link> : <Link to='/signin'>Sign In</Link>}
            {user && user.isAdmin && (
              <div className='dropdown'>
                <a href='#'>Admin</a>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/products'>Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            X
          </button>
          <ul className='categories'>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                All
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Pants
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Shirts
              </button>
            </li>
          </ul>
        </aside>

        <main className='main'>
          <div className='content'>
            <Route path='/register' component={RegisterContainer} />
            <Route path='/signin' component={SigninContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/products' exact component={ProductsContainer} />
            <Route path='/shipping' component={ShippingContainer} />
            <Route path='/payment' component={PaymentContainer} />
            <Route path='/placeorder' component={PlaceOrderContainer} />
            <Route path='/orders' exact component={OrdersContainer} />
            <Route path='/orders/:id' component={OrderContainer} />
            <Route path='/products/:id' exact component={ProductContainer} />
            <Route path='/cart/:id?' component={CartContainer} />
            <Route path='/' exact component={HomeContainer} />
          </div>
        </main>
        <footer className='footer'>Copyright &#169; 2020 Tanner Townsend. All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
