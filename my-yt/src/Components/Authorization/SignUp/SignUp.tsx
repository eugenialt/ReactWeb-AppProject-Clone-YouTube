import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../../store/slices/userSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
                console.error('Error signing up:', error);
                alert('Error signing up!');
            });
    };

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    );
};

export default SignUp;
