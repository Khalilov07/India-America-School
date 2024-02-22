import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const FeatureBlock = ({ title, description }) => {
    return (
        <Grid item xs={12} md={6} lg={3}>
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',

                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                    },

                }}
            >
                <CheckIcon
                    sx={{
                        color: '#4CAF50',
                        fontSize: 40,
                        marginBottom: 2,
                        animation: 'fadeIn 1s ease-in-out',
                    }}
                />
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {description}
                </Typography>
            </Paper>
        </Grid >
    );
};

const Course = () => {
    const featuresData = [
        {
            title: 'SDET',
            description: 'Elevate your role from project inception as an SDET, contributing to efficient test automation throughout. This unique position transcends traditional testing, making you a developer with a coding-testing fusion.',
        },
        {
            title: 'DevOps',
            description: 'Facilitate seamless collaboration between development and operations as a DevOps Engineer. Master continuous integration and deployment, bridging the gap between development and IT operations with efficient and automated workflows.',
        },
        {
            title: 'REACT JS',
            description: 'Elevate your role from project inception as an SDET, contributing to efficient test automation throughout. This unique position transcends traditional testing, making you a developer with a coding-testing fusion.',
        },
        {
            title: 'SDET',
            description: 'Elevate your role from project inception as an SDET, contributing to efficient test automation throughout. This unique position transcends traditional testing, making you a developer with a coding-testing fusion.',
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#f8f8f8', py: 10 }}>
            <Container sx={{ width: '85%' }}>
                <Grid container spacing={3}>
                    {featuresData.map((feature, index) => (
                        <FeatureBlock
                            key={index}
                            {...feature}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Course;
