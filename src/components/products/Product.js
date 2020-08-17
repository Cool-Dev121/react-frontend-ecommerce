import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { addToCart } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';

const Product = props => {
  const product = props.product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product, 1));
  };

  return (
    <div className='product'>
      <Link to={`/products/${product.id}`}>
        <img className='product-image' src={product.image} alt='product' />
      </Link>
      <div className='product-name'>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
      <div className='product-brand'>{product.brand}</div>
      <div className='product-price'>
        ${product.price}
        <button onClick={addToCartHandler} className='button primary' disabled={product.countInStock < 1}>
          {product.countInStock > 0 ? 'Add To Cart' : 'Out Of Stock'}
        </button>
      </div>
      <div className='product-rating'>
        <Rating value={product.rating} text={product.numReviews + ' Reviews'} />
      </div>
    </div>
  );
};

export default Product;
