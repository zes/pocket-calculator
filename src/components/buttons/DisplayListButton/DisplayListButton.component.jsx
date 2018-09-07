import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GenericButton from '../GenericButton';

export default class DisplayListButton extends PureComponent {
  render() {
    const { toggleDisplayList } = this.props;
    return (
      <GenericButton
        action={() => toggleDisplayList()}
        className="listbutton"
        value="LIST"
      />
    );
  }
}

DisplayListButton.propTypes = {
  toggleDisplayList: PropTypes.func.isRequired,
};
