import { connect } from 'react-redux';

import ResultLabel from './ResultLabel.component';

const mapStateToProps = state => ({
  result: state.result,
});

export default connect(mapStateToProps)(ResultLabel);
