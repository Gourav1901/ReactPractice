// store.js
import { createStore, applyMiddleware } from 'redux';

// Initial state
const initialState = {
  todos: [],
};

// Action types
const ADD_TODO = 'ADD_TODO';

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

// Custom Middleware for logging action types
const actionTypeLogger = (storeAPI) => (next) => (action) => {
  console.log('Dispatching action type:', action.type);
  return next(action); // Move to the next middleware or reducer
};

// Custom Middleware for logging payloads
const payloadLogger = (storeAPI) => (next) => (action) => {
  if (action.payload) {
    console.log('Action payload:', action.payload);
  }
  return next(action); // Move to the next middleware or reducer
};

// Apply middleware to the store
const store = createStore(
  todoReducer,
  applyMiddleware(actionTypeLogger, payloadLogger)
);

export default store;
