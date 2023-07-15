import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CAR } from '../utils/queries';

const SingleCar = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { carId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    // pass URL parameter
    variables: { carId: carId },
  });

  const car = data?.car || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {car.seller} <br />
        <span style={{ fontSize: '1rem' }}>
          is selling a {car.color} {car.year} {car.make} {car.model} for ${car.price}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {car.color} {car.year} {car.make} {car.model} {car.range} {car.trim} {car.extra} {car.image} ${car.price}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleCar;

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import Order from '../components/Order';
// import { useStoreContext } from '../utils/GlobalState';
// import {
//   REMOVE_FROM_ORDER,
//   UPDATE_ORDER_QUANTITY,
//   ADD_TO_ORDER,
//   UPDATE_CAR,
// } from '../utils/actions';
// import { QUERY_CAR, QUERY_ALL_CARS } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';

// function Detail() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentCar, setCurrentCar] = useState({});

//   const { loading, data } = useQuery(QUERY_CAR);

//   const { cars, order } = state;

//   useEffect(() => {
//     // already in global store
//     if (cars.length) {
//       setCurrentCar(cars.find((car) => car._id === id));
//     }
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_CAR,
//         cars: data.cars,
//       });

//       data.cars.forEach((car) => {
//         idbPromise('cars', 'put', car);
//       });
//     }
//     // get cache from idb
//     else if (!loading) {
//       idbPromise('cars', 'get').then((indexedCar) => {
//         dispatch({
//           type: UPDATE_CAR,
//           products: indexedCar,
//         });
//       });
//     }
//   }, [cars, data, loading, dispatch, id]);

//   const addToOrder = () => {
//     const itemInOrder = order.find((orderItem) => orderItem._id === id);
//     if (itemInOrder) {
//       dispatch({
//         type: UPDATE_ORDER_QUANTITY,
//         _id: id,
//         purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1,
//       });
//       idbPromise('order', 'put', {
//         ...itemInOrder,
//         purchaseQuantity: parseInt(itemInOrder.purchaseQuantity) + 1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_ORDER,
//         car: { ...currentCar, purchaseQuantity: 1 },
//       });
//       idbPromise('order', 'put', { ...currentCar, purchaseQuantity: 1 });
//     }
//   };

//   const removeFromOrder = () => {
//     dispatch({
//       type: REMOVE_FROM_ORDER,
//       _id: currentCar._id,
//     });

//     idbPromise('order', 'delete', { ...currentCar });
//   };

//   return (
//     <>
//       {currentCar && order ? (
//         <div className="container my-1">
//           <Link to="/">← Back to Cars</Link>

//           <h2>{currentCar.make} {currentCar.model}</h2>

//           <p>{currentCar.description}</p>

//           <p>
//             <strong>Price:</strong>${currentCar.price}{' '}
//             <button onClick={addToOrder}>Add to Order</button>
//             <button
//               disabled={!order.find((p) => p._id === currentCar._id)}
//               onClick={removeFromOrder}
//             >
//               Remove from Order
//             </button>
//           </p>

//           <img
//             src={`/images/${currentCar.image}`}
//             alt={currentCar.model}
//           />
//         </div>
//       ) : null}
//       {loading ? <p>Loading...</p> : null}
//       <Order />
//     </>
//   );
// }

// export default Detail;
