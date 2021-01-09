import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import Dashboard from './Dashboard';
import { VERIFY } from '../../graphql/queries/user';
import ProtectedRoute from '../ProtectedRoute';
import AddApartment from './AddApartment';
import Apartments from './Apartments';
import ListItemLink from '../ListItemLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
  },
}));

const Admin = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const { error, data, loading } = useQuery<any>(VERIFY);
  const [signedIn, setSignedIn] = useState<boolean|undefined>(undefined);

  useEffect(() => {
    if (data?.verify.isLoggedIn) {
      setSignedIn(true);
      return;
    }

    if (error) {
      setSignedIn(false);
    }
  }, [data, error]);

  if (loading || signedIn === undefined) {
    return (
      <p>loading</p>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">
            Nesuto
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItemLink to={path} primary="Dashboard" icon={<DashboardIcon />} />
          <ListItemLink to={`${path}/apartments`} primary="Apartments" icon={<HomeIcon />} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Card className={classes.card}>
          <Switch>
            <ProtectedRoute path={`${path}/apartments/add`} isSignedIn={signedIn} component={AddApartment} />
            <ProtectedRoute path={`${path}/apartments`} isSignedIn={signedIn} component={Apartments} />
            <ProtectedRoute path={path} isSignedIn={signedIn} component={Dashboard} />
          </Switch>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
