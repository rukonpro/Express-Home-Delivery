import React from 'react';
import "./HowItWork.css"

const HowItWork = () => {
    return (
        <div className='HowIsWork-container  container-fluid py-11'>

            <div className='text-center container'>
                <div>
                    <h1 className='text-yellow-400 font-serif fw-bold'>HOW IT WORKS</h1>
                    <h4 className='text-pink-600 font-serif'>When preparing foods keep it clean, a dirty area should not be seen.</h4>
                </div>
                <div>
                    <img className='img-fluid container-fluid' src="https://i.ibb.co/DRLbpzy/how-it-works.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HowItWork;