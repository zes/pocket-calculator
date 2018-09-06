import React from 'react';
import renderer from 'react-test-renderer';
import ComputeButton from './ComputeButton.component';

describe('[Component] <ComputeButton />', () => {
  const props = {
    className: 'x',
    updateOperation: jest.fn(),
    value: '2',
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ComputeButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
