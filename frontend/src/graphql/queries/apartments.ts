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

export const ADD_APPARTMENT = gql`
  mutation addApartment($title: String!, $description: String!) {
    addApartment(input: { title: $title, description: $description }) {
      _id
      title
      description
    }
  }
`;
