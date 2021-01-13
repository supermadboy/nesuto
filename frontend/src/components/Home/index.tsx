import {
  createStyles, makeStyles, Paper,
} from '@material-ui/core';
import React from 'react';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import LandingPage from '../LandingPage';
import Offers from '../Offers';
import Procedure from '../Procedure';
import WeOffer from '../WeOffer';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'block',
  },
  page: {
    height: '100vh',
    width: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.page}>
        <LandingPage />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <WeOffer />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <Procedure />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <AboutUs />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <Offers />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <Contact />
      </Paper>
    </div>
  );
};

export default Home;
