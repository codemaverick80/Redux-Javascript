const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCK = "ICE_CREAM_RESTOCK";

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCream: 15,
};

function orderIceCream() {
  return {
    type: ICE_CREAM_ORDERED,
    payload: 1,
  };
}
function restockIceCream(qty = 1) {
  return {
    type: ICE_CREAM_RESTOCK,
    payload: qty,
  };
}

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    case ICE_CREAM_RESTOCK:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
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

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});

// const unsubscribe = store.subscribe(() => {
//   console.log("updated state ", store.getState().cake);
//   console.log("updated state ", store.getState().iceCream);
// });

//====== dispatch

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

store.dispatch(orderIceCream());
store.dispatch(restockIceCream(10));

//
unsubscribe();
