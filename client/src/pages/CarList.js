import React from 'react';
import { useQuery } from '@apollo/client';
import CarList from '../components/CarList';
import Cart from "../components/Cart";
import { QUERY_CARS } from '../utils/queries';

// rendering cars for sale page
const CarListPage = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];
  
  return (
    <main>
      <div className='car-list-container'>
        <div className="big">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CarList
              cars={cars}
              title="Cars for Sale"
            />
          )}
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default CarListPage;