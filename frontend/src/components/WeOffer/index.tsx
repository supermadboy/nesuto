import {
  createStyles, makeStyles, Theme, Grid, useMediaQuery, Typography,
} from '@material-ui/core';
import React from 'react';
import Nest from '../../assets/images/nest-3836348_960_720_multipliziert.png';
import Flat from '../../assets/images/architecture-5031117_1920.jpg';
import Flower from '../../assets/images/flower-4905417_1920.jpg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  landingPage: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
  },
  mobile: {
    display: 'none',
  },
  halfHeight: {
    height: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  lightBackground: {
    backgroundColor: theme.palette.primary.light,
  },
  upperLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nestImage: {
    width: '50%',
    marginTop: theme.spacing(3),
  },
  fullscreenImage: {
    width: '100%',
    minHeight: '100%',
  },
  bottomRight: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const WeOffer = () => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Grid container className={classes.fullHeight}>
      <Grid
        item
        xs={12}
        md={6}
        className={`
          ${classes.halfHeight}
          ${classes.lightBackground}
          ${classes.upperLeft}
        `}
      >
        <img src={Nest} className={classes.nestImage} alt="Nest" />
        <Typography variant="h2">Nesuto</Typography>
        <Typography variant="body1">jap.: Nest</Typography>
        <Typography variant="body1">(1) Stätte der Aufzucht der Jungen und der Wohnort bestimmer Lebewesen</Typography>
        <Typography variant="body1">(2) übertragen: Wohnstätte als Zukunftsort, Ort der Geborgenheit</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        className={`
          ${classes.halfHeight}
          ${mobile ? classes.mobile : ''}
        `}
      >
        <img className={classes.fullscreenImage} src={Flat} alt="eine leere Wohnung" />
      </Grid>

      <Grid
        item
        xs={6}
        className={`
          ${classes.halfHeight}
          ${mobile ? classes.mobile : ''}
        `}
      >
        <img className={classes.fullscreenImage} src={Flower} alt="eine schöne Blume" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={`
          ${classes.halfHeight}
          ${classes.bottomRight}
        `}
      >
        <Typography variant="h2">let us move you</Typography>
        <Typography variant="body1">
          Ihre Zufriedenheit ist unsere Leidenschaft. Interdisziplinäre
          Lösungen sind unser Grundgedanke. Wir finden, bilden und generieren Ihren neuen Raum,
          sind Ihr offenes Ohr und Ihre arbeitende Hände. Zusammen mit Ihnen entwickeln wir
          unverwechselbare, individuelle Nester, damit Sie sich Zuhause fühlen. Wir finden
          Ihre passende Heimatadresse im Raum Düsseldorf
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WeOffer;
