import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../../components/checkout/CheckoutSteps';
import { createOrder } from '../../actions/orderActions';
import formatCurrency from '../../util';

const PlaceOrderContainer = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const orders = useSelector(state => state.orders);
  const { userInfo } = useSelector(state => state.user);
  const { shipping, payment } = userInfo.user;
  const { cartItems } = cart;
  const { success, order } = orders;
  const user_id = userInfo.user.id;

  // Variables for cost of order
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  if (!shipping.address) {
    props.history.push('/shipping');
  } else if (!payment.paymentMethod) {
    props.history.push('/payment');
  }

  // Create An Order
  const placeOrderHandler = () => {
    dispatch(createOrder({ user_id, cartItems, shipping, payment, itemsPrice, shippingPrice, taxPrice, totalPrice }));
  };

  useEffect(() => {
    if (success) {
      cart.cartItems = [];
      orders.success = false;
      props.history.push(`/orders/${order.id}`);
    }
    return () => {
      //
    };
  }, [success, cart.cartItems, order.id, orders.success, props.history]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className='placeorder'>
        <div className='placeorder-info'>
          <div>
            <h3>Shipping</h3>
            <div>
              {shipping.address}, {shipping.city}, {shipping.postalCode}, {shipping.country}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {payment.paymentMethod}</div>
          </div>
          <div>
            <ul className='cart-list-container'>
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map(item => (
                  <li key={item.product}>
                    <div className='cart-image'>
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className='cart-name'>
                      <div>
                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div className='cart-price'>${item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className='placeorder-action'>
          <ul>
            <li>
              <button className='button primary full-width' onClick={placeOrderHandler}>
                Place Order
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>{formatCurrency(itemsPrice)}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{formatCurrency(shippingPrice)}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>{formatCurrency(taxPrice)}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>{formatCurrency(totalPrice)}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderContainer;
