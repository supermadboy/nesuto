import { gql } from '@apollo/client';
import { Apartment } from '../../utility/types';

export interface ApartmentsData {
  apartments: Apartment[];
}

export const APARTMENTS = gql`
  {
    apartments {
      title
      description
    }
  }
`;
