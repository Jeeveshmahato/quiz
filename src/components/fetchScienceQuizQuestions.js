import axios from 'axios';

const fetchScienceQuizQuestions = async () => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'
    );

    const { data } = response;

    if (data.response_code === 0) {
      // Questions were successfully fetched.
      const questions = data.results;
      return questions;
    } else {
      // Handle API error.
      throw new Error('API Error');
    }
  } catch (error) {
    // Handle any network or API errors.
    console.error('Error fetching science quiz questions:', error);
    throw error;
  }
};

export default fetchScienceQuizQuestions;
