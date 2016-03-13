import { connect } from 'react-redux';

import Quiz from './quiz';

const mapState = (state) => ({
  question: state.questions[0],
});

export default connect(mapState)(Quiz);
