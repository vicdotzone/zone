const MAX_QUESTIONS = 10;

export const currentQuestionIndex = (state) => state.currentQuestionIndex;

export const questions = (state) => state.questions.map((question, index) =>
  Object.assign({}, { index }, question)
);

export const currentQuestion = (state) =>
  questions(state)[currentQuestionIndex(state)];

export const currentQuestionText = (state) => currentQuestion(state).text;

export const currentQuestionAnswers = (state) => currentQuestion(state).answers;

export const answeredQuestions = (state) => state.answeredQuestions;

export const quizComplete = (state) =>
  answeredQuestions(state).length >=
    Math.min(MAX_QUESTIONS, questions(state).length);

export const availableQuestions = (state) => {
  const _answeredQuestions = answeredQuestions(state);

  return questions(state).filter((question, index) =>
    !_answeredQuestions.find(([answeredQuestionIndex]) =>
      index === answeredQuestionIndex
    )
  ).map(({ index }) => index);
};
