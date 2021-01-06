export interface Apartment {
  _id: string;
  title: string;
  description: string;
  price: number;
  numberOfRooms: number;
  paymentType: PaymentType;
  hashtags: Hashtags;
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
