import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider as NewProvider } from 'react-redux';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

const store = configureStore();

ReactDOM.render(
    <NewProvider  store={store}>
        <Provider theme={defaultTheme}>
            <App />
        </Provider>
    </NewProvider>,
  document.getElementById('root')
);
