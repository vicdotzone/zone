import React, { Component, PropTypes } from 'react';


const getTextColor = (light) => {
  if (light) {
    return '#000000';
  }
  return '#ffffff';
};

export default class BodyTextStyle extends Component {
  render() {
    const { children, light } = this.props;

    const style = {
      lineHeight: '1.6',
      color: getTextColor(light),
      opacity: 0.9,
    };

    return <div style={style}>{children}</div>;
  }
}

BodyTextStyle.propTypes = {
  children: PropTypes.node,
  light: PropTypes.bool,
};

BodyTextStyle.defaultProps = {
  light: false,
};
