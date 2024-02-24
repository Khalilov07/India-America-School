import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, CardContent, CardMedia } from '@mui/material';

const CourseInfo = ({ courseTitle, courseDescription, courseImage }) => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 450);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Grid sx={{ margin: "50px auto", width: "85%", }} container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
                    <CardContent >
                        <Typography variant={`${isSmallScreen ? 'h4' : 'h3'}`} fontWeight="bold" gutterBottom>
                            What is
                            Cybersecurity?
                        </Typography>
                        <Typography variant="body1" sx={{ letterSpacing: "1px" }}>
                            Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of, or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>

                <img
                    // component="img"
                    alt="Course Image"
                    height="140"
                    width={"100%"}
                    url='./images/events.jpg'
                />

            </Grid>
        </Grid>
    );
};

export default CourseInfo;
