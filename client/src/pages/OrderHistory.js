import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import CarList from '../components/CarList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const OrderHistory = () => {

  const { loading, data } = useQuery(Auth.loggedIn() ? QUERY_USER : QUERY_USER, {
    variables: { username: Auth.getProfile().data.username },
  });
  console.log(data)
  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn()) {
    return <Navigate to="/orderhistory" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.getProfile().data.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          {Auth.getProfile().data.username}'s Previous Orders
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <CarList
            cars={user.cars}
            title={`${user.username}'s previous orders`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default OrderHistory;
// import React from 'react';
// import { Link } from 'react-router-dom';

// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../utils/queries';

// function OrderHistory() {
//   const { data } = useQuery(QUERY_ME);
//   let user;

//   if (data) {
//     user = data.user;
//   }

//   return (
//     <>
//       <div className="container my-1">
//         <Link to="/">← Back to Products</Link>

//           <>
//             <h2>
//               Order History for {user.username}
//             </h2>
//             {user.orders.map((order) => (
//               <div key={order._id} className="my-2">
//                 <h3>
//                   {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
//                 </h3>
//                 <div className="flex-row">
//                   {order.cars.map(({ _id, image, make, price }, index) => (
//                     <div key={index} className="card px-1 py-1">
//                       <Link to={`/products/${_id}`}>
//                         {/* <img alt={name} src={`/images/${image}`} /> */}
//                         <p>{make}</p>
//                       </Link>
//                       <div>
//                         <span>${price}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </>
//       </div>
//     </>
//   );
// }

// export default OrderHistory;

// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import Cart from '../components/Cart';
// import OrderHistory from '../components/CarList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// const OrderHistory = () => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/orderhistory" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <div className="flex-row justify-center mb-3">
//         <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//           {user.username}'s Order History
//         </h2>

//         <div className="col-12 col-md-10 mb-5">
//           <OrderHistory
//             cars={user.cars}
//             title={`${user.username}'s ads`}
//             showTitle={false}
//             showUsername={false}
//           />
//         </div>
//         {/* <Cart /> */}
//       </div>
//     </div>
//   );
// };

// export default OrderHistory;

// import React from "react";
// import { Link } from "react-router-dom";
// import Cart from '../components/Cart';
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../utils/queries";

// function OrderHistory() {
//   const { data } = useQuery(QUERY_USER);
//   let user;

//   if (data) {
//     user = data.user;
//   }

//   return (
//     <>
//       <div className="container my-1">
//         <Link to="/">← Back to Products</Link>

//         { user ? (
//           <>
//             <h2>
//               Order History for {user.username}
//             </h2>
//             {user.orders.map((order) => (
//               <div key={order._id} className="my-2">
//                 <h3>
//                   {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
//                 </h3>
//                 <div className="flex-row">
//                   {order.products.map(({ _id, image, name, price }, index) => (
//                     <div key={index} className="card px-1 py-1">
//                       <Link to={`/products/${_id}`}>
//                         <img alt={name} src={`/images/${image}`} />
//                         <p>{name}</p>
//                       </Link>
//                       <div>
//                         <span>${price}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </>
//         ) : null }
//         {/* <Cart /> */}
//       </div>
//     </>
//   );
// }

// export default OrderHistory;