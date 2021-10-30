import React from 'react';

const NoteFound = () => {
    return (
        <div className='h-screen d-flex  justify-center items-center'>
            <div className='text-center'>
                <img src="https://i.ibb.co/9h97tcf/logo-2x.png " className='bg-green-400 px-7 py-2 rounded-pill' alt="" />
                <h1 className=' text-xlg text-yellow-500'>Not Found Page</h1>
                <h3 className='text-9xl'>4<span className='text-red-500'>0</span>4</h3>
            </div>
        </div>
    );
};

export default NoteFound;