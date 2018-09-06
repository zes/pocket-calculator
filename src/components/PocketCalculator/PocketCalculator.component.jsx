import React, { Component } from 'react';
import ClearButton from '../buttons/ClearButton';
import ComputeButton from '../buttons/ComputeButton';
import DisplayListButton from '../buttons/DisplayListButton';
import OperationLabel from '../labels/OperationLabel';
import OperationsList from '../OperationsList';
import ResultButton from '../buttons/ResultButton';
import ResultLabel from '../labels/ResultLabel';
import './PocketCalculator.css';

class PocketCalculator extends Component {
  render() {
    return (
      <div className="calculator">
        <DisplayListButton />
        <OperationsList />
        <OperationLabel />
        <ResultLabel />
        <ComputeButton value="1" className="one" />
        <ComputeButton value="2" className="two" />
        <ComputeButton value="3" className="three" />
        <ComputeButton value="4" className="four" />
        <ComputeButton value="5" className="five" />
        <ComputeButton value="6" className="six" />
        <ComputeButton value="7" className="seven" />
        <ComputeButton value="8" className="eight" />
        <ComputeButton value="9" className="nine" />
        <ComputeButton value="0" className="zero" />
        <ComputeButton value="." className="point" />
        <ComputeButton value="+" className="add" />
        <ComputeButton value="-" className="sub" />
        <ComputeButton value="*" className="mult" />
        <ComputeButton value="/" className="divi" />
        <ResultButton />
        <ClearButton />
      </div>
    );
  }
}

export default PocketCalculator;
