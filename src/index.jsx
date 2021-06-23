import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import indexCSS from './index.module.css';
import HomeApp from './components/Home/Index';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeApp className={indexCSS.body && indexCSS.code} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
