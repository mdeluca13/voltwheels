import { gql } from '@apollo/client';

// mutations for app
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
  mutation addCar($make: String!, $model: String!, $year: String!, $color: String!, $range: String!, $trim: String!, $extra: String, $image: String, $price: String!, $quantity: Int!) {
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

export const REMOVE_CAR = gql`
  mutation removeCar ($car:ID){
    removeCar(car: $car){
      cars{
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