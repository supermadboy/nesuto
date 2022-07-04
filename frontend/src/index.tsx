import React from 'react';
import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, responsiveFontSizes } from '@material-ui/core';
import Adverts from './components/Adverts';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import Impressum from './components/Impressum';
import Footer from './components/Footer';

let theme = createMuiTheme({
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
    fontSize: 20,
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
          minHeight: '100%',
        },
        body: {
          backgroundColor: '#e0e4e1',
          minHeight: '100%',
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: 'transparent',
      },
    },
  },
});

theme = responsiveFontSizes(theme);
theme.typography.body1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/adverts" component={Adverts} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
