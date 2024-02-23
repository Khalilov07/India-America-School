import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                        <Button component={Link} onClick={() => scrollToTop()} to="/" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Home
                        </Button>
                        <Button component={Link} onClick={() => scrollToTop()} to="/about" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            About Us
                        </Button>
                        <Button component={Link} onClick={() => scrollToTop()} to="/course" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Courses
                        </Button>
                        <Button component={Link} onClick={() => scrollToTop()} to="/blog" color="inherit" sx={{ display: 'block', mt: 1 }}>
                            Blog
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" component="div">
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            3942, N California Ave 2 E Chicago Illinois 60618
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            info@techryders.com
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            US  +1-872-806-5906
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            IND +91-982-696-4641
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ p: 2, color: "#FFF" }}>
                        © {new Date().getFullYear()} India & America School. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;