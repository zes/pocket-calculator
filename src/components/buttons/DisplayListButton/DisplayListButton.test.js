import React from 'react';
import renderer from 'react-test-renderer';
import DisplayListButton from './DisplayListButton.component';

describe('[Component] <DisplayListButton />', () => {
  const props = {
    toggleDisplayList: jest.fn(),
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<DisplayListButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
