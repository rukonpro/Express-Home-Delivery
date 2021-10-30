import { CardActions, Button, Typography, CardContent, CardMedia, CardActionArea } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UpdateServices = (props) => {
    const { img, title, price, description, _id } = props?.serviceUpdate;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card >
                <CardActionArea>
                    <CardMedia className='overflow-hidden'
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className=' d-flex justify-around bg-pink-100'>

                    <Link to={`/testUseParams/${_id}`} >
                        <button className='btn btn-warning'>Update</button>
                    </Link>
                    <button onClick={() => props?.handleDelete(_id)} className='btn btn-danger'>Delete</button>


                </CardActions>
            </Card>
        </div>
    );
};

export default UpdateServices;