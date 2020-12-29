import { gql } from '@apollo/client';
import { Apartment } from '../../utility/types';

export interface ApartmentsData {
  apartments: Apartment[];
}

export const APARTMENTS = gql`
  {
    apartments {
      _id
      title
      description
    }
  }
`;

export const ADD_APARTMENT = gql`
  mutation addApartment($title: String!, $description: String!) {
    addApartment(input: { title: $title, description: $description }) {
      _id
      title
      description
    }
  }
`;

export const REMOVE_APARTMENT = gql`
  mutation removeApartment($_id: String!) {
    removeApartment(input: {_id: $_id}) {
      _id
    }
  }
`;
