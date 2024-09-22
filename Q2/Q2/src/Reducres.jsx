// reducers.js
import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE, SET_SORT_ORDER } from './ActionTypes';

const initialState = {
  coffeeList: [],
  loading: false,
  error: null,
  sortOrder: '',
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffeeList: action.payload,
        loading: false,
      };
    case FETCH_COFFEE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};

export default coffeeReducer;
