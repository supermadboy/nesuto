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
      subtitle
      hashtags
      paymentType
      apartmentPictures {
        fileUrl
        order
      }
    }
  }
`;

export const ADD_APARTMENT = gql`
  mutation addApartment($input: addApartment!) {
    addApartment(input: $input) {
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
