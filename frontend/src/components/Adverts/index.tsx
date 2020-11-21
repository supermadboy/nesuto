import React from 'react';

const data = [
  {
    title: 'wohnung1',
    description: 'tolle wohnung',
  },
  {
    title: 'wohnung2',
    description: 'teure Wohnung',
  },
];

const Adverts = () => (
  <div>
    <p>This is Adverts</p>
    { data.map((flat) => (
      <div>
        <p>{flat.title}</p>
        <p>{flat.description}</p>
      </div>
    ))}
  </div>
);
export default Adverts;
