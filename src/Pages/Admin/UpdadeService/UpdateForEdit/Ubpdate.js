import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Update.css'

const Update = () => {
    const { id } = useParams();
    const [singleService, setSingleService] = useState({}) || "";
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://arcane-sierra-37156.herokuapp.com/singleServices/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [id, setSingleService])
    // console.log(id)

    const { title, img, description, price } = singleService;
    // const id=_id;
    const update = (data) => {
        axios.put(`https://arcane-sierra-37156.herokuapp.com/updateService/${id}`, data)
            .then(res => {
                if (res?.data?.modifiedCount) {
                    alert('Update SuccessFully 🤣')
                }
            })

        reset();
    }

    return (
        <div className=' h-screen update-form-bg'>
            <h1 className='text-yellow-400  text-center fw-bold underline uppercase py-11'>Edit Service</h1>
            <div className='col-lg-6'>
                <div>

                </div>
            </div>

            <div className='container-fluid p-0 col-lg-6 bg-white card card-body p-3 shadow-2xl'>
                <form onSubmit={handleSubmit(update)}>

                    <input className="form-control rounded-pill " {...register('title', { required: true })} placeholder="Title" defaultValue={title} /> <br />

                    <input className="form-control rounded-pill" {...register('description', { required: true })} placeholder="Description" defaultValue={description} /> <br />

                    <input className="form-control rounded-pill" {...register('price', { required: true })} placeholder="Price" defaultValue={price} /> <br />

                    <input className="form-control rounded-pill" {...register('img', { required: true })} placeholder="Img URL" defaultValue={img} /> <br />

                    <input className="form-control rounded-pill  btn-warning shadow-xl " type="submit" value='Update' />
                </form><br />



            </div>
        </div>
    );
};

export default Update;