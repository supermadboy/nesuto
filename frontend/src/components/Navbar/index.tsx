import {
  createStyles, Link, makeStyles, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import Logo from '../../assets/svg/logo_with_typo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  navbar: {
    display: 'none',
    zIndex: 10,
    position: 'fixed',
    justifyContent: 'space-between',
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px`,
    width: '100%',
    '& h5': {
      paddingRight: theme.spacing(8),
      display: 'table-cell',
      verticalAlign: 'middle',
    },
  },
  links: {
    display: 'table',
    height: '100%',
  },
  logo: {
    width: '150px',
  },
  nonMobile: {
    display: 'flex',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <div className={`${classes.navbar} ${mobile ? '' : classes.nonMobile}`}>
      <div className={classes.links}>
        <Typography variant="h5">
          <Link href="/#WirBieten" color="inherit">
            Wir bieten
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="/#ueberUns" color="inherit">
            Über uns
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="/adverts" color="inherit">
            Angebote
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="/#Kontakt" color="inherit">
            Kontakt
          </Link>
        </Typography>
      </div>
      <Link href="/#Home" color="inherit">
        <img className={classes.logo} src={Logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
