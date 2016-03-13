import { connect } from 'react-redux';

import { onEnterQuiz, onEnterResult } from '../actions';

import Root from './root';

const mapState = () => ({});

const mapDispatch = { onEnterQuiz, onEnterResult };

export default connect(mapState, mapDispatch)(Root);
