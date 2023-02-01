import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducers from './reducers';

// create the store
const myStore = createStore(myReducers);

// This will console log the current state everytime the state changes
myStore.subscribe(()=>console.log(myStore.getState()));

// Enveloping the App inside the Provider to ensure that the states in the store are available throughout the application
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
