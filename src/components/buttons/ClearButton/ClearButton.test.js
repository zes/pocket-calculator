import React from 'react';
import renderer from 'react-test-renderer';
import ClearButton from './ClearButton.component';

describe('[Component] <ClearButton />', () => {
  const props = {
    clearLabels: jest.fn(),
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ClearButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
