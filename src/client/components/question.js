import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/lib/paper';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import RaisedButton from 'material-ui/lib/raised-button';
import NavigateNext from 'material-ui/lib/svg-icons/navigation/arrow-forward';

import BodyTextStyle from './views/body-text-style';
import ContainerStyle from './views/container-style';

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
  button: {
    margin: 14,
    textAlign: 'center',
  },
};


export default class Question extends Component {
  constructor() {
    super();
    this.state = { selectedAnswerIndex: null };
  }

  render() {
    const { selectedAnswerIndex } = this.state;
    const { text, answers, onSelectAnswer } = this.props;

    const handleChange = (event) => {
      this.setState({ selectedAnswerIndex: event.target.value });
    };

    const handleNextTap = () => {
      if (selectedAnswerIndex) {
        onSelectAnswer(selectedAnswerIndex);
      }
    };

    return (
      <ContainerStyle>
        <Paper zDepth={2} style={styles.cardStyle}>
          <BodyTextStyle light style={styles.questionTextStyle}>
            {text}
          </BodyTextStyle>
          <div style={styles.spacer} />
          <RadioButtonGroup name="quizRadioGroup" onChange={handleChange}>
            {answers.map((answer, i) =>
              <RadioButton
                key={i}
                value={`${i}`}
                label={answer.text}
                style={styles.radioButton}
              />
            )}
          </RadioButtonGroup>
        </Paper>

        <RaisedButton
          disabled={selectedAnswerIndex === null}
          label="Next"
          labelPosition="before"
          icon={<NavigateNext />}
          style={styles.button}
          onTouchTap={handleNextTap}
        />
      </ContainerStyle>
    );
  }
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};
