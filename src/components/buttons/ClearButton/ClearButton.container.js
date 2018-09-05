import { connect } from 'react-redux';
import { clearLabels } from '../../../redux/actions';

import ClearButton from './ClearButton.component';

const mapDispatchToProps = {
  clearLabels,
};

export default connect(
  null,
  mapDispatchToProps,
)(ClearButton);
