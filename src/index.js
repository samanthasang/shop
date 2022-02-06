import React from 'react';
import ReactDOM from 'react-dom';
// import 'react-simple-keyboard/build/css/index.css';
// import 'rc-color-picker/assets/index.css';
import 'antd/dist/antd.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('root'),
);
