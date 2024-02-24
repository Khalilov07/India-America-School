import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';

const FAQ = () => {
    const faqData = [
        {
            question: 'Course?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, assumenda? Vel corporis repellat necessitatibus, ipsum eum officiis est veniam atque eveniet nisi? Corporis, officiis exercitationem nam asperiores possimus beatae blanditiis cupiditate accusantium consequatur natus quae dolores sunt aliquid id, consectetur quis, recusandae cum ipsam est deleniti similique fugit magnam. Aliquam?',
        },
        {
            question: 'Course?',
            answer: 'yes',
        },
        {
            question: 'Course?',
            answer: 'yes',
        },
        {
            question: 'Course?',
            answer: 'yes',
        },
        // Добавьте другие вопросы по аналогии...
    ];

    return (
        <Box
            style={{
                // background: "#022139",
                padding: "50px 0"
            }}>
            <Container sx={{ width: '85%', }}>
                <Typography variant="h3"
                    style={{
                        flex: '1',
                        textAlign: "center",
                        color: "#000",
                        padding: "0 0 50px 0",
                        letterSpacing: "1.5px",
                        fontWeight: 'bold'
                    }}>
                    Frequently asked questions about Course
                </Typography>

                <Grid justifyContent={"center"} container spacing={2} sx={{ margin: "auto" }}>
                    {faqData.map((item, index) => (
                        <Grid key={index} item xs={12} md={10}>
                            <Accordion
                                sx={{
                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                                    // borderRadius: '10px',
                                    transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        // boxShadow: '0 0 30px rgba(0, 0, 0, 0)',
                                    },
                                    background: "#12161F",
                                    color: "#000",
                                }}
                            >

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#FFF" }} />}
                                    aria-controls={`panel${index + 1}a-content`}
                                    id={`panel${index + 1}a-header`}
                                    sx={{
                                        background: 'none',
                                        borderRadius: '10px 10px 0 0',
                                        padding: '10px',
                                        color: "#FFF",
                                        transition: 'background 0.3s ease',
                                        '&:hover': {
                                            // background: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <Typography variant="h6" ml={2} sx={{ flex: '1', fontSize: '1rem' }}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        // backgroundColor: '#FFF',
                                        color:"#FFF",
                                        borderRadius: '2px',
                                        padding: '10px',
                                        margin: 2
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "700" ,fontSize: "0.9rem" }}>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQ;
