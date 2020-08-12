import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const HomeContainer = props => {
  const productList = useSelector(state => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      //
    };
  }, []);

  return (
    <div>
      {!products ? (
        <div>Loading...</div>
      ) : (
        <ul className='products'>
          {products.map(product => (
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
                  {product.rating} Stars ({product.numReviews} Reviews)
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeContainer;
