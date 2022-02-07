import React from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
// Components
import Home from './pages/Home/Home';

// style
import './App.scss';

const About = () => {
  return <div>About</div>;
};
const Dashboard = () => {
  return <div>Dashboard</div>;
};
const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </Layout>
);

export default App;
