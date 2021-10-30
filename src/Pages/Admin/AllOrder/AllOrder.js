import React, { useEffect, useState } from 'react';
import AllOrderItem from './AllOrderItem';
import axios from 'axios';
const AllOrder = () => {
    const [allOrdersItems, setOrdersItems] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allOrderServices')
            .then(res => res.json())
            .then(data => setOrdersItems(data))
    }, [])



    const handleDelete = (id) => {
        axios.delete(`https://arcane-sierra-37156.herokuapp.com/deleteItem/${id}`)

            .then(res => res?.data?.deletedCount &&
                fetch('https://arcane-sierra-37156.herokuapp.com/allOrderServices')
                    .then(res => res.json())
                    .then(data => setOrdersItems(data)))
    }

    return (
        <div>
            <div className="container">
                <header className="text-center  text-black">
                    <h1 className="display-4 fw-bold">Manage Order</h1>

                </header>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card rounded shadow border-0">
                            <img className=' w-1/12  bg-green-300 p-1 rounded' src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                            <div className="card-body bg-white rounded">
                                <div className="table-responsive">
                                    <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
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
                                                allOrdersItems?.map(allOrderItem => <AllOrderItem handleDelete={handleDelete} key={allOrderItem?._id} allOrderItem={allOrderItem}></AllOrderItem>)
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

export default AllOrder;