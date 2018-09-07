import { connect } from 'react-redux';
import { getResult } from '../../../redux/actions';

import ResultButton from './ResultButton.component';

const mapDispatchToProps = {
  getResult,
};

export default connect(
  null,
  mapDispatchToProps,
)(ResultButton);
