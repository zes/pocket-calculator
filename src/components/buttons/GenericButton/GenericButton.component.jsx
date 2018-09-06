import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends PureComponent {
  onClick = () => {
    const { action } = this.props;
    action();
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

Button.propTypes = {
  action: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
