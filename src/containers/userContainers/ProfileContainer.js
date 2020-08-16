import React, { useState, useEffect } from 'react';
import { logout, update } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { listMyOrders } from '../../actions/orderActions';
import { Link } from 'react-router-dom';
import formatCurrency from '../../util';

const ProfileContainer = props => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConformation] = useState('');
  const { userInfo } = useSelector(state => state.user);
  const { success, myOrders } = useSelector(state => state.orders);
  const myNewOrders = myOrders.filter(order => order.user.id === userInfo.user.id);

  const handleLogout = () => {
    dispatch(logout());
    props.history.push('/signin');
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(update(userInfo.user.id, firstName, lastName, email, password, passwordConfirmation));
  };

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.user.email);
      setFirstName(userInfo.user.first_name);
      setLastName(userInfo.user.last_name);
    }
    dispatch(listMyOrders(userInfo.user));

    // }
    return () => {};
  }, [dispatch, userInfo]);

  return (
    <div className='profile'>
      <div className='profile-info'>
        <form onSubmit={submitHandler}>
          <ul className='form-container'>
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              <label htmlFor='first_name'>First Name</label>
              <input
                value={firstName}
                required
                type='text'
                name='first_name'
                id='first_name'
                onChange={e => setFirstName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor='last_name'>Last Name</label>
              <input
                value={lastName}
                required
                type='text'
                name='last_name'
                id='last_name'
                onChange={e => setLastName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor='email'>Email</label>
              <input
                value={email}
                required
                type='email'
                name='email'
                id='email'
                onChange={e => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor='password'>Password</label>
              <input
                required
                type='password'
                id='password'
                name='password'
                onChange={e => setPassword(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor='password_confirmation'>Password Confirmation</label>
              <input
                required
                type='password'
                id='password_confirmation'
                name='password_confirmation'
                onChange={e => setPasswordConformation(e.target.value)}
              />
            </li>
            <li>
              <button type='submit' className='button primary'>
                Update
              </button>
            </li>
            <li>
              <button type='button' onClick={handleLogout} className='button secondary full-width'>
                Logout
              </button>
            </li>
          </ul>
        </form>
      </div>
      <div className='profile-orders content-margined'>
        <h2>Your Orders</h2>
        {!success ? (
          <div>Loading...</div>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myNewOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.created_at.substring(0, 10)}</td>
                  <td>{formatCurrency(order.totalPrice)}</td>
                  <td>{order.isPaid.toString()}</td>
                  <td>
                    <Link to={`/orders/${order.id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
