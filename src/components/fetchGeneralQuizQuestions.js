// fetchGeneralQuizQuestions.js
import axios from 'axios';

const fetchGeneralQuizQuestions = async () => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&type=multiple'
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
    console.error('Error fetching general quiz questions:', error);
    throw error;
  }
};

export default fetchGeneralQuizQuestions;
