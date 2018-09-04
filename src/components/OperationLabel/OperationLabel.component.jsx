import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class OperationLabel extends PureComponent {
  render() {
    const { operation } = this.props;

    return <span>{operation}</span>;
  }
}

OperationLabel.propTypes = {
  operation: PropTypes.string.isRequired,
};
