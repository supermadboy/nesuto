import {
  createStyles, makeStyles,
} from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
}));

const Impressum = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      Das ist das impressum
    </div>
  );
};

export default Impressum;
