import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Adverts from './components/Adverts';
import Home from './components/Home';
import Admin from './components/Admin';
import reportWebVitals from './reportWebVitals';
import client from './utility/apolloClient';
import Login from './components/Admin/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#acc0b3',
      main: '#c6d2ca',
      light: '#e0e4e1',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
      'sans-serif',
      'Arvo',
      'serif',
    ].join(','),
    h2: {
      fontFamily: 'Arvo',
    },
    h3: {
      fontFamily: 'Arvo',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
      },
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={`${process.env.REACT_APP_ADMIN_ROUTE}/login`} component={Login} />
          <Route path={`${process.env.REACT_APP_ADMIN_ROUTE}`} component={Admin} />
          <Route path="/adverts" component={Adverts} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
