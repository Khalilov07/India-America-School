import React from 'react';
import Contact from './Sections/Contact';
import FAQ from './Sections/FAQ';
import Reviews from '../../components/Reviews/Reviews';
import ScrollToTop from '../../components/Anchor/Anchor';
import Offer from './Sections/Offer';
import Events from './Sections/Events';
import Statistics from './Sections/Statistics';
import Course from './Sections/Course';
import Greeting from './Sections/Greeting';

const HomePage = () => {
    return (
        <main className='main'>
            <Greeting />
            <Course />
            <Offer />
            <Statistics />
            <Events />
            <Reviews />
            <FAQ />
            <Contact />
            <ScrollToTop />
        </main>
    );
};

export default HomePage;