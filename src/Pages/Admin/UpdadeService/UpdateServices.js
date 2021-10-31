// import { CardActions, Typography, CardContent, CardMedia, CardActionArea } from '@mui/material';
import React from 'react';
// import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UpdateServices = (props) => {
    const { img, title, price, description, _id } = props?.serviceUpdate;
    return (

        // <div className='col-lg-3 col-md-6 col-sm-12'>
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="food" />
                <div class="card-body">
                    <h5 class="card-title text-danger">{title.slice(0, 25)}</h5>
                    <p class="card-text">{description.slice(0, 100)}...</p>
                    <h4 class="card-text">${price}</h4>
                </div>
                <div class="card-footer flex justify-between">

                    <Link to={`/testUseParams/${_id}`} >
                        <button className='btn btn-warning'>Update</button>
                    </Link>
                    <button onClick={() => props?.handleDelete(_id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
        // </div>

    );
};

export default UpdateServices;