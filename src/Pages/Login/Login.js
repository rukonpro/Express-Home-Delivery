import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import { useForm } from "react-hook-form";

const Login = () => {

    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"


    // ===========================================================================
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLoginWithEmailAndPassword = (data, e) => {

        loginWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })


        e.preventDefault();
    };

    // Google Login---------------------------

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };


    return (
        <div className='container-fluid p-0 '>
            <form onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>

                <input className="form-control rounded-pill " {...register('email', { required: true })} placeholder="Email" /> <br />
                {errors.email && <p small>Email is required.</p>}

                <input className="form-control rounded-pill" {...register('password', { required: true })} placeholder="Password" /> <br />
                {errors.password && <small>password is required.</small>}

                <input className="form-control rounded-pill btn-warning " type="submit" value='Login' />
            </form><br />
            <p className='text-center'>------or------</p>
            <button className='bg-blue-500 text-white container-fluid py-2 rounded-pill' onClick={handleGoogleLogin}>Google Sign In</button><br /><br />

        </div>

    );
};

export default Login;