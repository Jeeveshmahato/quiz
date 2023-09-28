import React, { useEffect, useState } from 'react';
import fetchHistoryQuizQuestions from './fetchHistoryQuizQuestions'; // Import the function you created

function HistoryQuizQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHistoryQuizQuestions()
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching history quiz questions:', error);
      });
  }, []);

  return (
    <div>
      <h2>History Quiz</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryQuizQuestions;
