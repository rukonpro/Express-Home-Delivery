import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateService from './UpdateService';

const UpdateServices = () => {

    const [servicesUpdate, setServicesUpdate] = useState([]) || '';
    useEffect(() => {
        fetch('https://express-home-delivery-server.onrender.com/allServices')
            .then(res => res.json())
            .then(data => setServicesUpdate(data))
    }, [setServicesUpdate])

    const handleDelete = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://express-home-delivery-server.onrender.com/updateDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        fetch('https://express-home-delivery-server.onrender.com/allServices')
                            .then(res => res.json())
                            .then(data => setServicesUpdate(data))
                    }
                })

    }

    return (
        <div className=' bg-gray-600'>
            <div className='container pb-11'>
                <h1 className='text-yellow-400 fw-bold underline text-center py-11'>All Update Services</h1>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {
                        servicesUpdate?.map(serviceUpdate => <UpdateService key={serviceUpdate?._id} handleDelete={handleDelete} serviceUpdate={serviceUpdate}></UpdateService>)
                    }


                </div>
            </div>
        </div>
    );
};

export default UpdateServices;