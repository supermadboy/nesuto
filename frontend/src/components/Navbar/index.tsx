import {
  createStyles, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React from 'react';
import Logo from '../../assets/svg/logo_with_typo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  navbar: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
    padding: `0 ${theme.spacing(4)}px`,
    width: '100%',
    '& h3': {
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
    width: '200px',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.links}>
        <Typography variant="h3">Wir bieten</Typography>
        <Typography variant="h3">über uns</Typography>
        <Typography variant="h3">Angebote</Typography>
        <Typography variant="h3">Kontakt</Typography>
      </div>
      <img className={classes.logo} src={Logo} alt="logo" />
    </div>
  );
};

export default Navbar;
