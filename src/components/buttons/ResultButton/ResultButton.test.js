import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultButton from './ResultButton.component';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component] <ResultButton />', () => {
  const props = {
    className: 'equal',
    getResult: jest.fn(),
  };

  it('renders a snapshot', () => {
    const tree = renderer.create(<ResultButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call updateOperation when user click on button', () => {
    const resultButton = shallow(<ResultButton {...props} />);
    resultButton.instance().onClick();
    expect(props.getResult).toHaveBeenCalledWith();
  });
});
