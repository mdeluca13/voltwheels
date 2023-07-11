const db = require('./connection');
const {Ad, Bookmark, Car, User} = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Wick',
        email: 'johnwick@kickass.com',
        password: 'doglover01',
        id: '12345'
    });

await User.create({
    firstName: 'Billy',
    lastName: 'Bob',
    email: 'hick@redneck.com',
    password: 'bacon4ever',
    id: '67890'
});

console.log('users created');

await Car.deleteMany();

await Car.insertMany([
    {
        make: 'Tesla',
        model: 'Roadster',
        year: 2023,
        color: 'Red',
        range: '1000Km',
        trim: 'Ultimate',
        extra: 'all the things',
        image: '',
        price: 1000000,
        quantity: 1,
        UserId: '12345'
    },
    {
        make: 'Tesla',
        model: 'Model3',
        year: 2022,
        color: 'White',
        range: '534Km',
        trim: '',
        extra: 'AWD',
        image: '',
        price: 50000,
        quantity: 1,
        UserId: '12345'
    },
    {
        make: 'Tesla',
        model: 'Model S',
        year: 2020,
        color: 'Blue',
        range: '637Km',
        trim: '',
        extra: 'immersive sound',
        image: '',
        price: 80000,
        quantity: 1,
        UserId: '12345'
    },
    {
        make: 'Hyundai',
        model: 'IONIQ5',
        year: 2022,
        color: 'Grey',
        range: '488Km',
        trim: '',
        extra: 'fastcharge',
        image: '',
        price: 51600,
        quantity: 1,
        UserId: '67890'
    },
    {
        make: 'KIA',
        model: '2023EV6',
        year: 2023,
        color: 'Green',
        range: '454Km',
        trim: 'GT',
        extra: '60/40 rear seat',
        image: '',
        price: 53000,
        quantity: 1,
        UserId: '67890'
    },
    {
        make: 'Mazda',
        model: 'MX-30',
        year: 2023,
        color: 'White',
        range: '161Km',
        trim: 'GS',
        extra: 'Good Stereo',
        image: '',
        price: 48000,
        quantity: 1,
        UserId: '67890'
    },

]);

console.log('Cars Seeded');

});