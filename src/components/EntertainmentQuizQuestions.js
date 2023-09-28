import React, { useEffect, useState } from 'react';
import fetchEntertainmentQuizQuestions from './fetchEntertainmentQuizQuestions'; // Import the function you created

function EntertainmentQuizQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEntertainmentQuizQuestions()
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching entertainment quiz questions:', error);
      });
  }, []);

  return (
    <div>
      <h2>Entertainment Quiz</h2>
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

export default EntertainmentQuizQuestions;
