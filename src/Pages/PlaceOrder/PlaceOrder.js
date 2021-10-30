import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useAuth from '../../Components/Hooks/useAuth';
import axios from 'axios';
const PlaceOrder = () => {
    const [singleService, setSingleService] = useState({}) || '';

    const { id } = useParams();
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://arcane-sierra-37156.herokuapp.com/singleServices/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [id, setSingleService])
    // --------------------------------------------------------
    const { title, img, description, price } = singleService;


    const email = user?.email;
    const name = user?.displayName;
    const date = new Date();
    const pending = 'Pending';
    const OrderData = { title, img, description, price, name, email, date, pending }



    const handleOrder = () => {
        axios.post('https://arcane-sierra-37156.herokuapp.com/addToOrders', OrderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Add to cart successfully')
                }
            })
    }

    return (
        <div className='container'>
            <h1 className='text-yellow-500 text-decoration-underline fw-bold text-center mt-11'>Please Add to card😋</h1>

            <div className='container-fluid p-0 '>
                <div className='row d-flex justify-center items-center'>
                    <div className='col-sm-12 col-ms-6 col-lg-6'>
                        <img src={img} alt="" />
                    </div>
                    <div className='col-sm-12 col-ms-6 col-lg-6'>
                        <h1 className='text-yellow-400'>{title}</h1>
                        <p>{description}</p>
                        <h4>${price}</h4>
                        <button onClick={handleOrder} className='btn btn-warning'>Add to cart</button>
                    </div>

                </div>





            </div>
        </div>
    );
};

export default PlaceOrder;