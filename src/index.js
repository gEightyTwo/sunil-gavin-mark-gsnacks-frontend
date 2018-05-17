import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById('root'));

registerServiceWorker();
