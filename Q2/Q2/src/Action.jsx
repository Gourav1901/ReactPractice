// actions.js
import axios from 'axios';
import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE, SET_SORT_ORDER } from './ActionTypes';

// API endpoint
const API_URL = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee';

// Fetch coffee action creator (asynchronous)
export const fetchCoffee = (sortOrder = '') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}?sort=${sortOrder}`);
      dispatch({
        type: FETCH_COFFEE_SUCCESS,
        payload: response.data.data, // assuming data comes under response.data.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_COFFEE_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Set sorting order action creator
export const setSortOrder = (sortOrder) => {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder,
  };
};
