import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import CarList from '../components/CarList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data)
  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
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
          {user.username}'s Cars for Sale
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <CarList
            cars={user.cars}
            title={`${user.username}'s ads`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {/* <Cart /> */}
      </div>
    </div>
  );
};

export default Profile;

// import React, { useEffect } from "react";
// import { useMutation } from "@apollo/client";
// import { Ads } from "../utils/mutations";
// import { idbPromise } from "../utils/helpers";
// import Nav from "./AppContainer";

// export function Ads() {
//   const [CarAds] = useMutation(Ads);

//   useEffect(() => {
//     async function Ads() {
//       const order = await idbPromise("order", "get");
//       const cars = order.map((item) => item._id);

//       if (cars.length) {
//         const { data } = await Ads({ variables: { cars } });
//         const carData = data.Ads.cars;

//         carData.forEach((item) => {
//           idbPromise("order", "delete", item);
//         });
//       }

//       setTimeout(() => {
//         window.location.assign("/");
//       }, 3000);
//     }

//     Ads();
//   }, [addOrder]);

//   return (
//     <div>
//       <Nav />
//       <Ads>
//         <header>
//           <h2>Your Ads</h2>
//         </header>
//         <Container>
//           //Individual Car Ads
//           <card>
//             <h3>Image: {image}</h3>
//             <h3>Name: {name}</h3>
//             <h3>Description: {description}</h3>
//             <h3>Make: {make}</h3>
//             <h3>Model: {model}</h3>
//             <h3>Year: {year}</h3>
//             <h3>Color: {color}</h3>
//             <h3>Range: {range}</h3>
//             <h3>Trim: {trim}</h3>
//             <h3>extras: {extra}</h3>
//             <h3>Price: {price}</h3>
//             <h3>Available Quantity: {quantity}</h3>
//             {/* <button onClick={() => setCurrentPage === ("Car");
//           return <Car/>}></button> */}
//           </card>
//           <card>
//             <h3>Image: {image}</h3>
//             <h3>Name: {name}</h3>
//             <h3>Description: {description}</h3>
//             <h3>Make: {make}</h3>
//             <h3>Model: {model}</h3>
//             <h3>Year: {year}</h3>
//             <h3>Color: {color}</h3>
//             <h3>Range: {range}</h3>
//             <h3>Trim: {trim}</h3>
//             <h3>extras: {extra}</h3>
//             <h3>Price: {price}</h3>
//             <h3>Available Quantity: {quantity}</h3>
//             <button></button>
//           </card>
//           <card>
//             <h3>Image: {image}</h3>
//             <h3>Name: {name}</h3>
//             <h3>Description: {description}</h3>
//             <h3>Make: {make}</h3>
//             <h3>Model: {model}</h3>
//             <h3>Year: {year}</h3>
//             <h3>Color: {color}</h3>
//             <h3>Range: {range}</h3>
//             <h3>Trim: {trim}</h3>
//             <h3>extras: {extra}</h3>
//             <h3>Price: {price}</h3>
//             <h3>Available Quantity: {quantity}</h3>
//             <button></button>
//           </card>
//           <card>
//             <h3>Image: {image}</h3>
//             <h3>Name: {name}</h3>
//             <h3>Description: {description}</h3>
//             <h3>Make: {make}</h3>
//             <h3>Model: {model}</h3>
//             <h3>Year: {year}</h3>
//             <h3>Color: {color}</h3>
//             <h3>Range: {range}</h3>
//             <h3>Trim: {trim}</h3>
//             <h3>extras: {extra}</h3>
//             <h3>Price: {price}</h3>
//             <h3>Available Quantity: {quantity}</h3>
//             <button></button>
//           </card>
//         </Container>
//         //side column
//         <aside>{bookMarks}</aside>
//         <footer>
//           <div>
//             <h1>Car info</h1>
//           </div>
//         </footer>
//       </Ads>
//     </div>
//   );
// }

// export default Ads;
