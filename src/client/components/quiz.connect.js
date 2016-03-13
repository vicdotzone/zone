import { connect } from 'react-redux';

import { currentQuestion, currentQuestionIndex } from '../selectors';

import Root from './quiz';

const mapState = (state) => ({
  currentQuestion: currentQuestion(state),
  currentQuestionIndex: currentQuestionIndex(state),
});

export default connect(mapState)(Root);
