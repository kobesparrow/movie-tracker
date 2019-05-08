import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';


const store = createStore(rootReducer, composeWithDevTools())

const router = (
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

