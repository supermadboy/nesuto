import {
  createStyles, makeStyles, Theme, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import Nest from '../../assets/images/nest-3836348_960_720_multipliziert.png';
import Flat from '../../assets/images/architecture-5031117_1920.jpg';
import Flower from '../../assets/images/flower-4905417_1920.jpg';
import GridItem from '../GridItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
  },
  upperLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
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

  return (
    <Grid container className={classes.fullHeight}>
      <GridItem
        halfHeight
        className={[classes.upperLeft]}
      >
        <img src={Nest} className={classes.nestImage} alt="Nest" />
        <Typography variant="h2">Nesuto</Typography>
        <Typography variant="body1">jap.: Nest</Typography>
        <Typography variant="body1">(1) Stätte der Aufzucht der Jungen und der Wohnort bestimmer Lebewesen</Typography>
        <Typography variant="body1">(2) übertragen: Wohnstätte als Zukunftsort, Ort der Geborgenheit</Typography>
      </GridItem>

      <GridItem
        halfHeight
        disableMobile
      >
        <img className={classes.fullscreenImage} src={Flat} alt="eine leere Wohnung" />
      </GridItem>

      <GridItem
        halfHeight
        disableMobile
      >
        <img className={classes.fullscreenImage} src={Flower} alt="eine schöne Blume" />
      </GridItem>
      <GridItem
        halfHeight
        className={[classes.bottomRight]}
      >
        <Typography variant="h2">let us move you</Typography>
        <Typography variant="body1">
          Ihre Zufriedenheit ist unsere Leidenschaft. Interdisziplinäre
          Lösungen sind unser Grundgedanke. Wir finden, bilden und generieren Ihren neuen Raum,
          sind Ihr offenes Ohr und Ihre arbeitende Hände. Zusammen mit Ihnen entwickeln wir
          unverwechselbare, individuelle Nester, damit Sie sich Zuhause fühlen. Wir finden
          Ihre passende Heimatadresse im Raum Düsseldorf
        </Typography>
      </GridItem>
    </Grid>
  );
};

export default WeOffer;
