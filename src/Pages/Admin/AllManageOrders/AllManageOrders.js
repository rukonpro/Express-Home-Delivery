import React, { useEffect, useState } from 'react';
import AllManageOrder from './AllManageOrder';
import axios from 'axios';
import './ManageOrder.css';
const AllManageOrders = () => {
    const [allOrdersItems, setOrdersItems] = useState([])


    useEffect(() => {
        fetch('https://express-home-delivery-server.onrender.com/allOrderServices')
            .then(res => res.json())
            .then(data => setOrdersItems(data))
    }, [])

    //handle approve Order-----------------------------------
    const handleApproved = (data, id) => {

        data.pending = 'Approved';
        data.colors = 'btn-success';
        axios.put(`https://express-home-delivery-server.onrender.com/updateApproved/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert('Approved Successfully')

                    fetch('https://express-home-delivery-server.onrender.com/allOrderServices')
                        .then(res => res.json())
                        .then(data => setOrdersItems(data))
                }
            })
        console.log(data)
    }

    //handle delete panting Order------------------------------

    const handleDelete = (id) => {

        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://express-home-delivery-server.onrender.com/deleteItem/${id}`)
                .then(res => res?.data?.deletedCount &&
                    fetch('https://express-home-delivery-server.onrender.com/allOrderServices')
                        .then(res => res.json())
                        .then(data => setOrdersItems(data)))
    }

    return (
        <div className="container pb-11 manage-order-bg">
            <div >
                <header className="text-center  text-black">
                    <h1 className="display-4 fw-bold text-yellow-400 uppercase underline py-11">Manage Order</h1>

                </header>
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="card rounded shadow border-0">
                            <img className=' w-1/12  bg-green-300 p-1 rounded' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                            <div className="card-body bg-white rounded">
                                <div className="table-responsive">
                                    <table id="example" style={{ width: "100%" }} className="table  table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Title</th>
                                                <th>Date</th>
                                                <th>Photo</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allOrdersItems?.map(allOrderItem => <AllManageOrder handleApproved={handleApproved} handleDelete={handleDelete} key={allOrderItem?._id} allOrderItem={allOrderItem}></AllManageOrder>)
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

export default AllManageOrders;