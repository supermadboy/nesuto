import {
  createStyles, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    height: '450px',
    marginTop: theme.spacing(3),
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > h3': {
      marginBottom: theme.spacing(3),
    },
    '& > h5': {
      marginBottom: theme.spacing(3),
    },
  },
  dots: {
    '& > div': {
      display: 'inline-block',
      marginRight: theme.spacing(2),
      width: '30px',
      height: '30px',
      border: `2px solid ${theme.palette.primary.dark}`,
      borderRadius: '30px',
    },
  },
  activeDot: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface ProcedureCarouselProps {
    img: any;
    title: string;
    text: any;
}

const ProcedureCarousel = (props: ProcedureCarouselProps) => {
  const classes = useStyles();
  const { img, title, text } = props;

  return (
    <div className={classes.root}>
      <img src={img} className={classes.img} alt="momentanerSchritt" />
      <div className={classes.textContent}>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography variant="h5">
          {text}
        </Typography>
        <div className={classes.dots}>
          <div className={classes.activeDot} />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProcedureCarousel;
