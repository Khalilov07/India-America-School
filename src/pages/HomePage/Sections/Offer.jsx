import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Offer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleText1, setVisibleText1] = useState('');
    const [visibleText3, setVisibleText3] = useState('');

    const text1 = "Empower Your Future: Comprehensive IT Courses for Transformational Growth";
    const text3 = "View Courses";

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const addNextCharacter = (text, setVisibleText) => {
            let index = 0;
            const intervalId = setInterval(() => {
                setVisibleText((prevText) => {
                    if (index === text.length) {
                        clearInterval(intervalId);
                        return prevText;
                    }
                    index++;
                    return text.slice(0, index);
                });
            }, 50);
        };

        if (isVisible) {
            addNextCharacter(text1, setVisibleText1);

            addNextCharacter(text3, setVisibleText3);
        }
    }, [isVisible, text1, text3]);

    return (
        <Box
            ref={sectionRef}
            sx={{
                color: "#FFF",
                textAlign: "start",
                padding: "50px 0",
                background: "#12161F",
            }}
        >
            <Container>
                <CSSTransition
                    in={isVisible}
                    timeout={1000}
                    classNames="fadeIn"
                    unmountOnExit
                >
                    <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
                        {visibleText1}
                    </Typography>
                </CSSTransition>
                <CSSTransition
                    in={isVisible}
                    timeout={1000}
                    classNames="fadeIn"
                    unmountOnExit
                >
                    <Typography variant="body1" sx={{ marginBottom: 4, lineHeight: 1.6 }}>
                        If you're considering a career in the dynamic field of information technology (IT), now is an opportune time to take the leap. The demand for skilled IT professionals is soaring, and numerous companies are actively seeking qualified candidates to fill diverse roles.
                        <br /> <br />
                        Explore our comprehensive courses designed to empower you in critical IT domains, including Software Development Engineer in Test (SDET), Java programming, ReactJS development, and mastering SQL. Flexible online learning,our programs cater to your needs. With a track record of guiding over 1000 individuals to unlock their full potential, we are committed to leading you on a transformative journey. Our goal is to help you not only acquire technical skills but also to embrace and express your complete self.
                    </Typography>
                </CSSTransition>
                <CSSTransition
                    in={isVisible}
                    timeout={1000}
                    classNames="fadeIn"
                    unmountOnExit
                >
                    <Button
                        component={Link}
                        to="/course"
                        variant="contained"
                        sx={{
                            background: "#1976D2",
                            fontWeight: "bold",
                            fontSize: '1.2rem',
                            color: "#FFF",
                            '&:hover': {
                                background: "#1565C0",
                            },
                        }}
                    >
                        {visibleText3}
                    </Button>
                </CSSTransition>
            </Container>
        </Box>
    );
};

export default Offer;
