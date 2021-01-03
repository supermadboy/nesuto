import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_APARTMENT } from '../../../graphql/queries/apartments';
import { Apartment } from '../../../utility/types';

const AddAppartment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [addApartment, { error, data }] = useMutation<
    { apartment: Apartment },
    { title: string, description: string }
  >(ADD_APARTMENT, {
    variables: { title, description },
  });

  return (
    <div>
      {error ? (
        <p>
          Oh no!
          {' '}
          {error.message}
        </p>
      ) : null}
      {data && data.apartment ? <p>Saved!</p> : null}
      <form>
        <p>
          <label htmlFor="titleInput">
            Model
            <input
              id="titleInput"
              name="title"
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="descriptionInput">
            Year
            <input
              id="descriptionInput"
              name="description"
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </label>
        </p>
        <button type="button" onClick={() => title && description && addApartment()}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddAppartment;
