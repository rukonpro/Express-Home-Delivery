import React from 'react';
import DeliverMan from '../../Components/DeliveryMan/DeliverMan';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Services from '../Services/Services';
import Spinner from '../../Components/Hooks/Spinner'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Spinner />
            <Header></Header>
            <Services></Services>
            <DeliverMan></DeliverMan>
            <Footer></Footer>

        </div>
    );
};

export default Home;