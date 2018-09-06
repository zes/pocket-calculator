import { connect } from 'react-redux';

import PocketCalculator from './PocketCalculator.component';
import { monkeyBusiness, } from '../../redux/actions';

const mapStateToProps = state => ({
  isMonkeyBusiness: state.isMonkeyBusiness,
});

const mapDispatchToProps = {
  monkeyBusiness,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PocketCalculator);
