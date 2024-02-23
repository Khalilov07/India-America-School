import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {

    const { id } = useParams()

    return (
        <Box className="section">
            Courses
        </Box>
    );
};

export default CoursePage;