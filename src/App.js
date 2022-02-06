import {Button} from 'antd';
import React from 'react';
// import {Link, Switch, withRouter, Route} from 'react-router-dom';
// import {PrivateRoute} from 'helper/Routes';
import './App.scss';

const App = () => (
  <div fallback={<div>Loading...</div>}>
    <Button type="primary" onClick={() => alert('o')}>
      Button
    </Button>
  </div>
);

export default App;
