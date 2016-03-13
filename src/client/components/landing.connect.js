import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Landing from './landing';

const mapState = () => ({});

const mapDispatch = { push };

export default connect(mapState, mapDispatch)(Landing);
