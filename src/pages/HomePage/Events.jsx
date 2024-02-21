import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const eventsData = [
    {
        id: 1,
        title: 'Событие 1',
        image: 'https://placekitten.com/300/200', // Замените URL на реальный URL изображения
    },
    {
        id: 2,
        title: 'Событие 2',
        image: 'https://placekitten.com/300/200',
    },
    {
        id: 3,
        title: 'Событие 3',
        image: 'https://placekitten.com/300/200',
    },
    // Добавьте другие события по аналогии...
];

const Events = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Our Events
            </Typography>
            <Grid container spacing={3}>
                {eventsData.map((event) => (
                    <Grid item key={event.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia component="img" height="140" image={event.image} alt={event.title} />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {event.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Events;
