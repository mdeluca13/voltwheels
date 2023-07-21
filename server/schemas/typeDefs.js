const { gql } = require('apollo-server-express');

// typedefs for queries and mutations
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cars: [Car]
    orders: [Order]
  }

  type Car {
    _id: ID
    make: String
    model: String
    year: String
    color: String
    range: String
    trim: String
    extra: String
    image: String
    price: String
    quantity: Int
    seller: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    cars: [Car]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    cars(make: String, model: String, year: String, color: String, range: String, trim: String, extra: String, image: String, price: String, quantity: Int, seller: String): [Car]
    car(carId: ID!): Car
    me: User
    order(_id: ID!): Order
    checkout(cars: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(cars: [ID]!): Order
    login(email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    updateCar(_id: ID!, quantity: Int!): Car
    addCar(make: String!, model: String!, year: String!, color: String!, range: String!, trim: String!, extra: String, image: String, price: String!, quantity: Int!): Car
    removeCar(carId: ID!): Car
    addBookmark(bookmarkedCars: ID!): User
    removeBookmark(bookmarkedCars: ID!): User
  }
`;

module.exports = typeDefs;

