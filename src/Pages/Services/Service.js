import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = (props) => {
    const { img, title, price, description, _id } = props.service;
    AOS.init();
    return (


        <Link to={`/placeOrder/${_id}`} className='text-decoration-none col-lg-4 col-md-6 col-sm-12'>
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
                            {description.slice(0, 100)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className=' bg-yellow-400'>

                    <Button size="large" color="primary">
                        Order
                    </Button>

                </CardActions>
            </Card>
        </Link>


    );
};

export default Service;