import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SET_CURRENT_QUESTION_INDEX, SELECT_ANSWER } from './actions';

export default combineReducers({
  routing: routerReducer,
  questions: (state = []) => state,
  currentQuestionIndex: (state = null, action) => {
    if (action.type === SET_CURRENT_QUESTION_INDEX) {
      return action.payload;
    }
    return state;
  },
  answeredQuestions(state = [], action) {
    if (action.type === SELECT_ANSWER) {
      const { questionIndex, answerIndex } = action.payload;
      return [
        ...state,
        [questionIndex, answerIndex],
      ];
    }
    return state;
  },
});
