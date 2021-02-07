import {
  createStyles, IconButton, Link, List, ListItem, ListItemText,
  makeStyles, SwipeableDrawer, Theme, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/svg/logo_with_typo.svg';

const useStyles = makeStyles((theme: Theme) => createStyles({
  navbar: {
    display: 'flex',
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    width: '150px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sidebarButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: '200px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, isOpen] = useState(false);

  return (
    <div className={classes.navbar}>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => isOpen(false)}
        onOpen={() => isOpen(true)}
        classes={{ paper: classes.drawer }}
      >
        <div
          role="presentation"
          onClick={() => isOpen(false)}
          onKeyDown={() => isOpen(false)}
        >
          <List>
            <ListItem button key="Wir bieten">
              <ListItemText>
                <Typography variant="h5">
                  <Link href="/#WirBieten" color="inherit">
                    Wir bieten
                  </Link>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button key="Wir bieten">
              <ListItemText>
                <Typography variant="h5">
                  <Link href="/#ueberUns" color="inherit">
                    Über uns
                  </Link>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button key="Wir bieten">
              <ListItemText>
                <Typography variant="h5">
                  <Link href="/adverts" color="inherit">
                    Angebote
                  </Link>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button key="Wir bieten">
              <ListItemText>
                <Typography variant="h5">
                  <Link href="/#Kontakt" color="inherit">
                    Kontakt
                  </Link>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => isOpen(true)}
        edge="start"
        className={classes.sidebarButton}
      >
        <MenuIcon />
      </IconButton>
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
