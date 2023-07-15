// import { useReducer } from "react";
// import {
//   UPDATE_CAR,
//   ADD_TO_ORDER,
//   UPDATE_ORDER_QUANTITY,
//   REMOVE_FROM_ORDER,
//   ADD_MULTIPLE_TO_ORDER,
//   CLEAR_ORDER,
//   TOGGLE_ORDER
// } from "./actions";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_CAR:
//       return {
//         ...state,
//         cars: [...action.car],
//       };

//     case ADD_TO_ORDER:
//       return {
//         ...state,
//         orderOpen: true,
//         order: [...state.order, action.car],
//       };

//     case ADD_MULTIPLE_TO_ORDER:
//       return {
//         ...state,
//         order: [...state.order, ...action.cars],
//       };

//     case UPDATE_ORDER_QUANTITY:
//       return {
//         ...state,
//         orderOpen: true,
//         order: state.order.map(car => {
//           if (action._id === car._id) {
//             car.purchaseQuantity = action.purchaseQuantity
//           }
//           return car
//         })
//       };

//     case REMOVE_FROM_ORDER:
//       let newState = state.order.filter(car => {
//         return car._id !== action._id;
//       });

//       return {
//         ...state,
//         orderOpen: newState.length > 0,
//         order: newState
//       };

//     case CLEAR_ORDER:
//       return {
//         ...state,
//         orderOpen: false,
//         order: []
//       };

//     case TOGGLE_ORDER:
//       return {
//         ...state,
//         orderOpen: !state.orderOpen
//       };
//   }
// };

// export function useCarReducer(initialState) {
//   return useReducer(reducer, initialState)
// }
