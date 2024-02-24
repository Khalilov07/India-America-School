import React from 'react';
import Register from './Sections/Register';
import FAQ from './Sections/FAQ';
import CourseStats from './Sections/CourseStatus';
import CourseInfo from './Sections/CourseInfo';

const SingleCoursePage = () => {
    return (
        <>
            <CourseInfo />
            <CourseStats />
            <FAQ />
            <Register />
        </>
    );
};

export default SingleCoursePage;
