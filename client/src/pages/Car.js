import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Order from '../components/Order';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_ORDER,
  UPDATE_ORDER_QUANTITY,
  ADD_TO_ORDER,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_CARS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentCar, setCurrentCar] = useState({});

  const { loading, data } = useQuery(QUERY_CARS);

  const { cars, order } = state;

  useEffect(() => {
    // already in global store
    if (cars.length) {
      setCurrentProduct(cars.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_CARS,
        cars: data.cars,
      });

      data.cars.forEach((car) => {
        idbPromise('cars', 'put', car);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('cars', 'get').then((indexedCars) => {
        dispatch({
          type: UPDATE_CARS,
          products: indexedCars,
        });
      });
    }
  }, [cars, data, loading, dispatch, id]);

  const addToOrder = () => {
    const itemInOrder = order.find((orderItem) => orderItem._id === id);
    if (itemInOrder) {
      dispatch({
        type: UPDATE_ORDER_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1,
      });
      idbPromise('order', 'put', {
        ...itemInOrder,
        purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_ORDER,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('order', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromOrder = () => {
    dispatch({
      type: REMOVE_FROM_ORDER,
      _id: currentCar._id,
    });

    idbPromise('order', 'delete', { ...currentCar });
  };

  return (
    <>
      {currentCar && order ? (
        <div className="container my-1">
          <Link to="/">← Back to Cars</Link>

          <h2>{currentCar.make} {currentCar.model}</h2>

          <p>{currentCar.description}</p>

          <p>
            <strong>Price:</strong>${currentCar.price}{' '}
            <button onClick={addToOrder}>Add to Order</button>
            <button
              disabled={!order.find((p) => p._id === currentCar._id)}
              onClick={removeFromOrder}
            >
              Remove from Order
            </button>
          </p>

          <img
            src={`/images/${currentCar.image}`}
            alt={currentCar.model}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Order />
    </>
  );
}

export default Detail;
