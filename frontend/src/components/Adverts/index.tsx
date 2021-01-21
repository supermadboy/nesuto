import {
  createStyles, makeStyles, Typography,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
  },
  content: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Adverts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.content}>
        <Typography
          variant="h1"
        >
          Coming soon!
        </Typography>
      </div>
    </div>
  );
};

export default Adverts;
