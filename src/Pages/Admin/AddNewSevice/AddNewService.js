import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddedNewService = (data) => {
        // console.log(data)
        axios.post('https://arcane-sierra-37156.herokuapp.com/postServices', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Added SuccessFully')
                }
            })
    }
    return (
        <div className='container'>
            <h1>Add new services</h1>

            <div className='container-fluid p-0 '>
                <form onSubmit={handleSubmit(handleAddedNewService)}>

                    <input className="form-control rounded-pill " {...register('title', { required: true })} placeholder="Title" /> <br />
                    {errors.title && <p>Title is required.</p>}

                    <input className="form-control rounded-pill " {...register('img', { required: true })} placeholder="IMG URL" /> <br />
                    {errors.img && <p>IMG is required.</p>}

                    <input className="form-control rounded-pill" {...register('description', { required: true })} placeholder="Description" /> <br />
                    {errors.description && <small>Description is required.</small>}

                    <input className="form-control rounded-pill" {...register('price', { required: true })} placeholder="Price" /> <br />
                    {errors.price && <small>Price is required.</small>}

                    <select className="form-control rounded-pill" {...register("color")}>
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                    </select>

                    <input className="form-control rounded-pill bg-success " type="submit" />
                </form>


            </div>


        </div>
    );
};

export default AddNewService;


// https://i.ibb.co/3pyw2x2/item-01-600x600.jpg
// https://i.ibb.co/r580K3Z/item-02-600x600.jpg
// https://i.ibb.co/TLXwYL7/item-03-600x600.jpg
// https://i.ibb.co/SXMqVcz/item-04-600x600.jpg