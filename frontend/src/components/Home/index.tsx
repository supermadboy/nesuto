import {
  createStyles, makeStyles, Paper, Grid, useMediaQuery, Theme,
} from '@material-ui/core';
import React from 'react';
import LandingPage from '../LandingPage';
import WeOffer from '../WeOffer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'block',
  },
  page: {
    height: '100vh',
    width: '100%',
  },
  mobile: {
    display: 'none',
  },
  halfHeight: {
    height: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  lightBackground: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const Home = () => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Paper
        elevation={0}
        className={`
          ${classes.page}
          ${classes.lightBackground}
        `}
      >
        <LandingPage />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <WeOffer />
      </Paper>
      <Paper elevation={0} className={classes.page}>
        test
      </Paper>
      <Paper elevation={0} className={classes.page}>
        test
      </Paper>
      <Paper elevation={0} className={classes.page}>
        test
      </Paper>
      <Paper elevation={0} className={classes.page}>
        <Grid container className={classes.fullHeight}>
          <Grid
            item
            xs={6}
            className={`
              ${classes.halfHeight}
              ${classes.lightBackground}
            `}
          >
            nesuto
          </Grid>

          <Grid
            item
            xs={6}
            className={classes.halfHeight}
          >
            Bild
          </Grid>

          <Grid
            item
            xs={6}
            className={`
              ${classes.halfHeight}
              ${mobile ? classes.mobile : ''}
            `}
          >
            Bild
          </Grid>
          <Grid
            item
            xs={6}
            className={`
            ${classes.halfHeight}
            ${mobile ? classes.mobile : ''}
          `}
          >
            let us move you
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
