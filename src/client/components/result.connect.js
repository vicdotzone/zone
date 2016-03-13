import { connect } from 'react-redux';

import { results } from '../selectors';

import Result from './result';

const mapState = (state) => ({
  results: results(state),
});

export default connect(mapState)(Result);
