import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка отправки данных формы - здесь можно добавить вашу логику
    };

    return (
        <Container sx={{ width: "85%", padding: "50px 0" }}>
            <Grid container spacing={4}>
                {/* Левая сторона - Информация о местоположениях */}
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ mt: 2, display: "flex", alignItems: "center" }} variant="h5" gutterBottom>
                        <LocationOnIcon sx={{ mr: 1, color: "#1567F4" }} /> Locations
                    </Typography>
                    <Typography sx={{ ml: 4 }}>
                        <strong>USA </strong><br />
                        3942, N California Ave 2 E Chicago Illinois 60618
                    </Typography>
                    <Typography sx={{ ml: 4 }}>
                        <strong>India</strong><br />
                        05 Jeevan Basera Apparment, Annapurna Mandir, Indore, MP 452009
                    </Typography>
                    <Typography sx={{ mt: 2, display: "flex", alignItems: "center" }} variant="h5" gutterBottom>
                        <LocalPhoneIcon sx={{ mr: 1, color: "#1567F4" }} /> Phone
                    </Typography>
                    <Typography sx={{ ml: 4 }}>
                        <strong> US  +1-872-806-5906</strong><br />
                        <strong> IND +91-982-696-4641</strong><br />
                    </Typography>
                    <Typography sx={{ mt: 2, display: "flex", alignItems: "center" }} variant="h5" gutterBottom>
                        <MailIcon sx={{ mr: 1, color: "#1567F4" }} /> Emial
                    </Typography>
                    <Typography sx={{ ml: 4 }}>
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    Submit
                                </Button>

                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Contact;
