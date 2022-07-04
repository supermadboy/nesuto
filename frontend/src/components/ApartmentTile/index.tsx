import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography,
} from '@material-ui/core';
import { ApartmentAttributes } from '../../utility/types';
import ApartmentPopup from './ApartmentPopup';

const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    minWidth: '240px',
    backgroundColor: theme.palette.background.default,
    cursor: 'pointer',
    flex: '1',
  },
  hashtags: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

interface ApartmentProps {
    /* eslint-disable react/require-default-props */
    apartment: ApartmentAttributes
  }

const ApartmentTile: React.FunctionComponent<ApartmentProps> = (props: ApartmentProps) => {
  const { apartment } = props;
  const classes = useStyles();
  const [open, isOpen] = useState(false);

  return (
    <Card className={classes.card} onClick={() => isOpen(!open)}>
      <CardContent>
        <CardMedia
          component="img"
          height="194"
          image={apartment.pictures.data[0].attributes.formats.thumbnail.url}
          alt={apartment.pictures.data[0].attributes.alternativeText}
        />
        <Typography
          variant="h4"
        >
          {apartment.title}
        </Typography>
        <Typography
          variant="body2"
        >
          {apartment.subTitle}
        </Typography>
        <div className={classes.hashtags}>
          <Typography
            variant="body1"
          >
            { Array.isArray(apartment.hashtags) && apartment.hashtags.map((hashtag) => (`#${hashtag}`)).join(' ') }
          </Typography>
        </div>
      </CardContent>
      <ApartmentPopup apartment={apartment} open={open} />
    </Card>
  );
};

export default ApartmentTile;
