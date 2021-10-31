import React from 'react';
import DeliverMan from '../../Components/DeliveryMan/DeliverMan';
import Header from '../../Components/Header/Header';
import Services from '../Services/Services';
import Spinner from '../../Components/Hooks/Spinner'
import OurTim from '../../Components/OurTim/OurTim';



const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Spinner />
            <Header></Header>
            <Services></Services>
            <DeliverMan></DeliverMan>
            <OurTim></OurTim>



        </div>
    );
};

export default Home;