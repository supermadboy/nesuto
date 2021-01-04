import { useLazyQuery } from '@apollo/client';
import {
  Button,
  Card, createStyles, FormControl, Input, InputLabel, makeStyles, Theme, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../../graphql/queries/user';
import { UserLogin } from '../../../utility/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
  formInput: {
    paddingBottom: theme.spacing(1),
  },
  headerText: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
}));

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const classes = useStyles();

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
    <div className={classes.root}>

      <Card>
        <Typography variant="h4" className={classes.headerText}>
          nesuto
        </Typography>

        <form onSubmit={(event: any) => login(event)} className={classes.form}>
          {
            error
            && (
            <Typography className={classes.errorMessage}>
              {error.message}
            </Typography>
            )
          }
          <FormControl className={classes.formInput}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl className={classes.formInput}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!username || !password}
            className={classes.submitButton}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
