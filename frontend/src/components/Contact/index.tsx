import {
  createStyles, Grid, makeStyles, Typography, Link, Theme, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import GridItem, { BackgroundColor } from '../GridItem';
import Instagram from '../../assets/svg/Icon_instagram.svg';
import Mail from '../../assets/svg/Icon_mail.svg';
import LinkedIn from '../../assets/svg/icon_linkedin.svg';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    position: 'relative',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    '& a:first-child img': {
      marginLeft: '0',
    },
  },
  externalIcons: {
    width: '30px',
    marginLeft: theme.spacing(2),
  },
  upperLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& h2': {
      lineHeight: '100px',
      fontFamily: '"Source Sans Pro"',
    },
  },
  upperLeftInnerTextHeader: {
    letterSpacing: '5px',
  },
  upperLeftInnerText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  upperRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '30%',
    },
  },
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      height: '70%',
    },
    '& h1, h3': {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexGrow: 0,
        marginTop: theme.spacing(3),
      },
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(4)}px ${theme.spacing(1)}px ${theme.spacing(4)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      flexDirection: 'column',
      flexGrow: 1,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Grid container className={classes.fullHeight}>
      {
        // @ts-ignore
        // eslint-disable-next-line
      }<a name="Kontakt"></a>

      <SideBreadcrumb
        title="Kontakt"
        number="006"
      />

      <GridItem
        halfHeight
        text
        backgroundColor={BackgroundColor.main}
        className={[classes.upperLeft]}
        disableMobile
      >
        <div>
          <Typography
            className={classes.upperLeftInnerTextHeader}
            variant="h2"
          >
            I like to
          </Typography>

          <div className={classes.upperLeftInnerText}>
            <Typography
              variant="h2"
            >
              move
            </Typography>
            <Typography
              variant="h2"
            >
              in
            </Typography>
          </div>

          <div className={classes.upperLeftInnerText}>
            <Typography
              variant="h2"
            >
              move
            </Typography>
            <Typography
              variant="h2"
            >
              in
            </Typography>
          </div>
        </div>

      </GridItem>

      <GridItem
        halfHeight
        text
        backgroundColor={BackgroundColor.white}
        className={[classes.upperRight]}
      >
        <Typography
          variant="h2"
        >
          <Link href="mailto:kontakt@nesuto.de" color="inherit" target="_blank">
            Kontakt
          </Link>
        </Typography>
      </GridItem>
      <GridItem
        halfHeight
        fullWidth
        text
        className={[classes.bottomRight]}
      >
        <Typography
          variant={mobile ? 'h3' : 'h1'}
        >
          <Link href="tel:+491746876640" color="inherit">
            Tel.: 01746876640
          </Link>
        </Typography>
        <div className={classes.footer}>
          <Typography
            variant={mobile ? 'body1' : 'h5'}
          >
            Geschäftszeiten Mo—Fr, 8.30—16.00 Uhr
          </Typography>
          <Typography
            variant={mobile ? 'body1' : 'h5'}
          >
            nesuto Gmbh
          </Typography>
          <Typography
            variant={mobile ? 'body1' : 'h5'}
          >
            Florastraße 9, 40217 Düsseldorf
          </Typography>
          <div className={classes.iconContainer}>
            <Link href="https://www.linkedin.com/company/nesuto-immobilien-architektur/" target="_blank">
              <img className={classes.externalIcons} src={LinkedIn} alt="linked in link" />
            </Link>
            <Link href="https://www.instagram.com/nesuto_immobilien/" target="_blank">
              <img className={classes.externalIcons} src={Instagram} alt="instagram in link" />
            </Link>
            <Link href="mailto:kontakt@nesuto.de" target="_blank">
              <img className={classes.externalIcons} src={Mail} alt="mail address" />
            </Link>
          </div>
        </div>
      </GridItem>
    </Grid>
  );
};

export default Contact;
