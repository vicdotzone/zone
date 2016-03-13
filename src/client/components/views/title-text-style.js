import React, { Component, PropTypes } from 'react';


const getTextColor = (light) => {
  if (light) {
    return '#000000';
  }
  return '#ffffff';
};

export default class TitleTextStyle extends Component {
  render() {
    const { children, light } = this.props;

    const style = {
      lineHeight: '1.2',
      color: getTextColor(light),
    };

    return <h1 style={style}>{children}</h1>;
  }
}

TitleTextStyle.propTypes = {
  children: PropTypes.node,
  light: PropTypes.bool,
};

TitleTextStyle.defaultProps = {
  light: false,
};
