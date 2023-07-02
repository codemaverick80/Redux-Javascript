/* ACTION TYPES */
// const INCREMENT_CAKE = "INCREMENT_CAKE";
// const DECREMENT_CAKE = "DECREMENT_CAKE";

import { INCREMENT_CAKE, DECREMENT_CAKE } from "./cakeActionTypes";

/* INITIAL STATE */
const initialState = {
  numOfCakes: 10,
};

/* CAKE REDUCER */
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    case DECREMENT_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;

/* CAKE ACTIONS */

// const incrementCake = () => {
//   return {
//     type: INCREMENT_CAKE,
//   };
// };

// const decrementCake = () => {
//   return {
//     type: DECREMENT_CAKE,
//   };
// };

// export { incrementCake, decrementCake };
