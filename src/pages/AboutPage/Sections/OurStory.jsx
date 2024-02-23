import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const OurStory = () => {
    return (
        <Box className="section">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2, width: "85%" }}>
                {/* Левая часть с информацией о компании */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        Информация о компании
                    </Typography>
                    <Typography>
                        Здесь можно разместить основную информацию о вашей компании, её ценностях и деятельности.
                    </Typography>
                </Box>

                {/* Правая часть с изображением */}
                <Paper elevation={3} sx={{ width: 200, height: 200, overflow: 'hidden' }}>
                    {/* Замените путь к изображению на реальный */}
                    <img src="/path/to/your/image.jpg" alt="Company Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Paper>
            </Box>
        </Box>
    );
};

export default OurStory;
