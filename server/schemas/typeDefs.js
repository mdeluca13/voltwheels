const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cars: [Car]!
  }

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
    cars(make: String, model: String, year: Int, color: String, range: Int, trim: String, extra: String, image: String, price: Float, quantity: Int, seller: String): [Car]
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
    addCar(make: String!, model: String!, year: Int!, color: String!, range: Int!, trim: String!, extra: String, image: String, price: Float!, quantity: Int!): Car
    removeCar(carId: ID!): Car
    addBookmark(bookmarkedCars: ID!): User
    removeBookmark(bookmarkedCars: ID!): User
  }
`;

module.exports = typeDefs;


// const { gql } = require('apollo-server-express');

// const typeDefs = gql`

//   type Car {
//     _id: ID
//     make: String
//     model: String
//     year: Int
//     color: String
//     range: Int
//     trim: String
//     class: String
//     extra: String
//     image: String
//     price: Float
//     quantity: Int
//   }

//   type Order {
//     _id: ID
//     purchaseDate: String
//     cars: [Car]
//   }

//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     orders: [Order]
//   }

//   type Checkout {
//     session: ID
//   }

//   type Auth {
//     token: ID
//     user: User
//   }

//   type Query {
//     cars: [Car]
//     car(_id: ID!): Car
//     user: User
//     order(_id: ID!): Order
//     checkout(cars: [ID]!): Checkout
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     addOrder(cars: [ID]!): Order
//     addCar(make: String!, model: String!, year: Int!, color: String!, range: Int!, trim: String!, class: String!, extra: String, image: String, price: Float!, quantity: Int!): Car
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//     updateCar(_id: ID!, quantity: Int!): Car
//     login(email: String!, password: String!): Auth
//   }
// `;

// module.exports = typeDefs;
