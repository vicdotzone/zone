import { connect } from 'react-redux';

import { selectAnswer, getNewQuestion } from '../actions';

import { currentQuestionText, currentQuestionAnswers } from '../selectors';

import Question from './question';

const mapState = (state) => ({
  text: currentQuestionText(state),
  answers: currentQuestionAnswers(state),
});

const mapDispatch = (dispatch) => ({
  onSelectAnswer: (answerIndex) => {
    dispatch(selectAnswer(answerIndex));
    dispatch(getNewQuestion());
  },
});

export default connect(mapState, mapDispatch)(Question);
