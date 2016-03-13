import React, { Component, PropTypes } from 'react';

import ContainerStyle from './views/container-style';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import { amber800, cyan700 } from 'material-ui/lib/styles/colors';

import RaisedButton from 'material-ui/lib/raised-button';
import NavigateNext from 'material-ui/lib/svg-icons/navigation/arrow-forward';

import Question from './question';

const styles = {
  button: {
    margin: 14,
    textAlign: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber800,
  },
});

export default class Quiz extends Component {
  constructor() {
    super();
    document.body.style.backgroundColor = cyan700;
    this.state = { selectedAnswer: null };
  }

  render() {
    const { question: { text, answers }, onSelectAnswer } = this.props;
    const { selectedAnswer } = this.state;

    const handleSelectAnswer = (answer) => {
      this.setState({ selectedAnswer: answer });
    };

    const handleNextTap = () => {
      if (selectedAnswer) {
        onSelectAnswer(onSelectAnswer);
      }
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <ContainerStyle>
            <Question
              text={text}
              answers={answers}
              onSelectAnswer={handleSelectAnswer}
            />

            <RaisedButton
              disabled={!selectedAnswer}
              label="Next"
              labelPosition="before"
              icon={<NavigateNext />}
              style={styles.button}
              onTouchTap={handleNextTap}
            />
          </ContainerStyle>
        </div>
      </MuiThemeProvider>
    );
  }
}

Quiz.propTypes = {
  question: PropTypes.object.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};

Quiz.defaultProps = {
  question: {
    text: 'This is the question',
    answers: [
      {
        text: 'Answer 1 text',
        group: 'dirty_hipster',
      },
      {
        text: 'Answer 2 text',
        group: 'clean_hipster',
      },
      {
        text: 'Answer 3 text',
        group: 'old_person',
      },
    ],
  },
  onSelectAnswer: (answer) => {
    console.log('select', answer);
  },
};
