import { useSelector, useDispatch } from "react-redux";

import { incrementCake, decrementCake } from "./cakeActions";

const CakeView = () => {
  const state = useSelector((state) => state.cakeReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes {state.numOfCakes}</h2>
      <button onClick={() => dispatch(incrementCake())}>Increment Cake</button>

      <button onClick={() => dispatch(decrementCake())}>Decrement Cake</button>
    </div>
  );
};

export default CakeView;
