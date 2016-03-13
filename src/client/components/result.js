import React, { Component } from 'react';
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

export default class Result extends Component {
  render() {
    return (
    	<div style ={styles.container}>
    		<h1 style = {styles.textContainer}>You are a hipster, but you already knew that</h1>
    		<div style={styles.textContainer}> Get out your fixed gear bike and bike down to Habit Coffee on 
    		552 Pandora and enjoy your favourite $5 coffee in rustic chinatown. After that, 
    		head on over to Ditch Records at 784 Fort Street and pick up
    		your favourite album on vinyl because everything sounds better on vinyl. 
    		If you're in need of some new threads, make your way down to Value Village
    		at 1810 Store Street and pick up some second hand plaid to compliment your ironic mustache.
    		End your night with your closest friends sipping on some craft beer at The Drake Eatery at
    		517 Pandora Aveune.</div>
    		<h1 style = {styles.textContainer}>Take it easy there hippie!</h1>
    		<div style={styles.textContainer}>Wake up and head over to the Bastion Square Market to pick up some locally
    		grown organic produce because buying from grocery stores supports coorporations.
    		After that, make your way to Goldstream Park and drink in the fresh air and beauty of nature
    		In the afternoon, check out Triple Spiral Metaphysical Gifts in Fantan Alley to browse their
    		collection of crystals and maybe even get your tarot cards read. End the day with dinner from Rebar
    		at 50 Bastion Square and enjoy some gourmet local vegetarian cuisine.</div>
    		<h1 style = {styles.textContainer}>You're a student</h1>
    		<div style={styles.textContainer}>So you're probably a student which means you probably spend most of your time on campus.
    		When you first get off the bus in the morning, head to the Munchie Bar in the sub to get the best and
    		cheapest coffee on campus ($1.25 with your own mug). Now you probably have to study. Check out the third
    		floor of the library for some silent studying. If you get hungry during your study sesh, pop down to the
    		Biblio Cafe for a quick snack or to Mystic Market or the Sub if you're looking for a more substaintial meal.
    		After a good few more hours of studying, jump on a bus home and watch some Netflix because you deserve it.</div>
    		<h1 style = {styles.textContainer}>Slow down old person, you don't want to break a hip!</h1>
    		<div style={styles.textContainer}>Wake up bright and early, make yourself a cup of coffe, and sit down in your easy chair to read the Times Colonist.
    		After you're done with the morning paper, head down to Beehive Wool Shop at 1700 Douglas Street to pick up some wool to use
    		to knit sweaters for your grandchildren. Once finished at the wool shop, head over to Oak Bay Lawn Bowling Club at 2190 Harlow
    		Drive for some friendly games of cribbage. After that, enjoy an earyl dinner at Whitespot at 1871 Fort Street and be home in
    		time to be in bed by 8.</div>
    	</div>
    );
  }
}