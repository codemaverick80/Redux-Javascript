const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// required for making API call
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
/*
Async Actions
 - Fetch a list of users from an API end point and store it in the redux store.
    
    API: https://jsonplaceholder.typicode.com/
    
    libraries required for making API call
    axios:
      Requests to an API end point
    
    redux-thunk:
      it a middleware Define async action creators

    Installation: npm i axios redux-thunk

  ## State
  state = {
    loading:true, // display a loading spinner in your component
    date:[], //list of users. the initial state will be an empty array
    error:'' // display error to user
  }

  ## Actions
  we will need three actions with following type:
  FETCH_USERS_REQUESTED - Fetch list of users
  FETCH_USERS_SUCCEEDED - Fetch successfully
  FETCH_USERS_FAILED - Error when fetching the data

  ## Reducer

  if action type is:
  case: FETCH_USERS_REQUESTED
    loading:true
  
  case : FETCH_USERS_SUCCEEDED
    loading:false
    users:data(from API)

  case : FETCH_USERS_FAILED
    loading:false
    error:error( from API)
*/

//==== Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//==== constants for action type
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//==== Action Creator
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//==== Reducer function

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//==== create store

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//=== making API call and dispatch

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

//=== subscribe the store
store.subscribe(() => {
  console.log(store.getState());
});

//====== dispatch
store.dispatch(fetchUsers());
