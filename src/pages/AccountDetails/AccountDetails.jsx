import { Row, Col, Card, Button, Form, Input, Checkbox, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import DetailesTable from './Components/DetailesTable';
import PasswordForm from './Components/PasswordForm';
import ProfileForm from './Components/ProfileForm';

const { Meta } = Card;
const AccountDetails = () => {
  return (<div className="site-card-wrapper" style={{ width: "100%", marginTop: "50px" }} >
    <Row  >
      <Col span={24} >
            <DetailesTable />
            {/*
            <ProfileForm /> */}
            
            <PasswordForm /> 
      </Col>
    </Row>
  </div>
  );
};


export default AccountDetails;