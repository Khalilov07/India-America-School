import React from 'react';
import Contact from './Contact';
import FAQ from './FAQ';
import Reviews from './Reviews';
import ScrollToTop from '../../components/Anchor/Anchor';

const HomePage = () => {
    return (
        <main className='main'>
            <Reviews />
            <FAQ />
            <Contact />
            <ScrollToTop />
        </main>
    );
};

export default HomePage;