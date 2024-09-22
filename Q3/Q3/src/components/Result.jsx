// components/Result.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const { score, questions } = useSelector(state => state.quiz);

  return (
    <div>
      <h2>Your Score: {score} / {questions.length}</h2>
    </div>
  );
};

export default Result;
