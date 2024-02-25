import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';

const upcomingDates = [
    { course: 'Course 1', date: '2024-03-01' },
    { course: 'Course 2', date: '2024-03-15' },
    { course: 'Course 3', date: '2024-04-01' },
    // Добавьте даты для других курсов
];

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const UpcomingCourses = () => {
    return (
        <Box width="85%" margin="20px auto">
            <Typography fontWeight={"bold"} variant="h4" textAlign={"start"} color='#022139' gutterBottom>
                Upcoming Courses
            </Typography>
            <Grid container spacing={2}>
                {upcomingDates.map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        md={4}
                    >
                        <Paper
                            sx={{
                                transition: '0.200s',
                                '&:hover': {
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                },
                                padding: '16px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    marginBottom: '4px',
                                    color: '#022139',
                                }}
                            >
                                {item.course}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#555555',
                                }}
                            >
                                {formatDate(item.date)}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default UpcomingCourses;
