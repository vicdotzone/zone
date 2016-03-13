import React, { Component } from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import { orange500 } from 'material-ui/lib/styles/colors';

const horizPadding = 10;
const maxPageWidth = 400;

const styles = {
  container: {
    width: '100%',
    textAlign: 'center',
    maxWidth: maxPageWidth,
    margin: 'auto',
    paddingTop: 50,
    paddingBottom: 50,
  },
  textContainer: {
    textAlign: 'center',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
    paddingBottom: 50,
  },
  buttonContainer: {
    textAlign: 'center',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500,
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <div style={styles.textContainer}>
            <h1>Victoria<br />Starter Kit</h1>
            <div>What kind of Victorian are you?<br />¯\_(ツ)_/¯</div>
          </div>

          <div style={styles.buttonContainer}>
            <RaisedButton
              primary
              label="Find out"
              onTouchTap={this.handleTouchTap}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
