// redux/quizReducer.js
import { FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE, SUBMIT_ANSWER, SKIP_QUESTION, END_QUIZ } from './actionTypes';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  error: null,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return { ...state, questions: action.payload, error: null };
    case FETCH_QUIZ_FAILURE:
      return { ...state, error: action.payload };
    case SUBMIT_ANSWER:
      return {
        ...state,
        score: state.score + (action.payload.isCorrect ? 1 : 0),
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case SKIP_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case END_QUIZ:
      return { ...state, currentQuestionIndex: 0 };
    default:
      return state;
  }
};

export default quizReducer;
