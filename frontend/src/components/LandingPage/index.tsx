import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import LandingPageLogo from '../../assets/svg/Log_LandingPage.svg';
import BouncingCircles from '../../assets/images/Animation_1.gif';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  landingPage: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    backgroundImage: `url(${BouncingCircles})`,
    position: 'relative',
  },
  logo: {
    width: '50%',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingPage}>
      <SideBreadcrumb
        title="nesuto"
        number="001"
      />
      <Navbar />
      <img className={classes.logo} src={LandingPageLogo} alt="logo" />
    </div>
  );
};

export default LandingPage;
