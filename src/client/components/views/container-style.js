import React, { Component, PropTypes } from 'react';

const vertPadding = 50;
const maxPageWidth = 400;

export default class ContainerStyle extends Component {
  render() {
    const { children } = this.props;

    const style = {
      width: '100%',
      textAlign: 'center',
      maxWidth: maxPageWidth,
      margin: 'auto',
      paddingTop: vertPadding,
      paddingBottom: vertPadding,
    };

    return <div style={style}>{children}</div>;
  }
}

ContainerStyle.propTypes = {
  children: PropTypes.node,
};
