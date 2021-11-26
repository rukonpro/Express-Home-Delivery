import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import useAuth from '../../Components/Hooks/useAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';
const PlaceOrder = () => {
    const [singleService, setSingleService] = useState({}) || '';
    const [myOrderService, setMyOrderService] = useState([]) || '';
    const { id } = useParams();
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://arcane-sierra-37156.herokuapp.com/singleServices/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [id, setSingleService])
    // --------------------------------------------------------





    useEffect(() => {
        fetch(`https://arcane-sierra-37156.herokuapp.com/myOrderServices/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrderService(data))
    }, [user.email, setMyOrderService])



    //---------------------------------------------------------
    const { title, img, description, price } = singleService;
    const email = user?.email;
    const name = user?.displayName;
    const date = new Date();
    const pending = 'Pending';
    const colors = 'btn-warning';
    const OrderData = { title, img, description, price, name, email, date, pending, colors }



    const handleOrder = () => {
        axios.post('https://arcane-sierra-37156.herokuapp.com/addToOrders', OrderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Add to cart successfully')
                    fetch(`https://arcane-sierra-37156.herokuapp.com/myOrderServices/${user?.email}`)
                        .then(res => res.json())
                        .then(data => setMyOrderService(data))
                }
            })
    }

    return (
        <div className='container'>
            <h1 className='text-yellow-500 text-decoration-underline fw-bold text-center mt-11'>Add to card😋{myOrderService.length}</h1>

            <div className='container-fluid p-0 '>
                <div className='row d-flex justify-center items-center'>
                    <div className='col-sm-12 col-ms-6 col-lg-6'>
                        <img src={img} alt="" />
                    </div>
                    <div className='col-sm-12 col-ms-6 col-lg-6'>
                        <h1 className='text-yellow-400'>{title}</h1>
                        <p>{description}</p>
                        <h4>${price}</h4>
                        <button onClick={handleOrder} className='btn btn-warning mt-2 text-white mr-2'>Add to cart</button>

                        <Link to='/myOrders' className='btn btn-info mt-2 text-danger mr-2'>See your order</Link>

                        <Link to='/services'><button className='btn mt-2 btn-primary'>Back to all services</button></Link>


                        <div className='col-sm-12 col-md-6 col-lg-6 py-5'>
                            <hr />
                            <img className='bg-green-400 py-1 px-14' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                            <h3 className='text-blue-700 fw-bold'>  Food Delivery Express</h3>
                            <h5 className=" text-pink-600">Mobile: 01785-5522 </h5>
                            <h5 className=" text-green-600">Email:express.gmail.com</h5>
                            <small className=" text-red-800">Email</small>
                            <div className=" input-group bg-yellow-400 mt-2">

                                <input type="email" className='form-control' placeholder='Email' />
                                <button className="btn">Send</button>
                            </div>
                        </div>
                    </div>


                </div>





            </div>
        </div>
    );
};

export default PlaceOrder;