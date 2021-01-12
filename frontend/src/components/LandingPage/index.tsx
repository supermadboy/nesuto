import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import LandingPageLogo from '../../assets/svg/Log_LandingPage.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  landingPage: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingPage}>
      <Navbar />
      <img className={classes.logo} src={LandingPageLogo} alt="logo" />
    </div>
  );
};

export default LandingPage;
