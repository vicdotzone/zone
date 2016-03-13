import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import ContainerStyle from './views/container-style';
import BodyTextStyle from './views/body-text-style';
import TitleTextStyle from './views/title-text-style';
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
  linkStyle: {
    color: amber100,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber800,
  },
});

export default class Landing extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = cyan700;
  }

  render() {
    const { start } = this.props;

    const garbageZone = () => browserHistory.push('trashmap');

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{ padding: '0 16px' }}>
       <ContainerStyle>

          <div style={styles.textContainer}>
            <TitleTextStyle>The Victorian<br />stereotype quiz!</TitleTextStyle>
            <BodyTextStyle light= {false}>Take the test and find out which
            Victorian stereotype you are, old person? hipster? spandex wearing cyclist?
            <br />¯\_(ツ)_/¯</BodyTextStyle></div>
        <div style={styles.buttonContainer}>
          <RaisedButton
            label="Find out now!"
            primary
            onTouchTap={start}
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
              <br />
              <br />
              <img src="/static/zone.gif"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                }}
              />

            </BodyTextStyle>
          </div>
        </Paper>
        <BodyTextStyle light= {false}>
          <div
            onClick={garbageZone}
            style={{
              fontSize: 16,
              marginTop: 20,
              cursor: 'pointer',
            }}
          >
            ENTER THE <span style={{ fontSize: 40 }}>🗑</span> GARBAGE ZONE
          </div>
        </BodyTextStyle>
        </ContainerStyle>
       </div>
      </MuiThemeProvider>
    );
  }
}

Landing.propTypes = {
  start: PropTypes.func.isRequired,
};
