import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Filter from '../components/Filter';
import Rating from '../components/Rating';

const HomeContainer = props => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='home-content'>
      <div className='main-content'>
        <Filter />
        <hr />
        {!filteredProducts ? (
          <div>Loading...</div>
        ) : (
          <ul className='products'>
            {filteredProducts.map(product => (
              <li key={product.id}>
                <div className='product'>
                  <Link to={`/products/${product.id}`}>
                    <img className='product-image' src={product.image} alt='product' />
                  </Link>
                  <div className='product-name'>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </div>
                  <div className='product-brand'>{product.brand}</div>
                  <div className='product-price'>${product.price}</div>
                  <div className='product-rating'>
                    <Rating value={product.rating} text={product.numReviews + ' Reviews'} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
