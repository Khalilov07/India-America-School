import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const OurStory = () => {
    return (
        <Box className="section">
            <Grid item xs={12} sm={12} sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', padding: 2, width: "85%" }}>
                {/* Правая часть с изображением */}
                <Box sx={{ marginBottom: { xs: 2, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
                    <img
                        src="./images/about-us.avif"  // Replace with the actual image URL
                        alt="placeholder"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Box>

                {/* Левая часть с информацией о компании */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography variant="h5" gutterBottom>
                        About Us
                    </Typography>
                    <Typography>
                        Здесь можно разместить основную информацию о вашей компании, её ценностях и деятельности.
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default OurStory;
