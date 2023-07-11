import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  ADD_TO_ORDER,
  UPDATE_ORDER_QUANTITY,
  REMOVE_FROM_ORDER,
  ADD_MULTIPLE_TO_ORDER,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_ORDER,
  TOGGLE_ORDER
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_ORDER:
      return {
        ...state,
        orderOpen: true,
        order: [...state.order, action.product],
      };

    case ADD_MULTIPLE_TO_ORDER:
      return {
        ...state,
        order: [...state.order, ...action.products],
      };

    case UPDATE_ORDER_QUANTITY:
      return {
        ...state,
        orderOpen: true,
        order: state.order.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_ORDER:
      let newState = state.order.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        orderOpen: newState.length > 0,
        order: newState
      };

    case CLEAR_ORDER:
      return {
        ...state,
        orderOpen: false,
        order: []
      };

    case TOGGLE_ORDER:
      return {
        ...state,
        orderOpen: !state.orderOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
