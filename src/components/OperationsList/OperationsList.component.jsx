import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './OperationsList.css';

/* eslint-disable react/no-array-index-key */
export default class OperationsList extends PureComponent {
  render() {
    const { displayList, operationsList } = this.props;

    return (
      <div className="list">
        {displayList &&
          operationsList.map(({ operation, result }, index) => (
            <div className="operation" key={index}>
              {operation} = {result}
            </div>
          ))}
      </div>
    );
  }
}

OperationsList.propTypes = {
  displayList: PropTypes.bool.isRequired,
  operationsList: PropTypes.arrayOf(
    PropTypes.shape({
      operation: PropTypes.string.isRequired,
      result: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
