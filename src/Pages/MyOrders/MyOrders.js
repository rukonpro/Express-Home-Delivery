import React, { useEffect, useState } from 'react';
import useAuth from '../../Components/Hooks/useAuth';
import MyOrder from './MyOrder';
import axios from 'axios';
import Spinner from '../../Components/Hooks/Spinner'
import './MyOrder.css'
const MyOrders = () => {
    const [myOrderService, setMyOrderService] = useState([]) || '';
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://express-home-delivery-server.onrender.com/myOrderServices/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrderService(data))
    }, [user.email, setMyOrderService])
    // console.log(myOrderService)

    const handleDelete = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://express-home-delivery-server.onrender.com/deleteItem/${id}`)
                .then(res => res.data.deletedCount &&
                    fetch(`https://express-home-delivery-server.onrender.com/myOrderServices/${user?.email}`)
                        .then(res => res?.json())
                        .then(data => setMyOrderService(data))
                )
    }


    return (
        <div className='my-order-bg pb-11'>
            <div className="container">
                <header className="text-center mt-11 text-black">
                    <h1 className="display-4 py-11 fw-bold text-yellow-400 underline uppercase"><span className='text-red-500'>MY</span> Add To Cart</h1>
                    <div><h5>{myOrderService.length === 0 && Spinner}</h5></div>
                </header>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card rounded shadow border-0">
                            <img className=' w-1/12  bg-green-300 p-1 rounded' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                            <div className="card-body  bg-white rounded">
                                <div className="table-responsive">
                                    <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Title</th>
                                                <th>Date</th>
                                                <th>Photo</th>
                                                <th>DELETE</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                myOrderService?.map(myOrder => <MyOrder key={myOrder?._id} handleDelete={handleDelete} myOrder={myOrder}></MyOrder>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyOrders;