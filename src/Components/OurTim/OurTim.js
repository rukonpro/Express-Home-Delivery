import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurTim = () => {
    AOS.init();
    return (
        <div className='container px-0 py-11'>
            <hr />

            <h5 className='text-pink-600 font-serif'>Our Tim</h5>
            <h1 className='text-yellow-400 font-serif'>The founder</h1>
            <div className='row g-3 '>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className=' text-center card h-10/6   hover:shadow-lg hover:opacity-80 hover:text-yellow-500  hover:border-pink-500  hover:scale-110 hover:-skew-y-12  hover:bg-pink-100'>
                        <div className='p-14 pt-0'>
                            <img className='card-img rounded-pill' src="https://i.ibb.co/C6s2T80/crop-deliveryman-holding-gift-box-and-folder-4-SYG6-MU.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-indigo-800'>Robb Haagelan</h1>
                            <h5 className='text-pink-700'>CEO</h5>
                        </div>
                        <div className='card-footer'>
                            <span><i class="fab fa-facebook text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-twitter text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-youtube text-2xl  text-blue-500 mx-2"></i></span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className=' text-center card h-10/6   hover:shadow-lg hover:opacity-80 hover:text-yellow-500  hover:border-pink-500 hover:scale-110 hover:-skew-y-12  hover:bg-pink-100'>
                        <div className='p-14 pt-0'>
                            <img className='card-img rounded-pill' src="https://i.ibb.co/L0hdWVr/crop-business-woman-with-bicycle-to-work-on-urban-stree-4-SVFMRK.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-indigo-800'>Robb Haagelan</h1>
                            <h5 className='text-pink-700'>CEO</h5>
                        </div>
                        <div className='card-footer'>
                            <span><i class="fab fa-facebook text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-twitter text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-youtube text-2xl  text-blue-500 mx-2"></i></span>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <div className=' text-center card h-10/6   hover:shadow-lg hover:opacity-80 hover:text-yellow-500  hover:border-pink-500 hover:scale-110 hover:-skew-y-12  hover:bg-pink-100'>
                        <div className='p-14 pt-0'>
                            <img className='card-img rounded-pill' src="https://i.ibb.co/F6VmPM1/crop-courier-man-holding-folder-and-pen-standing-near-s-S9-TNYWA.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-indigo-800'>Robb Haagelan</h1>
                            <h5 className='text-pink-700'>CEO</h5>
                        </div>
                        <div className='card-footer'>
                            <span><i class="fab fa-facebook text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-twitter text-2xl  text-blue-500 mx-2"></i></span>
                            <span><i class="fab fa-youtube text-2xl  text-blue-500 mx-2"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTim;