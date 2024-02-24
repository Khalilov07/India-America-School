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
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    {
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    {
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    {
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    {
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    {
      question: 'whats your name?',
      answer: 'Akram, so what',
    },
    // Добавьте другие вопросы по аналогии...
  ];

  return (
    <Box
      style={{
        background: "#022139",
        padding: "50px 0"
      }}>
      <Container sx={{ width: '85%', }}>
        <Typography variant="h3"
          style={{
            flex: '1',
            textAlign: "center",
            color: "#FFF",
            padding: "0 0 50px 0",
            letterSpacing: "1.5px",
            fontWeight: 'bold'
          }}>
          Frequently asked questions
        </Typography>
        <Grid container spacing={0} sx={{ margin: "auto", }}>
          {faqData.map((item, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Accordion
                sx={{
                  margin: 1,
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
                  },
                  background: "none",
                  color: "#FFF",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                  sx={{
                    background: 'none',
                    borderRadius: '10px 10px 0 0',
                    padding: '10px',
                    transition: 'background 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ flex: '1', fontSize: '1rem' }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: 'none',
                    borderRadius: '0 0 10px 10px',
                    padding: '10px',
                  }}
                >
                  <Typography sx={{ fontSize: "0.9rem" }}>{item.answer}</Typography>
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
