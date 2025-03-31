import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login({ username: 'User' }));
    };
    return <button onClick={handleLogin}>Login</button>;
};
export default Login;