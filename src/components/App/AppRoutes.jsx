import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/HomePage/HomePage';
import CoursePage from '../../pages/CoursePage/CoursePage';
import BlogPage from '../../pages/BlogPage/BlogPage';
import SingleBlogPage from '../../pages/SingleBlogPage/SingleBlogPage';
import AboutPage from '../../pages/AboutPage/AboutPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/course' element={<CoursePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/singleBlog' element={<SingleBlogPage />} />
        </Routes>
    );
};

export default AppRoutes;