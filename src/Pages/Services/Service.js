import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = (props) => {
    const { img, title, price, description, _id } = props.service;
    AOS.init();
    return (
        <div data-aos="zoom-out-right" data-aos-easing="ease-out-cubic" className='col-lg-3 col-md-6 col-sm-12'>

            <Link to={`/placeOrder/${_id}`} className='text-decoration-none'>
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
                    <CardActions className=' bg-yellow-400'>

                        <Button size="large" color="primary">
                            Order
                        </Button>

                    </CardActions>
                </Card>
            </Link>
        </div>


    );
};

export default Service;