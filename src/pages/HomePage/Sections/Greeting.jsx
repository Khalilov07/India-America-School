import React from 'react';
import { Box, Container, Typography, Button } from "@mui/material"

const Greeting = () => {
    return (
        <Box
            className="section"
            sx={{
                backgroundImage: "url('./images/background-big.jpg')",  // Замените URL на реальный URL изображения
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                textAlign: "center",
            }}
        >
            <Container>
                <Typography variant="body1" fontWeight={"bold"} mb={2} gutterBottom >
                    Our educational programs will help you gain skills and take your career to new heights.
                </Typography>
                <Typography variant="h3" fontWeight={"bold"} mb={5} gutterBottom>
                    Embark on your software technology career journey with Learn-IT.
                </Typography>
                <Button
                    href="#applyNowForm"
                    variant="contained"
                    sx={{
                        background: "#12161F",
                        fontWeight: "bold",
                        fontSize: '1.2rem'
                    }}>
                    Apply Now
                </Button>
            </Container>
        </Box>
    );
};

export default Greeting;