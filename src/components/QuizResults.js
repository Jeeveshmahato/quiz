import React, { useState, useEffect } from 'react';

function QuizResults({ match }) {
  const categoryId = match.params.categoryId;
  const [userResponses, setUserResponses] = useState([]); // Replace with actual user responses
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch quiz questions for the selected category and set them in the state
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results))
      .catch((error) => console.error('Error fetching quiz questions:', error));
  }, [categoryId]);

  useEffect(() => {
    // Calculate the user's quiz score based on their responses and correct answers
    if (questions.length > 0 && userResponses.length === questions.length) {
      let userScore = 0;

      for (let i = 0; i < questions.length; i++) {
        const userAnswer = userResponses[i];
        const correctAnswer = questions[i].correct_answer;

        if (userAnswer === correctAnswer) {
          // Assign a score for correct answers (e.g., +1 point per correct answer)
          userScore++;
        }
      }

      // Set the calculated user score in the state
      setScore(userScore);
    }
  }, [userResponses, questions]);

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Category: {categoryId}</p>
      <p>Your Score: {score}</p>
      {/* Additional result details or options can be added here */}
    </div>
  );
}

export default QuizResults;
