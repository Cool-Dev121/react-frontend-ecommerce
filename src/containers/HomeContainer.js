import React from 'react';
import Filter from '../components/Filter';
import Products from '../components/products/Products';
import MiniCart from '../components/checkout/MiniCart';

const HomeContainer = () => {
  return (
    <div className='home-content'>
      <div className='main-content'>
        <Filter />
        <hr />
        <Products />
      </div>
      <div className='cart-sidebar'>
        <MiniCart />
      </div>
    </div>
  );
};

export default HomeContainer;
