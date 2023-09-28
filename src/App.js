import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import QuizCategories from './QuizCategories';
import QuizStart from './QuizStart';
import QuizQuestions from './QuizQuestions';
import QuizResults from './QuizResults';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz-categories" component={QuizCategories} />
          <Route path="/quiz-start/:categoryId" component={QuizStart} />
          <Route path="/quiz-questions/:categoryId" component={QuizQuestions} />
          <Route path="/quiz-results/:categoryId" component={QuizResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
