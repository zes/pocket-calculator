import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton';

export default class ComputeButton extends PureComponent {
  render() {
    const { className, updateOperation, value } = this.props;
    return (
      <GenericButton
        action={() => updateOperation(value)}
        className={className}
        value={value}
      />
    );
  }
}

ComputeButton.propTypes = {
  className: PropTypes.string.isRequired,
  updateOperation: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
