import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UpdateServices from './UpdateServices';

const UpdateService = () => {

    const [servicesUpdate, setServicesUpdate] = useState([]) || '';
    useEffect(() => {
        fetch('https://arcane-sierra-37156.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServicesUpdate(data))
    }, [setServicesUpdate])

    const handleDelete = (id) => {
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
        <div className='container'>
            <h1 className='text-yellow-400 fw-bold underline text-center py-11'>All Update Services</h1>
            <div className='row g-3'>
                {
                    servicesUpdate?.map(serviceUpdate => <UpdateServices key={serviceUpdate?._id} handleDelete={handleDelete} serviceUpdate={serviceUpdate}></UpdateServices>)
                }
            </div>
        </div>
    );
};

export default UpdateService;