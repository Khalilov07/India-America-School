import React, { useRef } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка отправки данных формы - здесь можно добавить вашу логику
    };

    const formRef = useRef();

    const handleSubmitRef = (event) => {
        event.preventDefault();
        // Обработка отправки данных формы - здесь можно добавить вашу логику
    };

    return (
        <Box sx={{ backgroundColor: '#F2F4F8', py: 5 }} id="applyNowForm">
            <Container sx={{ width: "80%" }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Левая сторона - Информация о местоположениях */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom sx={{ color: "#1567F4" }}>
                            <LocationOnIcon sx={{ fontSize: 30, mr: 1 }} /> Locations
                        </Typography>
                        <Typography sx={{ ml: 2 }}>
                            <strong>USA:</strong> 3942, N California Ave 2 E Chicago Illinois 60618
                        </Typography>
                        <Typography sx={{ ml: 2 }}>
                            <strong>India:</strong> 05 Jeevan Basera Apparment, Annapurna Mandir, Indore, MP 452009
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ mt: 2, color: "#1567F4" }}>
                            <LocalPhoneIcon sx={{ fontSize: 30, mr: 1 }} /> Phone
                        </Typography>
                        <Typography sx={{ ml: 2 }}>
                            <strong>US:</strong> +1-872-806-5906<br />
                            <strong>IND:</strong> +91-982-696-4641
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ mt: 2, color: "#1567F4" }}>
                            <MailIcon sx={{ fontSize: 30, mr: 1 }} /> Email
                        </Typography>
                        <Typography sx={{ ml: 2 }}>
                            <strong>E-mail:</strong> info@techryders.com
                        </Typography>
                    </Grid>

                    {/* Правая сторона - Форма */}
                    <Grid item xs={12} sm={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                                Contact Us
                            </Typography>
                            <form onSubmit={handleSubmitRef}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            name="firstName"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            variant="outlined"
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
                                            variant="outlined"
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
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{ background: "#1567F4", color: "#FFF", '&:hover': { background: "#0E4CBF" } }}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container >
        </Box>
    );
};

export default Contact;
