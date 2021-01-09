import { gql } from '@apollo/client';
import { ApartmentPicture, HashtagsEnum, PaymentTypeEnum } from '../../utility/types';

export interface ApartmentResponse {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  numberOfRooms: number;
  paymentType: PaymentTypeEnum[];
  hashtags: HashtagsEnum[];
  apartmentPictures: ApartmentPicture[];
}
export interface ApartmentsData {
  apartments: ApartmentResponse[];
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
        cloudinaryName
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
