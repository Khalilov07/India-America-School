import React from 'react';

import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';


const Register = () => {
    return (
        <div>
            <Box className="section" style={{ backgroundColor: '#f8f8f8', padding: '20px 0 60px' }}>
                <Container style={{ width: '90%' }}>
                    <Grid alignItems={"center"} container spacing={3}>
                        {/* Left side - Text */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" style={{ color: '#022139', fontWeight: 'bold' }} mb={4}>
                                Kick Start your Cybersecurity Career
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                style={{
                                    fontSize: "1.1rem",
                                    color: '#022139',
                                    fontWeight: 'bold',
                                }}
                                mb={4}
                            >
                                With our comprehensive online learning programs, our students can learn skills and knowledge they need to protect computer systems and networks from cyber threats and attacks.
                            </Typography>
                            <Button
                                href="#applyNowForm"
                                variant="contained"
                                sx={{
                                    background: "#12161F",
                                    fontWeight: "bold",
                                    fontSize: '1.2rem',
                                    padding: "0 50px"
                                }}>
                                Apply Now
                            </Button>
                        </Grid>

                        {/* Right side - Form */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                style={{
                                    padding: '32px',
                                    background: '#fff',
                                    borderRadius: '8px',
                                }}
                                elevation={3}
                            >
                                <Typography variant="h6" style={{ color: '#022139', fontWeight: 'bold' }} mb={2}>
                                    To register for the course
                                </Typography>
                                <form>
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
                </Container>
            </Box>
        </div>
    );
};

export default Register;