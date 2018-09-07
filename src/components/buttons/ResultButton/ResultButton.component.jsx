import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton';

export default class ResultButton extends PureComponent {
  render() {
    const { getResult } = this.props;
    return (
      <GenericButton action={() => getResult()} className="equal" value="=" />
    );
  }
}

ResultButton.propTypes = {
  getResult: PropTypes.func.isRequired,
};
