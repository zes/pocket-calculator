import { connect } from 'react-redux';

import OperationsList from './OperationsList.component';

const mapStateToProps = state => ({
  displayList: state.displayList,
  operationsList: state.operationsList,
});

export default connect(mapStateToProps)(OperationsList);
