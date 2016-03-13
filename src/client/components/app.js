/* eslint-disable */
import React, { Component } from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import {amber500} from 'material-ui/lib/styles/colors';

var horizPadding = 16;
var vertPadding = 50;
var maxPageWidth = 400;

const styles = {
  container: {
    width: '100%',
    textAlign: 'center',
    maxWidth: maxPageWidth,
    margin: 'auto',
    paddingTop: vertPadding,
    paddingBottom: vertPadding,
  },
  textContainer: {
    textAlign: 'left',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
    paddingBottom: vertPadding,
  },
  buttonContainer: {
    textAlign: 'left',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
    paddingBottom: vertPadding,
  },
  aboutContainer: {
    textAlign: 'left',
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
    paddingTop: vertPadding,
    paddingBottom: vertPadding,
    backgroundColor: "#f1f1f1"
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber500,
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
       <div style={styles.container}>

          <div style={styles.textContainer}>
            <h1>Victoria<br/>Starter Kit</h1>
            <div>Take the test and find out what kind of
                 Victorian you are<br/>¯\_(ツ)_/¯</div>
          </div>

        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Find out"
            primary
            onTouchTap={this.handleTouchTap}/>
        </div>

        <div style={styles.aboutContainer}>
          <div> Built by<br/> Laurel, Neal, Derek, and Linden </div>
        </div>

       </div>
      </MuiThemeProvider>
    );
  }
}
