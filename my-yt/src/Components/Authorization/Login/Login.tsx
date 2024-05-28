import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Form from '../Form/Form';
import { setUser } from '../../../store/slices/userSlice';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = ({email, password}: {email:string, password:string}) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                console.error('Error signing in:', error);
                alert('Invalid user!');
            });
    };

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    );
};

export default Login;
