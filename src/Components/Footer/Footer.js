import { Link } from '@mui/material';
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer mt-11 pt-10'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <img src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                        <h3 className='text-yellow-400 fw-bold'>  Food Delivery Express</h3>
                        <h5 className="text-white">Mobile: 01785-5522 </h5>
                        <h5 className="text-white">Email:express.gmail.com</h5>
                        <small className="text-white">Email</small>
                        <div className=" input-group bg-yellow-400 mt-11">

                            <input type="email" className='form-control' placeholder='Email' />
                            <button className="btn">Send</button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <h3 className='text-yellow-400 fw-bold'>USEFUL LINKS</h3>
                        <Link className="fw-bold text-decoration-none  text-danger cursor-pointer">About</Link><br />
                        <Link className="fw-bold text-decoration-none  text-danger cursor-pointer">services</Link><br />
                        <Link className="fw-bold text-decoration-none  text-danger cursor-pointer">My Orders</Link>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <img src="https://i.ibb.co/68YS30F/slider-courier-mask.png
https://i.ibb.co/jG04JLK/young-courier-man-holding-food-delivery-bag-ringin-4-V6-X7-HS-1024x683.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;