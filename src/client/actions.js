import { push } from 'react-router-redux';

export const SET_CURRENT_QUESTION_INDEX = 'SET_CURRENT_QUESTION_INDEX';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const RESET = 'RESET';

import { quizComplete, availableQuestions } from './selectors';

export const selectAnswer = (answerIndex) => (dispatch, getState) => {
  const { currentQuestionIndex } = getState();

  return dispatch({
    type: SELECT_ANSWER,
    payload: {
      questionIndex: currentQuestionIndex,
      answerIndex,
    },
  });
};

export const reset = () => ({
  type: RESET,
});

export const showResults = () => (dispatch) => {
  dispatch(reset());
  dispatch(push('results'));
};

export const setCurrentQuestionIndex = (index) => ({
  type: SET_CURRENT_QUESTION_INDEX,
  payload: index,
});

export const getNewQuestion = () => (dispatch, getState) => {
  const state = getState();

  if (quizComplete(state)) {
    return dispatch(showResults());
  }

  const _availableQuestions = availableQuestions(state);

  const index = Math.floor(Math.random() * _availableQuestions.length);

  return dispatch(setCurrentQuestionIndex(_availableQuestions[index]));
};

export const start = () => (dispatch) => {
  dispatch(reset());
  dispatch(getNewQuestion());
};
