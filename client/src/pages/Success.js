import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CAR } from '../utils/queries';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  
  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const cars = cart.map((item) => item._id);

      if (cars.length) {
        const { data } = await addOrder({ variables: { cars } });
        console.log(`order data: ${data}`)
        const carData = data.addOrder.cars;
        console.log('added to orders')

        carData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;

// import React, { useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import Jumbotron from '../components/Jumbotron';
// import { ADD_ORDER } from '../utils/mutations';
// import { idbPromise } from '../utils/helpers';

// function Success() {
//   const [addOrder] = useMutation(ADD_ORDER);

//   useEffect(() => {
//     async function saveOrder() {
//       const order = await idbPromise('order', 'get');
//       const cars = order.map((item) => item._id);

//       if (cars.length) {
//         const { data } = await addOrder({ variables: { cars } });
//         const cartData = data.addOrder.cars;

//         cartData.forEach((item) => {
//           idbPromise('order', 'delete', item);
//         });
//       }

//       setTimeout(() => {
//         window.location.assign('/');
//       }, 3000);
//     }

//     saveOrder();
//   }, [addOrder]);

//   return (
//     <div>
//       <Jumbotron>
//         <h1>Success!</h1>
//         <h2>Thank you for your purchase!</h2>
//         <h2>You will now be redirected to the home page</h2>
//       </Jumbotron>
//     </div>
//   );
// }

// export default Success;
