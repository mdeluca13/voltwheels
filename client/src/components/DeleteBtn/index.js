// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';
// import { REMOVE_CAR } from '../../utils/mutations';
// // import { QUERY_CARS, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';

// // The ...props means, spread all of the passed props onto this element
// // That way we don't have to define them all individually
// function DeleteBtn(props) {
  
//   const [removeCar, { error }] = useMutation(REMOVE_CAR, {
//     update(cache, { data: { removeCar } }) {
//       try {
//         cache.writeQuery({
//           query: QUERY_ME,
//           data: { me: removeCar },
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     },
//   });
  
//   const handleRemoveCar = async (car) => {
//     try {
//       const { data } = await removeCar({
//         variables: { car },
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
  
  
  
  
//   const deleteClick = async (event) => { 
//     event.preventDefault()
//     const [removeCar, { error }] = useMutation(REMOVE_CAR);
//     const { data } = await removeCar(event.target.car._id)
//   }

//   return (
//     <span {...props} role="button" tabIndex="0" className="delete-btn" onClick={deleteClick}>
//       Delete
//     </span>
//   );
// }

// export default DeleteBtn;
