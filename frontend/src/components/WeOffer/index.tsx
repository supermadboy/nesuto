import {
  createStyles, makeStyles, Theme, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import Nest from '../../assets/images/nest-3836348_960_720_multipliziert.png';
import Flat from '../../assets/images/chairs-2181968_1920.jpg';
import Pencil from '../../assets/images/pencil-791107_1920.jpg';
import Logo from '../../assets/svg/logo_with_typo.svg';
import GridItem, { BackgroundColor } from '../GridItem';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    position: 'relative',
  },
  upperLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > p': {
      maxWidth: '400px',
      textAlign: 'center',
    },
  },
  nestImage: {
    width: '25%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  logo: {
    width: '25%',
    marginBottom: theme.spacing(2),
  },
  fullscreenImage: {
    width: '100%',
    minHeight: '100%',
  },
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > p': {
      marginTop: theme.spacing(3),
      textAlign: 'center',
      maxWidth: '540px',
    },
  },
}));

const WeOffer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      {
        // @ts-ignore
        // eslint-disable-next-line
      }<a name="WirBieten"></a>

      <SideBreadcrumb
        title="wir bieten"
        number="002"
      />

      <GridItem
        halfHeight
        className={[classes.upperLeft]}
        backgroundColor={BackgroundColor.light}
      >
        <img src={Nest} className={classes.nestImage} alt="Nest" />
        <img src={Logo} className={classes.logo} alt="nesuto logo" />
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
        <img className={classes.fullscreenImage} src={Pencil} alt="eine schöne Blume" />
      </GridItem>
      <GridItem
        halfHeight
        className={[classes.bottomRight]}
        backgroundColor={BackgroundColor.white}
      >
        <Typography variant="h2">let us move you</Typography>
        <Typography variant="body1">
          Ihre Zufriedenheit ist unsere Leidenschaft. Interdisziplinäre
          Lösungen sind unser Grundgedanke. Wir finden, bilden und generieren Ihren neuen Raum,
          sind Ihr offenes Ohr und Ihre arbeitende Hände. Zusammen mit Ihnen entwickeln wir
          unverwechselbare, individuelle Nester, damit Sie sich Zuhause fühlen. Wir finden
          Ihre passende Heimadresse im Raum Düsseldorf
        </Typography>
      </GridItem>
    </Grid>
  );
};

export default WeOffer;
