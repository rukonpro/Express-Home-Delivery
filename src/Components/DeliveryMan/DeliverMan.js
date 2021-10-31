import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DeliverMan = () => {
    AOS.init();
    return (
        <div className='
         container-fluid 
          mt-11 py-14 
          DeliveryMan-container'>

            <div className='container'>

                <div>
                    <h1 className='
                    text-center fw-bold 
                     text-yellow-400 
                     text-decoration-underline
                      mb-4'
                    >Food Delivery Man</h1>
                </div>

                <div className='row p-4'>
                    <div className='
                    col-lg-4 
                    col-md-6 
                    col-sm-12'>

                        <img src="https://i.ibb.co/1TbgHzC/banner-main.png" alt="" />
                    </div>


                    <div
                        data-aos="fade-right"
                        className='
                     col-lg-4 
                     col-md-6 
                     col-sm-12'>

                        <img src="https://i.ibb.co/jWpRsyt/join1.png" alt="" />

                    </div>

                    <div className='
                    col-lg-4
                     col-md-6 
                     col-sm-12'>

                        <img
                            data-aos="fade-left"
                            src="https://i.ibb.co/xqGgW6j/story2-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default DeliverMan;