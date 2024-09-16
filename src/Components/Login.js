import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Features/user';

const Login = () => {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(login({name: "Chandru", age: 24, email: "chandramohank@gmail.com"}))}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login