import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ResultLabel.css';

export default class ResultLabel extends PureComponent {
  render() {
    const { result } = this.props;

    return <span className="result">{result}</span>;
  }
}

ResultLabel.propTypes = {
  result: PropTypes.string.isRequired,
};
