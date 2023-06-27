const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// State : it is an object which contains initial state
const initialState = {
  numberOfCakes: 10,
};

//========== Action and Action Creator
// Action creator : an action creator simply creates an action.
// An action creator is a function that return an action

/*
  function actionCreator(){
    return {
      type:CAKE_ORDERED,
      payload:10
    }
  }
*/

function orderCake() {
  return {
    type: CAKE_ORDERED,
    //quantity: 1, //rename quantity to payload
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    //quantity: qty, // rename quantity to payload
    payload: qty,
  };
}

//============ Reducers
/*
  Reducer specify how the app's state changes in response to actions sent to the store.
  Reducer is the function that accepts state and action as arguments and returns the next state of the application.

  (previousState, action) => newState

*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //numberOfCakes: state.numberOfCakes -1
        ...state,
        numberOfCakes: state.numberOfCakes - 1, //proper way to update the state
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

//======= Redux store
/*
One store for the entire application
Responsibilities:
  Holds application state.
  Allows access to state via getState()
  Allows state to be updated via dispatch(action)
  Registers listeners via subscribe(listener)
*/

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);

//====== dispatch

// Can be use like this
// store.dispatch({
//   type: CAKE_ORDERED,
//   payload: 1,
// });

//====better approach
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

//==== another approach but not very useful
// const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
// actions.orderCake();
// actions.orderCake();
// actions.orderCake();
// actions.restockCake(3);

//
unsubscribe();
