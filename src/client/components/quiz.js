import React, { Component } from 'react';

import ContainerStyle from './views/container-style';
import BodyTextStyle from './views/body-text-style';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import Paper from 'material-ui/lib/paper';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import { amber800, cyan700 } from 'material-ui/lib/styles/colors';

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
          <ContainerStyle>
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
          </ContainerStyle>
        </div>
      </MuiThemeProvider>
    );
  }
}
