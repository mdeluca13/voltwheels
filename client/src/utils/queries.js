import { gql } from '@apollo/client';

// queries for app
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookedmarkCars {
        _id
      }
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
        seller
      }
    }
  }
`;

export const QUERY_ORDER = gql`
  query getOrder {
    order {
      _id
      purchaseDate
    }
  }
`;

export const QUERY_CARS = gql`
  query getCars {
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
      seller
    }
  }
`;

export const QUERY_SINGLE_CAR = gql`
  query getSingleCar($carId: ID!) {
    car(carId: $carId) {
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
      seller
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
        seller
      }
      orders {
        _id
        purchaseDate
        cars {
          _id
          make
          model
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($cars: [ID]!) {
    checkout(cars: $cars) {
      session
    }
  }
`;