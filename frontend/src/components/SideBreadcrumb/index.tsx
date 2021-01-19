import {
  createStyles, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    left: '-50px',
    top: '200px',
    transform: 'rotate(-90deg)',
  },
  seperator: {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    margin: `0 ${theme.spacing(1)}px`,
    '& div': {
      width: '100%',
      height: '1px',
      borderBottom: '1px solid black',
    },
  },
}));

interface Props {
    number: string;
    title: string;
}

const SideBreadcrumb = (props: Props) => {
  const classes = useStyles();

  const { title, number } = props;

  return (
    <div className={classes.root}>
      <Typography
        variant="body1"
      >
        {title}
      </Typography>
      <div className={classes.seperator}>
        <div />
      </div>
      <Typography
        variant="body1"
      >
        {number}
      </Typography>
    </div>
  );
};

export default SideBreadcrumb;
