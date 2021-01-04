import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    fontSize: theme.spacing.length,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>This is home</p>
    </div>
  );
};

export default Home;
