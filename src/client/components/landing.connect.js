import { connect } from 'react-redux';

import { start } from '../actions';

import Landing from './landing';

const mapState = () => ({});

const mapDispatch = { start };

export default connect(mapState, mapDispatch)(Landing);
