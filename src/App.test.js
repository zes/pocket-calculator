import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const props = {
    store: {
      dispatch: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn(),
    },
  };
  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
