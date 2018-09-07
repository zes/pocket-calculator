import { connect } from 'react-redux';
import { toggleDisplayList } from '../../../redux/actions';

import DisplayListButton from './DisplayListButton.component';

const mapDispatchToProps = {
  toggleDisplayList,
};

export default connect(
  null,
  mapDispatchToProps,
)(DisplayListButton);
