import React, {useEffect} from 'react';
import Layout from './Layouts/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConfigProvider, Row} from 'antd';
// Components
// import PublicRoute, {PrivateRoute} from './helper/Routes';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import ForgotPass from './pages/ForgotPass/ForgotPass';
import MyCommodities from './pages/MyCommodities/MyCommodities';
import Register from './pages/register/Register';
import MySetting from './pages/MySetting/MySetting';
import AccountDetails from './pages/AccountDetails/AccountDetails';
import CompanyProfile from './pages/CompanyProfile/CompanyProfile';
import Verification from './pages/Verification/Verification';
import History from './pages/history/History';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
// redux
import {isLoginDis} from './redux/action/home';
import {useDispatch} from 'react-redux';
// style
import './App.scss';

const App = () => {
  const loginState = !!localStorage.getItem('ship');
  const dispatch = useDispatch();
  dispatch(isLoginDis(loginState));
  return (
    <ConfigProvider direction="rtl">
      <Layout loginUser={loginState}>
        {loginState ? (
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/booking">
              <Booking />
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
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route>
              <Row justify={'center'} align={'bottom'}>
                صفحه ای یافت نشد
              </Row>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forgatPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        )}
      </Layout>
    </ConfigProvider>
  );
};
export default App;
