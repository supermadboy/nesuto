import {
  createStyles, Link, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';
import Logo from '../../assets/svg/logo_with_typo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  navbar: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
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
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.links}>
        <Typography variant="h5">
          <Link href="#WirBieten" color="inherit">
            Wir bieten
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="#ueberUns" color="inherit">
            über uns
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="/adverts" color="inherit">
            Angebote
          </Link>
        </Typography>
        <Typography variant="h5">
          <Link href="#Kontakt" color="inherit">
            Kontakt
          </Link>
        </Typography>
      </div>
      <img className={classes.logo} src={Logo} alt="logo" />
    </div>
  );
};

export default Navbar;
