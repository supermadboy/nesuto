import { Apartment } from './types';

const getApartments = async () => {
  const result = await fetch('https://data-potential-355311.ey.r.appspot.com/api/apartments?populate=*');
  const resultAsJson = await result.json() as { data: Apartment[] };

  return resultAsJson;
};

export default getApartments;
