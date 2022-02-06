import React, {useState, useEffect} from 'react';
import {Alert, Breadcrumb, Button, Layout as LayoutAnt} from 'antd';
// import Toolbar from 'components/ui/Toolbar/index';
// import {connect} from 'react-redux';
// import {logo} from 'assets/images';
// import {useSelector} from 'react-redux';

// import SidebarMenu from 'components/ui/Sidebar/SidebarMenu';
// import {logOutAsUser} from 'services/loginAsUser';

const {Content, Sider} = LayoutAnt;

const Layout = ({children, breadCrumbItems}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {information} = useSelector(state => state['user'].auth);
  const [defenition, setDefenition] = useState(false);
  useEffect(() => {
    if (children?.props?.history?.location?.pathname?.includes('definitions')) {
      setDefenition(true);
    } else {
      setDefenition(false);
    }
  }, [children]);

  const collapsedSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <LayoutAnt>
      <Sider
        width={200}
        trigger={null}
        collapsible
        className="sider"
        collapsed={collapsed}
        onBreakpoint={broken => {
          if (broken) collapsedSidebar();
        }}
        breakpoint="lg"
      >
        {/* <div className="logo" style={{width: '200px !important'}}>
          {collapsed ? (
            <img className="imgcollapsed" src={logo} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </div> */}
        {/* <SidebarMenu isToggle={collapsed} /> */}
      </Sider>
      <LayoutAnt
        style={collapsed ? {marginLeft: '80px'} : {marginLeft: '200px'}}
      >
        {/* <Toolbar handleToggle={collapsedSidebar} toggle={collapsed} /> */}
        {!!localStorage.getItem('root-aims-user') && (
          <div style={{margin: '0 10px 10px'}}>
            <Alert
              message={`User ${
                JSON.parse(localStorage.getItem('root-aims-user'))?.userName
              }!`}
              description={`You are signed in ${information?.userName} user!`}
              type="warning"
              showIcon
              action={
                <Button onClick={logOutAsUser} type="primary" danger>
                  Back To User{' '}
                  {JSON.parse(localStorage.getItem('root-aims-user'))?.userName}
                </Button>
              }
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
                marginTop: '10px',
              }}
            ></div>
          </div>
        )}
        {defenition && (
          <Breadcrumb style={{padding: '0 0 0.5rem 1rem'}}>
            {breadCrumbItems}
          </Breadcrumb>
        )}
        <Content className="content">{children}</Content>
      </LayoutAnt>
    </LayoutAnt>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.site.setting.theme,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (payload) => dispatch(themeChanger(payload)),
  };
}; */

export default connect(mapStateToProps)(Layout);
