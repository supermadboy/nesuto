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
    height: '300px',
    transition: 'all linear 1s',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      height: '100px',
      marginRight: theme.spacing(2),
    },
  },
  content: {
    display: 'flex',
    transition: 'all linear 1s',
    position: 'absolute',
    width: '100%',
    left: '50px',
    [theme.breakpoints.down('sm')]: {
      left: '25px',
    },
  },
  textContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > h3, h4': {
      marginBottom: theme.spacing(3),
    },
    '& > h5, body1': {
      marginBottom: theme.spacing(3),
    },
  },
  dots: {
    position: 'absolute',
    bottom: '0',
    '& > div': {
      display: 'inline-block',
      marginRight: theme.spacing(2),
      width: '30px',
      height: '30px',
      border: '2px solid black',
      borderRadius: '30px',
      [theme.breakpoints.down('sm')]: {
        width: '15px',
        height: '15px',
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
          <Typography variant={mobile ? 'h4' : 'h3'}>
            Beratung
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h5'}>
            Beratungsgespräch
            <br />
            Erstellung Ihres Suchprofils
            <br />
            Zielfestlegung
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(1)}>
        <img src={NumberTwo} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h4' : 'h3'}>
            XY
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h5'}>
            Suche,
            <br />
            Beratung, Planung,
            <br />
            Architektenleistung
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(2)}>
        <img src={NumberThree} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h4' : 'h3'}>
            XY
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h5'}>
            Finanzierungsstrategie,
            <br />
            Verkauf
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(3)}>
        <img src={NumberFour} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h4' : 'h3'}>
            XY
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h5'}>
            Umbauphase
          </Typography>
        </div>
      </div>

      <div className={classes.content} style={getStyle(4)}>
        <img src={NumberFive} className={classes.img} alt="momentanerSchritt" />
        <div className={classes.textContent}>
          <Typography variant={mobile ? 'h4' : 'h3'}>
            Beratung
          </Typography>
          <Typography variant={mobile ? 'body1' : 'h5'}>
            Einzug in Ihr
            <br />
            neues Zuhause
          </Typography>
        </div>
      </div>

      <div className={classes.dots}>
        {
          [0, 1, 2, 3, 4].map((n) => <div className={n === currentSlide ? classes.activeDot : ''} />)
        }
      </div>
    </div>
  );
};

export default ProcedureCarousel;
