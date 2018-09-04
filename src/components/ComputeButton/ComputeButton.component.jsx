import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ComputeButton.css';

export default class ComputeButton extends PureComponent {
  render() {
    const { value } = this.props;

    return (
      <button type="button" className="button">
        {value}
      </button>
    );
  }
}

ComputeButton.propTypes = {
  value: PropTypes.string.isRequired,
};
