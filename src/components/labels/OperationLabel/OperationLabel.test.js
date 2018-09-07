import React from 'react';
import renderer from 'react-test-renderer';
import OperationLabel from './OperationLabel.component';

describe('[Component] <OperationLabel />', () => {
  const props = {
    operation: '2+4/78.9',
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<OperationLabel {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
