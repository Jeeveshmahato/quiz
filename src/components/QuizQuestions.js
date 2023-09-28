import React, { useState, useEffect } from 'react';

function QuizQuestions({ match, history }) {
  const categoryId = match.params.categoryId;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Fetch quiz questions for the selected category and set them in the state
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`)
      .then((response) => response.json())
      .then((data) => setQuestions(data.results))
      .catch((error) => console.error('Error fetching quiz questions:', error));
  }, [categoryId]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    // Move to the next question or navigate to results when done
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // The user has completed the quiz; navigate to the results screen
      history.push(`/quiz-results/${categoryId}`);
    }
  };

  return (
    <div>
      <h2>Quiz Questions</h2>
      <p>Category: {categoryId}</p>
      {currentQuestion ? (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.question}</p>
          {/* Render answer choices here */}
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default QuizQuestions;
