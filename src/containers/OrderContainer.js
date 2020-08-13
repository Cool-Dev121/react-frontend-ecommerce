import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrder } from '../actions/orderActions';

const OrderContainer = props => {
  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, success, order } = orderDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const payHandler = () => {};

  return !success ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div className='placeorder'>
        <div className='placeorder-info'>
          <div>
            <h3>Shipping</h3>
            <div>
              {order.shipping.address}, {order.shipping.city},{order.shipping.postalCode}, {order.shipping.country}
              <div>{order.isDelivered ? `Delivered at ${order.deliveredAt}` : 'Not Delivered.'}</div>
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {order.payment.paymentMethod}</div>
            <div>{order.isPaid ? `Paid at ${order.paidAt}` : 'Not Paid.'}</div>
          </div>
          <div>
            <ul className='cart-list-container'>
              <li>
                <h3>Order Items</h3>
                <div>Price</div>
              </li>
              {order.cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                order.cartItems.map(item => (
                  <li>
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
              <button className='button primary full-width' onClick={payHandler}>
                Pay Now
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${order.taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${order.totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
