import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './label.css';

export default class GenericLabel extends PureComponent {
  render() {
    const { className, value } = this.props;

    return <span className={className}>{value}</span>;
  }
}

GenericLabel.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
