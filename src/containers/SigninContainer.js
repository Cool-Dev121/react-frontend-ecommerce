import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

const SigninContainer = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = event => {
    event.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className='form'>
      <form onSubmit={submitHandler}>
        <ul className='form-container'>
          <li>
            <h2>Sign-In</h2>
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
            <button type='submit' className='button primary'>
              Sign In
            </button>
          </li>
          <li>New to amazona?</li>
          <li>
            <Link to='/register' className='button secondary text-center'>
              Create Account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninContainer;
