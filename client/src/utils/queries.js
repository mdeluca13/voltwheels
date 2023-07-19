// import { gql } from '@apollo/client';

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($cars: [ID]!) {
//     checkout(cars: $cars) {
//       session
//     }
//   }
// `;

// export const QUERY_CAR = gql`
// query getCar($carId: ID!) {
//   car(carId: $carId) {
//     _id
//       make
//       model
//       year
//       color
//       range
//       trim
//       class
//       extra
//       image
//       price
//       quantity
//       seller
//   }
// }  
// `;

// // {
// //   car {
// //     _id
// //     make
// //     model
// //     year
// //     color
// //     range
// //     trim
// //     class
// //     extra
// //     image
// //     price
// //     quantity
// //     seller
// //   }
// // }

// export const QUERY_ALL_CARS = gql`
//   query getCars {
//     cars {
//       _id
//       make
//       model
//       year
//       color
//       range
//       trim
//       class
//       extra
//       image
//       price
//       quantity
//       seller
//     }
//   }
// `;

// export const QUERY_USER = gql`
// {
//   user {
//     username
//     firstName
//     lastName
//     email
//     orders {
//       _id
//       purchaseDate
//       cars {
//         _id
//         make
//         model
//         year
//         color
//         range
//         trim
//         extra
//         image
//         price
//         quantity
//       }
//     }
//   }
// }
  
// `;



// // query user($username: String!) {
// //   user(username: $username) {
// //     _id
// //     username
// //     firstName
// //     lastName
// //     email
// //     cars {
// //       _id
// //       make
// //       model
// //       year
// //       color
// //       range
// //       trim
// //       extra
// //       image
// //       price
// //       quantity
// //       seller
// //     }
// //   }
// // }

import { gql } from '@apollo/client';

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
        seller
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