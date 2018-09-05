import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../button.css';

export default class ClearButton extends PureComponent {
  onClick = () => {
    const { clearLabels } = this.props;
    clearLabels();
  };

  render() {
    const { className } = this.props;
    const buttonClassName = `button ${className}`;
    return (
      <button type="button" className={buttonClassName} onClick={this.onClick}>
        C
      </button>
    );
  }
}

ClearButton.propTypes = {
  className: PropTypes.string.isRequired,
  clearLabels: PropTypes.func.isRequired,
};
