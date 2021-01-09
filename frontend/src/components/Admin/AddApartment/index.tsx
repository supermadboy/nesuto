import { useMutation } from '@apollo/client';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import { ADD_APARTMENT } from '../../../graphql/queries/apartments';
import {
  Apartment,
  PaymentType,
  Hashtags,
  PaymentTypeEnum,
  HashtagsEnum,
} from '../../../utility/types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles(() => createStyles({
  controls: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
  },
}));

const AddApartment = () => {
  const classes = useStyles();
  const history = useHistory();

  const {
    register, handleSubmit, setValue, errors, control,
  } = useForm<Apartment>({
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      price: 0,
      numberOfRooms: 0,
      paymentType: {
        rent: false,
        buy: false,
      },
      hashtags: {
        garden: false,
        balcony: false,
        terrace: false,
        garage: false,
        kitchen: false,
        furnished: false,
      },
      apartmentPictures: [],
    },
  });

  useEffect(() => {
    register('title', {
      validate: (value) => value.length > 0 || 'This is required.',
    });
    register('subtitle', {
      validate: (value) => value.length > 0 || 'This is required.',
    });
    register('description', {
      validate: (value) => value.length > 0 || 'This is required.',
    });
    register('price', {
      validate: (value) => value > 0 || 'This is required.',
    });
    register('numberOfRooms', {
      validate: (value) => value > 0 || 'This is required.',
    });
    register('paymentType', {
      validate: (value) => value.rent || value.buy || 'Select at least one',
    });
    register('hashtags');
    register('apartmentPictures');
  }, [register]);

  const paymentType = useWatch<PaymentType>({
    control,
    name: 'paymentType',
  });

  const hashtags = useWatch<Hashtags>({
    control,
    name: 'hashtags',
  });

  const apartmentPictures = useWatch<any>({
    control,
    name: 'apartmentPictures',
  });

  const [localApartmentPictures, setLocalApartmentPictures] = useState<any>([]);

  const [addApartment, { error }] = useMutation<
    { addApartment: Apartment },
    { input: Apartment }
  >(ADD_APARTMENT);

  const onSubmit = handleSubmit((submittedData) => {
    const formData: any = { ...submittedData };

    const paymentTypesList = [];
    const hashtagsList = [];

    if (submittedData.paymentType.buy) {
      paymentTypesList.push(PaymentTypeEnum.BUY);
    }

    if (submittedData.paymentType.rent) {
      paymentTypesList.push(PaymentTypeEnum.RENT);
    }

    if (submittedData.hashtags.balcony) {
      hashtagsList.push(HashtagsEnum.BALCONY);
    }

    if (submittedData.hashtags.furnished) {
      hashtagsList.push(HashtagsEnum.FURNISHED);
    }

    if (submittedData.hashtags.garage) {
      hashtagsList.push(HashtagsEnum.GARAGE);
    }

    if (submittedData.hashtags.garden) {
      hashtagsList.push(HashtagsEnum.GARDEN);
    }

    if (submittedData.hashtags.kitchen) {
      hashtagsList.push(HashtagsEnum.KITCHEN);
    }

    if (submittedData.hashtags.terrace) {
      hashtagsList.push(HashtagsEnum.TERRACE);
    }

    formData.paymentType = paymentTypesList;
    formData.hashtags = hashtagsList;

    addApartment({
      variables: { input: formData },
    });

    history.push(`${process.env.REACT_APP_ADMIN_ROUTE as string}/apartments`);
  });

  const onFileUpload = (event: any) => {
    const addedPictures = [];

    for (let i = 0; i < event.target.files.length; i += 1) {
      addedPictures.push({
        src: URL.createObjectURL(event.target.files[i]),
        name: event.target.files[i].name,
      });
    }

    setLocalApartmentPictures([...localApartmentPictures, ...addedPictures]);

    setValue('apartmentPictures', [...apartmentPictures, ...event.target.files]);
  };

  const setImageLast = (index: number) => {
    const localCopy = [...localApartmentPictures];
    const removedPicture = localCopy.splice(index, 1);
    localCopy.push(removedPicture[0]);
    setLocalApartmentPictures(localCopy);

    const localFileCopy = [...apartmentPictures];
    const removedFilePicture = localFileCopy.splice(index, 1);
    localFileCopy.push(removedFilePicture[0]);
    setValue('apartmentPictures', localFileCopy);
  };

  const deletePicture = (index: number) => {
    const localCopy = [...localApartmentPictures];
    localCopy.splice(index, 1);
    setLocalApartmentPictures(localCopy);

    const localFileCopy = [...apartmentPictures];
    localFileCopy.splice(index, 1);
    setValue('apartmentPictures', localFileCopy);
  };

  return (
    <div>
      {error ? (
        <p>
          Oh no!
          {' '}
          {error.message}
        </p>
      ) : null}
      <form onSubmit={onSubmit}>

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              required
              label="Title"
              id="title"
              onChange={(e: any) => setValue('title', e.target.value)}
              error={Boolean(errors?.title)}
              helperText={errors?.title?.message}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              label="Description"
              id="description"
              onChange={(e: any) => setValue('description', e.target.value)}
              error={Boolean(errors?.description)}
              helperText={errors?.description?.message}
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={6}>
            <Carousel>
              { localApartmentPictures
                && localApartmentPictures.map((picture: any, index: number) => (
                  <div key={picture.src}>
                    <img
                      alt="test"
                      src={picture.src}
                    />
                    <p className="legend">{picture.name}</p>
                    <div className={classes.controls}>
                      <DeleteIcon
                        onClick={() => deletePicture(index)}
                      />
                      <Button
                        variant="contained"
                        onClick={() => setImageLast(index)}
                      >
                        Set last
                      </Button>
                    </div>
                  </div>
                ))}
            </Carousel>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                hidden
                onChange={(e: any) => onFileUpload(e)}
                multiple
              />
            </Button>
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              label="Subtitle"
              id="subtitle"
              onChange={(e: any) => setValue('subtitle', e.target.value)}
              error={Boolean(errors?.subtitle)}
              helperText={errors?.subtitle?.message}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              label="Price"
              id="price"
              type="number"
              onChange={(e: any) => setValue('price', parseInt(e.target.value, 10))}
              error={Boolean(errors?.price)}
              helperText={errors?.price?.message}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              required
              label="Number of rooms"
              id="numberOfRooms"
              type="number"
              onChange={(e: any) => setValue('numberOfRooms', parseInt(e.target.value, 10))}
              error={Boolean(errors?.numberOfRooms)}
              helperText={errors?.numberOfRooms?.message}
            />
          </Grid>

          <Grid item xs={3}>
            {/* placeholder */}
          </Grid>

          <Grid item xs={6}>
            <FormControl required component="fieldset" error={Boolean(errors?.paymentType)}>
              <FormLabel component="legend">Apartment payment type</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={(<Checkbox checked={paymentType?.buy} onChange={(e: any) => setValue('paymentType', { ...paymentType, buy: e.target.checked })} name="buy" />)}
                  label="Buy"
                />
                <FormControlLabel
                  control={<Checkbox checked={paymentType?.rent} onChange={(e: any) => setValue('paymentType', { ...paymentType, rent: e.target.checked })} name="rent" />}
                  label="Rent"
                />
              </FormGroup>
              {
                errors?.paymentType
                && <FormHelperText>Select at least one</FormHelperText>
              }
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select your hashtags for the apartment</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.balcony} onChange={(e: any) => setValue('hashtags', { ...hashtags, balcony: e.target.checked })} name="balcony" />}
                  label="Balcony"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.furnished} onChange={(e: any) => setValue('hashtags', { ...hashtags, balcony: e.target.checked })} name="furnished" />}
                  label="Furnished"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.garage} onChange={(e: any) => setValue('hashtags', { ...hashtags, garage: e.target.checked })} name="garage" />}
                  label="Garage"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.garden} onChange={(e: any) => setValue('hashtags', { ...hashtags, garden: e.target.checked })} name="garden" />}
                  label="Garden"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.kitchen} onChange={(e: any) => setValue('hashtags', { ...hashtags, kitchen: e.target.checked })} name="kitchen" />}
                  label="Kitchen"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={hashtags?.terrace} onChange={(e: any) => setValue('hashtags', { ...hashtags, terrace: e.target.checked })} name="terrace" />}
                  label="Terrace"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddApartment;
