import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ComputeButton.css';

export default class ComputeButton extends PureComponent {
  onClick = () => {
    const { updateOperation, value } = this.props;
    updateOperation(value);
  };

  render() {
    const { value } = this.props;

    return (
      <button type="button" className="button" onClick={this.onClick}>
        {value}
      </button>
    );
  }
}

ComputeButton.propTypes = {
  updateOperation: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
