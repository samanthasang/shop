import React from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConfigProvider} from 'antd';
// Components
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';

// style
import './App.scss';

const About = () => {
  return <div>About</div>;
};
const Dashboard = () => {
  return <div>Dashboard</div>;
};
const App = () => (
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
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Layout>
  </ConfigProvider>
);

export default App;
