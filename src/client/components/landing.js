import React, { Component } from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: cyan300,
  },
  titleTextStyle: {
    color: '#ffffff',
  },
  captionTextStyle: {
    lineHeight: '160%',
    color: '#ffffff',
    opacity: 0.9,
  },
  bodyStyle: {
    lineHeight: '160%',
    color: '#ffffff',
    opacity: 0.9,
  },
  linkStyle: {
    color: amber100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber800,
  },
});

export default class App extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = cyan700;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
       <div style={styles.container}>

          <div style={styles.textContainer}>
            <h1 style={styles.titleTextStyle}>The Victorian<br />stereotype quiz!</h1>
            <div style={styles.captionTextStyle}>Take the test and find out which
            Victorian stereotype you are, old person? hipster? spandex wearing cyclist?
            <br />¯\_(ツ)_/¯</div></div>

        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Find out now!"
            primary
            onTouchTap={this.handleTouchTap}
          />
        </div>

        <Card>
          <div style={styles.aboutContainer}>
            <div style={styles.bodyStyle}> Built by:
              <br />
              <br /><a style={styles.linkStyle} href="https://github.com/lkrienke">Laurel</a>
              <br /><a style={styles.linkStyle} href="https://github.com/nealgranger">Neal</a>
              <br /><a style={styles.linkStyle} href="https://github.com/derekcsm">Derek</a>
              <br /><a style={styles.linkStyle} href="https://github.com/lindenqu">Linden</a>
            </div>
          </div>
        </Card>
        </div>
       </div>
      </MuiThemeProvider>
    );
  }
}
