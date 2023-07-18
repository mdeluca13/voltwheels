import React from 'react';
import { useQuery } from '@apollo/client';
import CarList from '../components/CarList';
import Cart from "../components/Cart";
import { QUERY_CARS } from '../utils/queries';

const CarListPage = () => {
  const { loading, data } = useQuery(QUERY_CARS);
  const cars = data?.cars || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="b"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        </div>
        <div className="b">
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