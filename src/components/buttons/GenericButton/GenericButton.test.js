import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenericButton from './GenericButton.component';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component] <ClearButton />', () => {
  const props = {
    action: jest.fn(),
    className: 'clear',
    value: 'C,'
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<GenericButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call updateOperation when user click on button', () => {
    const resultButton = shallow(<GenericButton {...props} />);
    resultButton.instance().onClick();
    expect(props.action).toHaveBeenCalledWith();
  });
});
