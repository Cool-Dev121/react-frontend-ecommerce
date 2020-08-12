import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
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
            <a href='cart.html'>Cart</a>
            <a href='signin'>Sign In</a>
          </div>
        </header>

        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href='index.html'>Pants</a>
            </li>
            <li>
              <a href='index.html'>Shirts</a>
            </li>
          </ul>
        </aside>

        <main className='main'>
          <div className='content'>
            <Route path='/products/:id' component={ProductContainer} />
            <Route path='/' exact component={HomeContainer} />
          </div>
        </main>
        <footer className='footer'>Copyright &#169; 2020 Tanner Townsend. All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
