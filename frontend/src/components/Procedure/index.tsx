import {
  createStyles, Grid, makeStyles, Theme,
} from '@material-ui/core';
import React, { useState } from 'react';
import Graphic from '../../assets/svg/Grafik.svg';
import ArrowPrev from '../../assets/svg/arrow_left.svg';
import ArrowNext from '../../assets/svg/arrow_right.svg';
import GridItem, { BackgroundColor } from '../GridItem';
import ProcedureCarousel from './ProcedureCarousel';
import SpacedLetters from './SpacedLetters';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    position: 'relative',
  },
  bottomRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      minWidth: '60%',
    },
    '& h2': {
      fontFamily: '"Source Sans Pro"',
      lineHeight: '100px',
    },
  },
  upperLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(5),
  },
  graphicImage: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '& img': {
      width: '70%',
    },
  },
  upperRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      display: 'flex',
      width: '90%',
      height: '80%',
      alignItems: 'center',
      color: 'black',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
  },
  upperRightContainer: {
    height: '100%',
    flexGrow: 1,
    '& > div': {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  },
  arrow: {
    height: '70px',
    cursor: 'pointer',
    zIndex: 1,
  },
  arrowContainer: {
    zIndex: 1,
  },
}));

const Procedure = () => {
  const classes = useStyles();

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Grid container className={classes.fullHeight}>

      <SideBreadcrumb
        title="Ablauf"
        number="003"
      />
      <GridItem
        className={[classes.fullHeight, classes.upperLeft]}
        backgroundColor={BackgroundColor.white}
        disableMobile
      >
        <picture className={classes.graphicImage}>
          <source
            media="(max-width: 767px)"
            sizes="1px"
            srcSet="blank.gif 1w"
          />
          <img src={Graphic} alt="Grafik für nesutos Vorgehen" />
        </picture>
      </GridItem>
      <GridItem
        className={[classes.fullHeight]}
      >
        <GridItem
          halfHeight
          fullWidth
          backgroundColor={BackgroundColor.light}
          className={[classes.upperRight]}
        >
          <div>
            <div
              role="button"
              tabIndex={0}
              className={classes.arrowContainer}
              onClick={() => {
                if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
              }}
              onKeyDown={() => {
                if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
              }}
            >
              <img src={ArrowPrev} className={classes.arrow} alt="Pfeil zurück" />
            </div>
            <div className={classes.upperRightContainer}>
              <ProcedureCarousel
                currentSlide={currentSlide}
              />
            </div>
            <div
              role="button"
              tabIndex={0}
              className={classes.arrowContainer}
              onClick={() => {
                if (currentSlide < 4) setCurrentSlide(currentSlide + 1);
              }}
              onKeyDown={() => {
                if (currentSlide < 4) setCurrentSlide(currentSlide + 1);
              }}
            >
              <img
                src={ArrowNext}
                className={classes.arrow}
                alt="Pfeil vorwärts"
              />
            </div>
          </div>
        </GridItem>
        <GridItem
          halfHeight
          fullWidth
          text
          backgroundColor={BackgroundColor.dark}
          className={[classes.bottomRight]}
        >
          <div>
            <SpacedLetters word="immobilien" />
            <SpacedLetters word="architektur" />
            <SpacedLetters word="verwaltung" />
          </div>
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default Procedure;
