import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const P = () => {
        return <p> Or <Link to="/register">Register</Link> </p>;
      };
  return (
    <div>
        <h1>Login</h1>
        <P />
    </div>
    
  )
}

export default LoginPage