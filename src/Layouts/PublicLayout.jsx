import React from 'react';
// import {connect} from 'react-redux';
import {Col, Row, Layout} from 'antd';

const index = ({children}) => {
  return (
    <Layout className="publicLayout">
      <Row className="holder">
        <Col xs={24} lg={24}>
          <div className="wrapper">{children}</div>
        </Col>
      </Row>
    </Layout>
  );
};

// const mapStateToProps = state => {
//   return {
//     theme: state.site.setting.theme,
//   };
// };

export default connect(mapStateToProps)(index);
