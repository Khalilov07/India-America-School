import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <Box component="footer" sx={{ mt: '50px', backgroundColor: '#12161F', color: '#fff' }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" component="div">
                            About Us
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, nulla vitae congue
                            aliquet, justo urna scelerisque urna.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" component="div">
                            Quick Links
                        </Typography>
                        <Link to="/" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Home
                        </Link>
                        <Link to="/about" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            About Us
                        </Link>
                        <Link to="/course" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Courses
                        </Link>
                        <Link to="/blog" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Blog
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" component="div">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            123 Main Street, Cityville, Country
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            contact@example.com
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            +123 456 7890
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} India & America School. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;