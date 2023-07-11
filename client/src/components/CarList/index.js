import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CARS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_CARS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function CarList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_CARS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CARS,
        cars: data.cars,
      });
      data.cars.forEach((car) => {
        idbPromise('cars', 'put', car);
      });
    } else if (!loading) {
      idbPromise('cars', 'get').then((cars) => {
        dispatch({
          type: UPDATE_CARS,
          cars: cars,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.cars;
    }

    return state.cars.filter(
      (car) => car.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Cars:</h2>
      {state.cars.length ? (
        <div className="flex-row">
          {filterCars().map((car) => (
            <CarItem
              key={car._id}
              _id={car._id}
              image={car.image}
              name={car.name}
              price={car.price}
              quantity={car.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any cars yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default CarList;
