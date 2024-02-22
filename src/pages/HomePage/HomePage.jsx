import React from 'react';
import Contact from './Sections/Contact';
import FAQ from './Sections/FAQ';
import Reviews from './Sections/Reviews';
import ScrollToTop from '../../components/Anchor/Anchor';
import { Container } from '@mui/material';
import Events from './Sections/Events';
import Statistics from './Sections/Statistics';
import Course from './Sections/Course';
import Greeting from './Sections/Greeting';

const HomePage = () => {
    return (
        <main className='main'>
            <Greeting />
            <Course />
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