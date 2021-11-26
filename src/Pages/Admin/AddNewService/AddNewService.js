import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddNewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleAddedNewService = (data) => {
        // console.log(data)
        axios.post('https://arcane-sierra-37156.herokuapp.com/postServices', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Added SuccessFully')
                }
            })
        reset();
    }
    return (
        <div className='py-11'>

            <h1 className='text-yellow-400 underline text-center py-11 fw-bold col-lg-6 uppercase '>Add new services</h1>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src="https://i.ibb.co/Gdkp0HJ/slider-courier-mask-2.png" alt="" />
                </div>
                <div className='container-fluid px-3 col-lg-4'>
                    <div className=' col-6 rounded-pill bg-blue-900 mb-4 container'>
                        <img src="https://i.ibb.co/9h97tcf/logo-2x.png" alt="" />
                    </div>
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
                        </select><br />

                        <input className="form-control rounded-pill btn-warning " value='Upload' type="submit" />
                    </form>

                    <div className='pt-4'>
                        <Link to='/services' className='btn btn-success'>Go to all services</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddNewService;


// https://i.ibb.co/3pyw2x2/item-01-600x600.jpg
// https://i.ibb.co/r580K3Z/item-02-600x600.jpg
// https://i.ibb.co/TLXwYL7/item-03-600x600.jpg
// https://i.ibb.co/SXMqVcz/item-04-600x600.jpg