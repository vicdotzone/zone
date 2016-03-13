const MAX_QUESTIONS = 13;

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

export const results = (state) => {
  const _answeredQuestions = answeredQuestions(state);
  const _questions = questions(state);

  const groups = _answeredQuestions.map(([questionIndex, answerIndex]) =>
    _questions[questionIndex].answers[answerIndex].group
  );

  const counts = groups.reduce((reduced, group) => {
    const count = reduced[group] || 0;
    return Object.assign(reduced, { [group]: count + 1 });
  }, {});

  return counts;
};
