import React from 'react';
import Contact from './Contact';
import FAQ from './FAQ';
import Reviews from './Reviews';
import ScrollToTop from '../../components/Anchor/Anchor';
import { Container } from '@mui/material';
import Events from './Events';

const HomePage = () => {
    return (
        <main className='main'>
            <Events />
            <Reviews />
            <FAQ />
            <Contact />
            <ScrollToTop />
        </main>
    );
};

export default HomePage;