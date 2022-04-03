import { Row, Col, Card, Button, Form, Input, Checkbox, Divider } from 'antd';
import { RightOutlined, GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import CompanyInfo from './Components/CompanyInfo';
import CompanyForm from './Components/CompanyForm';
import { useState } from 'react';

const { Meta } = Card;
const CompanyProfile = () => {


  return (
  <div className="site-card-wrapper" style={{ width: "100%" }} >
    <Row  >
      <Col span={24} >
        <Card span={20} offset={2} style={{ backgroundColor: "transparent" }}>
        <a href='/mysetting' style={{ marginRight: "3em" }}><RightOutlined /> بازگشت به تنظیمات</a>
        </Card>
        <CompanyInfo />
      </Col>
    </Row>
  </div>
  );
};


export default CompanyProfile;