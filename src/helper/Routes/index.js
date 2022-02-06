import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../../Layouts/Layout';
import PublicLayout from '../../Layouts/PublicLayout';
// import WP from './web';
// import {connect} from 'react-redux';
// import Can from 'helper/Permission';

const DashboardLayout = props => {
  const {component: Component, breadCrumbItems, ...rest} = props;
  return (
    <Layout breadCrumbItems={breadCrumbItems}>
      <Component {...rest} />
    </Layout>
  );
};

// const DefaultLayout = props => {
//   const {component: Component, ...rest} = props;
//   return (
//     <PublicLayout>
//       <Component {...rest} />
//     </PublicLayout>
//   );
// };

// const PublicRoute = props => {
//   const {component: Component, ...rest} = props;
//   // let isAuth = props.isAuth || sessionStorage.getItem('aims-token');
//   let isAuth = true;
//   return (
//     <Route
//       {...rest}
//       render={matchProps => {
//         return isAuth ? (
//           <Redirect to={WP.ROOT} />
//         ) : (
//           <DefaultLayout component={Component} {...matchProps} />
//         );
//       }}
//     />
//   );
// };

const PrivateRoute = props => {
  const isAuth = true;
  // const isAuth = sessionStorage.getItem('aims-token');
  const {component: Component, ...rest} = props;

  return isAuth ? (
    // <Can
    //   perform={props.path}
    //   yes={() => (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <DashboardLayout
            breadCrumbItems={breadCrumbItems}
            {...matchProps}
            component={Component}
          />
        );
      }}
    />
  ) : (
    // )}
    //   no={() => <Redirect to={WP.FORBIDDEN} />}
    // />
    <Route to={'WP.LOGIN'} />
  );
};

// const mapStateToProps = state => {
//   return {
//     isAuth: state.user.auth.token,
//   };
// };

export {PrivateRoute};
export default connect(mapStateToProps)(PublicRoute);
