import React from 'react';
import Register from './Sections/Register';
import FAQ from './Sections/FAQ';
import CourseStats from './Sections/CourseStatus';
import CourseInfo from './Sections/CourseInfo';
import Dates from './Sections/Dates'

const SingleCoursePage = () => {
    return (
        <>
            <CourseInfo />
            <CourseStats />
            <FAQ />
            <Dates />
            <Register />
        </>
    );
};

export default SingleCoursePage;
