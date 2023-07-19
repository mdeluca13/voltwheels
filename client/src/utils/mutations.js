// import { gql } from '@apollo/client';

// export const LOGIN = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_ORDER = gql`
//   mutation addOrder($cars: [ID]!) {
//     addOrder(cars: $cars) {
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
// `;

// export const ADD_USER = gql`
//   mutation addUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String!
//   ) {
//     addUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_CAR = gql`
//   mutation addCar(
//     $make: String!
//     $model: String!
//     $year: Int!
//     $color: String!
//     $range: Int!
//     $trim: String!
//     $image: String
//     $extra: String!
//     $class: String!
//     $price: Float!
//     $quantity: Int!

//   ) {
//     addCar(
//       make: $make
//       model: $model
//       year: $year
//       color: $color
//       range: $range
//       trim: $trim
//       image: $image
//       extra: $extra
//       class: $class
//       price: $price
//       quantity: $quantity
      
//     ) 
//   }
// `;


import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CAR = gql`
  mutation addCar($make: String!, $model: String!, $year: Int!, $color: String!, $range: Int!, $trim: String!, $extra: String, $image: String, $price: Float!, $quantity: Int!) {
    addCar(make: $make, model: $model, year: $year, color: $color, range: $range, trim: $trim, extra: $extra, image: $image, price: $price, quantity: $quantity) {
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

export const ADD_ORDER = gql`
  mutation addOrder($cars: [ID]!) {
    addOrder(cars: $cars) {
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
        seller
      }
    }
  }
`;

export const ADD_BOOKMARK = gql`
mutation addBookmark($user:bookmarkedCars){
  addBookmark(user: $bookmarkedCars){
    cars{
      _id
    }
  }
}
`;


export const REMOVE_BOOKMARK = gql`
mutation removeBookmark ($user:bookmarkedCars){
  removeBookmark(user: $bookmarkedCars){
    cars{
      _id
    }
  }
}
`;