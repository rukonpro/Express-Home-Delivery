// import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = (props) => {
    const { img, title, price, description, _id } = props.service;
    AOS.init();
    return (


        <Link to={`/placeOrder/${_id}`} className='text-decoration-none col'>

            <div class=" ">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt="food" />
                    <div class="card-body">
                        <h5 class="card-title text-danger">{title.slice(0, 25)}</h5>
                        <p class="card-text">{description.slice(0, 100)}...</p>
                    </div>
                    <div class="card-footer flex justify-between">
                        <span><small class="text-muted btn btn-warning inline">Order</small></span>
                        <span><h4 class="text-muted inline  text-danger">${price}</h4></span>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Service;