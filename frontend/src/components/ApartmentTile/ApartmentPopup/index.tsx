import React from 'react';
import {
  createStyles, makeStyles, Modal, Theme,
} from '@material-ui/core';
import { ApartmentAttributes } from '../../../utility/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  apartmentContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    p: 4,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
    },
  },
}));

interface ApartmentPopupProps {
    /* eslint-disable react/require-default-props */
    apartment: ApartmentAttributes,
    open: boolean,
  }

/* eslint-disable max-len */
const ApartmentPopup: React.FunctionComponent<ApartmentPopupProps> = (props: ApartmentPopupProps) => {
  const { apartment, open } = props;
  const classes = useStyles();

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes.apartmentContainer}>
        {apartment.title}
      </div>
    </Modal>
  );
};

export default ApartmentPopup;
