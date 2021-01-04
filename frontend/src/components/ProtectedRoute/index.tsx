import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isSignedIn: boolean|undefined;
}

const ProtectedRoute = (props: PrivateRouteProps) => {
  const { component: Component, isSignedIn, ...rest } = props;

  return (
    <Route
      /* eslint-disable react/jsx-props-no-spreading */
      {...rest}
      render={(routeProps) => (isSignedIn ? (
        <Component {...routeProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/admin/login',
            state: { from: routeProps.location },
          }}
        />
      ))}
    />
  );
};

export default ProtectedRoute;
