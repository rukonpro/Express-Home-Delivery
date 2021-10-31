import React from 'react';
import DeliverMan from '../../Components/DeliveryMan/DeliverMan';
import Header from '../../Components/Header/Header';
import Services from '../Services/Services';
import Spinner from '../../Components/Hooks/Spinner'
import OurTim from '../../Components/OurTim/OurTim';
import HowItWork from '../../Components/HowItWork/HowItWork';



const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Spinner />
            <Spinner />
            <Header></Header>
            <Services></Services>
            <DeliverMan></DeliverMan>
            <hr className='container' />
            <HowItWork></HowItWork>
            <OurTim></OurTim>
            <Spinner />



        </div>
    );
};

export default Home;