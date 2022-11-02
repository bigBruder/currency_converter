import React from 'react';
import Main from './currencies/components/Main';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
