import {
  createStyles, Link, makeStyles, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';
import Logo from '../../assets/svg/logo_with_typo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
  content: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    display: 'none',
    justifyContent: 'center',
    top: theme.spacing(2),
    margin: 'auto',
    width: '100%',
    '& img': {
      width: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Adverts = () => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.logo}>

        <Link href="/">
          <img src={Logo} alt="nesuto logo" />
        </Link>
      </div>
      <div className={classes.content}>
        <Typography
          variant={mobile ? 'h3' : 'h1'}
        >
          Coming soon!
        </Typography>
      </div>
    </div>
  );
};

export default Adverts;
