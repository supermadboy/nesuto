export interface Apartment {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  numberOfRooms: number;
  paymentType: PaymentType;
  hashtags: Hashtags;
  apartmentPictures: ApartmentPicture[];
}

export interface ApartmentPicture {
  cloudinaryName: string;
  order: number;
}

export interface PaymentType {
  buy: boolean;
  rent: boolean;
}

export interface Hashtags {
  garden: boolean;
  balcony: boolean;
  terrace: boolean;
  garage: boolean;
  kitchen: boolean;
  furnished: boolean;
}

export interface UserLogin {
  username: string;
}

/* eslint-disable */
export enum HashtagsEnum {
  GARDEN = 'GARDEN',
  BALCONY = 'BALCONY',
  TERRACE = 'TERRACE',
  GARAGE = 'GARAGE',
  KITCHEN = 'KITCHEN',
  FURNISHED = 'FURNISHED',
}

export enum PaymentTypeEnum {
  BUY = 'BUY',
  RENT = 'RENT',
}
