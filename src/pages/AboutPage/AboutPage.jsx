import React from 'react';
import Statistics from './Sections/Statistics';
import OurStory from './Sections/OurStory';
import Reviews from '../../components/Reviews/Reviews';

const AboutPage = () => {
  return (
    <>
      <Statistics />
      <OurStory />
      <Reviews />
    </>
  );
};

export default AboutPage;