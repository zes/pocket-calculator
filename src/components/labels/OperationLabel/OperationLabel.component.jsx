import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericLabel from '../GenericLabel/GenericLabel.component';

export default class OperationLabel extends PureComponent {
  render() {
    const { operation } = this.props;

    return <GenericLabel className="operation" value={operation} />;
  }
}

OperationLabel.propTypes = {
  operation: PropTypes.string.isRequired,
};
