import React from 'react';
import CountUp from 'react-countup';
import { Box, Typography, Grid, useMediaQuery, useTheme, Paper, IconButton } from '@mui/material';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Statistics = () => {
    const theme = useTheme();
    const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

    const statsData = [
        { label: 'Placement', value: 90, symbol: '%' },
        { label: 'Average Salary', value: 120, symbol: 'k' },
        { label: 'Students', value: 2000, symbol: '+' },
    ];

    const reviews = [
        {
            id: 1,
            title: 'Live Classes',
            descr: 'Engage in real-time interactions with instructors and fellow students, fostering dynamic learning experiences during live classes.',
            icon: <PlayCircleOutlineIcon sx={{ fontSize: '2rem' }} />
        },
        {
            id: 2,
            title: 'Text material',
            descr: 'Access essential text materials to complement live classes, providing additional resources for comprehensive understanding and review.',
            icon: <MenuBookIcon sx={{ fontSize: '2rem' }} />
        },
        {
            id: 3,
            title: 'Assessments',
            descr: 'Benefit from real-time assessments in live classes, gauging your progress and understanding while receiving immediate feedback.',
            icon: <CreateIcon sx={{ fontSize: '2rem' }} />
        },
        {
            id: 4,
            title: 'Certificate awards',
            descr: 'Upon successful completion of live classes, receive certificates as a testament to your acquired skills and knowledge.',
            icon: <WorkspacePremiumIcon sx={{ fontSize: '2rem' }} />
        }
        // Add more reviews as needed
    ];

    return (
        <Box className="statistics section" padding="50px 0">
            <Grid className='statistics__wrapper' container spacing={3} justifyContent="space-between" alignItems="start">
                {/* Statistics */}
                {/* Image */}
                <Grid item xs={12} sm={isScreenSmall ? 12 : 6} justifyContent={isScreenSmall ? "center" : "flex-start"}>
                    <Box
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',

                        }}
                    >
                        {reviews.map((review) => (
                            <Box
                                key={review.id}
                                sx={{
                                    margin: "0 auto",
                                    marginBottom: 3,
                                    width: '250px',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                                    },
                                    mt: 1
                                }}
                            >
                                <IconButton
                                    color='primary'
                                    sx={{ padding: "10px 0" }}
                                >
                                    {review.icon}
                                </IconButton>
                                <Typography variant="h6" gutterBottom>
                                    {review.title}
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: 1 }}>
                                    {review.descr}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={isScreenMedium ? 12 : 6} md={isScreenMedium ? 12 : undefined}>
                    {!isScreenSmall && (
                        <img
                            src="./images/for-about.webp"  // Replace with the actual image URL
                            alt="placeholder"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    )}
                    <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
                        <Grid container spacing={3} justifyContent="center">
                            {statsData.map((stat, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                            {stat.label}
                                        </Typography>
                                        <Typography variant="h5">
                                            <CountUp start={0} end={stat.value} duration={3} separator="," />
                                            {stat.symbol}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Statistics;
