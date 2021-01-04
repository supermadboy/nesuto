import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { APARTMENTS, ApartmentsData, REMOVE_APARTMENT } from '../../graphql/queries/apartments';
import { Apartment } from '../../utility/types';

const ApartmentList = ({ admin = false }) => {
  const [removeApartment] = useMutation<
    { apartment: Apartment },
    { _id: string }
  >(REMOVE_APARTMENT);
  const { loading, error, data } = useQuery<ApartmentsData>(APARTMENTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>I am loading</p>;

  return (
    <div>
      {
        data
        && data.apartments.map((apartment: Apartment) => (
          <div>
            <p>{apartment.title}</p>
            {
              admin
              && <button type="button" onClick={() => removeApartment({ variables: { _id: apartment._id } })}>delete</button>
            }
          </div>
        ))
      }
    </div>
  );
};

export default ApartmentList;
