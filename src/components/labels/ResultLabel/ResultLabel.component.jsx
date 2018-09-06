import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericLabel from '../GenericLabel/GenericLabel.component';

export default class ResultLabel extends PureComponent {
  render() {
    const { result } = this.props;

    return <GenericLabel className="result" value={result} />;
  }
}

ResultLabel.propTypes = {
  result: PropTypes.string.isRequired,
};
