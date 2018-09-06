import React from 'react';
import renderer from 'react-test-renderer';
import GenericLabel from './GenericLabel.component';

describe('[Component] <GenericLabel />', () => {
  const props = {
    className: 'operation',
    value: 'blablabla',
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<GenericLabel {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
