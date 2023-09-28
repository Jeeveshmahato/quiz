import React, { useEffect, useState } from 'react';
import fetchScienceQuizQuestions from './fetchScienceQuizQuestions'; // Import the function you created

function ScienceQuizQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchScienceQuizQuestions()
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching science quiz questions:', error);
      });
  }, []);

  return (
    <div>
      <h2>Science Quiz</h2>
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

export default ScienceQuizQuestions;
