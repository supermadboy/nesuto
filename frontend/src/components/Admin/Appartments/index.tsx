import React from 'react';
import {
  Button, createStyles, Divider, makeStyles, Theme,
} from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import ApartmentList from '../../ApartmentList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(2),
  },
}));

const Appartments = () => {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`${path}/add`}
        className={classes.addButton}
      >
        Add appartment
      </Button>
      <Divider />
      <ApartmentList admin />
    </div>
  );
};

export default Appartments;
