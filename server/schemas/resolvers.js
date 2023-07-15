const { AuthenticationError } = require('apollo-server-express');
const { User, Car } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cars');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('cars');
    },
    cars: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Car.find(params);
    },
    car: async (parent, { carId }) => {
      return Car.findOne({ _id: carId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('cars');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addCar: async (parent, { make, model, year, color, range, trim, extra, image, price, quantity }, context) => {
      if (context.user) {
        const car = await Car.create({
          make,
          model,
          year,
          color,
          range,
          trim, 
          extra,
          image,
          price,
          quantity,
          seller: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cars: car._id } }
        );

        return car;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeCar: async (parent, { carId }, context) => {
      if (context.user) {
        const car = await Car.findOneAndDelete({
          _id: carId,
          seller: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cars: car._id } }
        );

        return car;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;


// const { AuthenticationError } = require('apollo-server-express');
// const { User, Car, Bookmark, Order } = require('../models');
// const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// const resolvers = {
//   Query: {

//     // users: async () => {
//     //   return User.find().populate('cars');
//     // },
//     // user: async (parent, args, context ) => {
//     //   return User.findOne(context.user._id).populate('cars');
//     // },
//     // cars: async (parent, { username }) => {
//     //   const params = username ? { username } : {};
//     //   return Car.find(params);
//     // },
//     // car: async (parent, { carId }) => {
//     //   return Car.findOne({ _id: carId });
//     // },
  
//     cars: async () => {
//       return await Car.find(params);
//     },
//     car: async (parent, { _id }) => {
//       return await Car.findById(_id);
//     },
//     user: async (parent, args, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.cars'
//         });

//         user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

//         return user;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     order: async (parent, { _id }, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.cars'
//         });

//         return user.orders.id(_id);
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     checkout: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const order = new Order({ cars: args.cars });
//       const line_items = [];

//       const { cars } = await order.populate('cars');

//       for (let i = 0; i < cars.length; i++) {
//         const car = await stripe.cars.create({
//           name: cars[i].name,
//           description: cars[i].description,
//           images: [`${url}/images/${cars[i].image}`]
//         });

//         const price = await stripe.prices.create({
//           car: car.id,
//           unit_amount: car[i].price * 100,
//           currency: 'usd',
//         });

//         line_items.push({
//           price: price.id,
//           quantity: 1
//         });
//       }

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items,
//         mode: 'payment',
//         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${url}/`
//       });

//       return { session: session.id };
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     addOrder: async (parent, { cars }, context) => {
//       console.log(context);
//       if (context.user) {
//         const order = new Order({ cars });

//         await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

//         return order;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     addCar: async (parent, args, context) => {
//       // if (context.user) {
//         const car = await Car.create(args);
//           // user: context.user.firstName,
//         // await User.findOneAndUpdate(
//         //   { _id: context.user._id },
//         //   { $addToSet: { cars: car._id } }
//         // );
//         return car;
//       },
//     //   // throw new AuthenticationError('You need to be logged in!');
//     // },
//     // addCar: async (parent, { makeText, modelText, yearText, colorText, rangeText, trimText, quantityText, extraText, classText, priceText }, context) => {
//     //   if (context.user) {
//     //     const car = await Car.create({
//     //       makeText, modelText, yearText, colorText, rangeText, trimText, quantityText, extraText, classText, priceText
//     //       // seller: context.user.firstName,
//     //     });

//     //     // await User.findOneAndUpdate(
//     //     //   { _id: context.user._id },
//     //     //   { $addToSet: { cars: car._id } }
//     //     // );

//     //     return car;
//     //   }
//     //   throw new AuthenticationError('You need to be logged in!');
//     // },
//     // // addCar: async (parent, args, context) => {
//     //   const car = await Car.create(args);

//     //   await User.findOneAndUpdate(
//     //     { user: context.user._id },
//     //     { $addToSet: { cars: car._id } }
//     //   );

//     //   return car;
//     // },
//     updateUser: async (parent, args, context) => {
//       if (context.user) {
//         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     updateCar: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Car.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     }
//   }
// };

// module.exports = resolvers;
