import {
  createStyles, Grid, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import GridItem, { BackgroundColor } from '../GridItem';
import ArrowHouse from '../../assets/svg/Gitter_Pfeil.svg';
import Renovation from '../../assets/images/renovation-4581460_1920.jpg';
import Arrow from '../../assets/svg/arrow_right.svg';
import BouncingCircles from '../../assets/images/Animation_2.gif';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    position: 'relative',
  },
  fullscreenImage: {
    width: '100%',
    minHeight: '100%',
  },
  fullscreenSvg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  upperLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h2': {
      marginBottom: theme.spacing(2),
    },
    '& h5, h2': {
      textAlign: 'center',
    },
  },
  arrow: {
    marginLeft: theme.spacing(10),
    height: '100px',
  },
  bottomRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: `url(${BouncingCircles})`,
    '& span': {
      color: 'transparent',
    },
  },
}));

const Offers = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      <SideBreadcrumb
        title="Angebote"
        number="005"
      />

      <GridItem
        halfHeight
        className={[classes.upperLeft]}
      >
        <div>
          <Typography
            onClick={() => history.push('/adverts')}
            variant="h2"
          >
            Angebote
          </Typography>
          <Typography
            variant="h5"
          >
            Entdecken Sie hier
          </Typography>
          <Typography
            variant="h5"
          >
            ihre Traumimmobilie
          </Typography>
        </div>
        <img src={Arrow} className={classes.arrow} alt="ein pfeilchen" />
      </GridItem>
      <GridItem
        halfHeight
        disableMobile
        backgroundColor={BackgroundColor.white}
      >
        <img className={classes.fullscreenSvg} src={ArrowHouse} alt="Ein Pfeil und ein Haus" />
      </GridItem>
      <GridItem
        halfHeight
        disableMobile
      >
        <img className={classes.fullscreenImage} src={Renovation} alt="Ein Architekturplan" />
      </GridItem>
      <GridItem
        halfHeight
        backgroundColor={BackgroundColor.dark}
        className={[classes.bottomRight]}
      >
        <div>
          <Typography
            variant="h2"
          >
            es rappelt im
          </Typography>
          <Typography
            variant="h2"
          >
            Umzugskart
            <span>o</span>
            n
          </Typography>
          <Typography
            variant="h2"
          >
            -t
            <span>o</span>
            n,-t
            <span>o</span>
            n.
          </Typography>
        </div>
      </GridItem>
    </Grid>
  );
};

export default Offers;
