import {
  createStyles, makeStyles, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import React from 'react';

import NumberOne from '../../../assets/svg/number_1.svg';
import NumberTwo from '../../../assets/svg/number_2.svg';
import NumberThree from '../../../assets/svg/number_3.svg';
import NumberFour from '../../../assets/svg/number_4.svg';
import NumberFive from '../../../assets/svg/number_5.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    height: '200px',
    transition: 'all linear 1s',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      height: '100px',
      marginRight: theme.spacing(2),
      display: 'none',
    },
  },
  content: {
    display: 'flex',
    transition: 'all linear 1s',
    position: 'absolute',
    width: '100%',
    left: '50px',
    top: '15%',
    [theme.breakpoints.down('sm')]: {
      left: '25px',
      top: '35%',
      width: 'calc(100% - 50px)',
      justifyContent: 'center',
    },
  },
  textContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > h5, h4': {
      fontFamily: 'Arvo',
      marginBottom: theme.spacing(3),
    },
    '& > h6, body1': {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  dots: {
    position: 'absolute',
    bottom: '0',
    '& > div': {
      display: 'inline-block',
      marginRight: theme.spacing(2),
      width: '20px',
      height: '20px',
      border: '2px solid black',
      borderRadius: '20px',
      [theme.breakpoints.down('sm')]: {
        width: '10px',
        height: '10px',
      },
    },
  },
  activeDot: {
    backgroundColor: 'black',
  },
}));

interface ProcedureCarouselProps {
    currentSlide: number;
}

const ProcedureCarousel = (props: ProcedureCarouselProps) => {
  const classes = useStyles();
  const {
    currentSlide,
  } = props;

  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const getStyle = (slideNumber: number): React.CSSProperties => {
    const cssProperties = {
      opacity: '0',
      transform: 'translate(-50px, 0)',
    };

    if (slideNumber === currentSlide) {
      cssProperties.opacity = '1';
      cssProperties.transform = 'translate(0, 0)';
    }

    return cssProperties;
  };

  return (
    <div className={classes.root}>

      <div className={classes.content} style={getStyle(0)}>
        <img src={NumberOne} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h5' : 'h4'}>
            Anfrage
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h6'}>
            Sie stellen Ihre Anfrage
            <br />
            per Mail oder Telefon
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(1)}>
        <img src={NumberTwo} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h5' : 'h4'}>
            Vorgespräch
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h6'}>
            Der Projektrahmen wird festgelegt
            <br />
            Möglichkeiten werden besprochen
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(2)}>
        <img src={NumberThree} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h5' : 'h4'}>
            Zielfestlegung
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h6'}>
            Möglichkeiten der Umsetzung,
            <br />
            der Finanzen und Terminplan
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(3)}>
        <img src={NumberFour} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h5' : 'h4'}>
            Planung
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h6'}>
            Umsetzung der Besprechung,
            <br />
            Terminplan und Bemusterung
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(4)}>
        <img src={NumberFive} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h5' : 'h4'}>
            Umsetzung
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h6'}>
            Bauausführung,
            <br />
            Mängelbeseitigung, Abnahme
          </Typography>
        </div>
      </div>

      <div className={classes.dots}>
        {
          [0, 1, 2, 3, 4].map((n) => <div key={n} className={n === currentSlide ? classes.activeDot : ''} />)
        }
      </div>
    </div>
  );
};

export default ProcedureCarousel;
