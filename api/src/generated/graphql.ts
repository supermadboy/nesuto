import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  verify?: Maybe<ValidJwtToken>;
  apartments?: Maybe<Array<Maybe<Apartment>>>;
  login?: Maybe<User>;
};


export type QueryLoginArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type ValidJwtToken = {
  __typename?: 'ValidJWTToken';
  token: Scalars['String'];
  isLoggedIn: Scalars['Boolean'];
};

export type Apartment = {
  __typename?: 'Apartment';
  _id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  subtitle: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  numberOfRooms: Scalars['Int'];
  paymentType?: Maybe<Array<Maybe<PaymentType>>>;
  hashtags?: Maybe<Array<Maybe<HashtagsType>>>;
  apartmentPictures?: Maybe<Array<Maybe<ApartmentPicture>>>;
};

export enum PaymentType {
  Buy = 'BUY',
  Rent = 'RENT'
}

export enum HashtagsType {
  Garage = 'GARAGE',
  Furnished = 'FURNISHED',
  Kitchen = 'KITCHEN',
  Terrace = 'TERRACE',
  Garden = 'GARDEN',
  Balcony = 'BALCONY'
}

export type ApartmentPicture = {
  __typename?: 'ApartmentPicture';
  _id?: Maybe<Scalars['ID']>;
  apartmentId: Scalars['ID'];
  order: Scalars['Int'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  fileUrl: Scalars['String'];
  cloudinaryName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addApartment: Apartment;
  removeApartment: Apartment;
  addUser: User;
};


export type MutationAddApartmentArgs = {
  input: AddApartment;
};


export type MutationRemoveApartmentArgs = {
  input: RemoveApartment;
};


export type MutationAddUserArgs = {
  input: AddUser;
};

export type AddApartment = {
  title: Scalars['String'];
  subtitle: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  numberOfRooms: Scalars['Int'];
  paymentType?: Maybe<Array<Maybe<PaymentType>>>;
  hashtags?: Maybe<Array<Maybe<HashtagsType>>>;
  apartmentPictures?: Maybe<Array<Maybe<Scalars['Upload']>>>;
};


export type RemoveApartment = {
  _id: Scalars['String'];
};

export type AddUser = {
  username: Scalars['String'];
  password: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ValidJWTToken: ResolverTypeWrapper<ValidJwtToken>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Apartment: ResolverTypeWrapper<Apartment>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PaymentType: PaymentType;
  HashtagsType: HashtagsType;
  ApartmentPicture: ResolverTypeWrapper<ApartmentPicture>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  addApartment: AddApartment;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  removeApartment: RemoveApartment;
  addUser: AddUser;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars['String'];
  ValidJWTToken: ValidJwtToken;
  Boolean: Scalars['Boolean'];
  Apartment: Apartment;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ApartmentPicture: ApartmentPicture;
  User: User;
  Mutation: {};
  addApartment: AddApartment;
  Upload: Scalars['Upload'];
  removeApartment: RemoveApartment;
  addUser: AddUser;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  verify?: Resolver<Maybe<ResolversTypes['ValidJWTToken']>, ParentType, ContextType>;
  apartments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Apartment']>>>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryLoginArgs, never>>;
};

export type ValidJwtTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValidJWTToken'] = ResolversParentTypes['ValidJWTToken']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isLoggedIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Apartment'] = ResolversParentTypes['Apartment']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfRooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentType?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentType']>>>, ParentType, ContextType>;
  hashtags?: Resolver<Maybe<Array<Maybe<ResolversTypes['HashtagsType']>>>, ParentType, ContextType>;
  apartmentPictures?: Resolver<Maybe<Array<Maybe<ResolversTypes['ApartmentPicture']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApartmentPictureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApartmentPicture'] = ResolversParentTypes['ApartmentPicture']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  apartmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cloudinaryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addApartment?: Resolver<ResolversTypes['Apartment'], ParentType, ContextType, RequireFields<MutationAddApartmentArgs, 'input'>>;
  removeApartment?: Resolver<ResolversTypes['Apartment'], ParentType, ContextType, RequireFields<MutationRemoveApartmentArgs, 'input'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'input'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  ValidJWTToken?: ValidJwtTokenResolvers<ContextType>;
  Apartment?: ApartmentResolvers<ContextType>;
  ApartmentPicture?: ApartmentPictureResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
