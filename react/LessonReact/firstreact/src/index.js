import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


