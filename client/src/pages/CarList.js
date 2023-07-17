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
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        </div>
        <div className="col-12 col-md-8 mb-3">
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