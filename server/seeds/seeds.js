const db = require('../config/connection');

const { Car, User} = require('../models');

db.once('open', async () => {

    await User.deleteMany();

    await User.create({
        username:'bobbyB',
        email: 'bob@email.com',
        password: 'bobsemail',
        id: '64b299b4697fae56ea3af792'
    });

    await User.create({
        username: 'JohnWick',
        email: 'john@badass.com',
        password: 'bacon4ever',
        id: '87b299b4697fae56ea3af749'
});

console.log('users created');

await Car.deleteMany();

await Car.insertMany([
    {
        make: 'Tesla',
        model: 'Roadster',
        year: 2023,
        color: 'Red',
        range: 1000,
        trim: 'Ultimate',
        extra: 'all the things',
        image: '',
        price: 1000000,
        quantity: 1,
        seller: 'bobbyB',
    },
    {
        make: 'Tesla',
        model: 'Model3',
        year: 2022,
        color: 'White',
        range: 534,
        trim: '',
        extra: 'AWD',
        image: '',
        price: 50000,
        quantity: 1,
        seller: 'bobbyB',
    },
    {
        make: 'Tesla',
        model: 'Model S',
        year: 2020,
        color: 'Blue',
        range: 637,
        trim: '',
        extra: 'immersive sound',
        image: '',
        price: 80000,
        quantity: 1,
        seller: 'JohnWick',
    },
    {
        make: 'Hyundai',
        model: 'IONIQ5',
        year: 2022,
        color: 'Grey',
        range: 488,
        trim: '',
        extra: 'fastcharge',
        image: '',
        price: 51600,
        quantity: 1,
        seller: 'JohnWick',
    },
    {
        make: 'KIA',
        model: '2023EV6',
        year: 2023,
        color: 'Green',
        range: 454,
        trim: 'GT',
        extra: '60/40 rear seat',
        image: '',
        price: 53000,
        quantity: 1,
        seller: 'JohnWick',
    },
    {
        make: 'Mazda',
        model: 'MX-30',
        year: 2023,
        color: 'White',
        range: 161,
        trim: 'GS',
        extra: 'Good Stereo',
        image: '',
        price: 48000,
        quantity: 1,
        seller: 'JohnWick',
    },
]);
console.log('Cars Seeded');
});