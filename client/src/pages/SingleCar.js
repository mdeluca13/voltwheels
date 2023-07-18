import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_CARS,
} from '../utils/actions';
import { QUERY_SINGLE_CAR } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import {BookmarkButton} from '../components/Bookmark/bookmarkButton';

function SingleCar() {
  const [state, dispatch] = useStoreContext();

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { carId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
    // pass URL parameter
    variables: { carId: carId },
  });

  const car = data?.car || {};
  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === carId);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: carId,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        car: { ...car, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...car, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: car._id,
    });

    idbPromise('cart', 'delete', { ...car });
  };

  return (
    <>
      {car && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Cars</Link>

        <BookmarkButton carId={props.carId}/>

          <h2>{car.make}</h2>

          <p>{car.model}</p>

          <p>
            <strong>Price:</strong>${car.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === car._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          {/* <img
            src={`/images/${currentCar.image}`}
            alt={currentCar.name}
          /> */}
        </div>
      ) : null}
      {loading ? <p>Loading...</p> : null}
      <Cart />
    </>
  );
}

export default SingleCar;


// import React from 'react';

// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_SINGLE_CAR } from '../utils/queries';

// const SingleCar = () => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { carId } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
//     // pass URL parameter
//     variables: { carId: carId },
//   });

//   const car = data?.car || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {car.seller} <br />
//         <span style={{ fontSize: '1rem' }}>
//           is selling a {car.color} {car.year} {car.make} {car.model} for ${car.price}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {car.color} {car.year} {car.make} {car.model} {car.range} {car.trim} {car.extra} {car.image} ${car.price}
//         </blockquote>
//       </div>
//     </div>
//   );
// };

// export default SingleCar;



// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/GlobalState';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   ADD_TO_CART,
//   UPDATE_CARS,
// } from '../utils/actions';
// import { QUERY_SINGLE_CAR } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';

// function SingleCar() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentCar, setCurrentCar] = useState({});

//   const { loading, data } = useQuery(QUERY_SINGLE_CAR);

//   const { cars, cart } = state;

//   useEffect(() => {
//     // already in global store
//     if (cars.length) {
//       setCurrentCar(cars.find((car) => car._id === id));
//     }
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_CARS,
//         cars: data.cars,
//       });

//       data.cars.forEach((car) => {
//         idbPromise('cars', 'put', car);
//       });
//     }
//     // get cache from idb
//     else if (!loading) {
//       idbPromise('cars', 'get').then((indexedCars) => {
//         dispatch({
//           type: UPDATE_CARS,
//           cars: indexedCars,
//         });
//       });
//     }
//   }, [cars, data, loading, dispatch, id]);

//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === id);
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         car: { ...currentCar, purchaseQuantity: 1 },
//       });
//       idbPromise('cart', 'put', { ...currentCar, purchaseQuantity: 1 });
//     }
//   };

//   const removeFromCart = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: currentCar._id,
//     });

//     idbPromise('cart', 'delete', { ...currentCar });
//   };

//   return (
//     <>
//       {currentCar && cart ? (
//         <div className="container my-1">
//           <Link to="/">← Back to Cars</Link>

//           <h2>{currentCar.make}</h2>

//           <p>{currentCar.model}</p>

//           <p>
//             <strong>Price:</strong>${currentCar.price}{' '}
//             <button onClick={addToCart}>Add to Cart</button>
//             <button
//               disabled={!cart.find((p) => p._id === currentCar._id)}
//               onClick={removeFromCart}
//             >
//               Remove from Cart
//             </button>
//           </p>

//           {/* <img
//             src={`/images/${currentCar.image}`}
//             alt={currentCar.make}
//           /> */}
//         </div>
//       ) : null}
//       {loading ? <p>Loading...</p> : null}
//       <Cart />
//     </>
//   );
// }

// export default SingleCar;

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/GlobalState';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   ADD_TO_CART,
//   UPDATE_CARS,
// } from '../utils/actions';
// import { QUERY_CARS } from '../utils/queries';
// import { idbPromise } from '../utils/helpers';

// function IndividualCar() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentCar, setCurrentCar] = useState({});

//   const { loading, data } = useQuery(QUERY_CARS);

//   const { cars, cart } = state;

//   useEffect(() => {
//     // already in global store
//     if (cars.length) {
//       setCurrentCar(cars.find((car) => car._id === id));
//     }
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_CARS,
//         cars: data.cars,
//       });

//       data.cars.forEach((car) => {
//         idbPromise('cars', 'put', car);
//       });
//     }
//     // get cache from idb
//     else if (!loading) {
//       idbPromise('cars', 'get').then((indexedCars) => {
//         dispatch({
//           type: UPDATE_CARS,
//           cars: indexedCars,
//         });
//       });
//     }
//   }, [cars, data, loading, dispatch, id]);

//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === id);
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         car: { ...currentCar, purchaseQuantity: 1 },
//       });
//       idbPromise('cart', 'put', { ...currentCar, purchaseQuantity: 1 });
//     }
//   };

//   const removeFromCart = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: currentCar._id,
//     });

//     idbPromise('cart', 'delete', { ...currentCar });
//   };

//   return (
//     <>
//       {currentCar && cart ? (
//         <div className="container my-1">
//           <Link to="/">← Back to Cars for Sale</Link>

//           <h2>{currentCar.color} {currentCar.year} {currentCar.make} {currentCar.model}</h2>

//           <p>Range: {currentCar.range}</p>
//           <p>Trim: {currentCar.trim}</p>
//           <p>Extras: {currentCar.extra}</p>
//           <p>Seller: {currentCar.seller}</p>

//           <p>
//             <strong>Price:</strong>${currentCar.price}{' '}
//             <button onClick={addToCart}>Add to Order</button>
//             <button
//               disabled={!cart.find((p) => p._id === currentCar._id)}
//               onClick={removeFromCart}
//             >
//               Remove from Order
//             </button>
//           </p>

//           {/* <img
//             src={`/images/${currentCar.image}`}
//             alt={currentCar.model}
//           /> */}
//         </div>
//       ) : null}
//       {loading ? <p>Loading...</p> : null}
//       {/* <Cart /> */}
//     </>
//   );
// }

// export default IndividualCar;



// import React, { useEffect } from 'react';

// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_SINGLE_CAR } from '../utils/queries';
// import { useStoreContext } from "../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY, UPDATE_CARS } from "../utils/actions";
// import { idbPromise } from "../utils/helpers";

// const SingleCar = (item) => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { carId } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_CAR, {
//     // pass URL parameter
//     variables: { carId: carId },
//   });

//   const car = data?.car || {};

//   const [state, dispatch] = useStoreContext();

//   useEffect(() => {
//     if (car) {
//       dispatch({
//         type: UPDATE_CARS,
//         cars: data.cars,
//       });
//       data.cars.forEach((car) => {
//         idbPromise('cars', 'put', car);
//       });
//     } else if (!loading) {
//       idbPromise('cars', 'get').then((cars) => {
//         dispatch({
//           type: UPDATE_CARS,
//           cars: cars,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   const {
//     _id,
//     make,
//     model,
//     year,
//     color,
//     range,
//     trim,
//     extra,
//     image,
//     price,
//     quantity
//   } = item;

//   const { cart } = state

//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === _id)
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: _id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         car: { ...item, purchaseQuantity: 1 }
//       });
//       idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
//     }
//   }


//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {car.seller} <br />
//         <span style={{ fontSize: '1rem' }}>
//           is selling a {car.color} {car.year} {car.make} {car.model} for ${car.price}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {car.color} {car.year} {car.make} {car.model} {car.range} {car.trim} {car.extra} {car.image} ${car.price}
//         </blockquote>
//       </div>
//       <button onClick={addToCart}>Add to order</button>
//     </div>
//   );
// };

// export default SingleCar;

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
//           cars: indexedCar,
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
//     </>
//   );
// }

// export default Detail;
