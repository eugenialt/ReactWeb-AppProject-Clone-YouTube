import Login from '../../Components/Authorization/Login/Login';
import './Login.css'
import SignUp from '../../Components/Authorization/SignUp/SignUp'
import { Grid, Paper } from '@mantine/core';


const LoginPage = () => {
  return (
    
     <Grid>
      <Grid.Col span={6}>
      <Paper style={{backgroundColor: '#9e1313' , }} shadow="md" className='login-paper' radius="md" p="xl">
      <div className='container-auth'>
        <h1 className='text-h1-l'>Login</h1>
        <Login />
        {/* <p>Or <Link to="/register">Register here</Link></p>  */}
      </div>
      </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
      <Paper style={{backgroundColor: '#ffff'}} shadow="md" className='login-paper' radius="md" p="xl">
      <div className='container-auth'>
        <h1 className='text-h1-r'>Register</h1>
        <SignUp />
        {/* <p> 
            Already have an account? <Link to="/login">Sign In</Link>
        </p> */}
      </div>
      </Paper>
      </Grid.Col>
      </Grid>
    
  );
};

export default LoginPage ;