import React from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConfigProvider} from 'antd';
// Components
// import PublicRoute, {PrivateRoute} from './helper/Routes';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import SingUp from './pages/SingUp/SingUp';
import MySetting from './pages/MySetting/MySetting';
import AccountDetails from './pages/AccountDetails/AccountDetails';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import History from './pages/history/History';

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singup">
            <SingUp />
          </Route>
          <Route path="/mysetting">
            <MySetting />
          </Route>
          <Route path="/accountdetails">
            <AccountDetails />
          </Route>
          <Route path="/companyprofile">
            <CompanyProfile />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route>
            <div style={{textAlign: 'center'}}>صفحه ای یافت نشد</div>
          </Route>
        </Switch>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
