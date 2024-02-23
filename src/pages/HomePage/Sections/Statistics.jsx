import React from 'react';
import CountUp from 'react-countup';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

const Statistics = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));

  const statsData = [
    { label: 'Placement', value: 90, symbol: "%" },
    { label: 'Average Salary', value: 120, symbol: "k" },
    { label: 'Students', value: 2000, symbol: "+" },
  ];

  return (
    <Box className="section" padding="50px 0">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Statistics */}
        <Grid item xs={12} sm={isScreenSmall ? 12 : 6}>
          <Box sx={{ textAlign: 'start' }}>
            <Typography variant="h3" letterSpacing={"1.5px"} gutterBottom>
              Hands-On Learning Approach
            </Typography>
            <Typography variant="body1" paragraph>
              At Learn-IT, we empower students with immersive and in-depth software coding learning within a condensed timeframe. Our boot camp courses are meticulously crafted to enhance coding proficiency for aspiring developers, ensuring they secure positions in esteemed organizations. Additionally, we provide career coaching support to guide students toward new horizons of success.
            </Typography>
            <Grid container spacing={3} justifyContent="flex-start">
              {statsData.map((stat, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Box textAlign="center">
                    <Typography variant="h3">
                      <CountUp start={0} end={stat.value} duration={3} separator="," />
                      {stat.symbol}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Image */}
        {!isScreenSmall && (
          <Grid item xs={12} sm={isScreenMedium ? 12 : 6}>
            <img
              src="./images/static.svg"  // Replace with the actual image URL
              alt="placeholder"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Statistics;
