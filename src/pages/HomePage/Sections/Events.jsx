import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const eventsData = [
    {
        id: 1,
        title: 'event 1',
        image: 'https://placekitten.com/300/200', // Замените URL на реальный URL изображения
    },
    {
        id: 2,
        title: 'event 2',
        image: 'https://placekitten.com/300/200',
    },
    {
        id: 3,
        title: 'event 3',
        image: 'https://placekitten.com/300/200',
    },
    // Добавьте другие события по аналогии...
];

const Events = () => {
    return (
        <Box
            sx={{
                background: "#022139",
                padding: "50px 0"
            }}
        >
            <Container sx={{ width: "85%" }}>
                <Typography
                    variant="p"
                    display={"block"}
                    textAlign="center"
                    gutterBottom
                    sx={{ color: "#FFF" }}
                >
                    Stay up-to-date
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        mb: "5%",
                        color: "#FFF",
                        fontWeight: "bold",
                        letterSpacing: "5px"
                    }}
                >
                    Upcoming events
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {eventsData.map((event) => (
                        <Grid item key={event.id} xs={12} sm={6} md={3}>
                            <Card
                                sx={{
                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '10px',
                                    transition: 'box-shadow 0.3s ease',
                                    transition: '0.5s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
                                        transform: 'translateX(10px)',
                                    },
                                    background: "none",
                                    color: "#FFF",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={event.image}
                                    alt={event.title}
                                />
                                <CardContent
                                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                                >
                                    <Typography variant="h6" gutterBottom>
                                        {event.title}
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/blog"
                                        type="submit"
                                        variant="outlined"
                                        sx={{ color: "#FFF" }}
                                    >
                                        Go to blog
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    );
};

export default Events;
