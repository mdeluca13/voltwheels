import React from 'react';
import { Link } from 'react-router-dom';
import DeleteBtn from '../DeleteBtn';

// profile list to show users ads theyve added 
const ProfileList = ({
  cars,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  console.log(`cars: ${cars}`)

  return (
    <div>
      {showTitle && <h3 className='car-list-title'>{title}</h3>}
      {cars &&
        cars.map((car) => (
          <div key={car._id} className='car-list-item'>
            <img className='image-style' src={car.image} alt={car.name} />
            <h5 className='car-list-item-header'>
              {car.color} {car.year} {car.make} {car.model}
            </h5>
            <p className='car-list-item-price'>Price: ${car.price}</p>
            <p className='car-list-item-seller'>Sold by: {car.seller}</p>
            <Link
              className="car-list-button"
              to={`/cars/${car._id}`}
            >
              View this Car
            </Link>
            {/* <DeleteBtn /> */}
          </div>
        ))}
    </div>
  );
};

export default ProfileList;