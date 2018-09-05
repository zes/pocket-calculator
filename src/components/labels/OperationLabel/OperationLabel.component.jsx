import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Operation.css';

export default class OperationLabel extends PureComponent {
  render() {
    const { operation } = this.props;

    return <span className="operation">{operation}</span>;
  }
}

OperationLabel.propTypes = {
  operation: PropTypes.string.isRequired,
};
