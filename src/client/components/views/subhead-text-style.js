import React, { Component, PropTypes } from 'react';


const getTextColor = (light) => {
  if (light) {
    return '#000000';
  }
  return '#ffffff';
};

export default class SubheadTextStyle extends Component {
  render() {
    const { children, light } = this.props;

    const style = {
      lineHeight: '1.2',
      color: getTextColor(light),
    };

    return <h3 style={style}>{children}</h3>;
  }
}

SubheadTextStyle.propTypes = {
  children: PropTypes.node,
  light: PropTypes.bool,
};

SubheadTextStyle.defaultProps = {
  light: false,
};
