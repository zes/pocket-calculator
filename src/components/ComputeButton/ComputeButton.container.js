import { connect } from 'react-redux';
import { updateOperation } from '../../redux/actions';

import ComputeButton from './ComputeButton.component';

const mapDispatchToProps = {
  updateOperation,
};

export default connect(
  null,
  mapDispatchToProps,
)(ComputeButton);
