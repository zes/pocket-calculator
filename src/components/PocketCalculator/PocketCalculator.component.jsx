import React, { Component } from 'react';
import ComputeButton from '../ComputeButton';
import './PocketCalculator.css';

class PocketCalculator extends Component {
  render() {
    return (
      <div>
        <ComputeButton value="1" />
        <ComputeButton value="2" />
        <ComputeButton value="3" />
        <ComputeButton value="+" />
        <ComputeButton value="4" />
        <ComputeButton value="5" />
        <ComputeButton value="6" />
        <ComputeButton value="-" />
        <ComputeButton value="7" />
        <ComputeButton value="8" />
        <ComputeButton value="9" />
        <ComputeButton value="*" />
        <ComputeButton value="." />
        <ComputeButton value="/" />
      </div>
    );
  }
}

export default PocketCalculator;
