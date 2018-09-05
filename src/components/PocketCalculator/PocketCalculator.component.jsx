import React, { Component } from 'react';
import ComputeButton from '../ComputeButton';
import './PocketCalculator.css';
import OperationLabel from '../OperationLabel/OperationLabel.container';

class PocketCalculator extends Component {
  render() {
    return (
      <div className="calculator">
        <ComputeButton value="1" className="one" />
        <ComputeButton value="2" className="two" />
        <ComputeButton value="3" className="three" />
        <ComputeButton value="+" className="add" />
        <ComputeButton value="4" className="four" />
        <ComputeButton value="5" className="five" />
        <ComputeButton value="6" className="six" />
        <ComputeButton value="-" className="sub" />
        <ComputeButton value="7" className="seven" />
        <ComputeButton value="8" className="eight" />
        <ComputeButton value="9" className="nine" />
        <ComputeButton value="*" className="mult" />
        <ComputeButton value="0" className="zero" />
        <ComputeButton value="." className="point" />
        <ComputeButton value="/" className="divi" />
        <OperationLabel />
      </div>
    );
  }
}

export default PocketCalculator;
