// import React, { useEffect } from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import  CarItem  from '../CarItem';
// import { UPDATE_CARS } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_ALL_CARS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';

// function CarList() {
//   const [state, dispatch] = useStoreContext();

//   // const { currentCategory } = state;

//   const { loading, data } = useQuery(QUERY_ALL_CARS);

//   useEffect(() => {
//     if (data) {
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

//   // function filterCars() {

//   //   return state.cars.filter(
//   //     (car) => car.category._id === currentCategory
//   //   );
//   // }

//   return (
//     <div className="my-2">
//       <h2>Our Cars:</h2>
//       {state.cars.length ? (
//         <div className="flex-row">
//           {data.map((car) => (
//             <CarItem
//               key={car._id}
//               _id={car._id}
//               image={car.image}
//               make={car.make}
//               model={car.model}
//               year={car.year}
//               price={car.price}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any cars yet!</h3>
//       )}
//       {loading ? <p>Loading...</p> : null}
//     </div>
//   );
// }

// export default CarList;

import React from 'react';
import { Link } from 'react-router-dom';

const CarList = ({ cars }) => {
  if (!cars.length) {
    return <h3>No Cars Yet</h3>;
  }

  return (
    <div>
      <h3>Cars for Sale</h3>
      {cars &&
        cars.map((car) => (
          <div key={car._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {car.year} {car.make} {car.model}
            </h4>
            <div className="card-body bg-light p-2">
              <p>For sale by: </p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/cars/${car._id}`}
            >
              View this Car
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CarList;
