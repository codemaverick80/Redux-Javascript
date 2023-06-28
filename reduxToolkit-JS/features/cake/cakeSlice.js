const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCake: 10,
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
      state.numOfCake--;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
