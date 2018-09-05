import React from 'react';
import renderer from 'react-test-renderer';
import ResultLabel from './ResultLabel.component';

describe('[Component] <ResultLabel />', () => {
  const props = {
    result: '84',
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ResultLabel {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
