import { gql, useQuery } from '@apollo/client';
import React from 'react';
import ApartmentList from '../ApartmentList';

const GET_APARTMENTS = gql`
  {
    apartments {
      title
      description
    }
  }
`;

const Adverts = () => {
  const { loading, error, data } = useQuery(GET_APARTMENTS);

  if (error) return <p>{error}</p>;

  if (loading) return <p>I am loading</p>;

  return (
    <div>
      <p>This is Adverts</p>
      <ApartmentList apartments={data.apartments} />
    </div>
  );
};

export default Adverts;
