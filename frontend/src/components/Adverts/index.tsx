import { useQuery } from '@apollo/client';
import React from 'react';
import { APARTMENTS, ApartmentsData } from '../../graphql/queries/apartments';
import ApartmentList from '../ApartmentList';

const Adverts = () => {
  const { loading, error, data } = useQuery<ApartmentsData>(APARTMENTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>I am loading</p>;

  return (
    <div>
      <p>This is Adverts</p>
      {
       data
       && <ApartmentList apartments={data.apartments} />
      }
    </div>
  );
};

export default Adverts;
