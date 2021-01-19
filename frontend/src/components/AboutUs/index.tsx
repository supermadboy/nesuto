import {
  createStyles, Grid, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';
import GridItem, { BackgroundColor } from '../GridItem';
import Thilo from '../../assets/svg/Illu_Thilo.svg';
import Lena from '../../assets/svg/Illu_Lena.svg';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  imgSize: {
    width: '400px',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(5),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(16),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      {
        // @ts-ignore
        // eslint-disable-next-line
      }<a name="ueberUns"></a>

      <SideBreadcrumb
        title="über uns"
        number="004"
      />

      <GridItem
        backgroundColor={BackgroundColor.main}
        className={[classes.fullHeight]}
      >
        <div className={classes.content}>
          <img src={Thilo} alt="Thilo Stralkowski" className={classes.imgSize} />
          <Typography variant="body1"><b>Thilo Stralkowski</b></Typography>
          <Typography variant="body2">Olympiasieger 2012 London, Hockey</Typography>
          <Typography variant="body2">Berufspilot</Typography>
          <Typography variant="body2">Immobilienmakler (IHK)</Typography>
          <Typography variant="body2">Immobilienverwalter (IHK)</Typography>
          <Typography variant="body2">seit 2010 Verwaltung der eigenen Familienimmobilien</Typography>
        </div>
      </GridItem>

      <GridItem
        backgroundColor={BackgroundColor.white}
        className={[classes.fullHeight]}
      >
        <div className={classes.content}>
          <img src={Lena} alt="Lena Herrmann" className={classes.imgSize} />
          <Typography variant="body1"><b>Lena Herrmann</b></Typography>
          <Typography variant="body2">Dipl. Ing. Architektur</Typography>
          <Typography variant="body2">Mehrjährige Berufserfahrung u.a. bei :</Typography>
          <Typography variant="body2">der Stadt Innsbruck</Typography>
          <Typography variant="body2">A+R Architekten Stuttgart</Typography>
          <Typography variant="body2">RKW Architekten Düsseldorf</Typography>
          <Typography variant="body2">Stadt Düsseldorf</Typography>
          <Typography variant="body2">Mitglied der Architektenkammer NRW</Typography>
        </div>
      </GridItem>
    </Grid>
  );
};

export default AboutUs;
