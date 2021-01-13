import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import LandingPageLogo from '../../assets/svg/Log_LandingPage.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  landingPage: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    width: '50%',
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
