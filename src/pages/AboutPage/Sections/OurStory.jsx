import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const OurStory = () => {
    return (
        <Box className="section">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, width: "85%" }}>
                {/* Левая часть с информацией о компании */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        About Us
                    </Typography>
                    <Typography>
                        Здесь можно разместить основную информацию о вашей компании, её ценностях и деятельности.
                    </Typography>
                </Box>

                {/* Правая часть с изображением */}
                <Box
                    sx={{
                        flex: 1,
                        padding: "20px",
                        borderRadius: 3,
                        background: "#1567F4"
                    }}>
                    <Typography variant="h5" gutterBottom>
                        Информация о компании
                    </Typography>
                    <Typography>
                        Здесь можно разместить основную информацию о вашей компании, её ценностях и деятельности.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OurStory;
