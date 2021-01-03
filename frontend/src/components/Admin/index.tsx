import React, { useEffect, useState } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AddAppartment from './AddAppartment';
import ProtectedRoute from '../ProtectedRoute';
import { VERIFY } from '../../graphql/queries/user';

const Admin = () => {
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
    <div>
      <p>
        { error?.message }
        { signedIn }
        admin pagina
      </p>

      <Switch>
        <ProtectedRoute path={`${path}/add`} isSignedIn={signedIn} component={AddAppartment} />
      </Switch>
    </div>
  );
};

export default Admin;
