import {
  createStyles, makeStyles, Typography, Link, Theme,
} from '@material-ui/core';
import React from 'react';
import Instagram from '../../assets/svg/Icon_instagram.svg';
import Mail from '../../assets/svg/Icon_mail.svg';
import LinkedIn from '../../assets/svg/icon_linkedin.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    '& a:first-child img': {
      marginLeft: '0',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  externalIcons: {
    width: '30px',
    marginLeft: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(4)}px ${theme.spacing(1)}px ${theme.spacing(4)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  },
  impressum: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
    },
  },
  footerText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography
        variant="body1"
        className={classes.footerText}
      >
        Geschäftszeiten Mo—Fr, 8.30—16.00 Uhr
      </Typography>
      <Typography
        variant="body1"
        className={classes.footerText}
      >
        nesuto Gmbh
      </Typography>
      <Typography
        variant="body1"
        className={classes.footerText}
      >
        Florastraße 9, 40217 Düsseldorf
      </Typography>
      <div className={classes.iconContainer}>
        <div>
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
        <Typography variant="body1" className={classes.impressum}>
          <Link href="/impressum" color="inherit">
            Impressum
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
