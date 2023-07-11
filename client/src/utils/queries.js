import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_CARS = gql`
  {
    cars {
      _id
      make
      model
      year
      color
      range
      trim
      extra
      image
      price
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        cars {
          _id
          make
          model
          year
          color
          range
          trim
          extra
          image
          price
          quantity
        }
      }
    }
  }
`;
