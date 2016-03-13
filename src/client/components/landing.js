import React, { Component } from 'react';

import ContainerStyle from './views/container-style';
import BodyTextStyle from './views/body-text-style';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import { amber100, amber800, cyan700, cyan300 } from 'material-ui/lib/styles/colors';

const horizPadding = 16;
const vertPadding = 50;

const styles = {
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
       <ContainerStyle>

          <div style={styles.textContainer}>
            <h1 style={styles.titleTextStyle}>The Victorian<br />stereotype quiz!</h1>
            <BodyTextStyle light= {false}>Take the test and find out which
            Victorian stereotype you are, old person? hipster? spandex wearing cyclist?
            <br />¯\_(ツ)_/¯</BodyTextStyle></div>

        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Find out now!"
            primary
            onTouchTap={this.handleTouchTap}
          />
        </div>

        <Paper zDepth={1}>
          <div style={styles.aboutContainer}>
            <BodyTextStyle light= {false}> Built by:
              <br />
              <br /><a style={styles.linkStyle} href="https://github.com/lkrienke">Laurel</a>
              <br /><a style={styles.linkStyle} href="https://github.com/nealgranger">Neal</a>
              <br /><a style={styles.linkStyle} href="https://github.com/derekcsm">Derek</a>
              <br /><a style={styles.linkStyle} href="https://github.com/lindenqu">Linden</a>
            </BodyTextStyle>
          </div>
        </Paper>
        </ContainerStyle>
       </div>
      </MuiThemeProvider>
    );
  }
}
