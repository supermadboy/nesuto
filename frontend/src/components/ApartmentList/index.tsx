import React from 'react';

const ApartmentList = (props: any) => {
  const { apartments } = props;

  if (!apartments) return <p>lmao</p>;

  return (
    <div>
      { apartments.map((apartment: any) => <p>{apartment.title}</p>) }
    </div>
  );
};
export default ApartmentList;
