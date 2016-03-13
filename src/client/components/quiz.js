import React, { Component } from 'react';

import BodyTextStyle from './views/body-text-style';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import Paper from 'material-ui/lib/paper';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import { amber100, amber800, cyan700, cyan300 } from 'material-ui/lib/styles/colors';

const horizPadding = 16;
const vertPadding = 50;
const maxPageWidth = 400;

const styles = {
  container: {
    width: '100%',
    textAlign: 'center',
    maxWidth: maxPageWidth,
    margin: 'auto',
    paddingTop: vertPadding,
    paddingBottom: vertPadding,
  },
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

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber800,
  },
});

export default class Quiz extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = cyan700;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div style={styles.container}>
            <Paper zDepth={2} style={styles.cardStyle}>
                <BodyTextStyle light style={styles.questionTextStyle}>
                This is a question?</BodyTextStyle>
                <div style={styles.spacer} />
                <RadioButtonGroup name="quizRadioGroup">
                      <RadioButton
                        value="light"
                        label="das it"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="not_light"
                        label="Selected by default"
                        style={styles.radioButton}
                      />
                      <RadioButton
                        value="ludicrous"
                        label="aww yeah"
                        style={styles.radioButton}
                      />
                </RadioButtonGroup>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
