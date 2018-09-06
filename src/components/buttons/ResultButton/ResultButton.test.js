import React from 'react';
import renderer from 'react-test-renderer';
import ResultButton from './ResultButton.component';

describe('[Component] <ResultButton />', () => {
  const props = {
    getResult: jest.fn(),
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ResultButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
