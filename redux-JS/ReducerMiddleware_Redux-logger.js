const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const STREET_UPDATED = "STREET_UPDATED";

// ###### Initial state of the object
const initialState = {
  name: "Tony",
  address: {
    street: "123 main street",
    city: "New York",
    State: "NY",
  },
};

// ###### Action
function updateAddress(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

// ###### reducer function without Immer library
// const updateStreetReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case STREET_UPDATED:
//       return {
//         ...state,
//         address: {
//           ...state.address,
//           street: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// ###### Reducer function with Immer library

const updateStreetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // produce take two arguments.
      // first argument is current state.
      // second argument is function with receives a draft copy of the state
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

// ###### store

const store = redux.createStore(updateStreetReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// #### no need to use console.log, because react-logger middleware will handle it
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated Street", store.getState());
// });

store.dispatch(updateAddress("554 Telegraph Ave"));

unsubscribe();
