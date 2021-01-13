import {
  createStyles, Grid, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';
import Graphic from '../../assets/svg/Grafik.svg';
import ArrowPrev from '../../assets/svg/arrow_left.svg';
import ArrowNext from '../../assets/svg/arrow_right.svg';
import NumberOne from '../../assets/svg/number_1.svg';
import GridItem, { BackgroundColor } from '../GridItem';
import ProcedureCarousel from './ProcedureCarousel';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
  },
  bottomRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      minWidth: '55%',
      '& h2': {
        fontFamily: '"Source Sans Pro"',
      },
    },
  },
  typoLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  upperLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing(5),
  },
  graphicImage: {
    width: '70%',
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
      color: theme.palette.primary.dark,
    },
  },
  upperRightContainer: {
    flexGrow: 1,
    '& > div': {
      width: '100%',
    },
  },
  arrow: {
    height: '70px',
  },
}));

const Procedure = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      <GridItem
        className={[classes.fullHeight, classes.upperLeft]}
        disableMobile
      >
        <img className={classes.graphicImage} src={Graphic} alt="Grafik für nesutos Vorgehen" />
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
            <img src={ArrowPrev} className={classes.arrow} alt="Pfeil zurück" />
            <div className={classes.upperRightContainer}>
              <ProcedureCarousel
                img={NumberOne}
                title="Beratung"
                text={['Beratungsgespräch,', <br />, 'Erstellung Ihres Suchprofils,', <br />, 'Zielfestlegung']}
              />
            </div>
            <img src={ArrowNext} className={classes.arrow} alt="Pfeil vorwärts" />
          </div>
        </GridItem>
        <GridItem
          halfHeight
          fullWidth
          backgroundColor={BackgroundColor.dark}
          className={[classes.bottomRight]}
        >
          <div>
            <div className={classes.typoLine}>
              <Typography
                variant="h2"
              >
                immo
              </Typography>
              <Typography
                variant="h2"
              >
                bilien
              </Typography>
            </div>
            <div className={classes.typoLine}>
              <Typography
                variant="h2"
              >
                architekt
              </Typography>
              <Typography
                variant="h2"
              >
                ur
              </Typography>
            </div>
            <div className={classes.typoLine}>
              <Typography
                variant="h2"
              >
                ver
              </Typography>
              <Typography
                variant="h2"
              >
                waltung
              </Typography>
            </div>
          </div>
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default Procedure;
