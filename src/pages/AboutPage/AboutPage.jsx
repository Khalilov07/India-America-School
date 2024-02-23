import React from 'react';
import Statistics from './Sections/Statistics';
import OurStory from './Sections/OurStory';
import Reviews from '../../components/Reviews/Reviews';

const AboutPage = () => {
  return (
    <>
      <OurStory />
      <Statistics />
      <Reviews />
    </>
  );
};

export default AboutPage;