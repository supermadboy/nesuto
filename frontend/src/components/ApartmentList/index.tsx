import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { APARTMENTS, ApartmentsData, REMOVE_APARTMENT } from '../../graphql/queries/apartments';
import { Apartment, ApartmentPicture } from '../../utility/types';

const useStyles = makeStyles(() => createStyles({
  picture: {
    width: '100%',
  },
  hashtags: {
    textTransform: 'lowercase',
  },
  gridObject: {
    minHeight: '300px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const ApartmentList = ({ admin = false }) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedApartmentId, setSelectedApartmentId] = useState('');

  const [mutation] = useMutation<
    { removeApartment: Apartment },
    { _id: string }
  >(REMOVE_APARTMENT);

  const {
    loading, error, data, refetch,
  } = useQuery<ApartmentsData>(APARTMENTS);

  useEffect(() => {
    refetch();
  }, []);

  const renderFirstPicture = (pictures: ApartmentPicture[]) => {
    const firstPicture = pictures.find((picture) => picture.order === 0);

    return (
      /* @ts-ignore */
      <Image
        className={classes.picture}
        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        publicId={firstPicture?.cloudinaryName}
        width={Math.floor(window.innerWidth / 4)}
        crop="scale"
      />
    );
  };

  const handleDialogOk = async () => {
    const result = await mutation({ variables: { _id: selectedApartmentId } });

    const apartmentId = result.data?.removeApartment._id;
    const apartments = data?.apartments;

    if (apartmentId && apartments && data) {
      refetch();
    }

    setDialogOpen(false);
  };

  const handleDialogCancel = () => {
    setDialogOpen(false);
  };

  if (error) return <p>{error}</p>;

  if (loading) return <p>I am loading</p>;

  return (
    <div>
      <Grid container spacing={2}>
        {
          data
          && data.apartments.map((apartment) => (
            <Grid item xs={3} className={classes.gridObject} key={apartment._id}>
              <Card className={classes.card}>
                <CardContent>
                  {
                    renderFirstPicture(apartment.apartmentPictures)
                  }
                  <Typography variant="h4">
                    { apartment.title }
                  </Typography>
                  <Typography color="textSecondary">
                    { apartment.subtitle }
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.hashtags}>
                    { apartment.hashtags.map((hashtag) => `#${hashtag} `)}
                  </Typography>
                </CardContent>
                <CardActions>
                  {
                    admin
                    && (
                    <Button
                      onClick={() => {
                        setSelectedApartmentId(apartment._id);
                        setDialogOpen(true);
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Delete
                    </Button>
                    )
                  }
                </CardActions>
              </Card>
            </Grid>
          ))
      }
      </Grid>
      <Dialog
        open={dialogOpen}
      >
        <DialogTitle>Delete Apartment</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this apartment?
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogOk}>
            Yes
          </Button>
          <Button onClick={handleDialogCancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ApartmentList;
