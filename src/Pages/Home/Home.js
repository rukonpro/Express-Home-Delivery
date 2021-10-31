import React from 'react';
import DeliverMan from '../../Components/DeliveryMan/DeliverMan';
import Header from '../../Components/Header/Header';
import Services from '../Services/Services';
import OurTim from '../../Components/OurTim/OurTim';
import HowItWork from '../../Components/HowItWork/HowItWork';



const Home = () => {
    return (
        <div className='overflow-hidden'>

            <Header></Header>
            <Services></Services>
            <DeliverMan></DeliverMan>

            <HowItWork></HowItWork>
            <OurTim></OurTim>




        </div>
    );
};

export default Home;