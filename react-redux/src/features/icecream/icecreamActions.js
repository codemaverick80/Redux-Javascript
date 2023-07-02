import { INCREMENT_ICECREAM, DECREMENT_ICECREAM } from "./icecreamActionTypes";

const incrementIcecream = () => {
  return {
    type: INCREMENT_ICECREAM,
  };
};

const decrementIcecream = () => {
  return {
    type: DECREMENT_ICECREAM,
  };
};

export { incrementIcecream, decrementIcecream };
