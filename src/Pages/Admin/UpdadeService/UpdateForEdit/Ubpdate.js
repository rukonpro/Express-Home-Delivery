import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';


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
        <div>
            <h1>text ues params</h1>


            <div className='container-fluid p-0 '>
                <form onSubmit={handleSubmit(update)}>

                    <input className="form-control rounded-pill " {...register('title', { required: true })} placeholder="Title" defaultValue={title} /> <br />

                    <input className="form-control rounded-pill" {...register('description', { required: true })} placeholder="Description" defaultValue={description} /> <br />

                    <input className="form-control rounded-pill" {...register('price', { required: true })} placeholder="Price" defaultValue={price} /> <br />

                    <input className="form-control rounded-pill" {...register('img', { required: true })} placeholder="Img URL" defaultValue={img} /> <br />

                    <input className="form-control rounded-pill bg-success " type="submit" value='Update' />
                </form><br />



            </div>
        </div>
    );
};

export default Update;