import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '~/store';
import { BrowserRouter } from "react-router-dom";
import saga from '~/saga'
import App from '~/ui';

const store = configureStore()

store.runSaga(saga)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
