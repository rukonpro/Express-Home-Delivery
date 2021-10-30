import React, { useState } from 'react';
import Register from '../../Register/Register';
import Login from '../Login';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import AOS from 'aos';
import 'aos/dist/aos.css';
const LoginTogol = () => {
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => setChecked(value => !value);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    AOS.init();
    return (
        <div className='container p-3'>

            <h1 className=' fw-bolder text-pink-600'>{checked ? 'Welcome to Register page' : 'Welcome to Login Page'}</h1>

            <div className='row p-0 d-flex justify-between'>
                <div className='col-lg-6 col-md-6'>
                    <img data-aos="fade-right" className='img-fluid' src="https://i.ibb.co/Gdkp0HJ/slider-courier-mask-2.png" alt="" />
                </div>
                <div className='col-lg-6 col-md-6'>
                    {!checked ? <Login /> : <Register />}
                    <span className='text-2xl'> {!checked ? "Are you New User? Please register" : ' Already Register Please login'}
                        <Checkbox
                            checked={checked}
                            onChange={toggleChecked}
                            {...label}
                            defaultChecked
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                    </span>


                </div>
            </div>


        </div>
    );
};

export default LoginTogol;