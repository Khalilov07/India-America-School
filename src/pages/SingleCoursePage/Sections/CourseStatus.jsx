import React from 'react';
import CountUp from 'react-countup';
import { Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const CourseStatus = ({ students, assignments, hours, mentors }) => {
  return (
    <Grid
      container
      width={"85%"}
      justifyContent="center"
      margin={"0 auto"}
    >
      <Grid maxWidth={'45%'} mb={2} item xs={12} sm={6} md={3}>
        <Typography variant="h6" align="center">
          <SchoolIcon color="primary" fontSize="large" />
          <br />
          Students
        </Typography>
        <Typography variant="subtitle1" fontSize={"1.5rem"} align="center">
          <CountUp start={0} end={1200} duration={2} separator="," />
        </Typography>
      </Grid>

      <Grid maxWidth={'45%'} item xs={12} sm={6} md={3}>
        <Typography variant="h6" align="center">
          <AssignmentIcon color="primary" fontSize="large" />
          <br />
          Assignments
        </Typography>
        <Typography variant="subtitle1" fontSize={"1.5rem"} align="center">
          <CountUp start={0} end={1200} duration={2} separator="," />
        </Typography>
      </Grid>

      <Grid maxWidth={'45%'} item xs={12} sm={6} md={3}>
        <Typography variant="h6" align="center">
          <ScheduleIcon color="primary" fontSize="large" />
          <br />
          Hours
        </Typography>
        <Typography variant="subtitle1" fontSize={"1.5rem"} align="center">
          <CountUp start={0} end={1200} duration={2} separator="," />
        </Typography>
      </Grid>

      <Grid maxWidth={'45%'} item xs={12} sm={6} md={3}>
        <Typography variant="h6" align="center">
          <SupervisorAccountIcon color="primary" fontSize="large" />
          <br />
          Mentors
        </Typography>
        <Typography variant="subtitle1" fontSize={"1.5rem"} align="center">
          <CountUp start={0} end={1200} duration={2} separator="," />
        </Typography>
      </Grid>
    </Grid >
  );
};

export default CourseStatus;
