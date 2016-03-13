import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/lib/paper';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import BodyTextStyle from './views/body-text-style';

const horizPadding = 16;

const styles = {
  cardStyle: {
    textAlign: 'left',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
    paddingTop: 16,
    paddingBottom: 16,
  },
  questionTextStyle: {
    marginBottom: 16,
  },
  spacer: {
    height: 16,
  },
  radioButton: {
    marginBottom: 16,
  },
};


export default class Question extends Component {
  render() {
    const { text, answers, onSelectAnswer } = this.props;
    const handleChange = (event) => {
      onSelectAnswer(answers[event.target.value]);
    };

    return (
      <Paper zDepth={2} style={styles.cardStyle}>
        <BodyTextStyle light style={styles.questionTextStyle}>
          {text}
        </BodyTextStyle>
        <div style={styles.spacer} />
        <RadioButtonGroup name="quizRadioGroup" onChange={handleChange}>
          {answers.map((answer, i) =>
            <RadioButton
              value={i}
              label={answer.text}
              style={styles.radioButton}
            />
          )}
        </RadioButtonGroup>
      </Paper>
    );
  }
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};
