import {
  createStyles, Grid, makeStyles, Typography, Link, Theme, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import GridItem, { BackgroundColor } from '../GridItem';
import SideBreadcrumb from '../SideBreadcrumb';

const useStyles = makeStyles((theme: Theme) => createStyles({
  fullHeight: {
    height: '100%',
    position: 'relative',
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
      justifyContent: 'center',
      '& h3': {
        fontSize: '2rem',
      },
    },
    '& h1, h3': {
      flexGrow: 1,
      fontFamily: 'Source Sans Pro',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexGrow: 0,
        marginTop: theme.spacing(3),
      },
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
          <Link href="mailto:kontakt@nesuto.de" color="inherit" target="_blank" underline="always">
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
        <div />
        <Typography
          variant={mobile ? 'h3' : 'h1'}
        >
          <Link href="tel:+491746876640" color="inherit">
            Tel.: 0174 687 6640
          </Link>
        </Typography>
      </GridItem>
    </Grid>
  );
};

export default Contact;
