import { useSelector, useDispatch } from "react-redux";

import { incrementIcecream, decrementIcecream } from "./icecreamActions";

const IcecreamView = () => {
  //IF single reducer
  //const state = useSelector((state) => state);

  // For multiple reducer scenario
  const state = useSelector((state) => state.icecreamReducer);
  // console.log(state.cakeReducer.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Icecream {state.numOfIcecream}</h2>
      <button onClick={() => dispatch(incrementIcecream())}>
        Increment Cake
      </button>

      <button onClick={() => dispatch(decrementIcecream())}>
        Decrement Cake
      </button>
    </div>
  );
};

export default IcecreamView;
