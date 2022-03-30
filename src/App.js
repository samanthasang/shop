import React from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConfigProvider} from 'antd';
// Components
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Booking from './pages/Booking/Booking';

// style
import './App.scss';

const App = () => {
  return (
    <ConfigProvider direction="rtl">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
        </Switch>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
