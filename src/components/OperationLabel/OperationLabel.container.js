import { connect } from 'react-redux';

import OperationLabel from './OperationLabel.component';

const mapStateToProps = state => ({
  operation: state.operation,
});

export default connect(mapStateToProps)(OperationLabel);
