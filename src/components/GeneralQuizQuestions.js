import React, { useEffect, useState } from 'react';
import fetchGeneralQuizQuestions from './fetchGeneralQuizQuestions'; // Import the function you created

function GeneralQuizQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGeneralQuizQuestions()
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching general quiz questions:', error);
      });
  }, []);

  return (
    <div>
      <h2>General Quiz</h2>
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

export default GeneralQuizQuestions;
