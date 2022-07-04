export interface ApartmentAttributes {
  createdAt: string
  description: string
  hashtags: object|undefined
  numberOfRooms: number
  paymentType: PaymentTypeEnum
  pictures: {data: ApartmentPicture[]}
  price: number
  publishedAt: string
  subTitle: string
  title: string
  updatedAt:string
}

export interface Apartment {
  id: number;
  attributes: ApartmentAttributes
}
interface PictureFormat {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  size: number
  url: string
  width: number
}

export interface ApartmentPicture {
  id: number;
  attributes: {
    alternativeText: string
    caption: string
    createdAt: string
    ext: string
    formats: {
      large: PictureFormat,
      small: PictureFormat,
      medium: PictureFormat,
      thumbnail: PictureFormat
    }
    hash: string
    height: number
    mime: string
    name: string
    provider: string
    size: number
    updatedAt: string
    url: string
    width: number
  };
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
