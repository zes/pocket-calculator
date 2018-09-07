import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton';

export default class ClearButton extends PureComponent {
  render() {
    const { clearLabels } = this.props;
    return (
      <GenericButton action={() => clearLabels()} className="clear" value="C" />
    );
  }
}

ClearButton.propTypes = {
  clearLabels: PropTypes.func.isRequired,
};
