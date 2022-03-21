import React from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConfigProvider} from 'antd';
// import {useDispatch, useSelector} from 'react-redux';
// Components
// import {getData} from './redux/action/home';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';

// style
import './App.scss';

const Dashboard = () => {
  return <div>Dashboard</div>;
};
const App = () => {
  // const dispatch = useDispatch();
  // dispatch(getData('poori'));
  // const kasgud = useSelector(state => state);
  // console.log(kasgud);
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
            <Dashboard />
          </Route>
        </Switch>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
