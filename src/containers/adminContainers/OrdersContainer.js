import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders, deleteOrder } from '../../actions/orderActions';
import formatCurrency from '../../util';

const OrdersContainer = props => {
  const orderList = useSelector(state => state.orderList);
  const { orders } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());

    return () => {
      //
    };
  }, [dispatch, orderDelete.success]);

  const deleteHandler = order => {
    dispatch(deleteOrder(order));
  };

  return (
    <div className='content content-margined'>
      <div className='order-header'>
        <h3>Orders</h3>
      </div>
      <div className='order-list'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>PAID AT</th>
              <th>DELIVERED</th>
              <th>DELIVERED AT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.created_at}</td>
                <td>{formatCurrency(order.totalPrice)}</td>
                <td>{order.user.first_name}</td>
                <td>{order.isPaid.toString()}</td>
                <td>{order.paidAt}</td>
                <td>{order.isDelivered.toString()}</td>
                <td>{order.deliveredAt}</td>
                <td>
                  <Link to={`/orders/${order.id}`} className='button secondary'>
                    Details
                  </Link>
                  <button className='button secondary' onClick={() => deleteHandler(order)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersContainer;
