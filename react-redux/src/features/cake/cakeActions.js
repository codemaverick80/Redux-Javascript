import { INCREMENT_CAKE, DECREMENT_CAKE } from "./cakeActionTypes";

const incrementCake = () => {
  return {
    type: INCREMENT_CAKE,
  };
};

const decrementCake = () => {
  return {
    type: DECREMENT_CAKE,
  };
};

export { incrementCake, decrementCake };
