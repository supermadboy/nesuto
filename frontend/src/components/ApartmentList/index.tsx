import React from 'react';
import { Apartment } from '../../utility/types';

const ApartmentList = (props: { apartments: Apartment[]}) => {
  const { apartments } = props;

  return (
    <div>
      { apartments.map((apartment) => <p>{apartment.title}</p>) }
    </div>
  );
};
export default ApartmentList;
