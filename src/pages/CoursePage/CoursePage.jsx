import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import CourseCard from './CourseCard'

// Пример использования компонента
const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: 'Курс 1',
            description: 'Описание курса 1',
            image: '',
            tooltipText: 'Дополнительная информация о курсе 1',
        },
        {
            id: 2,
            title: 'Курс 1',
            description: 'Описание курса 1',
            image: '',
            tooltipText: 'Дополнительная информация о курсе 1',
        },
        {
            id: 3,
            title: 'Курс 1',
            description: 'Описание курса 1',
            image: '',
            tooltipText: 'Дополнительная информация о курсе 1',
        },
        {
            id: 4,
            title: 'Курс 1',
            description: 'Описание курса 1',
            image: '',
            tooltipText: 'Дополнительная информация о курсе 1',
        },
        // Добавьте другие курсы по аналогии
    ];

    return (
        <Box className="section">
            <Container sx={{ width: "90%" }}>
                <Typography variant='h4'
                    fontWeight={"bold"}
                    color={"#022139"}

                    textAlign={"center"}
                    mb={1}
                >
                    Our Courses
                </Typography>
                <Typography variant='subtitle1'
                    fontWeight={"bold"}
                    color={"#022139"}
                    margin={"0 auto"}
                    textAlign={"center"}
                    mb={4}
                    maxWidth={"50%"}
                >
                    Welcome to a range of exciting courses designed to empower and inspire you on your learning journey. Discover an exciting world of knowledge and skill development with our carefully designed courses:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {courses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </Box>
            </Container>
        </Box >
    );
};

export default CoursesSection;
