import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import NavigateBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import BodyTextStyle from './views/body-text-style';
import TitleTextStyle from './views/title-text-style';
import ContainerStyle from './views/container-style';

const horizPadding = 16;

const styles = {
  containerStyle: {
    paddingLeft: horizPadding,
    paddingRight: horizPadding,
  },
  textContainer: {
    textAlign: 'left',
    paddingBottom: 30,
  },
  buttonContainer: {
    textAlign: 'left',
  },
};

export default class Result extends Component {
  renderHipster() {
    return (
      <div style={styles.textContainer}>
        <TitleTextStyle light={false}>
          You are a hipster, but you already knew that
        </TitleTextStyle>
        <BodyTextStyle light={false}>
          Get out your fixed gear bike and bike down to Habit Coffee on 552
          Pandora and enjoy your favourite $5 coffee in rustic chinatown. After
          that, head on over to Ditch Records at 784 Fort Street and pick up
          your favourite album on vinyl because everything sounds better on
          vinyl. If you're in need of some new threads, make your way down to
          Value Village at 1810 Store Street and pick up some second hand plaid
          to compliment your ironic mustache. End your night with your closest
          friends sipping on some craft beer at The Drake Eatery at 517 Pandora
          Aveune.
        </BodyTextStyle>
      </div>
    );
  }

  renderHippie() {
    return (
      <div style={styles.textContainer}>
        <TitleTextStyle light={false}>
          Take it easy there hippie!
        </TitleTextStyle>
        <BodyTextStyle light={false}>
          Wake up and head over to the Bastion Square Market to pick up some
          locally grown organic produce because buying from grocery stores
          supports coorporations. After that, make your way to Goldstream Park
          and drink in the fresh air and beauty of nature In the afternoon,
          check out Triple Spiral Metaphysical Gifts in Fantan Alley to browse
          their collection of crystals and maybe even get your tarot cards read.
          End the day with dinner from Rebar at 50 Bastion Square and enjoy some
          gourmet local vegetarian cuisine.
        </BodyTextStyle>
      </div>
    );
  }

  renderStudent() {
    return (
      <div style={styles.textContainer}>
        <TitleTextStyle light={false}>
          You're a student
        </TitleTextStyle>
        <BodyTextStyle light={false}>
          So you're probably a student which means you probably spend most of
          your time on campus. When you first get off the bus in the morning,
          head to the Munchie Bar in the sub to get the best and cheapest coffee
          on campus ($1.25 with your own mug). Now you probably have to study.
          Check out the third floor of the library for some silent studying. If
          you get hungry during your study sesh, pop down to the Biblio Cafe for
          a quick snack or to Mystic Market or the Sub if you're looking for a
          more substaintial meal. After a good few more hours of studying, jump
          on a bus home and watch some Netflix because you deserve it.
        </BodyTextStyle>
      </div>
    );
  }

  renderOld() {
    return (
      <div style={styles.textContainer}>
        <TitleTextStyle light={false}>
          Slow down old person, you don't want to break a hip!
        </TitleTextStyle>
        <BodyTextStyle light={false}>
          Wake up bright and early, make yourself a cup of coffe, and sit down
          in your easy chair to read the Times Colonist. After you're done with
          the morning paper, head down to Beehive Wool Shop at 1700 Douglas
          Street to pick up some wool to use to knit sweaters for your
          grandchildren. Once finished at the wool shop, head over to Oak Bay
          Lawn Bowling Club at 2190 Harlow Drive for some friendly games of
          cribbage. After that, enjoy an earyl dinner at Whitespot at 1871 Fort
          Street and be home in time to be in bed by 8.
        </BodyTextStyle>
      </div>
    );
  }

  renderResult() {
    const { results } = this.props;

    const result = Object.keys(results).reduce((prev, current) => {
      if (results[prev] > results[current]) {
        return prev;
      }

      return current;
    });

    if (result === 'hipster') {
      return this.renderHipster();
    }

    if (result === 'student') {
      return this.renderStudent();
    }

    if (result === 'hippie') {
      return this.renderHippie();
    }

    if (result === 'old') {
      return this.renderOld();
    }

    return null;
  }

  render() {
    const back = () => browserHistory.push('/');
    return (
      <ContainerStyle style={styles.containerStyle}>

        <div style={styles.containerStyle}>
          {this.renderResult()}

          <div style={styles.buttonContainer}>
            <RaisedButton
              label="Back"
              labelPosition="after"
              icon={<NavigateBack />}
              onTouchTap={back}
            />
          </div>
        </div>
      </ContainerStyle>
    );
  }
}

Result.propTypes = {
  results: PropTypes.object.isRequired,
};
