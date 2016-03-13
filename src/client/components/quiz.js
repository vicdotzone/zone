import React, { Component, PropTypes } from 'react';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import { amber800, cyan700 } from 'material-ui/lib/styles/colors';

import Question from './question.connect';

const styles = {
  containerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
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
  }

  render() {
    const { currentQuestion, currentQuestionIndex } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.containerStyle}>
          { currentQuestion && <Question key={currentQuestionIndex} /> }
        </div>
      </MuiThemeProvider>
    );
  }
}

Quiz.propTypes = {
  currentQuestion: PropTypes.object,
  currentQuestionIndex: PropTypes.number,
};
