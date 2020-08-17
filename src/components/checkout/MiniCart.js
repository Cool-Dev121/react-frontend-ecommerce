import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatCurrency from '../../util';
import { removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

const MiniCart = props => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  const removeFromCartHandler = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='mini-cart-container'>
      <div className='mini-cart'>
        <Fade right cascade>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            <div>
              <div className='cart cart-header'>
                You have {cartItems.reduce((a, c) => a + c.qty, 0)} items in the cart
              </div>
              <hr />
              <ul className='mini-cart-items'>
                {cartItems.map(item => (
                  <li key={item.id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className='right'>
                        {formatCurrency(item.price)} x {item.qty}{' '}
                        <button className='button' onClick={() => removeFromCartHandler(item)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Fade>
      </div>
      {cartItems.length !== 0 && (
        <div>
          <div className='mini-cart'>
            <div className='mini-cart-total'>
              <span>Subtotal: {formatCurrency(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}</span>
              <Link to={'/signin?redirect=shipping'}>
                <button className='button primary full-width'>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
