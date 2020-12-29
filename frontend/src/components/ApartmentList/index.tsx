import { useMutation } from '@apollo/client';
import React from 'react';
import { REMOVE_APARTMENT } from '../../graphql/queries/apartments';
import { Apartment } from '../../utility/types';

const ApartmentList = (props: { apartments: Apartment[]}) => {
  const { apartments } = props;

  const [removeApartment] = useMutation<
    { apartment: Apartment },
    { _id: string }
  >(REMOVE_APARTMENT);

  return (
    <div>
      { apartments.map((apartment) => (
        <div>
          <p>{apartment.title}</p>
          <button type="button" onClick={() => removeApartment({ variables: { _id: apartment._id } })}>delete</button>
        </div>
      )) }
    </div>
  );
};
export default ApartmentList;
