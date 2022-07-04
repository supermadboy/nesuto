import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import { ApartmentAttributes } from '../../utility/types';
import ApartmentPopup from './ApartmentPopup';

const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    minWidth: '240px',
    backgroundColor: theme.palette.background.default,
    cursor: 'pointer',
    flexGrow: 1,
    maxWidth: '32%',
    width: '32%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      width: 'auto',
    },
  },
  hashtags: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  apartmentPopup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    padding: `${theme.spacing(4)}px`,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
    '& img': {
      objectFit: 'contain',
    },
  },
}));

interface ApartmentProps {
    /* eslint-disable react/require-default-props */
    apartment: ApartmentAttributes
  }

const ApartmentTile: React.FunctionComponent<ApartmentProps> = (props: ApartmentProps) => {
  const { apartment } = props;
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [open, isOpen] = useState(false);
  const handleOpen = () => (!open && isOpen(true));
  const handleClose = () => isOpen(false);

  return (
    <Card className={classes.card}>
      <CardContent onClick={handleOpen}>
        <CardMedia
          component="img"
          height={mobile ? '194' : '300'}
          image={
            mobile
              ? apartment.pictures.data[0].attributes.formats.small.url
              : apartment.pictures.data[0].attributes.formats.medium.url
          }
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

      <ApartmentPopup apartment={apartment} open={open} onClose={handleClose} />
    </Card>
  );
};

export default ApartmentTile;
