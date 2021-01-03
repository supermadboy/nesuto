import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../../graphql/queries/user';
import { UserLogin } from '../../../utility/types';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [loginUser, { error, data }] = useLazyQuery<
    { login: UserLogin },
    { username: string, password: string }
  >(LOGIN, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (data?.login) {
      history.push('/admin');
    }
  }, [data]);

  const login = (event: Event) => {
    event.preventDefault();

    if (!username || !password) {
      return;
    }

    loginUser({ variables: { username, password } });
  };

  return (
    <div>
      {
        error
        && <p>{error.message}</p>
      }
      <form onSubmit={(event: any) => login(event)}>
        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            onChange={(e: any) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
