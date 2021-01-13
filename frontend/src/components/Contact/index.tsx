import {
  createStyles, Grid, makeStyles, Typography, Link, Theme,
} from '@material-ui/core';
import React from 'react';
import GridItem, { BackgroundColor } from '../GridItem';
import Instagram from '../../assets/svg/Icon_instagram.svg';
import Mail from '../../assets/svg/Icon_mail.svg';
import LinkedIn from '../../assets/svg/icon_linkedin.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
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
  },
  upperLeftInnerTextHeader: {
    letterSpacing: '15px',
  },
  upperLeftInnerText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  upperRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(4)}px ${theme.spacing(1)}px ${theme.spacing(4)}px`,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.fullHeight}>
      {
        // @ts-ignore
        // eslint-disable-next-line
      }<a name="Kontakt"></a>

      <GridItem
        halfHeight
        backgroundColor={BackgroundColor.main}
        className={[classes.upperLeft]}
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
        backgroundColor={BackgroundColor.white}
        className={[classes.upperRight]}
      >
        <Typography
          variant="h2"
        >
          <Link href="https://example.com" color="inherit">
            Kontakt
          </Link>
        </Typography>
      </GridItem>
      <GridItem
        halfHeight
        fullWidth
        className={[classes.bottomRight]}
      >
        <Typography
          variant="h1"
        >
          <Link href="tel:+491731389000" color="inherit">
            Tel.: 01731389000
          </Link>
        </Typography>
        <div className={classes.footer}>
          <Typography
            variant="h5"
          >
            Geschäftszeiten Mo—Fr, 8.30—16.00 Uhr
          </Typography>
          <Typography
            variant="h5"
          >
            nesuto Gmbh
          </Typography>
          <Typography
            variant="h5"
          >
            Florastraße 5 40217 Düsseldorf
          </Typography>
          <div className={classes.iconContainer}>
            <Link href="https://example.com">
              <img className={classes.externalIcons} src={LinkedIn} alt="linked in link" />
            </Link>
            <Link href="https://example.com">
              <img className={classes.externalIcons} src={Instagram} alt="linked in link" />
            </Link>
            <Link href="https://example.com">
              <img className={classes.externalIcons} src={Mail} alt="linked in link" />
            </Link>
          </div>
        </div>
      </GridItem>
    </Grid>
  );
};

export default Contact;
