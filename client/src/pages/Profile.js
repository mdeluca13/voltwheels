import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import ProfileList from '../components/ProfileList';
import CarList from '../components/CarList';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

// queries the user and displays the cars they have for sale
const Profile = () => {

  const [user, setUser] = useState(() => {
    const userLoggedIn = localStorage.getItem('id_token');
    if (userLoggedIn) {
        const userData = Auth.getProfile(userLoggedIn)
        return userData.data
    }
    return null
  });
  const {loading, data} = useQuery(QUERY_ME, {
    variables: {username: user.username}
  })

  const userCarInfo = data?.me || data?.user || {};
  
  const userLoggedIn = localStorage.getItem('id_token');

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
  if (!userCarInfo) {
    return <h3 className=''>🚗 You have no cars for sale yet. You can add a car for sale on the "Add Car for Sale" page. 🚗 </h3>;
  }
  if (userLoggedIn && Auth.getProfile().data.username === user.username) {
    console.log('working auth')
    return (

      <div>
        <div>
          <h2 className="car-list-title">
            {userCarInfo.username}'s Cars for Sale
          </h2>
  
          <div className="car-list-container">
            <ProfileList 
              cars={userCarInfo.cars}
              title={`${userCarInfo.username}'s ads`}
              showTitle={false}
              showUsername={false}
            />
          </div>
          <div className="car-list-container">
            <CarList
              cars={userCarInfo.bookmarkedCars}
              title={`${userCarInfo.username}'s bookmarked cars`}
              showTitle={false}
              showUsername={false}
            />
          </div>
          <Cart />
        </div>
        
      </div>
      
    );
  }

  

  

  
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
