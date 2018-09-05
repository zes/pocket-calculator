import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../button.css';

export default class ResultButton extends PureComponent {
  onClick = () => {
    const { getResult } = this.props;
    getResult();
  };

  render() {
    const { className } = this.props;
    const buttonClassName = `button ${className}`;
    return (
      <button type="button" className={buttonClassName} onClick={this.onClick}>
        =
      </button>
    );
  }
}

ResultButton.propTypes = {
  className: PropTypes.string.isRequired,
  getResult: PropTypes.func.isRequired,
};
