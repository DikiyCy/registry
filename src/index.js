import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootRedusers from './store/redusers';
import App from './components/app/App';
import './index.css';

const store = createStore(rootRedusers);

ReactDOM.render(

  <React.StrictMode>

    <Provider store={store}>

      <App store={store}/>

    </Provider>

  </React.StrictMode>,

  document.getElementById('root')

);
