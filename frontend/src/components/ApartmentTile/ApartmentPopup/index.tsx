import React from 'react';
import {
  createStyles, makeStyles, Modal, Theme, Typography, useMediaQuery,
} from '@material-ui/core';
import Slider from 'react-slick';
import { ApartmentAttributes } from '../../../utility/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  apartmentContainer: {
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

interface ApartmentPopupProps {
    /* eslint-disable react/require-default-props */
    apartment: ApartmentAttributes,
    open: boolean,
    onClose: () => void,
  }

/* eslint-disable max-len */
const ApartmentPopup: React.FunctionComponent<ApartmentPopupProps> = (props: ApartmentPopupProps) => {
  const { apartment, open, onClose } = props;
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Modal
      open={open}
      onClose={onClose}
      disableAutoFocus
    >
      <div className={classes.apartmentContainer}>
        <Slider
          dots
        >
          {
            apartment.pictures.data.map((picture) => (
              <img
                height={mobile ? '192' : '400'}
                key={picture.id}
                src={picture.attributes.url}
                alt={picture.attributes.alternativeText}
              />
            ))
          }
        </Slider>
        <Typography variant="h4">
          {apartment.title}
        </Typography>
      </div>
    </Modal>
  );
};

export default ApartmentPopup;
