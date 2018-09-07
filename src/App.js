import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import PocketCalculator from './components/PocketCalculator';

class App extends PureComponent {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <PocketCalculator />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
