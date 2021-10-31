import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateService from './UpdateService';

const UpdateServices = () => {

    const [servicesUpdate, setServicesUpdate] = useState([]) || '';
    useEffect(() => {
        fetch('https://arcane-sierra-37156.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServicesUpdate(data))
    }, [setServicesUpdate])

    const handleDelete = (id) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`https://arcane-sierra-37156.herokuapp.com/updateDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        fetch('https://arcane-sierra-37156.herokuapp.com/allServices')
                            .then(res => res.json())
                            .then(data => setServicesUpdate(data))
                    }
                })

    }

    return (
        <div className='container pb-11'>
            <h1 className='text-yellow-400 fw-bold underline text-center py-11'>All Update Services</h1>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                    servicesUpdate?.map(serviceUpdate => <UpdateService key={serviceUpdate?._id} handleDelete={handleDelete} serviceUpdate={serviceUpdate}></UpdateService>)
                }


            </div>
        </div>
    );
};

export default UpdateServices;