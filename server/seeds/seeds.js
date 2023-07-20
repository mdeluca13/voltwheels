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
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689886505/voltwheels/3a31d5fb2ad0e7bad9ddacf5de9c1e65.jpg',
        price: 50000,
        quantity: 1,
        seller: 'bobbyB',
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        year: 2022,
        color: 'White',
        range: 534,
        trim: '',
        extra: 'AWD',
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689887504/voltwheels/6953fb4d8c27ff07bed5a9c3decbd21c.jpg',
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
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689887395/voltwheels/39db8d7c9553e382d6bbc7c1424d48e7.jpg',
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
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689887168/voltwheels/2070cbc96c06edc200f8c502ac26eaf5.jpg',
        price: 51600,
        quantity: 1,
        seller: 'JohnWick',
    },
    {
        make: 'KIA',
        model: '2023EV6',
        year: 2023,
        color: 'Red',
        range: 454,
        trim: 'GT',
        extra: '60/40 rear seat',
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689887596/voltwheels/ff83b202853499787b9e045d72278bf6.webp',
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
        image: 'https://res.cloudinary.com/dewcgeq3o/image/upload/v1689887101/voltwheels/9c593d8236d2dc39c5ee97270a26f171.jpg',
        price: 48000,
        quantity: 1,
        seller: 'JohnWick',
    },
]);
console.log('Cars Seeded');
});