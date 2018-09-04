import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComputeButton from './ComputeButton.component';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component] <ComputeButton />', () => {
  const props = {
    value: '2',
    updateOperation: jest.fn(),
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ComputeButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call updateOperation when user click on button', () => {
    const computeButton = shallow(<ComputeButton {...props} />);
    computeButton.instance().onClick();
    expect(props.updateOperation).toHaveBeenCalledWith(props.value);
  });
});
