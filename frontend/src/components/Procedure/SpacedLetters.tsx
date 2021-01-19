import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => createStyles({
  wordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface Props {
  word: string;
}

const SpacedLetters = (props: Props) => {
  const { word } = props;
  const classes = useStyles();

  return (
    <div className={classes.wordContainer}>
      {
        word.split('').map((c) => (
          <Typography
            variant="h2"
          >
            {c}
          </Typography>
        ))
      }
    </div>
  );
};

export default SpacedLetters;
