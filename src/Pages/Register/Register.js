import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from || "/home"

    // --------------------------------------------------------------------------------
    //handle Register-----------------------------------

    const handleRegisterWithEmailAndPassword = (data, e) => {

        e.preventDefault();
        createAccountWithGoogle(data.email, data.password)

            .then((res) => {

                setIsLoading(true)
                history.push(url)
                updateName(data.name)
                setUser(res.user)

            })
            .catch((error) => {

                // const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    // ----------------------------------------------------------------------------------

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
            <form onSubmit={handleSubmit(handleRegisterWithEmailAndPassword)}>

                <input className="form-control rounded-pill " {...register('name', { required: true })} placeholder="Name" /> <br />
                {errors.name && <p small>Name is required.</p>}

                <input className="form-control rounded-pill " {...register('email', { required: true })} placeholder="Email" /> <br />
                {errors.email && <p small>Email is required.</p>}

                <input className="form-control rounded-pill" {...register('password', { required: true })} placeholder="Password" /> <br />
                {errors.password && <small>password is required.</small>}

                <input className="form-control rounded-pill  btn-warning" value='Register' type="submit" />
            </form><br />
            <p className='text-center'>------or------</p>
            <button className='bg-blue-500 text-white container-fluid py-2 rounded-pill' onClick={handleGoogleLogin}>Google Sign In</button><br /><br />

        </div>


    );
};

export default Register;