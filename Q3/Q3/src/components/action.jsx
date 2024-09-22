// redux/actions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE, SUBMIT_ANSWER, SKIP_QUESTION, END_QUIZ } from './actionTypes';

// Login action creator using reqres API
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: 'Invalid Credentials' });
    }
  };
};

// Fetch quiz questions
export const fetchQuiz = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.data });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_FAILURE, payload: 'Failed to fetch quiz questions' });
    }
  };
};

// Submit answer action
export const submitAnswer = (isCorrect) => {
  return { type: SUBMIT_ANSWER, payload: { isCorrect } };
};

// Skip question action
export const skipQuestion = () => {
  return { type: SKIP_QUESTION };
};

// End quiz action
export const endQuiz = () => {
  return { type: END_QUIZ };
};
