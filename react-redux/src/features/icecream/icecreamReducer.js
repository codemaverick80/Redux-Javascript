/* ACTION TYPES */
// const INCREMENT_ICECREAM = "INCREMENT_ICECREAM";
// const DECREMENT_ICECREAM = "DECREMENT_ICECREAM";

import { INCREMENT_ICECREAM, DECREMENT_ICECREAM } from "./icecreamActionTypes";

/* INITIAL STATE */
const initialState = {
  numOfIcecream: 15,
};

/* CAKE REDUCER */
const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + 1,
      };
    case DECREMENT_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;

/* CAKE ACTIONS */

// const incrementIcecream = () => {
//   return {
//     type: INCREMENT_ICECREAM,
//   };
// };

// const decrementIcecream = () => {
//   return {
//     type: DECREMENT_ICECREAM,
//   };
// };

// export { incrementIcecream, decrementIcecream };
