const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Car {
    _id: ID
    make: String
    model: String
    year: Int
    color: String
    range: Int
    trim: String
    extra: String
    image: String
    price: Float
    quantity: Int
    user: User
  }

  type Order {
    _id: ID
    purchaseDate: String
    cars: [Car]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    cars: [Car]
    car(_id: ID!): Car
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateCar(_id: ID!, quantity: Int!): Car
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
