import { connect } from 'react-redux';

import { start } from '../actions';

import Root from './root';

const mapState = () => ({});

const mapDispatch = { start };

export default connect(mapState, mapDispatch)(Root);
