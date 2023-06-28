import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  // A name, used in action types
  name: "cake",
  // The initial state for the reducer
  initialState: initialState,
  // A "builder callback" function used to add more reducers, or
  // an additional object of "case reducers", where the keys should be other action type
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
