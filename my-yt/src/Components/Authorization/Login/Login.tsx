import {useDispatch} from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import Form from '../Form/Form';
import {setUser} from '../../../store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = ({email, password}: {email:any, password:any}) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.uid,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}