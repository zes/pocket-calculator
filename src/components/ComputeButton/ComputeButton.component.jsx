import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ComputeButton.css';

export default class ComputeButton extends PureComponent {
  onClick = () => {
    const { updateOperation, value } = this.props;
    updateOperation(value);
  };

  render() {
    const { className, value } = this.props;
    const buttonClassName = `button ${className}`;
    return (
      <button type="button" className={buttonClassName} onClick={this.onClick}>
        {value}
      </button>
    );
  }
}

ComputeButton.propTypes = {
  className: PropTypes.string.isRequired,
  updateOperation: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
