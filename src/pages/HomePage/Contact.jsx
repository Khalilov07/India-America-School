import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка отправки данных формы - здесь можно добавить вашу логику
    };

    return (
        <Container>
            <Grid container spacing={4}>
                {/* Левая сторона - Информация о местоположениях */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Locations
                    </Typography>
                    <Typography>
                        <strong>USA</strong><br />
                        USA
                    </Typography>
                    <Typography>
                        <strong>India</strong><br />
                        05 Jeevan Basera Apparment, Annapurna Mandir, Indore, MP 452009
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <strong>Phone (10AM - 5PM)</strong><br />
                        US  +1-872-806-5906
                        IND +91-982-696-4641
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <strong>E-mail</strong><br />
                        info@techryders.com
                    </Typography>
                </Grid>

                {/* Правая сторона - Форма */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" sx={{ background: "#960E0E" }}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
