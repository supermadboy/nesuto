import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Adverts from './components/Adverts';
import Home from './components/Home';
import Admin from './components/Admin';
import reportWebVitals from './reportWebVitals';
import client from './utility/apolloClient';
import Login from './components/Admin/Login';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/admin/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/adverts" component={Adverts} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
