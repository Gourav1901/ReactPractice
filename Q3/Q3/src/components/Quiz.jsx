// components/Quiz.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz, submitAnswer, skipQuestion, endQuiz } from '../redux/actions';
import { useHistory } from 'react-router-dom';

const Quiz = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { questions, currentQuestionIndex, score } = useSelector(state => state.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleAnswer = (isCorrect) => {
    dispatch(submitAnswer(isCorrect));
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(endQuiz());
      history.push('/result');
    }
  };

  const handleSkip = () => {
    dispatch(skipQuestion());
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(endQuiz());
      history.push('/result');
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{currentQuestion.question}</h3>
      {currentQuestion.options.map((option, idx) => (
        <button key={idx} onClick={() => handleAnswer(option.isCorrect)}>
          {option.answer}
        </button>
      ))}
      <button onClick={handleSkip}>Skip</button>
    </div>
  );
};

export default Quiz;
