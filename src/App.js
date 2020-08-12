import React from 'react';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>&#9776;</button>
          <a href='index.html'>amazona</a>
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
          <ul className='products'>
            <li>
              <div className='product'>
                <img className='product-image' src='images/d1.jpg' alt='product' />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Tommy Hilfiger</div>
                <div className='product-price'>$60</div>
                <div className='product-rating'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img className='product-image' src='images/d1.jpg' alt='product' />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Tommy Hilfiger</div>
                <div className='product-price'>$60</div>
                <div className='product-rating'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img className='product-image' src='images/d1.jpg' alt='product' />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Tommy Hilfiger</div>
                <div className='product-price'>$60</div>
                <div className='product-rating'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img className='product-image' src='images/d1.jpg' alt='product' />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Tommy Hilfiger</div>
                <div className='product-price'>$60</div>
                <div className='product-rating'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className='product'>
                <img className='product-image' src='images/d1.jpg' alt='product' />
                <div className='product-name'>
                  <a href='product.html'>Slim Shirt</a>
                </div>
                <div className='product-brand'>Tommy Hilfiger</div>
                <div className='product-price'>$60</div>
                <div className='product-rating'>4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className='footer'>Copyright &#169; 2020 Tanner Townsend. All rights reserved.</footer>
    </div>
  );
}

export default App;
