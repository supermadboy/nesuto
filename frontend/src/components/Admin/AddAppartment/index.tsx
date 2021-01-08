import { useMutation } from '@apollo/client';
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
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { ADD_APARTMENT } from '../../../graphql/queries/apartments';
import { Apartment, PaymentType, Hashtags } from '../../../utility/types';

const AddAppartment = () => {
  const {
    register, handleSubmit, setValue, errors, control,
  } = useForm<Apartment>({
    defaultValues: {
      title: '',
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

  const [addApartment, { error }] = useMutation<
    { addApartment: Apartment },
    { input: Apartment }
  >(ADD_APARTMENT);

  const onSubmit = handleSubmit((submittedData) => {
    addApartment({
      variables: { input: submittedData },
    });
  });

  const onFileUpload = (event: any) => {
    setValue('apartmentPictures', [...apartmentPictures, ...event.target.files]);
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

          <Grid item xs={6}>
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

export default AddAppartment;
