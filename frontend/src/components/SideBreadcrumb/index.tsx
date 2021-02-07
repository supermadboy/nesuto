import {
  createStyles, makeStyles, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    left: '-60px',
    top: '150px',
    transform: 'rotate(-90deg)',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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
  mobile: {
    left: '-80px',
    top: '80px',
  },
}));

interface Props {
    number: string;
    title: string;
}

const SideBreadcrumb = (props: Props) => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const { title, number } = props;

  return (
    <div className={`
        ${classes.root}
        ${mobile ? classes.mobile : ''}
      `}
    >
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
