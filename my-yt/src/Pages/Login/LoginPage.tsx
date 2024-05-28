import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../../Components/Authorization/Login/Login';

const LoginPage = () => {
    const P = () => {
        return <p> Or <Link to="/register">Register</Link> </p>;
      };
  return (
    <div>
        <h1>Login</h1>
        <Login/>
        <P />
    </div>
    
  )
}

export default LoginPage