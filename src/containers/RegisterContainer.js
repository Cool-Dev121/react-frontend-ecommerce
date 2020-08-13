import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

const RegisterContainer = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConformation] = useState('');

  const userRegister = useSelector(state => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = event => {
    event.preventDefault();
    dispatch(register(firstName, lastName, email, password, passwordConfirmation));
  };

  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <h2>Create An Account</h2>
          </li>
          <li>
            <label htmlFor='first_name'>First Name</label>
            <input type='first_name' name='first_name' id='first_name' onChange={e => setFirstName(e.target.value)} />
          </li>
          <li>
            <label htmlFor='last_name'>Last Name</label>
            <input type='last_name' name='last_name' id='last_name' onChange={e => setLastName(e.target.value)} />
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={e => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)} />
          </li>
          <li>
            <label htmlFor='password_confirmation'>Password Confirmation</label>
            <input
              type='password'
              id='password_confirmation'
              name='password_confirmation'
              onChange={e => setPasswordConformation(e.target.value)}
            />
          </li>
          <li>
            <button type='submit' className='button primary'>
              Register
            </button>
          </li>
          <li>Already have an account?</li>
          <li>
            <Link
              to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}
              className='button secondary text-center'>
              Sign In
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterContainer;
