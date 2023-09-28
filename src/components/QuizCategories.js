import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuizCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch quiz categories from your API and set them in the state
    // Example API request:
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.error('Error fetching quiz categories:', error));
  }, []);

  return (
    <div>
      <h2>Select a Quiz Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/quiz-start/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizCategories;
