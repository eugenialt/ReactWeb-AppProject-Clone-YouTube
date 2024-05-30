import Login from '../../Components/Authorization/Login/Login';
import './Login.css'
import SignUp from '../../Components/Authorization/SignUp/SignUp'

const LoginPage = () => {
  return (
    <>
      <div className='container-auth'>
        <h1>Login</h1>
        <Login />
        {/* <p>Or <Link to="/register">Register here</Link></p>  */}
      </div>

      <div className='container-auth'>
        <h1>Register</h1>
        <SignUp />
        {/* <p> 
            Already have an account? <Link to="/login">Sign In</Link>
        </p> */}
      </div>
    </>
  );
};

export default LoginPage ;