import React from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    AOS.init();
    return (
        <div className='header-container'>
            <div className='row '>
                <div
                    data-aos="fade-right"
                    className='
                  col-lg-6 
                  md-col-6 
                  d-flex 
                  justify-center
                    items-center ' >

                    <div
                        data-aos="fade-in"
                        className=' container'>

                        <h1 className='
                        text-yellow-400
                         fw-bold
                           mt-20
                            container
                             uppercase'
                        >Express Home Delivery</h1>

                        <h5 className='
                        container 
                        text-green-50'>
                            Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.
                        </h5>
                    </div>
                </div>
                <div className='
                col-lg-6 md-col-6
                   d-flex items-center
                    justify-center'>

                    <img
                        data-aos="fade-left"
                        className='img-fluid w-3/1'
                        src='https://i.ibb.co/68YS30F/slider-courier-mask.png' alt="" />
                    <p data-aos="fade-left"></p>
                </div>
            </div >
        </div >
    );
};

export default Header;